import { combineReducers } from "redux";
import { weatherReducer } from "./weather.reducer";
import { repositoryReducer } from "./repository.reducer";

export default combineReducers({
  weatherReducer,
  repositoryReducer,
});
