import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookingsAdmin } from "./actions";
import { Link } from "react-router-dom";

export default function AdminPanel() {
    const dispatch = useDispatch();

    const getBookings = e => {
        e.preventDefault();
        // console.log("submit button clicked", inputWeek);
        dispatch(getBookingsAdmin(inputWeek));
    };
    const bookingsAdmin = useSelector(state => {
        return state.bookingsAdmin;
    });
    const getStands = () => {
        console.log("get stands");
    };

    const [inputWeek, setInputWeek] = useState();

    const handleInputChange = e => {
        setInputWeek(e.target.value);
    };
    return (
        <React.Fragment>
            <div>
                <p>
                    Hello admin, change stuff here and get overview of bookings
                </p>
            </div>
            <div>
                <p>Select a week to get an overview of bookings</p>
                <form>
                    <label htmlFor="week">Choose a week:</label>
                    <input
                        type="week"
                        name="week"
                        id="camp-week"
                        min="2019-W10"
                        max="2019-W49"
                        onChange={handleInputChange}
                        required
                    />
                    <br />
                    <button onClick={getBookings} name="submit">
                        Submit
                    </button>
                    <p> {/*message*/} </p>
                </form>
                <br />
                <div className="bookingsAdmin">
                    {bookingsAdmin && (
                        <h3>
                            Bookings for{" "}
                            {
                                bookingsAdmin[
                                    Object.keys(bookingsAdmin)[0].iso_week
                                ]
                            }{" "}
                        </h3>
                    )}
                </div>
                <br />
                <p>Click here to get an overview of stands </p>
                <button onClick={getStands}> Click for stands </button>
            </div>
        </React.Fragment>
    );
}
