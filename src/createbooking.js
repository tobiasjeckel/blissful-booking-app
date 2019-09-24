import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {} from "./actions";
import { Link } from "react-router-dom";

export default function CreateBooking() {
    console.log("CreateBooking has mounted");
    const dispatch = useDispatch();

    const selectedWeek = useSelector(state => {
        return state.selected_iso_week;
    });

    let stands = useSelector(state => {
        return state[selectedWeek];
    });

    console.log(typeof stands);

    const standArray = Object.values(stands);
    // const standArray = Object.keys(stands).map(i => stands[i]);
    const smallStands = standArray.filter(stand => stand.type == "small");
    console.log(smallStands);

    return (
        <React.Fragment>
            <h3>Select your stand size!</h3>
            <div>
                <h4>Large Stand</h4>
            </div>
            <div>
                <h4>Small Stand</h4>
            </div>
        </React.Fragment>
    );
}
