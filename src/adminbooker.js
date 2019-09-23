import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeAdminBooking, setAdminStand } from "./actions";
import { Link } from "react-router-dom";

export default function AdminBooker() {
    const dispatch = useDispatch();
    const handleInputChange = e => {
        dispatch(setAdminStand(e.target.value));
    };
    const selectedAdminStand = useSelector(state => {
        return state.adminStand;
    });

    const selectedWeek = useSelector(state => {
        return state.weekYear;
    });

    const makeBooking = e => {
        e.preventDefault();
        selectedAdminStand &&
            selectedWeek &&
            dispatch(makeAdminBooking(selectedAdminStand, selectedWeek));
        console.log(selectedAdminStand, selectedWeek);
    };
    return (
        <React.Fragment>
            <div className="adminBooker">
                <p>
                    Enter here to make an admin booking. WILL OVERRIDE EXISTING
                    BOOKINGS!{" "}
                </p>
                <form>
                    <label htmlFor="stand">Choose a stand:</label>
                    <input
                        type="number"
                        name="stand"
                        id="stand"
                        min="1"
                        max="20"
                        onChange={handleInputChange}
                        required
                    />
                    <br />
                    <button onClick={makeBooking} name="submit">
                        Submit
                    </button>
                    <p> {/*message - todo - preventDefault*/} </p>
                </form>
            </div>
        </React.Fragment>
    );
}
