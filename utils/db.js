const spicedPg = require("spiced-pg");

const db = spicedPg(
    process.env.DATABASE_URL ||
        "postgres:postgres:postgres@localhost:5432/booking"
);
exports.addUser = function(first, last, email, hash) {
    return db.query(
        `INSERT INTO users (first, last, email, password)
        VALUES ($1, $2, $3, $4)
        RETURNING id, first
        `,
        [first, last, email, hash]
    );
};

exports.getHash = function(email) {
    return db.query(`SELECT password, id, first FROM users WHERE email = $1`, [
        email
    ]);
};

exports.getUserData = function(user_id) {
    return db.query(
        `
        SELECT first, last, id
        FROM users
        WHERE id = $1
        `,
        [user_id]
    );
};

exports.getFreeStands = function(iso_week, iso_year) {
    return db.query(
        `
        SELECT stands.id, type
        FROM stands
        WHERE NOT EXISTS
            (
                SELECT stand_id, iso_week
                FROM bookings
                WHERE iso_week = $1 AND iso_year = $2 AND bookings.stand_id = stands.id
            )
        `,
        [iso_week, iso_year]
    );
};

exports.getBookingsAdmin = function(iso_week, iso_year) {
    return db.query(
        `
        SELECT bookings.id AS booking_id, bookings.user_id, bookings.iso_week, bookings.iso_year, stands.type, stands.id AS stand_id, users.first, users.last
        FROM bookings
        JOIN stands
        ON (bookings.stand_id = stands.id)
        JOIN users
        ON (bookings.user_id = users.id)
        WHERE iso_week = $1 AND iso_year = $2
        `,
        [iso_week, iso_year]
    );
};

exports.makeAdminBooking = function(iso_week, iso_year, userId, stand) {
    return db.query(
        `
        INSERT INTO bookings (iso_week, iso_year, user_id, stand_id)
        VALUES ($1, $2, $3, $4)
        RETURNING id as bookings_id
        `,
        [iso_week, iso_year, userId, stand]
    );
};

exports.deleteBooking = function(booking_id) {
    return db.query(
        `
        DELETE FROM bookings
        WHERE id = $1
        RETURNING id
        `,
        [booking_id]
    );
};

exports.makeBooking = function(iso_week, iso_year, userId, stand) {
    return db.query(
        `
        INSERT INTO bookings (iso_week, iso_year, user_id, stand_id)
        VALUES ($1, $2, $3, $4)
        RETURNING id as booking_id, iso_week, iso_year, stand_id
        `,
        [iso_week, iso_year, userId, stand]
    );
};

exports.getMyBookings = function(userId) {
    return db.query(
        `
        SELECT * from BOOKINGS
        WHERE  user_id = $1
        `,
        [userId]
    );
};
