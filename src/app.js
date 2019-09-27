import React, { useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Bookings from "./bookings";
import CreateBooking from "./createbooking";
import Confirmation from "./confirmation";
import Admin from "./adminpanel";
import MyBookings from "./mybookings";
import { getUserData } from "./actions";

export default function App() {
    const dispatch = useDispatch(getUserData);
    const userData = useSelector(state => {
        return state.userData;
    });

    useEffect(() => {
        dispatch(getUserData());
    }, []);

    // const myData = useSelector(state => {
    //     return state.userData;
    // });

    return (
        <BrowserRouter>
            <React.Fragment>
                <div className="header">
                    <h2>Flea Market Booking App</h2>
                    <div className="navbar">
                        <div>
                            <Link className="navlink" to={"/bookings"}>
                                Make a booking
                            </Link>
                        </div>
                        <div>
                            <Link className="navlink" to={"/mybookings"}>
                                View my bookings
                            </Link>
                        </div>
                        <div>
                            {userData && userData.id == 1 && (
                                <Link className="navlink" to={"/adminpanel"}>
                                    Admin Panel
                                </Link>
                            )}
                        </div>
                        <div>
                            <a className="navlink" href="/logout">
                                Log out
                            </a>
                        </div>
                    </div>
                </div>
                <Route exact path="/" component={Bookings} />
                <Route path="/bookings" component={Bookings} />
                <Route path="/createbooking" component={CreateBooking} />
                <Route path="/confirmation" component={Confirmation} />
                <Route path="/adminpanel" component={Admin} />
                <Route path="/mybookings" component={MyBookings} />
            </React.Fragment>
        </BrowserRouter>
    );
}

// <div className="splashapp">
//     <img src="/assets/app-splash.jpg" />
//     <div className="splashappheader">
//         <h1>
//             Welcome{" "}
//             <b className="highlightcolor">
//                 {myData && myData.first}!{" "}
//             </b>
//             Click above to get started.
//         </h1>
//     </div>
// </div>
