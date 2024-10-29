
export interface ForecastData {
    // time: string;
    temp: number;
    feels_like: number;
  }



export interface WeatherData {
    [cityName: string]: ForecastData[];
  }