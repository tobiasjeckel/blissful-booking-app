import React, { useEffect } from "react";
import axios from "./axios";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {} from "./actions";

export default function App() {
    console.log("app has mounted");
    return (
        <BrowserRouter>
            <div>
                <h1>Hello Booking Tool</h1>
            </div>
        </BrowserRouter>
    );
}
