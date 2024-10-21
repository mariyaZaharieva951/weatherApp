"use client";
import { useState } from 'react';


export default function SearchComponent({onSearch} : { onSearch: (city: string) => void }) {

    const [city, setCity] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (city) {
          onSearch(city);
        }
        
      };

    return (
    
        <form onSubmit={handleSubmit}>
            <input
            className='border-2 border-black rounded-lg m-1 p-1'
            type='text'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder='city'
    
            />
    
            <button type='submit' className='border-2 border-gray bg-slate-100 rounded-lg m-1 p-1 text-base'>Search</button>
        </form>
        
    )

}

