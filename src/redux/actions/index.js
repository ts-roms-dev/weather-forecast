import { fetchCity } from "../../api/weather.service";
import { FETCH_SUCCESSFULLY, FETCH_UNSUCCESSFULLY } from "./actionTypes";

export const fetchCityWeather = async (weather) => {
  const weatherResponse = await fetchCity(weather);
  if (weatherResponse) {
    return {
      type: FETCH_SUCCESSFULLY,
      payload: weatherResponse.data,
    };
  }
  return {
    type: FETCH_UNSUCCESSFULLY,
      payload: [],
  }
};
