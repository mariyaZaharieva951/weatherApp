"use client";
import Image from "next/image";
import SearchComponent from "../components/SearchForm"
import { useState } from "react";

export default function Home() {

  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (city: string) => {
    console.log(city)
    const res = await fetch(`/api/weather?city=${city}`);
  
    console.log(res)
  

    setError(null);

    if(res.ok) {
      const data = await res.json();

    } else {
      const errorData = await res.json();
      setError(errorData.error)
    }
    
  };

  return (
   <div>
      <h1>Weather App</h1>
      <SearchComponent onSearch={handleSearch}/>
      {error && <p className="text-red-500 m-1 p-1">{error}</p>}
   </div>
  );
}
