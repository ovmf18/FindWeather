import { api } from "./api";

const API_KEY = process.env.EXPO_PUBLIC_WEATHER_API_KEY;

export const FindWeatherAPI = {
  getForecast: (city: string) => {
    return api.get(`forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no&lang=pt`);
  }
}
