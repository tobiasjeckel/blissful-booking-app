import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {} from "./actions";
import { Link } from "react-router-dom";

export default function MyBookings() {
    console.log("MyBookings has mounted");
    const dispatch = useDispatch();
    return (
        <React.Fragment>
            <div>These are my bookings</div>
        </React.Fragment>
    );
}
