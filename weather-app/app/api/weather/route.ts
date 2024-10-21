import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  const city = searchParams.get('city');
 
  const apiKey = process.env.OPENWEATHER_KEY;

  if (!city) {
    return NextResponse.json({ error: 'City is required' }, { status: 400 });
  }
  
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`
  );

  if (response.ok) {
    const data = await response.json();
    return NextResponse.json(data);
  } else {
    return NextResponse.json({ error: 'City not found' }, { status: 404 });
  }
}