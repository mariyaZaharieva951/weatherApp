"use client";
import Image from "next/image";
import SearchComponent from "../components/SearchForm"

export default function Home() {

  const handleSearch = async (city: string) => {
    const res = await fetch(`/api/weather?city=${city}`);
    const data = await res.json();
    console.log(data)
    
  };

  return (
   <div>
      <h1>Weather App</h1>
      <SearchComponent onSearch={handleSearch}/>
   </div>
  );
}
