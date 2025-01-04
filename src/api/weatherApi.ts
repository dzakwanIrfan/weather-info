import axios from "axios";

const API_KEY = "d30749b830ac4992988142537243112";
const BASE_URL = "http://api.weatherapi.com/v1";

export const getWeather = async (city: string) => {
    const response = await axios.get(`${BASE_URL}/current.json`, {
        params: {
            key: API_KEY,
            q: city,
        }
    });
    return response.data;
}