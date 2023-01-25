import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';

import Genres from './components/Genres';
import Movies from './components/Movies';
import Header from './components/Header';

import MovieList from './components/MovieList';



function App() {

  const [isDarkMode, setIsDarkMode] = useState(true);



  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }


  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <Home />

      <Genres />
      <Movies />
      <MovieList />


    </div>
  );
}

export default App;
