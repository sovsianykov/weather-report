import Type from '../types/types'

export const fetchStart =()=>({
    type : Type.FETCH_START
});

export const fetchError = error => ({
    type: Type.FETCH_ERROR,
    payload: { error }
});

export const getWeatherReport =()=>({
    type : Type.GET_WEATHER_REPORT
});

export const getWeatherDay =()=>({
    type : Type.GET_WEATHER_DAY
});

export const getWeatherHourly =()=>({
    type : Type.GET_WEATHER_HOURLY
});