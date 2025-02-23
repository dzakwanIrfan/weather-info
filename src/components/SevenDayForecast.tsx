import { Weather } from "../types/Weather";

interface SevenDayForecastProps {
    weather: Weather;
    loading: boolean;
}

export const SevenDayForecast = ({ weather, loading }: SevenDayForecastProps) => {
    if (loading) {
        return (
            <div className="bg-gray-800 h-full xl:w-[64rem] w-full rounded-xl animate-pulse">
                <div className="p-4 text-white">
                    <h1 className="text-sm font-bold mb-4 text-neutral-300">7-DAY FORECAST</h1>
                    {[...Array(7)].map((_, index) => (
                        <div key={index} className="flex justify-between items-center px-8 border-gray-400 border-b py-4">
                            <div className="bg-gray-700 h-4 w-20 rounded"></div>
                            <div className="flex justify-center items-center gap-3">
                                <div className="bg-gray-700 h-12 w-12 rounded-full"></div>
                                <div className="bg-gray-700 h-4 w-32 rounded"></div>
                            </div>
                            <div className="flex gap-1">
                                <div className="bg-gray-700 h-4 w-16 rounded"></div>
                                <div className="bg-gray-700 h-4 w-16 rounded"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (!weather) {
        return <p className="text-white">Weather not found</p>;
    }

    return (
        <div className="bg-gray-800 dark:bg-white h-full xl:w-[64rem] w-full rounded-xl drop-shadow-lg">
            <div className="p-4 text-white dark:text-black">
                <h1 className="text-sm font-bold mb-4 text-neutral-300 dark:text-neutral-700">7-DAY FORECAST</h1>
                {weather.forecast.forecastday.map((forecast, index) => (
                    <div key={index} className="flex justify-between items-center px-8 border-gray-400 border-b pb-4">
                        <p className="text-gray-400 dark:text-gray-600 text-sm font-bold">{index === 0 ? 'Today' : new Date(forecast.date).toLocaleDateString([], { weekday: 'short' })}</p>
                        <div className="flex justify-center items-center gap-3">
                            <img src={forecast.day.condition.icon} alt={forecast.day.condition.text} />
                            <p className="font-bold">{forecast.day.condition.text}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-white dark:text-black text-sm">
                                <span className="font-bold">{forecast.day.maxtemp_c}°C</span>
                                <span className="text-gray-400 dark:text-gray-600">/{forecast.day.mintemp_c}°C</span>
                            </p>
                        </div>
                    </div>
                ))}
                <a 
                    href="https://www.weatherapi.com/pricing.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white underline py-2 bg-blue-600 rounded-lg mt-4 block text-center"
                >
                    Limited access to information
                </a>
            </div>
        </div>
    );
};

export default SevenDayForecast;