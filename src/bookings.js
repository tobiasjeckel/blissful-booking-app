import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getCurrentWeek,
    getCurrentPlusOne,
    getCurrentPlusTwo,
    getCurrentPlusThree,
    setSelectedWeek
} from "./actions";
import CreateBooking from "./createbooking";
import { Route, Link } from "react-router-dom";

export default function Bookings() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrentWeek());
        dispatch(getCurrentPlusOne());
        dispatch(getCurrentPlusTwo());
        dispatch(getCurrentPlusThree());
    }, []);

    const currentWeek = useSelector(state => {
        return state.currentWeek;
    });
    const currentPlusOne = useSelector(state => {
        return state.currentPlusOne;
    });
    const currentPlusTwo = useSelector(state => {
        return state.currentPlusTwo;
    });
    const currentPlusThree = useSelector(state => {
        return state.currentPlusThree;
    });

    const onClickSetSelectedWeek = (iso_week, iso_year) => {
        dispatch(setSelectedWeek(iso_week, iso_year));
    };

    return (
        <React.Fragment>
            <div>here the available dates will be rendered</div>
            <br />
            <div className="week">
                {currentWeek && Object.keys(currentWeek).length > 0 ? (
                    <Link
                        to={"/bookings/createbooking/"}
                        onClick={() => onClickSetSelectedWeek("currentWeek")}
                    >
                        <p>
                            Click here to make a booking for this week{" "}
                            {currentWeek[Object.keys(currentWeek)[0]].iso_week}
                        </p>
                    </Link>
                ) : (
                    <p>Sorry, no more stands are available for this week</p>
                )}
            </div>
            <div className="week">
                {currentPlusOne && Object.keys(currentPlusOne).length > 0 ? (
                    <Link
                        to={"/bookings/createbooking"}
                        onClick={() => onClickSetSelectedWeek("currentPlusOne")}
                    >
                        <p>
                            Click here to make a booking for next week{" "}
                            {
                                currentPlusOne[Object.keys(currentPlusOne)[0]]
                                    .iso_week
                            }
                        </p>
                    </Link>
                ) : (
                    <p>Sorry, no more stands are available for this week</p>
                )}
            </div>
            <div className="week">
                {currentPlusTwo && Object.keys(currentPlusTwo).length > 0 ? (
                    <Link
                        to={"/bookings/createbooking"}
                        onClick={() => onClickSetSelectedWeek("currentPlusTwo")}
                    >
                        <p>
                            Click here to make a booking for week{" "}
                            {
                                currentPlusTwo[Object.keys(currentPlusTwo)[0]]
                                    .iso_week
                            }
                        </p>
                    </Link>
                ) : (
                    <p>Sorry, no more stands are available for this week</p>
                )}
            </div>
            <div className="week">
                {currentPlusThree &&
                Object.keys(currentPlusThree).length > 0 ? (
                    <Link
                        to={"/bookings/createbooking"}
                        onClick={() =>
                            onClickSetSelectedWeek("currentPlusThree")
                        }
                    >
                        <p>
                            Click here to make a booking for week{" "}
                            {
                                currentPlusThree[
                                    Object.keys(currentPlusThree)[0]
                                ].iso_week
                            }
                        </p>
                    </Link>
                ) : (
                    <p>Sorry, no more stands are available for this week</p>
                )}
            </div>

            <Route path="/bookings/createbooking" component={CreateBooking} />
        </React.Fragment>
    );
}

// onClick={() =>
//     onClickSetSelectedWeek(
//         currentWeek[Object.keys(currentWeek)[0]]
//             .iso_week,
//         currentWeek[Object.keys(currentWeek)[0]]
//             .iso_year
//     )
// }
