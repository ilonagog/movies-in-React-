import React from 'react';
import MoviePage from './MoviePage';

function MovieList({ movies }) {

    const movieListPage = movies.map(movie =>
        <MoviePage movie={movie} key={movie.id} />
    )

    return (
        <ul className='cards'>
            {movieListPage}
        </ul>
    )
}
export default MovieList;