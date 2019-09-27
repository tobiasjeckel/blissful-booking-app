import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookingsAdmin, setAdminWeek, deleteBooking } from "./actions";
import AdminBooker from "./adminbooker";
import { CSVLink } from "react-csv";

export default function AdminPanel() {
    const dispatch = useDispatch();

    const selectedWeek = useSelector(state => {
        return state.adminWeekYear;
    });
    const getBookings = e => {
        e.preventDefault();
        dispatch(getBookingsAdmin(selectedWeek));
    };
    const bookingsAdmin = useSelector(state => {
        return state.bookingsAdmin;
    });

    const csvData = bookingsAdmin && Object.values(bookingsAdmin);

    const adminBookingId = useSelector(state => {
        return state.adminBookingId;
    });

    useEffect(() => {
        selectedWeek && dispatch(getBookingsAdmin(selectedWeek));
    }, [adminBookingId]);

    const handleInputChange = e => {
        e.preventDefault();
        dispatch(setAdminWeek(e.target.value));
    };

    const handleDelete = e => {
        e.preventDefault();
        dispatch(deleteBooking(e.target.value));
    };

    return (
        <div className="component">
            <div>
                <form>
                    <label htmlFor="week">
                        Select a week to get an overview of bookings:{" "}
                    </label>
                    <input
                        type="week"
                        name="week"
                        id="camp-week"
                        min="2019-W39"
                        max="2019-W49"
                        onChange={handleInputChange}
                        required
                    />
                    <button
                        id="selectbookingsbutton"
                        onClick={getBookings}
                        name="submit"
                    >
                        Submit
                    </button>
                </form>
                <br />
                <div className="bookingsOverview">
                    {bookingsAdmin && Object.keys(bookingsAdmin).length > 0 ? (
                        <div>
                            <h3>
                                Bookings for Week{" "}
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
                            <CSVLink
                                data={csvData}
                                filename={"my-bookings.csv"}
                            >
                                <p id="csvlink">
                                    <span id="csvtext">
                                        Export to .csv File
                                    </span>
                                    <img
                                        id="csv-icon"
                                        src="/assets/csv-icon.jpg"
                                    />
                                </p>
                            </CSVLink>
                            <table>
                                <colgroup span="7"></colgroup>
                                <tbody>
                                    <tr>
                                        <th>Booking ID</th>
                                        <th>User ID</th>
                                        <th>Stand ID</th>
                                        <th>Stand Type</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Delete Booking</th>
                                    </tr>
                                    {bookingsAdmin &&
                                        Object.keys(bookingsAdmin).length > 0 &&
                                        bookingsAdmin.map(booking => {
                                            return (
                                                <tr key={booking.booking_id}>
                                                    <td>
                                                        {booking.booking_id}
                                                    </td>
                                                    <td>{booking.user_id}</td>
                                                    <td>{booking.stand_id}</td>
                                                    <td>{booking.type}</td>
                                                    <td>{booking.first}</td>
                                                    <td>{booking.last}</td>
                                                    <td>
                                                        <button
                                                            id="delete-booking"
                                                            value={
                                                                booking.booking_id
                                                            }
                                                            onClick={
                                                                handleDelete
                                                            }
                                                        >
                                                            Delete Booking
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p>No bookings found</p>
                    )}
                </div>

                <AdminBooker />

                <b />
            </div>
        </div>
    );
}
