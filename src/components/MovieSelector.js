import React, { useState, useEffect } from "react";
import axios from "axios";

import MovieCard from "./MovieCard";

const token = "eSN8I7cd6_NAGmdIXKEK";

const MovieSelector = () => {
  const [movies, setMovies] = useState([]);
  const [movieList, setMovieList] = useState([]);

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    axios
      .get("https://the-one-api.dev/v2/movie", config)
      .then((res) => {
        setMovies(res.data.docs);
        setMovieList(res.data.docs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleLOTRClick = () => {
    console.log("this is the LOTR button");
    setMovieList(movies);
    setMovieList(
      movies.filter(
        (movie) =>
          movie.name === "The Fellowship of the Ring" ||
          movie.name === "The Two Towers " ||
          movie.name === "The Return of the King"
      )
    );
  };

  const handleHobbitClick = () => {
    console.log("this is the hobbit click");
    setMovieList(movies);
    setMovieList(
      movies.filter(
        (movie) =>
          movie.name === "The Unexpected Journey" ||
          movie.name === "The Desolation of Smaug" ||
          movie.name === "The Battle of the Five Armies"
      )
    );
  };

  return (
    <div>
      <h2>Which triology do you want to learn about?</h2>
      <div className ='buttonDiv' >
        <button className="triologyButton" onClick={handleLOTRClick}>
          Lord Of The Rings
        </button>
        <button className="triologyButton" onClick={handleHobbitClick}>
          The Hobbit
        </button>
      </div>
      <div className = 'movieList'>
        {movieList.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieSelector;
