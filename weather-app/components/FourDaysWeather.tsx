import React, { useEffect, useState } from 'react';
import { ForecastItem } from "../types/WetherData";

const FourDaysWeather = ({ lat, lon }: {lat:any, lon: any}) => {
  const [forecast, setForecast] = useState<ForecastItem[]>([]);
  
  useEffect(() => {
    const fetchForecast = async () => {
      const apiKey = process.env.OPENWEATHER_KEY;
      const response = await fetch(
        `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=${apiKey}`
      );

      if (response.ok) {
        const data = await response.json();
        setForecast(data.list); 
      }
    };

    fetchForecast();
  }, [lat, lon]);

  return (
    <div>
      <h2>Прогноза за 4 дни</h2>
      <ul>
        {forecast.map((item, index) => (
          <li key={index}>
            <p>Час: {new Date(item.dt * 1000).toLocaleString()}</p>
            <p>Температура: {item.main.temp}°C</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FourDaysWeather;