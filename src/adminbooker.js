import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeAdminBooking, setAdminStand } from "./actions";

export default function AdminBooker() {
    const dispatch = useDispatch();
    const handleInputChange = e => {
        dispatch(setAdminStand(e.target.value));
    };
    const selectedAdminStand = useSelector(state => {
        return state.adminStand;
    });

    const selectedWeek = useSelector(state => {
        return state.adminWeekYear;
    });

    const makeBooking = e => {
        e.preventDefault();
        selectedAdminStand &&
            selectedWeek &&
            dispatch(makeAdminBooking(selectedAdminStand, selectedWeek));
    };
    return (
        <React.Fragment>
            <div className="adminBooker">
                <p>Disable availability of a stand.</p>
                <form>
                    <label htmlFor="stand">Choose a stand: </label>
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
                </form>
            </div>
        </React.Fragment>
    );
}
