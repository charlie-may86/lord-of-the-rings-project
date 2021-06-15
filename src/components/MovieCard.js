import React from "react";

const MovieCard = (props) => {

  const {movie} = props
  return (
    <div className="movieCard">
      <div className="movieCard-title">
        <h3>{movie.name}</h3>
      </div>
      <div>
        <p>Runtime: {movie.runtimeInMinutes}</p>
        <p>Budget: ${movie.budgetInMillions} million</p>
        <p>Revenue: ${movie.boxOfficeRevenueInMillions} million</p>
        <p>Oscars: {movie.academyAwardWins}</p>
        <p>Rotten Tomatoes Score: {movie.rottenTomatoesScore}</p>
      </div>
    </div>
  );
};

export default MovieCard;
