import { Weather } from "../types/Weather";

export const TodayForecastCard = ({weather, loading}: {weather: Weather, loading: boolean}) => {

    if (loading) {
        return (
            <div className="bg-gray-800 w-full flex-1 rounded-xl">
                <div className="flex justify-center items-center h-52">
                    <div className="animate-spin text-blue-500">
                        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v4m0 8v4m4-4h4m-8 0H4m8-8H4m8 0h4" />
                        </svg>
                    </div>
                </div>
            </div>
        );
    }

    if (!weather) {
        return <p className="text-white">Weather not found</p>;
    }

    const {
        forecast: {
            forecastday: [
                {
                    hour,
                },
            ]
        }
    } = weather;

    const currentHour = new Date().getHours();
    const filteredHours = hour.filter((hour) => {
        const forecastHour = new Date(hour.time).getHours();
        return forecastHour >= currentHour && forecastHour <= currentHour + 5;
    });

    return (
        <div className="bg-gray-800 w-full flex-1 rounded-xl">
            <div className="p-4 text-white">
                <h1 className="text-2xl font-bold">Today's Forecast</h1>
                <p className="text-neutral-300">Next 6 hours</p>
                <div className="flex justify-around">
                    {filteredHours.map((hour, index) => (
                        <div key={index} className="flex flex-col items-center gap-4">
                            <p>{new Date(hour.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                            <img src={hour.condition.icon} alt={hour.condition.text} className="object-cover w-12 h-12" />
                            <p>{hour.temp_c}°C</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};