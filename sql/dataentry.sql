INSERT INTO bookings (week, user_id, stand_id)
VALUES (6, 10, 2);
INSERT INTO bookings (week, user_id, stand_id)
VALUES (6, 11, 11);
INSERT INTO bookings (week, user_id, stand_id)
VALUES (6, 12, 12);
INSERT INTO bookings (week, user_id, stand_id)
VALUES (6, 13, 13);


INSERT INTO bookings (iso_week, iso_year, user_id, stand_id)
VALUES (39, 2019, 1, 1);
INSERT INTO bookings (iso_week, iso_year, user_id, stand_id)
VALUES (39, 2019, 2, 2);
INSERT INTO bookings (iso_week, iso_year, user_id, stand_id)
VALUES (39, 2019, 3, 3);
INSERT INTO bookings (iso_week, iso_year, user_id, stand_id)
VALUES (39, 2019, 4, 4);


INSERT INTO stands (type)
VALUES ('small');
INSERT INTO stands (type)
VALUES ('small');
INSERT INTO stands (type)
VALUES ('small');
INSERT INTO stands (type)
VALUES ('small');
INSERT INTO stands (type)
VALUES ('small');
INSERT INTO stands (type)
VALUES ('small');
INSERT INTO stands (type)
VALUES ('small');
INSERT INTO stands (type)
VALUES ('small');
INSERT INTO stands (type)
VALUES ('small');
INSERT INTO stands (type)
VALUES ('small');
INSERT INTO stands (type)
VALUES ('large');
INSERT INTO stands (type)
VALUES ('large');
INSERT INTO stands (type)
VALUES ('large');
INSERT INTO stands (type)
VALUES ('large');
INSERT INTO stands (type)
VALUES ('large');
INSERT INTO stands (type)
VALUES ('large');
INSERT INTO stands (type)
VALUES ('large');
INSERT INTO stands (type)
VALUES ('large');
INSERT INTO stands (type)
VALUES ('large');
INSERT INTO stands (type)
VALUES ('large');



SELECT stands.id, type
FROM stands
LEFT JOIN bookings
ON stands.id = bookings.stand_id
WHERE week = 4 AND bookings.stand_id IS NULL;

SELECT stands.id, type
FROM stands
WHERE NOT EXISTS
    (
        SELECT stand_id
        FROM bookings
        WHERE week = 4 AND bookings.stand_id = stands.id
    )
