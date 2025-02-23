import { IconContext } from "react-icons";
import { FaCloudRain, FaSun, FaTemperatureHalf, FaWind } from "react-icons/fa6";
import { Weather } from "../types/Weather";

interface AirConditionsComponentProps {
    label: string;
    temp: string;
    icon: JSX.Element;
}

const AirConditionsComponent = ({ label, temp, icon }: AirConditionsComponentProps) => {
    return (
        <div className="flex items-first gap-2">
            <IconContext.Provider value={{ className: 'text-2xl text-gray-600' }}>
                {icon}
            </IconContext.Provider>
            <div className="flex flex-col gap-2">
                <p className="text-gray-600 font-medium">{label}</p>
                <p className="text-3xl font-bold">{temp}</p>
            </div>
        </div>
    );
};

export const AirConditionsCard = ({ weather, loading }: { weather: Weather, loading: boolean }) => {
    if (loading) {
        return (
            <div className="bg-gray-800 w-full flex-1 rounded-xl animate-pulse">
                <div className="p-4 text-white">
                    <h1 className="text-sm text-neutral-300 font-bold mb-4">AIR CONDITIONS</h1>
                    <div className="grid md:grid-cols-4 grid-cols-2 gap-4 justify-around">
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className="flex flex-col items-center gap-3">
                                <div className="bg-gray-700 h-4 w-16 rounded"></div>
                                <div className="flex flex-col gap-1 items-center">
                                    <div className="bg-gray-700 h-12 w-12 rounded-full"></div>
                                    <div className="bg-gray-700 h-4 w-12 rounded"></div>
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
        current: { feelslike_c, wind_kph, uv },
        forecast: {
            forecastday: [
                {
                    day,
                }
            ]
        }
    } = weather;

    return (
        <div className="bg-gray-800 dark:bg-white w-full flex-1 rounded-xl drop-shadow-lg">
            <div className="p-4 text-white dark:text-black">
                <h1 className="text-sm text-neutral-300 dark:text-neutral-700 font-bold mb-4">AIR CONDITIONS</h1>
                <div className="flex justify-center items-center">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 md:gap-4">
                        <AirConditionsComponent label="Real Feel" temp={`${feelslike_c}°C`} icon={<FaTemperatureHalf />} />
                        <AirConditionsComponent label="Chance of rain" temp={`${day.daily_chance_of_rain}%`} icon={<FaCloudRain />} />
                        <AirConditionsComponent label="Wind" temp={`${wind_kph} Km/h`} icon={<FaWind />} />
                        <AirConditionsComponent label="UV Index" temp={`${uv}`} icon={<FaSun />} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AirConditionsCard;