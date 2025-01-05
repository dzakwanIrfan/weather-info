import WeatherCard from "../components/WeatherCard";
import { useWeather } from "../hooks/useWeather";

export const Home = () => {
    const {weather, loading} = useWeather("Banjarnegara");

    if (loading) {
        return (
            <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full">
                <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                    <div className="flex-1 space-y-6 py-1">
                        <div className="h-2 bg-slate-700 rounded"></div>
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                            </div>
                            <div className="h-2 bg-slate-700 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    if (!weather) {
        return <p>Weather not found</p>;
    }

    return (
        <>
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