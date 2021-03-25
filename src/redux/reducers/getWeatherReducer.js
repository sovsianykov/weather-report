import {Type} from "../types/types";

const initialState = {
    global : [],
    hourly : [],
    days   :  []
}





export const weather = (state = initialState, { type, payload }) => {
    switch (type) {
        case Type.GET_WEATHER_REPORT:
            return {...state, global: payload};
        case Type.GET_WEATHER_HOURLY:
            return {...state, hourly: payload};
        case Type.GET_WEATHER_DAY:
            return {...state, day : payload};
        default:
            return state;
    }
};
