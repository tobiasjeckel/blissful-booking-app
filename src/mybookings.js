import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyBookings } from "./actions";
import { Link } from "react-router-dom";

export default function MyBookings() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMyBookings());
    }, []);

    const myBookings = useSelector(state => {
        return state.myBookings;
    });

    if (!myBookings) {
        return null;
    }

    return (
        <div className="component">
            <h3>These are my bookings</h3>
            <ul>
                {myBookings.map(booking => {
                    return (
                        <li key={booking.id}>
                            Booking ID: {booking.id} | Stand: {booking.stand_id}{" "}
                            | Week: {booking.iso_week} {booking.iso_year} | Day:{" "}
                            {booking.day}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
