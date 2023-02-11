import React, { useEffect, useState } from 'react';
import MoviePage from './MoviePage';

function Genres({ movies }) {
    const [genres, setGenres] = useState([])
    const [selectedGenre, setSelectedGenre] = useState([])

    useEffect(() => {
        fetch(" http://localhost:3000/genres")
            .then(resp => resp.json())
            .then(setGenres)
    }, [])

    const moviesFilteredByGenres = movies.filter(movie => movie.genre === selectedGenre || selectedGenre === "All")

    const filteredButtons = genres.map(genre => (

        <button
            key={genre}
            onClick={(e) => setSelectedGenre(genre)}
            className={genre === selectedGenre ? "selected" : null}
        >
            {genre}
        </button>


    ))


    return (
        <div>
            <section>
                <h2>Genres</h2>
                <div className="filter">
                    <button  >All</button>
                    <button   >Action</button>
                    <button  >Cartoon</button>
                    <button >Comedy</button>
                    <button  >Crime</button>
                    <button  >Drama</button>
                    <button  >History</button>
                    <button  >Sci-Fi</button>
                    <button   >Thriller</button>
                    {filteredButtons}
                    {moviesFilteredByGenres}
                </div>
            </section>
            <MoviePage />
        </div>
    )
}
export default Genres;