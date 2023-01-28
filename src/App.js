import React, { useState } from 'react';
import './App.css';
//import { Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import NewMovieForm from './components/NewMovieForm';
import MovieList from './components/MovieList';
import Genres from './components/Genres';



function App() {
  const [movies, setMovies] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);



  const handleClick = () => {
    fetch(" http://localhost:4000/movies")
      .then((r) => r.json())
      .then((movies) => setMovies(movies));
  };

  console.log(movies)

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  //console.log(movies)

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <Genres />
      <NewMovieForm />
      <Home />
      <button className="trending" onClick={handleClick}>Trending Movies</button>

      <MovieList movies={movies} />





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
