
import React from 'react'

import './styles.scss'

//Components
import Header from './components/Header'
import MovieCard from './components/MovieCard'

function App() {
  return (
    <div>
      <Header />
      <div>
        <MovieCard />
      </div>
    </div>
  );
}

export default App;
