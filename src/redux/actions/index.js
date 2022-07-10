import { getRepository } from "../../api/github.service";
import { fetchCity } from "../../api/weather.service";
import {
  FETCH_SUCCESSFULLY,
  FETCH_UNSUCCESSFULLY,
  FETCH_GITHUB_SUCCESSFULLY,
  FETCH_GITHUB_UNSUCCESSFULLY,
} from "./actionTypes";

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
  };
};

export const getUserRepository = async (username) => {
  const userRepo = await getRepository(username);

  if (userRepo) {
    return {
      type: FETCH_GITHUB_SUCCESSFULLY,
      payload: userRepo.data,
    };
  }
  return {
    type: FETCH_GITHUB_UNSUCCESSFULLY,
    payload: [],
  };

};
