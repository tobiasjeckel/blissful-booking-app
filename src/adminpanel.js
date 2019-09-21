import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {} from "./actions";
import { Link } from "react-router-dom";

export default function AdminPanel() {
    console.log("AdminPanel has mounted");
    const dispatch = useDispatch();
    return (
        <React.Fragment>
            <div>
                Hello admin, change stuff here and get overview of bookings
            </div>
        </React.Fragment>
    );
}
