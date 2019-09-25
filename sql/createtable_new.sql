DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first VARCHAR NOT NULL,
    last VARCHAR NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    password VARCHAR NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


DROP TABLE IF EXISTS stands;

CREATE TABLE stands(
    id SERIAL PRIMARY KEY,
    type VARCHAR,
);

DROP TABLE IF EXISTS bookings;

CREATE TABLE bookings(
    id SERIAL,
    iso_week INTEGER,
    iso_year INTEGER,
    user_id INTEGER,
    stand_id INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(iso_week, iso_year, stand_id)
);
