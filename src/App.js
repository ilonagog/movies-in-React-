import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';

import Genres from './components/Genres';

import Header from './components/Header';

import MovieList from './components/MovieList';



function App() {
  const [movies, setMovies] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    fetch(" http://localhost:3000/movies")
      .then((r) => r.json())
      .then(setMovies)
  }, [])

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }


  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <Home />

      <Genres />

      <MovieList movies={movies} />


    </div>
  );
}

export default App;
