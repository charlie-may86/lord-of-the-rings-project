import React, { useState, useEffect } from "react";
import axios from "axios";

import "./styles.scss";

//Components
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import MovieSelector from "./components/MovieSelector";

const token = "eSN8I7cd6_NAGmdIXKEK";

function App() {
  const [movies, setMovies] = useState([]);

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    console.log("this is the useEffect");
    axios
      .get("https://the-one-api.dev/v2/movie", config)
      .then((res) => {
        console.log(res.data.docs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Header />
      <MovieSelector />
      <MovieCard />
    </div>
  );
}

export default App;
