import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import NewMovieForm from './components/NewMovieForm';
import MovieList from './components/MovieList';
import Genres from './components/Genres';




function App() {

  const [movies, setMovies] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  // console.log(genres)
  //const [selectedGenre, setSelectedGenre] = useState("All")
  console.log(movies)



  useEffect(() => {
    fetch(" http://localhost:3000/movies")
      .then((r) => r.json())
      .then(setMovies)
  }, []);


  const handleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  const addNewMovie = (newMovie) => {
    setMovies((movie) => [...movie, newMovie])
  }
  const onDeleteMovie = (id) => {
    console.log(id)
    setMovies(prevMovies => {
      const filteredArray = prevMovies.filter(movie => movie.id !== id)
      return filteredArray
    })
  }

  function handleUpdateMovie(updatedMovie) {
    const filteredArray = movies.map((movie) => movie.id === updatedMovie.id ? updatedMovie : movie);
    setMovies(filteredArray)
  }



  return (
    <div className={isDarkMode ? "App" : "App light"} >
      <NavBar isDarkMode={isDarkMode} handleDarkMode={handleDarkMode} />
      <Switch>
        <Route path="/genres">
          <Genres movies={movies} />
        </Route>
        <Route path="/newmovieform">
          <NewMovieForm addNewMovie={addNewMovie} />
        </Route>
        <Route path="/">
          <MovieList movies={movies} onDeleteMovie={onDeleteMovie} onUpdateMovie={handleUpdateMovie} />
        </Route>
      </Switch>
    </div>

  );
}


export default App;
