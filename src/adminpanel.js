import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookingsAdmin } from "./actions";
import { Link } from "react-router-dom";
import AdminBooker from "./adminbooker";

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

    // bookingsAdmin &&
    //     console.log(
    //         "week: ",
    //         bookingsAdmin[Object.keys(bookingsAdmin)[0]].iso_week
    //     );

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
                    <p> {/*message - todo - preventDefault*/} </p>
                </form>
                <br />
                <div className="bookingsOverview">
                    {bookingsAdmin && Object.keys(bookingsAdmin).length > 0 ? (
                        <h3>
                            Bookings for week{" "}
                            {
                                bookingsAdmin[Object.keys(bookingsAdmin)[0]]
                                    .iso_week
                            }
                            ,{" "}
                            {
                                bookingsAdmin[Object.keys(bookingsAdmin)[0]]
                                    .iso_year
                            }
                        </h3>
                    ) : (
                        <p>No bookings found</p>
                    )}
                    <ul>
                        {bookingsAdmin &&
                            Object.keys(bookingsAdmin).length > 0 &&
                            bookingsAdmin.map(booking => {
                                return (
                                    <li key={booking.booking_id}>
                                        Booking ID: {booking.booking_id} | User:{" "}
                                        {booking.user_id} | Stand:{" "}
                                        {booking.stand_id} | Type:{" "}
                                        {booking.type} | First Name:{" "}
                                        {booking.first} | Last Name:{" "}
                                        {booking.last}
                                    </li>
                                );
                            })}
                    </ul>
                </div>
                <br />
                <p>Click here to get an overview of stands </p>
                <button onClick={getStands}> Click for stands </button>
                <br />
                <AdminBooker />
            </div>
        </React.Fragment>
    );
}
