import React, { useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Bookings from "./bookings";
import CreateBooking from "./createbooking";
import Confirmation from "./confirmation";
import Admin from "./adminpanel";
import MyBookings from "./mybookings";

export default function App() {
    const dispatch = useDispatch();

    return (
        <BrowserRouter>
            <React.Fragment>
                <div className="header">
                    <h2>Mauerpark Booking Tool</h2>
                    <div className="navbar">
                        <Link className="navlink" to={"/bookings"}>
                            Make a booking
                        </Link>
                        <Link className="navlink" to={"/mybookings"}>
                            View my bookings
                        </Link>
                        <Link className="navlink" to={"/adminpanel"}>
                            Admin Panel
                        </Link>
                        <a className="navlink" href="/logout">
                            Log out
                        </a>
                    </div>
                </div>
                <Route path="/bookings" component={Bookings} />
                <Route path="/createbooking" component={CreateBooking} />
                <Route path="/confirmation" component={Confirmation} />
                <Route path="/adminpanel" component={Admin} />
                <Route path="/mybookings" component={MyBookings} />
            </React.Fragment>
        </BrowserRouter>
    );
}
