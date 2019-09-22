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
        // dispatch(getCurrentPlusOne());
        // dispatch(getCurrentPlusTwo());
        // dispatch(getCurrentPlusThree());
    }, []);

    // const currentWeek = useSelector(state => {
    //     return state.currentWeek;
    // });
    const currentWeek = useSelector(state => {
        return state.currentWeek;
    });

    return (
        <React.Fragment>
            <div>here the available dates will be rendered</div>
            {/*{nextEightWeeks &&
                nextEightWeeks.map(week => {
                    return (
                        <div key="id">
                            {week}
                            <Link to={"/createbooking"}></Link>
                            {week.capacity}
                        </div>
                    );
                })}*/}
        </React.Fragment>
    );
}
