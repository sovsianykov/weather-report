import axios from "axios";

const baseUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Vishneve%20kiev%20ukraine?unitGroup=metric&key=DNXXQ6TVGXMLXZRFYJMA92QSE&include=fcst%2Chours%2Ccurrent'

export default {
    async getWeatherReport() {
        try {
            const data = await axios.get(baseUrl)
            return data;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    },
}
