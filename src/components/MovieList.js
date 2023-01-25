import React, { useState } from 'react';
import MoviePage from "./MoviePage";



function MovieList({ movies }) {


    const [search, setSearch] = useState("All")
    const handleOnChange = (e) => setSearch(e.target.value)


    return (
        <section>
            <h2>Genres</h2>

            <div className="filter">
                <button>All</button>
                <button>Action</button>
                <button>Cartoon</button>
                <button>Comedy</button>
                <button>Crime</button>
                <button>Drama</button>
                <button>History</button>
                <button>Sci-Fi</button>
                <button>Thriller</button>

            </div>
            <input type="text" placeholder="Search..." onChange={handleOnChange} />

            <ul className="cards">{ }</ul>
        </section>

    );
}
export default MovieList;