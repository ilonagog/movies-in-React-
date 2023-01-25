import React, { useState, useEffect } from 'react'
import MovieList from "./MovieList";
//import NewMovieForm from "./NewMovieForm";


function MoviePage({ movies }) {


    return (
        <div>


            <MovieList movies={movies} />
        </div>
    )
}
export default MoviePage;