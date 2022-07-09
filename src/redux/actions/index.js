import { fetchCity } from "../../api/weather.service";
import { FETCH_SUCCESSFULLY } from "./actionTypes";

export const fetchCityWeather = async (weather) => {
  const weatherResponse = await fetchCity(weather);

  return {
    type: FETCH_SUCCESSFULLY,
    payload: weatherResponse,
  };
};
