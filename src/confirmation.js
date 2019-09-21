import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {} from "./actions";
import { Link } from "react-router-dom";

export default function Confirmation() {
    console.log("Confirmation has mounted");
    const dispatch = useDispatch();
    return (
        <React.Fragment>
            <div>Your stand has been booked</div>
        </React.Fragment>
    );
}
