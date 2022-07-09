import { FETCH_SUCCESSFULLY, FETCH_UNSUCCESSFULLY } from "../actions/actionTypes";

const initialState = {
  date: "",
  temp: 0,
  description: "",
  main: "",
  pressure: 0,
  humidity: 0,
};
export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESSFULLY:
      return {
        ...state,
        weather: action.payload,
      };
    case FETCH_UNSUCCESSFULLY:
      return {
        ...state,
        weather: []
      };
    default:
      return state;
  }
};
