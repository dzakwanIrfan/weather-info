import WeatherCard from "../components/weatherCard";
import { useWeather } from "../hooks/useWeather";

export const Home = () => {
    const {weather, loading} = useWeather("Pemalang");

    if (loading) {
        return <p>Loading...</p>;
    }
    if (!weather) {
        return <p>Weather not found</p>;
    }

    return (
        <>
            <h1>Weather Info</h1>
            <WeatherCard 
                name = {weather.location.name}
                region = {weather.location.region}
                country = {weather.location.country}
                localtime = {weather.location.localtime}
                condition = {weather.current.condition.text}
                temp_c = {weather.current.temp_c}
                icon = {weather.current.condition.icon}
            />
        </>
    );
};

export default Home;