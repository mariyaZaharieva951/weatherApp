"use client";

import { useState, useEffect } from "react";
import SearchComponent from "../components/SearchForm"
import WeatherInfo from "../components/WeatherInfo";
import { WeatherData } from "../types/WetherData";
import { City } from "../types/City";
import WeatherMap from "@/components/WeatherMap";




export default function Home() {

  const [citiesWeather, setCitiesWeather] = useState<any[]>([]);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const cities = [
    { name: "София", coord: { lat: 42.6977, lon: 23.3219 } },
    { name: "Пловдив", coord: { lat: 42.1354, lon: 24.7453 } },
    { name: "Варна", coord: { lat: 43.2141, lon: 27.9147 } },
    { name: "Бургас", coord: { lat: 42.5048, lon: 27.4626 } },
  ];

  useEffect(() => {
  
}, []);


const handleSearch = async (city: string) => {
  setError(null);
  const res = await fetch(`/api/weather?city=${city}`);

  if (res.ok) {
    const data = await res.json();
     if(data.main && typeof data.main.temp === "number" && typeof data.main.feels_like === "number") {
      setWeatherData((prevData:any) => ({
        ...prevData,
        [city]: {
          temp: data.main.temp,
          feels_like: data.main.feels_like,
        },
      }));
     }else {
      setError("Неуспешно зареждане на температурните данни.");
    }
    
  } else {
    const errorData = await res.json();
    setError(errorData.error);
  }
};

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')" }}>
    <div className="flex flex-col items-center  min-h-screen bg-black bg-opacity-20">
      <h1 className="text-5xl font-bold text-white m-[50px]  animate-fade-in">Прогноза за времето</h1>
      <SearchComponent onSearch={handleSearch}/>
      {weatherData && <WeatherInfo weather={weatherData} />}
      {/* <WeatherMap weatherData={weatherData} /> */}
      {error && <p className="text-red-500 m-1 p-1">{error}</p>}
      </div>
   </div>
  );
}
