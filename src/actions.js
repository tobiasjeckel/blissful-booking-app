//actions.js
import axios from "./axios";

export function getCurrentWeek() {
    return axios.get("/api/getanyweek/0").then(({ data }) => {
        return {
            type: "GET_CURRENT_WEEK",
            currentWeek: data
        };
    });
}

export function getCurrentPlusOne() {
    return axios.get("/api/getanyweek/1").then(({ data }) => {
        return {
            type: "GET_CURRENT_PLUS_ONE",
            currentPlusOne: data
        };
    });
}

export function getCurrentPlusTwo() {
    return axios.get("/api/getanyweek/2").then(({ data }) => {
        return {
            type: "GET_CURRENT_PLUS_TWO",
            currentPlusTwo: data
        };
    });
}

export function getCurrentPlusThree() {
    return axios.get("/api/getanyweek/3").then(({ data }) => {
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

export function setAdminWeek(week) {
    return {
        type: "SET_ADMIN_WEEK",
        adminWeekYear: week
    };
}

export function setAdminStand(standNumber) {
    return {
        type: "SET_ADMIN_STAND",
        adminStand: standNumber
    };
}

export function makeAdminBooking(selectedAdminStand, selectedWeek) {
    return axios
        .post("/api/makeAdminBooking", {
            selectedAdminStand,
            selectedWeek
        })
        .then(({ data }) => {
            return {
                type: "ADMIN_BOOKING",
                adminBookingId: data
            };
        });
}

export function deleteBooking(booking_id) {
    return axios
        .post("/api/deletebooking", {
            booking_id
        })
        .then(({ data }) => {
            return {
                type: "DELETE_BOOKING",
                adminBookingId: data
            };
        });
}

export function setSelectedWeek(iso_week, iso_year) {
    // console.log(iso_week, iso_year);
    return {
        type: "SET_SELECTED_WEEK",
        selected_iso_week: iso_week,
        selected_iso_year: iso_year
    };
}

export function makeBooking(week, year, stand_id) {
    // console.log("in action", week, year, stand_id);

    return axios
        .post("/api/makebooking", {
            week,
            year,
            stand_id
        })
        .then(({ data }) => {
            console.log("action response", data);
            return {
                type: "MAKE_BOOKING",
                bookingConfirmation: data
            };
        });
}
export function getMyBookings() {
    return axios.get("/api/getmybookings").then(({ data }) => {
        return {
            type: "GET_MY_BOOKINGS",
            myBookings: data
        };
    });
}
