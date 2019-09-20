const spicedPg = require("spiced-pg");

const db = spicedPg(
    process.env.DATABASE_URL ||
        "postgres:postgres:postgres@localhost:5432/booking"
);

exports.testFunction = function() {
    console.log("db is working");
};

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

exports.editUser = function(first, last, email, id) {
    return db.query(
        `
        UPDATE users
        SET first = $1, last = $2, email = $3
        WHERE id = $4
        RETURNING first
        `,
        [first, last, email, id]
    );
};

exports.editUserAndPass = function(first, last, email, id, hash) {
    return db.query(
        `
        UPDATE users
        SET first = $1, last = $2, email = $3, password = $5
        WHERE id = $4
        RETURNING first
        `,
        [first, last, email, id, hash]
    );
};

exports.checkCapacity = function(week) {
    return db.query(
        `
        SELECT stands.id, type
        FROM stands
        WHERE NOT EXISTS
            (
                SELECT stand_id
                FROM bookings
                WHERE week = $1 AND bookings.stand_id = stands.id
            )
        `,
        [week]
    );
};
