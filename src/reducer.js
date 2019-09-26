export default function reducer(state = {}, action) {
    if (action.type === "GET_CURRENT_WEEK") {
        state = {
            ...state,
            currentWeek: action.currentWeek
        };
    }

    if (action.type === "GET_CURRENT_PLUS_ONE") {
        state = {
            ...state,
            currentPlusOne: action.currentPlusOne
        };
    }

    if (action.type === "GET_CURRENT_PLUS_TWO") {
        state = {
            ...state,
            currentPlusTwo: action.currentPlusTwo
        };
    }

    if (action.type === "GET_CURRENT_PLUS_THREE") {
        state = {
            ...state,
            currentPlusThree: action.currentPlusThree
        };
    }

    if (action.type === "GET_BOOKINGS_ADMIN") {
        state = {
            ...state,
            bookingsAdmin: action.bookingsAdmin
        };
    }

    if (action.type === "SET_ADMIN_WEEK") {
        state = {
            ...state,
            adminWeekYear: action.adminWeekYear
        };
    }

    if (action.type === "SET_ADMIN_STAND") {
        state = {
            ...state,
            adminStand: action.adminStand
        };
    }

    if (action.type === "ADMIN_BOOKING") {
        state = {
            ...state,
            adminBookingId: action.adminBookingId
        };
    }

    if (action.type === "DELETE_BOOKING") {
        state = {
            ...state,
            adminBookingId: action.adminBookingId
        };
    }

    if (action.type === "SET_SELECTED_WEEK") {
        state = {
            ...state,
            selected_iso_week: action.selected_iso_week,
            selected_iso_year: action.selected_iso_year
        };
    }

    if (action.type === "MAKE_BOOKING") {
        state = {
            ...state,
            bookingConfirmation: action.bookingConfirmation
        };
    }

    if (action.type === "GET_MY_BOOKINGS") {
        state = {
            ...state,
            myBookings: action.myBookings
        };
    }

    if (action.type === "SHOW_MODAL") {
        state = {
            ...state,
            showModal: action.showModal,
            stand_type: action.stand_type
        };
    }

    if (action.type === "CLOSE_MODAL") {
        state = {
            ...state,
            showModal: action.showModal,
            stand_type: action.stand_type
        };
    }

    if (action.type === "GET_USER_DATA") {
        state = {
            ...state,
            userData: action.userData
        };
    }

    return state;
}
