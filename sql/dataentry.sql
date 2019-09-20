INSERT INTO bookings (week, user_id, stand_id)
VALUES (6, 10, 2);
INSERT INTO bookings (week, user_id, stand_id)
VALUES (6, 11, 11);
INSERT INTO bookings (week, user_id, stand_id)
VALUES (6, 12, 12);
INSERT INTO bookings (week, user_id, stand_id)
VALUES (6, 13, 13);
INSERT INTO bookings (week, user_id, stand_id)
VALUES (6, 14, 14);


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
