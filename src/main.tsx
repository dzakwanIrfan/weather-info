import { StrictMode, useEffect, useState } from "react";
import { createRoot } from 'react-dom/client';
import { getWeather } from './api/weatherApi';
import { Weather } from './types/Weather';
import { SideBar } from "./components/SideBar";
import { SearchBar } from "./components/SearchBar";
import { TodayForecastCard } from "./components/TodayForecastCard";
import { AirConditionsCard } from "./components/AirConditionsCard";
import { SevenDayForecast } from "./components/SevenDayForecast";
import WeatherCard from "./components/WeatherCard";
import './index.css'

const App = () => {
    const [selectedCity, setSelectedCity] = useState('Pemalang');
    const [weather, setWeather] = useState<Weather | null>(null);
    const [loading, setLoading] = useState(true);

    const handleCitySelect = (city: string) => {
        setSelectedCity(city);
        fetchWeather(city);
    };

    const fetchWeather = async (city: string) => {
        setLoading(true);
        try {
            const data = await getWeather(city);
            setWeather(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWeather(selectedCity);
    }, [selectedCity]);

    return (
        <StrictMode>
            <div className="bg-gray-950 w-full p-4 h-screen">
                <div className="flex flex-col lg:flex-row h-full gap-4">
                    <SideBar />
                    <div className="flex flex-col w-full gap-4">
                        <SearchBar onCitySelect={handleCitySelect} />
                        {weather && <WeatherCard weather={weather} loading={loading} />}
                        <TodayForecastCard />
                        <AirConditionsCard />
                    </div>
                    <SevenDayForecast />
                </div>
            </div>
        </StrictMode>
    );
};

createRoot(document.getElementById('root')!).render(<App />);