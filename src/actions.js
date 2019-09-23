//actions.js
import axios from "./axios";

export function getCurrentWeek() {
    return axios.get("/api/getcurrentweek").then(({ data }) => {
        console.log("current week: ", data);
        return {
            type: "GET_CURRENT_WEEK",
            currentWeek: data
        };
    });
}

export function getCurrentPlusOne() {
    return axios.get("/api/getcurrentplusone").then(({ data }) => {
        console.log("current plus one", data);
        return {
            type: "GET_CURRENT_PLUS_ONE",
            currentPlusOne: data
        };
    });
}

export function getCurrentPlusTwo() {
    return axios.get("/api/getcurrentplustwo").then(({ data }) => {
        console.log("current plus two", data);
        return {
            type: "GET_CURRENT_PLUS_TWO",
            currentPlusTwo: data
        };
    });
}

export function getCurrentPlusThree() {
    return axios.get("/api/getcurrentplusthree").then(({ data }) => {
        console.log("current plus three", data);
        return {
            type: "GET_CURRENT_PLUS_THREE",
            currentPlusThree: data
        };
    });
}

export function getBookingsAdmin(inputWeek) {
    return axios.get(`/api/admin/getbookings/${inputWeek}`).then(({ data }) => {
        return {
            type: "GET_BOOKINGS_ADMIN",
            bookingsAdmin: data
        };
    });
}
