import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {} from "./actions";
import { Link } from "react-router-dom";

export default function CreateBooking() {
    console.log("CreateBooking has mounted");
    const dispatch = useDispatch();
    return (
        <React.Fragment>
            <div>select a stand</div>
        </React.Fragment>
    );
}
