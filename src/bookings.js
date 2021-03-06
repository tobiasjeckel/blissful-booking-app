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
        setTimeout(function() {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth"
            });
        }, 50);
        dispatch(setSelectedWeek(iso_week, iso_year));
    };

    return (
        <div className="component">
            <h3 id="clickonavailable">
                Click on an available date to make a booking
            </h3>
            <div className="weeks">
                <div className="week">
                    {currentWeek && Object.keys(currentWeek).length > 0 ? (
                        <Link
                            to={"/bookings/createbooking/"}
                            onClick={() =>
                                onClickSetSelectedWeek("currentWeek")
                            }
                        >
                            <time dateTime="" className="icon">
                                <em>Sunday</em>
                                <strong>
                                    {new Date(
                                        currentWeek[
                                            Object.keys(currentWeek)[0]
                                        ].day
                                    ).toLocaleDateString("en-US", {
                                        month: "long"
                                    })}
                                </strong>
                                <span>
                                    {new Date(
                                        currentWeek[
                                            Object.keys(currentWeek)[0]
                                        ].day
                                    ).getDate()}
                                </span>
                            </time>
                        </Link>
                    ) : (
                        <div className="bookedout">
                            Sorry, booked out. Please select another date.
                        </div>
                    )}
                </div>
                <div className="week">
                    {currentPlusOne &&
                    Object.keys(currentPlusOne).length > 0 ? (
                        <Link
                            to={"/bookings/createbooking/"}
                            onClick={() =>
                                onClickSetSelectedWeek("currentPlusOne")
                            }
                        >
                            <time dateTime="" className="icon">
                                <em>Sunday</em>
                                <strong>
                                    {new Date(
                                        currentPlusOne[
                                            Object.keys(currentPlusOne)[0]
                                        ].day
                                    ).toLocaleDateString("en-US", {
                                        month: "long"
                                    })}
                                </strong>
                                <span>
                                    {new Date(
                                        currentPlusOne[
                                            Object.keys(currentPlusOne)[0]
                                        ].day
                                    ).getDate()}
                                </span>
                            </time>
                        </Link>
                    ) : (
                        <div className="bookedout">
                            Sorry, booked out. Please select another date.
                        </div>
                    )}
                </div>
                <div className="week">
                    {currentPlusTwo &&
                    Object.keys(currentPlusTwo).length > 0 ? (
                        <Link
                            to={"/bookings/createbooking"}
                            onClick={() =>
                                onClickSetSelectedWeek("currentPlusTwo")
                            }
                        >
                            <time dateTime="" className="icon">
                                <em>Sunday</em>
                                <strong>
                                    {new Date(
                                        currentPlusTwo[
                                            Object.keys(currentPlusTwo)[0]
                                        ].day
                                    ).toLocaleDateString("en-US", {
                                        month: "long"
                                    })}
                                </strong>
                                <span>
                                    {new Date(
                                        currentPlusTwo[
                                            Object.keys(currentPlusTwo)[0]
                                        ].day
                                    ).getDate()}
                                </span>
                            </time>
                        </Link>
                    ) : (
                        <div className="bookedout">
                            Sorry, booked out. Please select another date.
                        </div>
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
                            <time dateTime="" className="icon">
                                <em>Sunday</em>
                                <strong>
                                    {new Date(
                                        currentPlusThree[
                                            Object.keys(currentPlusThree)[0]
                                        ].day
                                    ).toLocaleDateString("en-US", {
                                        month: "long"
                                    })}
                                </strong>
                                <span>
                                    {new Date(
                                        currentPlusThree[
                                            Object.keys(currentPlusThree)[0]
                                        ].day
                                    ).getDate()}
                                </span>
                            </time>
                        </Link>
                    ) : (
                        <div className="bookedout">
                            Sorry, booked out. Please select another date.
                        </div>
                    )}
                </div>
            </div>
            <Route path="/bookings/createbooking" component={CreateBooking} />
        </div>
    );
}
