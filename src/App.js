import React, { useState, useEffect } from 'react';
import './App.css';
//import { Route, Switch } from "react-router-dom";
import Home from './components/Home';

import Genres from './components/Genres';

import Header from './components/Header';
import NewMovieForm from './components/NewMovieForm';

import MovieList from './components/MovieList';



function App() {
  const [movies, setMovies] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);



  useEffect(() => {
    fetch(" http://localhost:3000/movies")
      .then((r) => r.json())
      .then(setMovies)
  }, [])

  const handleClick = () => {
    console.log()
  }


  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  const addMovies = (newMovie) => {
    setMovies((movieObj) => [...movieObj, newMovie])
  }
  console.log(movies)


  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <NewMovieForm addMovies={addMovies} />
      <Home />
      <MovieList movies={movies} onClick={handleClick} />





      {/* <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/movies">
          <MovieList movies={movies} />
        </Route>
        <Route exact path="/genres">
          <Genres />
        </Route>
        <Route exact path="/newMovieForm">
          <NewMovieForm />
        </Route>
      </Switch> */}

    </div>
  );
}

export default App;
