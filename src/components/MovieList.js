import React, { useState } from 'react';
import MoviePage from './MoviePage';

function MovieList({ movies }) {

    const [search, setSearch] = useState("");

    const searchResults = movies.filter((movie) => {
        return movie.title.toLowerCase().includes(search.toLowerCase())
    })

    const movieListPage = searchResults.map(movie =>
        <MoviePage movie={movie} key={movie.id} {...movie} />
    )

    const handleChange = (e) => setSearch(e.target.value)
    return (
        <ul className='cards'>
            <input type="text" placeholder="Search....    🔍" onChange={handleChange} />
            {movieListPage}
        </ul>
    )
}
export default MovieList;