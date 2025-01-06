import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SearchBar } from './components/SearchBar.tsx'
import { SideBar } from './components/SideBar.tsx'
import { TodayForecastCard } from './components/TodayForecastCard.tsx'
import { AirConditionsCard } from './components/AirConditionsCard.tsx'
import { SevenDayForecast } from './components/SevenDayForecast.tsx'
import WeatherCard from './components/WeatherCard.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="bg-gray-950 w-full p-4 h-svh">
      <div className="flex h-full gap-4">
        <SideBar />
        <div className="flex flex-col w-full gap-4">
          <SearchBar />
          <WeatherCard location='Pemalang' />
          <TodayForecastCard />
          <AirConditionsCard />
        </div>
        <SevenDayForecast />
      </div>
    </div>
  </StrictMode>,
)
