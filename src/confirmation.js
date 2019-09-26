import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {} from "./actions";
import { Link } from "react-router-dom";

export default function Confirmation() {
    console.log("Confirmation has mounted");
    const bookingConfirmation = useSelector(state => {
        return state.bookingConfirmation;
    });
    console.log(bookingConfirmation);
    return (
        <React.Fragment>
            <div className="component">
                {bookingConfirmation && (
                    <div>
                        <h2>Booking Confirmation</h2>
                        <time dateTime="" className="icon">
                            <em>Sunday</em>
                            <strong>
                                {new Date(
                                    bookingConfirmation.day
                                ).toLocaleDateString("en-US", {
                                    month: "long"
                                })}
                            </strong>
                            <span>
                                {new Date(bookingConfirmation.day).getDate()}
                            </span>
                        </time>
                        <p>
                            Your stand with stand number{" "}
                            <b className="highlightcolorlarge">
                                {bookingConfirmation.stand_id}
                            </b>{" "}
                            has been booked. Your booking id is{" "}
                            <b className="highlightcolor">
                                {bookingConfirmation.booking_id}
                            </b>
                            .
                        </p>

                        <h3>Instructions for the day of the market:</h3>
                        <ol>
                            <li>Entrance to the market from 08:00 am.</li>
                            <li>
                                Have booking confirmation ready; stand number =
                                No. on booking confirmation.
                            </li>
                            <li>Drive to the stand.</li>
                            <li>Unload.</li>
                            <li>
                                By car, please leave the premises by 10:00 a.m.
                                and look for a parking space outside.
                            </li>
                            <li>
                                Attention: Always have the booking confirmation
                                ready for inspection at the stand.
                            </li>
                        </ol>
                    </div>
                )}
            </div>
        </React.Fragment>
    );
}
