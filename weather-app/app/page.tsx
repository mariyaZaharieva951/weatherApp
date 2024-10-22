"use client";

import { useState, useEffect } from "react";
import SearchComponent from "../components/SearchForm"
import WeatherInfo from "../components/WeatherInfo";
import WeatherMap from "@/components/WeatherMap";

interface WeatherData {
  [cityName: string]: {
    temp: number;
    feels_like: number;
  };
}


export default function Home() {

  const [citiesWeather, setCitiesWeather] = useState<any[]>([]);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  // const cities = [
  //   { name: "София", coord: { lat: 42.6977, lon: 23.3219 } },
  //   { name: "Пловдив", coord: { lat: 42.1354, lon: 24.7453 } },
  //   { name: "Варна", coord: { lat: 43.2141, lon: 27.9147 } },
  //   { name: "Бургас", coord: { lat: 42.5048, lon: 27.4626 } },
  // ];

  useEffect(() => {
  const fetchWeatherData = async () => {
    const data: WeatherData = {}; 
  //   for (const city of cities) {
  //     try {
  //       const res = await fetch(`/api/weather?city=${encodeURIComponent(city.name)}`); 
  //       if (res.ok) {
  //         const result = await res.json();
  //         data[city.name] = { 
  //           temp: result.main.temp,
  //           feels_like: result.main.feels_like,
  //         };
  //       }
  //     } catch (error) {
  //       console.error(`Неуспешно извличане на данни за град ${city.name}:`, error); 
  //   }
  //   setWeatherData(data);
  // };
  }

  fetchWeatherData();
}, []);


const handleSearch = async (city: string) => {
  setError(null);
  const res = await fetch(`/api/weather?city=${city}`);

  if (res.ok) {
    const data = await res.json();
    
    setWeatherData({
      [city]: {
        temp: data.main.temp,
        feels_like: data.main.feels_like,
      },
    });
  } else {
    const errorData = await res.json();
    setError(errorData.error);
  }
};

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')" }}>
    <div className="flex flex-col items-center  min-h-screen bg-black bg-opacity-20">
      <h1 className="text-5xl font-bold text-white m-[50px]  animate-fade-in">Weather App</h1>
      <SearchComponent onSearch={handleSearch}/>
      {weatherData && <WeatherInfo weather={weatherData} />}
      {/* <WeatherMap weatherData={weatherData} /> */}
      {error && <p className="text-red-500 m-1 p-1">{error}</p>}
      </div>
   </div>
  );
}
