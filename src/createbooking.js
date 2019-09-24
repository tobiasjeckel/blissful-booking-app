import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeBooking } from "./actions";
import { Link } from "react-router-dom";

export default function CreateBooking(props) {
    const dispatch = useDispatch();

    const selectedWeek = useSelector(state => {
        return state.selected_iso_week;
    });

    const stands = useSelector(state => {
        return state[selectedWeek];
    });

    const bookingConfirmation = useSelector(state => {
        return state.bookingConfirmation;
    });

    if (!stands) {
        return null;
    }

    const standArray = Object.values(stands);
    const smallStands = standArray.filter(stand => stand.type == "small");
    const largeStands = standArray.filter(stand => stand.type == "large");
    const nextAvailableSmallStand = smallStands[0];
    const nextAvailableLargeStand = largeStands[0];
    // console.log(nextAvailableSmallStand);
    // console.log(nextAvailableLargeStand);

    const handleClickMakeBooking = e => {
        e.preventDefault();
        console.log("on click: ", e.target.value);
        if (e.target.value == "small") {
            dispatch(
                makeBooking(
                    nextAvailableSmallStand.iso_week,
                    nextAvailableSmallStand.iso_year,
                    nextAvailableSmallStand.id
                )
            );
            props.history.push("/confirmation");
            //got to confirmation page here
        } else if (e.target.value == "large") {
            dispatch(
                makeBooking(
                    nextAvailableLargeStand.iso_week,
                    nextAvailableLargeStand.iso_year,
                    nextAvailableLargeStand.id
                )
            );
        } else {
            return null;
        }
    };

    return (
        <div className="createBooking">
            <h3>Select your stand size!</h3>
            <div>
                <h4>Small Stand</h4>
                {smallStands && smallStands.length > 0 ? (
                    <button onClick={handleClickMakeBooking} value="small">
                        Make a Booking
                    </button>
                ) : (
                    <p>Sorry, small stands are all booked out </p>
                )}
            </div>
            <div>
                <h4>Large Stand</h4>
                {largeStands && largeStands.length > 0 ? (
                    <button onClick={handleClickMakeBooking} value="large">
                        Make a Booking
                    </button>
                ) : (
                    <p>Sorry, large stands are all booked out </p>
                )}
            </div>
        </div>
    );
}
