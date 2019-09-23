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

    return state;
}
