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
            className='border-2 border-gray-500 bg-slate-100 rounded-lg m-1 p-2 text-sm'
            type='text'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder='city'
    
            />
    
            <button type='submit' className='border-2 border-gray-500 bg-slate-100 rounded-lg m-1 p-2 text-sm text-gray-600'>Search</button>
        </form>
        
    )

}

