import { StrictMode, useState } from "react";
import { createRoot } from 'react-dom/client';
import './index.css';
import { WeatherCard } from "./components/WeatherCard";
import { SearchBar } from "./components/SearchBar";
import { TodayForecastCard } from "./components/TodayForecastCard";
import { AirConditionsCard } from "./components/AirConditionsCard";
import { SevenDayForecast } from "./components/SevenDayForecast";
import { SideBar } from "./components/SideBar";
import { useWeather } from "./hooks/useWeather";

const App = () => {
    const [selectedCity, setSelectedCity] = useState('Pemalang');
    const { weather, loading } = useWeather(selectedCity);

    const handleCitySelect = (city: string) => {
        setSelectedCity(city);
    };

    return (
        <StrictMode>
            <div className="bg-gray-950 w-full p-4 h-screen">
                <div className="flex flex-col lg:flex-row h-full gap-4">
                    <SideBar />
                    <div className="flex flex-col w-full gap-4">
                        <SearchBar onCitySelect={handleCitySelect} />
                        {weather && <WeatherCard weather={weather} loading={loading} />}
                        <TodayForecastCard weather={weather} loading={loading} />
                        <AirConditionsCard />
                    </div>
                    <SevenDayForecast />
                </div>
            </div>
        </StrictMode>
    );
};

createRoot(document.getElementById('root')!).render(<App />);