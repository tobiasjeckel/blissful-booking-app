import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyBookings } from "./actions";

export default function MyBookings() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMyBookings());
    }, []);

    const myBookings = useSelector(state => {
        return state.myBookings;
    });

    const myData = useSelector(state => {
        return state.userData;
    });

    if (!myBookings) {
        return null;
    }

    return (
        <div className="component">
            <h3>
                Hi <i className="highlightcolor">{myData && myData.first}</i>.
                These are your bookings:
            </h3>
            <ul>
                {myBookings.map(booking => {
                    return (
                        <li key={booking.id}>
                            Booking ID: {booking.id} | Stand Number:{" "}
                            {booking.stand_id} | Day: {booking.day}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
