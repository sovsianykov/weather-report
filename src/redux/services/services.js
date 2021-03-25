import axios from "axios";

const baseUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Vishneve%20kiev%20ukraine?unitGroup=metric&key=DNXXQ6TVGXMLXZRFYJMA92QSE&include=fcst%2Chours%2Ccurrent'

export const serv ={
    async getWeatherReport() {
        try {
            const data = await axios.get(baseUrl)
            console.log( 'from services' + data.data)
            return data;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    },
}
