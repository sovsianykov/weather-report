import Type from "../types/types";

export const weather = (state = [], { type, payload }) => {
    switch (type) {
        case Type.GET_WEATHER_REPORT:
            return [...state, payload.obj];
        case Type.GET_WEATHER_HOURLY:
            return [...state, payload.obj];
        case Type.GET_WEATHER_DAY:
            return [...state, payload.obj];
        default:
            return state;
    }
};