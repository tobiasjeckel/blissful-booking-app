import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getCurrentWeek,
    getCurrentPlusOne,
    getCurrentPlusTwo,
    getCurrentPlusThree
} from "./actions";
import { Link } from "react-router-dom";

export default function Bookings() {
    console.log("Bookings has mounted");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrentWeek());
        dispatch(getCurrentPlusOne());
        dispatch(getCurrentPlusTwo());
        dispatch(getCurrentPlusThree());
    }, []);

    // const currentWeek = useSelector(state => {
    //     return state.currentWeek;
    // });
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
    currentWeek && console.log(Object.keys(currentWeek).length);
    currentPlusOne && console.log(Object.keys(currentPlusOne).length);
    currentPlusTwo && console.log(Object.keys(currentPlusTwo).length);
    currentPlusThree && console.log(Object.keys(currentPlusThree).length);

    return (
        <React.Fragment>
            <div>here the available dates will be rendered</div>
            <br />
            <div className="week">
                {currentWeek && Object.keys(currentWeek).length > 0 ? (
                    <Link to={"/createbooking"}>
                        <p>Click here to make a booking for this week</p>
                    </Link>
                ) : (
                    <p>Sorry, no more stands are available for this week</p>
                )}
            </div>
            <div className="week">
                {currentPlusOne && Object.keys(currentPlusOne).length > 0 ? (
                    <Link to={"/createbooking"}>
                        <p>Click here to make a booking for next week</p>
                    </Link>
                ) : (
                    <p>Sorry, no more stands are available for this week</p>
                )}
            </div>
            <div className="week">
                {currentPlusTwo && Object.keys(currentPlusTwo).length > 0 ? (
                    <Link to={"/createbooking"}>
                        <p>Click here to make a booking for in two weeks</p>
                    </Link>
                ) : (
                    <p>Sorry, no more stands are available for this week</p>
                )}
            </div>
            <div className="week">
                {currentPlusThree &&
                Object.keys(currentPlusThree).length > 0 ? (
                    <Link to={"/createbooking"}>
                        <p>Click here to make a booking for in three weeks</p>
                    </Link>
                ) : (
                    <p>Sorry, no more stands are available for this week</p>
                )}
            </div>
        </React.Fragment>
    );
}
