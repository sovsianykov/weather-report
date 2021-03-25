import Type from '../types/types'
import {
    fetchStart,
    fetchError,
    getWeatherDay,
    getWeatherHourly,
    getWeatherReport,
} from "../actions/report";

import services from "../services/services";

export function fetchWeather() {
    return async dispatch =>
    {
        const response = await  services.getWeatherReport()
        console.log('from operations' + response.data)
        dispatch({type: Type.GET_WEATHER_REPORT, payload:response.data})
    }
}
