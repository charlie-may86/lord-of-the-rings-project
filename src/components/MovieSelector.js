import React, { useContext } from "react";
import axios from "axios";

import MovieCard from "./MovieCard";
import LORContext from "../contexts/LORContext";



const MovieSelector = () => {

  const movies = useContext(LORContext)
  console.log(movies);


  const handleLOTRClick = () => {
    
  };

  const handleHobbitClick = () => {
    // console.log("this is the hobbit click");
    // setMovieList(movies);
    // setMovieList(
    //   movies.filter(
    //     (movie) =>
    //       movie.name === "The Unexpected Journey" ||
    //       movie.name === "The Desolation of Smaug" ||
    //       movie.name === "The Battle of the Five Armies"
    //   )
    // );
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
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieSelector;
