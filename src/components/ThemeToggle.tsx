// src/components/ThemeToggle.tsx
import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Cek preferensi tema dari localStorage atau sistem
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return !prev;
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center transition duration-500 ease-in-out transform hover:scale-110"
    >
      {isDarkMode ? (
        <div className="flex justify-center items-center gap-2">
          <FaSun className="text-yellow-500" />
          <p className='text-xs text-white lg:hidden block'>Light Mode</p>
        </div>
      ) : (
        <div className="flex justify-center items-center gap-2">
          <FaMoon className="text-blue-500" />
          <p className='text-xs text-black lg:hidden block'>Light Mode</p>
        </div>
      )}
    </button>
  );
};

export default ThemeToggle;