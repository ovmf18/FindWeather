import axios from "axios";

export const openWeatherApi = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/`
});

export const openCageApi = axios.create({
  baseURL: `https://api.opencagedata.com/geocode/v1/`
});
