import { Weather } from "../types/Weather";

interface WeatherCardProps {
    weather: Weather;
    loading: boolean;
}

export const WeatherCard = ({ weather, loading }: WeatherCardProps) => {
    if (loading) {
        return (
            <div className="text-white rounded-lg py-2 px-4 lg:px-12 animate-pulse">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col justify-between">
                        <div className="mb-4">
                            <div className="bg-gray-700 dark:bg-neutral-300 h-8 w-48 rounded mb-2"></div>
                            <div className="bg-gray-700 dark:bg-neutral-300 h-4 w-32 rounded"></div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex flex-col justify-between">
                                <div className="bg-gray-700 dark:bg-neutral-300 h-16 w-24 rounded mb-2"></div>
                                <div className="bg-gray-700 dark:bg-neutral-300 h-4 w-32 rounded"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="bg-gray-700 dark:bg-neutral-300 h-4 w-32 rounded mb-2"></div>
                        <div className="bg-gray-700 dark:bg-neutral-300 h-16 w-16 rounded-full"></div>
                    </div>
                </div>
            </div>
        );
    }

    if (!weather) {
        return <p className="text-white">Weather not found</p>;
    }

    const {
        location: { name, region, country, localtime },
        current: { condition, temp_c },
    } = weather;

    return (
        <div className="text-white dark:text-black rounded-lg py-2 px-4 lg:px-12">
            <div className="flex flex-row justify-between relative">
                <div className="flex flex-col justify-between gap-12 md:gap-0">
                    <div className="mb-4">
                        <h1 className="text-3xl font-bold">{name}</h1>
                        <p className="text-sm text-neutral-300 dark:text-neutral-700">{region}, {country}</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-col justify-between">
                            <p className="text-5xl font-bold text-white dark:text-black">{temp_c}°C</p>
                            <p className="text-neutral-300 dark:text-neutral-700">{condition.text}</p>
                        </div>
                    </div>
                </div>
                <p className="text-neutral-300 dark:text-neutral-700 md:hidden block">{localtime}</p>
                <div className="flex-col items-end md:flex hidden">
                    <p className="text-neutral-300 dark:text-neutral-700">{localtime}</p>
                    <img src={condition.icon} alt={condition.text} className="object-cover size-52" />
                </div>
                <img src={condition.icon} alt={condition.text} className="object-cover size-40 absolute right-0 bottom-0" />
            </div>
        </div>
    );
};