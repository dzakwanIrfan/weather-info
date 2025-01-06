import axios from "axios";
import { useEffect, useState } from "react";

export const SearchBar = ({ onCitySelect }: { onCitySelect: (city: string) => void }) => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);

    useEffect(() => {
        if (query.length > 2) {
            axios.post('https://countriesnow.space/api/v0.1/countries/cities', { country: 'Indonesia' })
                .then(response => {
                    const data = response.data.data;
                    const cities = data.filter((city: string) => city.toLowerCase().includes(query.toLowerCase())).slice(0, 5);
                    console.log(cities);
                    setSuggestions(cities);
                })
                .catch(error => {
                    console.error(error);
                });
        } else {
            setSuggestions([]);
        }
    }, [query]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleSuggestionClick = (city: string) => {
        setQuery(city);
        setSuggestions([]);
        onCitySelect(city);
    };

    return (
        <div className="bg-gray-800 w-full h-12 rounded-lg relative">
            <input 
                type="text" 
                className="w-full h-full bg-gray-800 text-white px-4 rounded-lg outline-none" 
                placeholder="Search city..." 
                onChange={handleInputChange}
                value={query}
            />
            {suggestions.length > 0 && (
                <ul className="bg-gray-700 text-white rounded-lg mt-1 absolute w-full z-10">
                    {suggestions.map((city, index) => (
                        <li
                            key={index}
                            onClick={() => handleSuggestionClick(city)}
                            className="cursor-pointer px-4 py-2 hover:bg-gray-600"
                        >
                            {city}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}