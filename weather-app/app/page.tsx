"use client";

import SearchComponent from "../components/SearchForm"
import { useState } from "react";
import WeatherInfo from "../components/WeatherInfo";

export default function Home() {

  const [weather, setWeather] = useState(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (city: string) => {
    
    const res = await fetch(`/api/weather?city=${city}`);
   
    setError(null);

    if(res.ok) {
      const data = await res.json();
      setWeather(data);

    } else {
      const errorData = await res.json();
      setError(errorData.error)
    }
    
  };

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')" }}>
    <div className="flex flex-col items-center  min-h-screen bg-black bg-opacity-20">
      <h1 className="text-5xl font-bold text-white m-[50px]">Weather App</h1>
      <SearchComponent onSearch={handleSearch}/>
      {weather && <WeatherInfo weather={weather} />}
      {error && <p className="text-red-500 m-1 p-1">{error}</p>}
      </div>
   </div>
  );
}
