import React, { useContext, useState } from "react";


import MovieCard from "./MovieCard";
import LORContext from "../contexts/LORContext";

const MovieSelector = () => {
  const movies = useContext(LORContext);
  const [movieList, setMovieList] = useState([]);


  const handleLOTRClick = () => {
    console.log("this is LOTR click");
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
      <div className="buttonDiv">
        <button className="triologyButton" onClick={handleLOTRClick}>
          Lord Of The Rings
        </button>
        <button className="triologyButton" onClick={handleHobbitClick}>
          The Hobbit
        </button>
      </div>
      <div className="movieList">
        {movieList.map((movie) => (
          <MovieCard movie={movie} key={movie._id} />
        ))}
      </div>
    </div>
  );
};

export default MovieSelector;
