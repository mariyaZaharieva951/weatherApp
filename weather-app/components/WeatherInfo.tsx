"use client";
import { useState } from 'react';


export default function WeatherInfo ( { weather }: { weather: any}) {

    return (
        <div>
            <h2>Weather in {weather.name}</h2>
            <p>Temperature: {weather}</p>
            <p>Condition: {weather}</p>
        </div>
    )


}