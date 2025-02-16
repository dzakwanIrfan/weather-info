import axios from "axios";

const API_KEY = "d30749b830ac4992988142537243112";
const BASE_URL = "https://api.weatherapi.com/v1";

export const getWeather = async (city: string) => {
    const response = await axios.get(`${BASE_URL}/forecast.json`, {
        params: {
            key: API_KEY,
            q: city,
            days: 7,
            aqi: "yes",
            alerts: "yes",
        }
    });
    return response.data;
}