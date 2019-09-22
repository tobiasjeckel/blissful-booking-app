export default function reducer(state = {}, action) {
    if (action.type === "GET_CURRENT_WEEK") {
        // console.log(action.nextFourWeeks);
        state = {
            ...state,
            currentWeek: action.currentWeek
        };
    }
    return state;
}
