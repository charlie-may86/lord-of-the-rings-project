import React from "react";

const MovieSelector = () => {
  return (
    <div>
      <h2>Which triology do you want to learn about?</h2>
      <div>
        <button className="triologyButton">Lord Of The Rings</button>
        <button className="triologyButton">The Hobbit</button>
      </div>
    </div>
  );
};

export default MovieSelector;
