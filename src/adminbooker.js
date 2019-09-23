import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookingsAdmin } from "./actions";
import { Link } from "react-router-dom";

export default function AdminBooker() {
    const dispatch = useDispatch();
    const [inputWeek, setInputWeek] = useState();
    console.log(inputWeek);
    return (
        <React.Fragment>
            <div className="adminBooker">
                <p>
                    Enter here to make an admin booking. WILL OVERRIDE EXISTING
                    BOOKINGS!{" "}
                </p>
            </div>
        </React.Fragment>
    );
}
