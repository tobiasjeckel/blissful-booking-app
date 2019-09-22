//actions.js
import axios from "./axios";

export function getCurrentWeek() {
    return axios.get("/api/getcurrentweek").then(({ data }) => {
        console.log(data);
        return {
            type: "GET_CURRENT_WEEK",
            currentWeek: data
        };
    });
}
