import {
  FETCH_MOVIE_LOADING,
  // FETCH_MOVIE_FAIL,
  // FETCH_MOVIE_SUCCESS,
} from "../actions";

const intialState = {
  movie: {},
};

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_LOADING:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer