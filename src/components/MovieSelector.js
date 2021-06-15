import React, {useState, useEffect} from "react";
import axios from 'axios'

import MovieCard from "./MovieCard";

const token = "eSN8I7cd6_NAGmdIXKEK";

const MovieSelector = () => {

  const [movies, setMovies] = useState([]);

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    axios
      .get("https://the-one-api.dev/v2/movie", config)
      .then((res) => {
        setMovies(res.data.docs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div>
      <h2>Which triology do you want to learn about?</h2>
      <div>
        <button className="triologyButton">Lord Of The Rings</button>
        <button className="triologyButton">The Hobbit</button>
      </div>
      <div>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieSelector;
