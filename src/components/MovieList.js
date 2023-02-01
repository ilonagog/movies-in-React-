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
        <div>
            <input type="text" id="search" placeholder="     Search....    🔍" onChange={handleChange} />

            <ul className='cards'>
                {movieListPage}
            </ul>
        </div>

    )
}
export default MovieList;

//    Questions 

// if i pass search callback to NavBar , whole NavBar is on MovieList box
