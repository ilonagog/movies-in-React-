import React, { useState } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import NewMovieForm from './components/NewMovieForm';
import MovieList from './components/MovieList';
import Genres from './components/Genres';




function App() {

  //const [page, setPage] = useState("/")
  // const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // console.log(genres)
  //const [selectedGenre, setSelectedGenre] = useState("All")
  console.log(movies)


  const handleClick = () => {
    fetch(" http://localhost:3000/movies")
      .then((r) => r.json())
      .then(setMovies)
    //.then((genres) => setGenres(genres));
  };


  // const handleFilter = () => {
  //   fetch(" http://localhost:3000/genres")
  //     .then((r) => r.json())
  //     .then(setGenres)
  //   //.then((genres) => setGenres(genres));

  // };
  //console.log(genres)

  //console.log(movies)
  // console.log(genres)

  const handleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  const addNewMovie = (newMovie) => {
    setMovies((movie) => [...movie, newMovie])
  }

  //console.log(movies)


  // const filteredGenres = movies.filter(movie => movie.genre === genres || genres === "All")

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <NavBar isDarkMode={isDarkMode} handleDarkMode={handleDarkMode} />
      <button className="trending" onClick={handleClick}>Trending Movies</button>
      <Switch>
        <Route path="/genres">
          <Genres />
        </Route>
        <Route path="/newmovieform">
          <NewMovieForm addNewMovie={addNewMovie} />
        </Route>
        <Route path="/">
          <MovieList movies={movies} />
        </Route>
      </Switch>
      {/* <button className="trending" onClick={handleClick}>Trending Movies</button> */}

    </div>
  );
}


export default App;
