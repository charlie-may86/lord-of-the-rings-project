import React, { useState, useEffect } from "react";
import axios from "axios";

import "./styles.scss";

//Components
import Header from "./components/Header";
// import MovieCard from "./components/MovieCard";
import MovieSelector from "./components/MovieSelector";

const token = "eSN8I7cd6_NAGmdIXKEK";

function App() {
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
      <Header />
      <MovieSelector movies={movies} />
    </div>
  );
}

export default App;
