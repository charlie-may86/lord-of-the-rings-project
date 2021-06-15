import axios from "axios";

export const FETCH_MOVIE_LOADING = "FETCH_MOVIE_LOADING";
export const FETCH_MOVIE_SUCCESS = "FETCH_MOVIE_SUCCESS";
export const FETCH_MOVIE_FAIL = "FETCH_MOVIE_FAIL";

const token = "eSN8I7cd6_NAGmdIXKEK";
const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

console.log('this is from actions');


export const getMovies = () => {
  return (dispatch) => {
      dispatch(fetchMovieLoading())
      axios
        .get("https://the-one-api.dev/v2/movie", config)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
  };
};

getMovies()

export const fetchMovieLoading = () => {
  return {
    type: FETCH_MOVIE_LOADING,
  };
};

export const fetchMovieSuccess = () => {
  return {
    type: FETCH_MOVIE_SUCCESS,
  };
};

export const fetchMovieFail = () => {
  return {
    type: FETCH_MOVIE_FAIL,
  };
};
