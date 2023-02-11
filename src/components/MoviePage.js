import { useState } from 'react'



function MoviePage({ movie, genre, onDeleteMovie, onUpdateMovie }) {
    const { id, title, year, poster } = movie;
    const [star, setStar] = useState(0)

    const handleDeleteClick = () => {
        fetch(`http://localhost:3000/movies/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(() => onDeleteMovie(id))
    };

    const handleClick = () => {
        const newStar =
            setStar(star + 1)

        fetch(`http://localhost:3000/movies/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(newStar),
        })
            .then((res) => res.json())
            .then(onUpdateMovie);


    }

    return (
        <div>
            <li className='card'>
                <figure className="image">
                    <img src={poster} alt={poster} />
                </figure>
                <section className="details">
                    <h3>{title}</h3>
                    <p>{year}</p>
                    <p>{genre}</p>
                    <button className='heart'>💛</button>
                    <button className='star' onClick={handleClick}>⭐{star}</button>
                </section>
                <footer className='footer'>
                    <div>
                        <button className="delete" onClick={handleDeleteClick}>🚮</button>
                    </div>
                </footer>
            </li>
        </div>

    )
}
export default MoviePage;




   //     const newStar =
    //         fetch("http://localhost:3000/movies" + `/${movie.id}`,
    //             {
    //                 method: "PATCH",
    //                 headers: {
    //                     "Content-type": "application/json",
    //                     Accept: "application/json",
    //                 },
    //                 body: JSON.stringify(newStar),
    //             })
    //             // fetch(`http://localhost:3000/movies/${id}`, newStar)
    //             .then((res) => res.json())
    //             .then((movie) => movie)

    //         }