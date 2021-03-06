const express = require("express");
const app = express();
const compression = require("compression");
const bc = require("./utils/bc");
const db = require("./utils/db");
const cookieSession = require("cookie-session");
const csurf = require("csurf");
const moment = require("moment");

//middleware
app.use(compression());
app.use(express.json());

app.use(
    cookieSession({
        secret:
            process.env.NODE_ENV == "production"
                ? process.env.SESS_SECRET
                : require("./secrets").sessionSecret,
        maxAge: 1000 * 60 * 60 * 24 * 14
    })
);

app.use(csurf());

app.use(function(req, res, next) {
    res.cookie("mytoken", req.csrfToken());
    next();
});

app.use(express.static("./public")); //for css

if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/"
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

console.log(process.env);

app.post("/registration", (req, res) => {
    bc.hash(req.body.password)
        .then(hash => {
            db.addUser(req.body.first, req.body.last, req.body.email, hash)
                .then(data => {
                    req.session.id = data.rows[0].id;
                    req.session.first = data.rows[0].first;
                    res.json({
                        message: "Registration successful"
                    });
                })
                .catch(err => {
                    console.log(err);
                    res.json({
                        message: "error"
                    });
                });
        })
        .catch(err => {
            res.json({
                message: "Something went wrong. Please try again."
            });
            console.log(err);
        });
});

app.post("/login", (req, res) => {
    db.getHash(req.body.email)
        .then(data => {
            bc.compare(req.body.password, data.rows[0].password)
                .then(match => {
                    if (match) {
                        req.session.id = data.rows[0].id;
                        req.session.first = data.rows[0].first;
                        res.json({
                            message: "Login successful"
                        });
                    } else {
                        res.json({
                            message: "error"
                        });
                    }
                })
                .catch(err => {
                    console.log("error when comparing password: ", err);
                    res.json({
                        message: "error"
                    });
                });
        })
        .catch(err => {
            console.log("error when comparing the hash", err);
            res.json({
                message: "error"
            });
        });
});

app.get("/logout", function(req, res) {
    req.session = null;
    res.redirect("/welcome");
});

app.get("/welcome", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/getuserdata", (req, res) => {
    db.getUserData(req.session.id)
        .then(data => res.json(data.rows[0]))
        .catch(err => {
            console.log("err when getting user data: ", err);
        });
});

app.get("/api/getanyweek/:adder", (req, res) => {
    let adder = req.params.adder;
    let week = moment()
        .add(adder, "weeks")
        .isoWeek(); //week starts on a monday
    let year = moment()
        .add(adder, "weeks")
        .isoWeekYear();
    let day = moment()
        .add(adder, "weeks")
        .isoWeekday(7)
        .format("YYYY-MM-DD");

    db.getFreeStands(week, year, day)
        .then(data => {
            for (let prop in data.rows) {
                data.rows[prop]["iso_week"] = week;
                data.rows[prop]["iso_year"] = year;
                data.rows[prop]["day"] = day;
            }
            res.json(data.rows);
        })
        .catch(err => {
            console.log("error when getting capacity: ", err);
        });
});

app.get("/api/admin/getbookings/:inputweek", (req, res) => {
    let inputWeek = req.params.inputweek;
    let iso_week = moment(inputWeek).isoWeek();
    let iso_year = moment(inputWeek).isoWeekYear();

    db.getBookingsAdmin(iso_week, iso_year)
        .then(data => {
            res.json(data.rows);
        })
        .catch(err => {
            console.log("error when getting admin bookings", err);
        });
});

app.post("/api/makeAdminBooking", (req, res) => {
    let userId = req.session.id;
    let iso_week = moment(req.body.selectedWeek).isoWeek();
    let iso_year = moment(req.body.selectedWeek).isoWeekYear();
    db.makeAdminBooking(iso_week, iso_year, userId, req.body.selectedAdminStand)
        .then(data => {
            console.log("made admin booking", data.rows[0]);
            res.json(data.rows[0]);
        })
        .catch(err => {
            console.log("error when making admin booking: ", err);
        });
});

app.post("/api/deletebooking", (req, res) => {
    console.log(req.body.booking_id);
    db.deleteBooking(req.body.booking_id)
        .then(data => {
            res.json(data.rows[0]);
        })
        .catch(err => {
            console.log("error when deleting booking: ", err);
        });
});

app.post("/api/makebooking", (req, res) => {
    let userId = req.session.id;
    db.makeBooking(req.body.week, req.body.year, userId, req.body.stand_id)
        .then(data => {
            data.rows[0]["day"] = moment(
                data.rows[0].iso_year + "-W" + data.rows[0].iso_week
            ).isoWeekday(7);
            res.json(data.rows[0]);
        })
        .catch(err => {
            console.log("error when making booking: ", err);
        });
});

app.get("/api/getmybookings", (req, res) => {
    let userId = req.session.id;
    db.getMyBookings(userId)
        .then(data => {
            for (let prop in data.rows) {
                data.rows[prop]["day"] = moment(
                    data.rows[prop].iso_year + "-W" + data.rows[prop].iso_week
                )
                    .isoWeekday(7)
                    .format("LL");
            }
            res.json(data.rows);
        })
        .catch(err => {
            console.log("error when getting my bookings: ", err);
        });
});

app.get("*", (req, res) => {
    if (req.session.id) {
        res.sendFile(__dirname + "/index.html");
    } else {
        res.redirect("/welcome");
    }
});

app.listen(8080, () => {
    console.log("Booking app server is running");
});
