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
                        Your stand with stand id{" "}
                        <strong>{bookingConfirmation.stand_id}</strong> has been
                        booked. Your booking id is{" "}
                        <strong>{bookingConfirmation.booking_id}</strong>.
                    </p>
                )}
            </div>
        </React.Fragment>
    );
}
