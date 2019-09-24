import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {} from "./actions";
import { Link } from "react-router-dom";

export default function Confirmation() {
    console.log("Confirmation has mounted");
    const dispatch = useDispatch();
    const bookingConfirmation = useSelector(state => {
        return state.bookingConfirmation;
    });
    console.log(bookingConfirmation);
    return (
        <React.Fragment>
            <div>
                {bookingConfirmation && (
                    <p>
                        Your stand with {bookingConfirmation.bookings_id} has
                        been booked
                    </p>
                )}
            </div>
        </React.Fragment>
    );
}
