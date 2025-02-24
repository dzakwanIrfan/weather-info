import axios from "axios";
import { useEffect, useState } from "react";
import { FaSpinner } from 'react-icons/fa';

export const SearchBar = ({ onCitySelect }: { onCitySelect: (city: string) => void }) => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [isUserInput, setIsUserInput] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [noResults, setNoResults] = useState(false);

    useEffect(() => {
        if (query.length > 2) {
            setIsLoading(true);
            axios.post('https://countriesnow.space/api/v0.1/countries/cities', { country: 'Indonesia' })
                .then(response => {
                    const data = response.data.data;
                    const cities = data.filter((city: string) => city.toLowerCase().includes(query.toLowerCase())).slice(0, 5);
                    setSuggestions(cities);
                    setNoResults(cities.length === 0);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.error(error);
                    setIsLoading(false);
                });
        } else {
            setSuggestions([]);
            setNoResults(false);
        }
    }, [query, isUserInput]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        setIsUserInput(true);
    };

    const handleSuggestionClick = (city: string) => {
        setQuery(city);
        setIsUserInput(false);
        setSuggestions([]);
        onCitySelect(city);
    };

    return (
        <div className="bg-gray-800 dark:bg-white w-full h-12 rounded-lg relative drop-shadow-lg z-50">
            <input 
                type="text" 
                className="w-full h-full bg-gray-800 dark:bg-white text-white dark:text-black px-4 rounded-lg outline-none z-50" 
                placeholder="Search city..." 
                onChange={handleInputChange}
                value={query}
            />
            {isLoading && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <div className="flex gap-2 justify-center items-center">
                        <FaSpinner className="animate-spin text-white dark:text-black" />
                        <div className="text-sm text-white dark:text-black">Please wait</div>
                    </div>
                </div>
            )}
            {isUserInput && !isLoading && suggestions.length > 0 && (
                <ul className="bg-gray-700 dark:bg-gray-300 text-white dark:text-black rounded-lg mt-1 absolute w-full z-50" id="suggestions">
                    {suggestions.map((city, index) => (
                        <li
                            key={index}
                            onClick={() => handleSuggestionClick(city)}
                            className="cursor-pointer px-4 py-2 hover:bg-gray-600 dark:hover:bg-gray-400"
                        >
                            {city}
                        </li>
                    ))}
                </ul>
            )}
            {isUserInput && !isLoading && noResults && (
                <div className="bg-gray-700 dark:bg-gray-300 text-white dark:text-black rounded-lg mt-1 absolute w-full z-50 p-4">
                    No results found
                </div>
            )}
        </div>
    )
}

export default SearchBar;