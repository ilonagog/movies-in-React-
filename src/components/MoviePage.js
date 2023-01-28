import React from 'react'


function MoviePage({ movie }) {

    return (

        <li className='card'>
            <figure className="image">
                <img src={movie.image} alt={movie.image} />
            </figure>
            <section className="details">
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
                <p>{movie.price}</p>
                <p>{movie.genre}</p>
            </section>
        </li>
    )
}
export default MoviePage;