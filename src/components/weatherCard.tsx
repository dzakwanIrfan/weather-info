interface weatherProps {
    name: string;
    region: string;
    country: string;
    localtime: string;
    condition: string;
    temp_c: number;
    icon: string;
}

const WeatherCard = (
    {
        name,
        region,
        country,
        localtime,
        condition,
        temp_c,
        icon,
    } : weatherProps) => {
        
        return (
            <div className="text-white rounded-lg py-2 px-4">
                <h1>{name}</h1>
                <h2>{region}, {country}</h2>
                <p>{localtime}</p>
                <img src={icon} alt={condition} />
                <p>{condition}</p>
                <p>{temp_c}°C</p>
            </div>
        )
}

export default WeatherCard;