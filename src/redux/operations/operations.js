import {Type}from '../types/types'


import {serv} from "../services/services";

export function fetchWeather() {
    return async dispatch =>
    {
        const response = await  serv.getWeatherReport()
        console.log(response.data)
        dispatch({type: Type.GET_WEATHER_REPORT, payload: response})
        dispatch({type: Type.GET_WEATHER_DAY, payload: response.data.days})
        dispatch({type: Type.GET_WEATHER_HOURLY, payload: response.data})
    }
}
