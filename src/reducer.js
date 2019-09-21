export default function reducer(state = {}, action) {
    if (action.type === "ACTION_THAT_WILL_CHANGE_A_THING") {
        state = {
            ...state
            // friendsWannabes: action.friendsWannabes
        };
    }
    return state;
}
