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
                <p>{movie.genre}</p>
                <button className='heart'>💛</button>
                <button className='star'>⭐</button>

            </section>
        </li>
    )
}
export default MoviePage;