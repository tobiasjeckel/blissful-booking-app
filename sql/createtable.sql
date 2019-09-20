DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first VARCHAR NOT NULL,
    last VARCHAR NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    password VARCHAR NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS user_profiles;
CREATE TABLE user_profiles(
    id SERIAL PRIMARY KEY,
    age INTEGER,
    city VARCHAR,
    bookings TEXT [],
    user_id INTEGER UNIQUE NOT NULL
);

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
