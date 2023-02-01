import React, { useState } from 'react'
//import NewMovieForm from './NewMovieForm'
//import Genres from './Genres'


function MoviePage({ movie }) {
    const [star, setStar] = useState(0)

    const handleClick = () => {
        console.log("hi")
        setStar(star + 1)

        const newStar =
            fetch("http://localhost:3000/movies" + `/${movie.id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(newStar),
                })
                // fetch(`http://localhost:3000/movies/${id}`, newStar)
                .then((res) => res.json())
                .then((movie) => movie)



        // const handleClick = () => {
        //     console.log("hi")
        //     setStar(star + 1)

    }
    // const handleClick = () => {
    //     console.log("hi")
    //     setStar(star + 1)
    // const filteredButtons = genres.map(genre => (
    //     <button
    //         key={genre}
    //         onClick={(e) => setSelectedGenre(genre)}
    //         className={genre === selectedGenre ? "selected" : null}
    //     >
    //         {genre}
    //     </button>
    // ))
    return (
        <div>



            <li className='card'>
                <figure className="image">
                    <img src={movie.poster} alt={movie.poster} />
                </figure>
                <section className="details">
                    <h3>{movie.title}</h3>
                    <p>{movie.year}</p>
                    <p>{movie.genre}</p>
                    <button className='heart'>💛</button>
                    <button className='star' onClick={handleClick}>⭐{star}</button>

                </section>
            </li>
            {/* <NewMovieForm movie={movie} /> */}
        </div>

    )
}
export default MoviePage;