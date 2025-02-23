import { Weather } from "../types/Weather";

export const TodayForecastCard = ({ weather, loading }: { weather: Weather, loading: boolean }) => {
    if (loading) {
        return (
            <div className="bg-gray-800 w-full flex-1 rounded-xl animate-pulse">
                <div className="p-4 text-white">
                    <h1 className="text-sm font-bold mb-4 text-neutral-300">TODAY'S FORECAST</h1>
                    <div className="flex flex-col md:flex-row justify-around">
                        {[...Array(5)].map((_, index) => (
                            <div key={index} className="flex flex-1 justify-center items-center border-gray-700 border-b md:border-b-0 md:border-r last:border-r-0">
                                <div className="flex md:flex-col flex-row md:justify-center justify-between w-full md:w-auto items-center gap-3 md:p-0 p-4">
                                    <div className="bg-gray-700 h-4 w-16 rounded"></div>
                                    <div className="bg-gray-700 h-12 w-12 rounded-full block md:hidden"></div>
                                    <div className="bg-gray-700 h-4 w-12 rounded block md:hidden"></div>
                                    <div className="md:flex flex-col gap-1 items-center hidden">
                                        <div className="bg-gray-700 h-12 w-12 rounded-full"></div>
                                        <div className="bg-gray-700 h-4 w-12 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
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
            ],
        },
    } = weather;

    const currentHour = new Date().getHours();
    const filteredHours = hour.filter((hour) => {
        const forecastHour = new Date(hour.time).getHours();
        return forecastHour >= currentHour && forecastHour <= currentHour + 5;
    });

    return (
        <div className="bg-gray-800 dark:bg-white w-full flex-1 rounded-xl drop-shadow-lg">
            <div className="p-4 text-white dark:text-black">
                <h1 className="text-sm font-bold mb-4 text-neutral-300 dark:text-neutral-700">TODAY'S FORECAST</h1>
                <div className="flex flex-col md:flex-row justify-around">
                    {filteredHours.map((hour, index) => (
                        <div key={index} className={`flex flex-1 justify-center items-center border-gray-700 ${index === filteredHours.length - 1 ? '' : 'border-b md:border-b-0 md:border-r'}`}>
                            <div className="flex md:flex-col flex-row md:justify-center justify-between w-full items-center gap-3 md:px-0 px-12">
                                <p className="text-neutral-300 dark:text-neutral-700 text-sm">{new Date(hour.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                <div className="flex items-center gap-2 md:hidden">
                                    <img src={hour.condition.icon} alt={hour.condition.text} className="object-cover w-12 h-12" />
                                    <p className="text-sm">{hour.condition.text}</p>
                                </div>
                                <p className="font-bold md:hidden block">{hour.temp_c}°C</p>
                                <div className="md:flex hidden flex-col gap-1 items-center">
                                    <img src={hour.condition.icon} alt={hour.condition.text} className="object-cover w-12 h-12" />
                                    <p className="font-bold">{hour.temp_c}°C</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TodayForecastCard;