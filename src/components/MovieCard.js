import React from "react";

const MovieCard = () => {
  return (
    <div className="movieCard">
      <div className = 'movieCard-title'>
        <h3>Title Goes Here</h3>
      </div>
      <div>
        <p>Runtime: 2 hours</p>
        <p>Budget: Less than 1 Billon</p>
        <p>Revenue: 1 Billion</p>
        <p>Oscars: 70</p>
        <p>Rotten Tomatoes Score: 99</p>
      </div>
    </div>
  );
};

export default MovieCard;
