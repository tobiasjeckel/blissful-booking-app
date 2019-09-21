import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkCapacity, getNextEightWeeks, getCurrentWeek } from "./actions";
import { Link } from "react-router-dom";

export default function Bookings() {
    console.log("Bookings has mounted");
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(getNextEightWeeks());
        // dispatch(getCurrentWeek());
        // for (let i = 1; i < nextEightWeeks.length; i++) {
        //     dispatch(checkCapacity(i));
        // }
    }, []);

    const currentWeek = useSelector(state => {
        return state.currentWeek;
    });
    const nextEightWeeks = useSelector(state => {
        return state.nextEightWeeks;
    });

    return (
        <React.Fragment>
            <div>here the bookings will be rendered</div>
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
