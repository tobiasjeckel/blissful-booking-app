import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookingsAdmin, setAdminWeek, deleteBooking } from "./actions";
import { Link } from "react-router-dom";
import AdminBooker from "./adminbooker";

export default function AdminPanel() {
    const dispatch = useDispatch();

    const selectedWeek = useSelector(state => {
        return state.adminWeekYear;
    });
    const getBookings = e => {
        e.preventDefault();
        // console.log("submit button clicked", inputWeek);
        dispatch(getBookingsAdmin(selectedWeek));
    };
    const bookingsAdmin = useSelector(state => {
        return state.bookingsAdmin;
    });

    const adminBookingId = useSelector(state => {
        return state.adminBookingId;
    });

    useEffect(() => {
        selectedWeek && dispatch(getBookingsAdmin(selectedWeek));
    }, [adminBookingId]);

    const handleInputChange = e => {
        console.log(e.target.value);
        e.preventDefault();
        dispatch(setAdminWeek(e.target.value));
    };

    const handleDelete = e => {
        e.preventDefault();
        dispatch(deleteBooking(e.target.value));
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
                        min="2019-W39"
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
                                        {booking.last} |
                                        <button
                                            value={booking.booking_id}
                                            onClick={handleDelete}
                                        >
                                            Delete Booking
                                        </button>
                                    </li>
                                );
                            })}
                    </ul>
                </div>

                <AdminBooker />

                <b />
            </div>
        </React.Fragment>
    );
}
