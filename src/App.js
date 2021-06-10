import React from "react";

import "./styles.scss";

//Components
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import MovieSelector from './components/MovieSelector'

function App() {
  return (
    <div>
      <Header />
      <MovieSelector />
      <MovieCard />
    </div>
  );
}

export default App;
