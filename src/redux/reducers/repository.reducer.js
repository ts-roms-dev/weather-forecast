import { FETCH_GITHUB_SUCCESSFULLY, FETCH_GITHUB_UNSUCCESSFULLY } from "../actions/actionTypes";

const initialState = {};
export const repositoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GITHUB_SUCCESSFULLY:
      return {
        ...state,
        repository: action.payload,
      };
    case FETCH_GITHUB_UNSUCCESSFULLY:
      return {
        ...state,
        repository: []
      };
    default:
      return state;
  }
};
