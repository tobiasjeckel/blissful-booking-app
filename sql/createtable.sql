DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first VARCHAR NOT NULL,
    last VARCHAR NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    password VARCHAR NOT NULL,
    bookings TEXT [],
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS user_profiles;


DROP TABLE IF EXISTS stands;

CREATE TABLE stands(
    id SERIAL PRIMARY KEY,
    type VARCHAR,
    bookings TEXT []
);

DROP TABLE IF EXISTS bookings;

CREATE TABLE bookings(
    id SERIAL PRIMARY KEY,
    week INTEGER,
    user_id INTEGER,
    stand_id INTEGER
)
