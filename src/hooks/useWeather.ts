import { useEffect, useState } from "react"
import { getWeather } from "../api/weatherApi";
import { Weather } from "../types/Weather";

export const useWeather = (city: string) => {
    const [weather, setWeather] = useState<Weather | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                setLoading(true);
                const data = await getWeather(city);
                setWeather(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, [city]);

    return {weather, loading};
}