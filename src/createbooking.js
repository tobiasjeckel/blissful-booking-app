import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeBooking, showModal, closeModal } from "./actions";
import { Link } from "react-router-dom";

export default function CreateBooking(props) {
    const dispatch = useDispatch();

    const selectedWeek = useSelector(state => {
        return state.selected_iso_week;
    });

    const stands = useSelector(state => {
        return state[selectedWeek];
    });

    // const bookingConfirmation = useSelector(state => {
    //     return state.bookingConfirmation;
    // });

    const modal = useSelector(state => {
        return state.showModal;
    });

    const selectedStandStype = useSelector(state => {
        return state.stand_type;
    });

    if (!stands) {
        return null;
    }

    const standArray = Object.values(stands);
    const smallStands = standArray.filter(stand => stand.type == "small");
    const largeStands = standArray.filter(stand => stand.type == "large");
    const nextAvailableSmallStand = smallStands[0];
    const nextAvailableLargeStand = largeStands[0];
    // console.log(nextAvailableSmallStand);
    // console.log(nextAvailableLargeStand);

    const handleShowModal = e => {
        dispatch(showModal(e.target.value));
    };

    const handleCloseModal = () => {
        dispatch(closeModal());
    };

    const handleClickMakeBooking = e => {
        e.preventDefault();
        console.log("on click: ", e.target.value);
        if (e.target.value == "small") {
            dispatch(
                makeBooking(
                    nextAvailableSmallStand.iso_week,
                    nextAvailableSmallStand.iso_year,
                    nextAvailableSmallStand.id
                )
            );
            dispatch(closeModal());
            props.history.push("/confirmation");
            //got to confirmation page here
        } else if (e.target.value == "large") {
            dispatch(
                makeBooking(
                    nextAvailableLargeStand.iso_week,
                    nextAvailableLargeStand.iso_year,
                    nextAvailableLargeStand.id
                )
            );
            dispatch(closeModal());
            props.history.push("/confirmation");
        } else {
            return null;
        }
    };

    return (
        <div className="createBooking">
            <h3>Select your stand size!</h3>
            <div className="stands">
                <div>
                    <h4>Small Stand</h4>
                    <img className="booth_icon" src="/assets/booth_icon.svg" />
                    <p> ⟵ 3m ⟶ </p>
                    {smallStands && smallStands.length > 0 ? (
                        <button
                            className="selectstandsbutton"
                            onClick={handleShowModal}
                            value="small"
                        >
                            Select
                        </button>
                    ) : (
                        <p>Sorry, small stands are all booked out </p>
                    )}
                </div>
                <div>
                    <h4>Large Stand</h4>
                    <img className="booth_icon" src="/assets/booth_icon.svg" />
                    <p> ⟵ 6m ⟶ </p>
                    {largeStands && largeStands.length > 0 ? (
                        <button
                            className="selectstandsbutton"
                            onClick={handleShowModal}
                            value="large"
                        >
                            Select
                        </button>
                    ) : (
                        <p>Sorry, large stands are all booked out </p>
                    )}
                </div>
            </div>
            {modal && (
                <div className="modal">
                    <div id="overlaybackground">
                        <div id="overlaycontent">
                            <h1 id="close" onClick={handleCloseModal}>
                                X
                            </h1>
                            <p>
                                Click here to make a definititive booking after
                                having read the terms and conditions. You will
                                be redirected to Payment.{" "}
                            </p>
                            <button
                                onClick={handleClickMakeBooking}
                                value={selectedStandStype}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// <button onClick={handleClickMakeBooking} value="small">
//     Make a Booking
// </button>
// <button onClick={handleClickMakeBooking} value="large">
//     Make a Booking
// </button>
