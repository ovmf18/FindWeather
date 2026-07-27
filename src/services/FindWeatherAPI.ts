import { openWeatherApi, openCageApi } from "./api";

const OPEN_WEATHER_KEY = process.env.EXPO_PUBLIC_OPEN_WEATHER_KEY;
const OPEN_CAGE_KEY = process.env.EXPO_PUBLIC_OPEN_CAGE_DATA_KEY;

export const FindWeatherAPI = {
  getForecast: async (city: string) => {
    // 1. Get Country Code from OpenCageData
    const cageResponse = await openCageApi.get(`json?q=${city}&key=${OPEN_CAGE_KEY}`);
    const countryCode = cageResponse.data.results?.[0]?.components?.country_code || '';

    // 2. Get 5-day Forecast from OpenWeatherMap
    const query = countryCode ? `${city},${countryCode}` : city;
    const weatherResponse = await openWeatherApi.get(
      `forecast?appid=${OPEN_WEATHER_KEY}&q=${query}&lang=pt&units=metric`
    );

    return weatherResponse;
  }
};
