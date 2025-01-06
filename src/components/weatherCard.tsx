import { Weather } from "../types/Weather";

const WeatherCard = ({ weather, loading }: { weather: Weather, loading: boolean }) => {

    if (loading) {
        return (
            <div className="flex justify-center items-center h-52">
                <div className="animate-spin text-blue-500">
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v4m0 8v4m4-4h4m-8 0H4m8-8H4m8 0h4" />
                    </svg>
                </div>
            </div>
        );
    }

    if (!weather) {
        return <p>Weather not found</p>;
    }

    const {
        location: { name, region, country, localtime },
        current: { condition, temp_c, feelslike_c },
    } = weather;

    return (
        <div className="text-white rounded-lg py-2 px-4 lg:px-12">
            <div className="flex flex-col lg:flex-row justify-between">
                <div className="flex flex-col justify-between">
                    <div className="">
                        <h1 className="text-3xl font-bold">{name}</h1>
                        <p className="text-sm text-neutral-300">{region}, {country}</p>
                    </div>
                    <div className="flex gap-4">
                        <p className="text-5xl font-bold">{temp_c}°C</p>
                        <div className="flex flex-col justify-between text-neutral-300">
                            <p>{condition.text}</p>
                            <p>Feels like {feelslike_c}°C</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <p className="text-neutral-300">{localtime}</p>
                    <img src={condition.icon} alt={condition.text} className="object-cover size-52" />
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;