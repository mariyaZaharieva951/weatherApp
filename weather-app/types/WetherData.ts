
export interface ForecastData {
    // time: string;
    temp: number;
    feels_like: number;
  }



export interface WeatherData {
    [cityName: string]: ForecastData[];
  }

export interface ForecastItem {
    dt: number; 
    main: {
      temp: number; 
      feels_like: number; 
    };
  }