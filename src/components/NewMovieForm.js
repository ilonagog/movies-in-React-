import React, { useState } from 'react'

function NewMovieForm({ addNewMovie }) {

    const [] = useState()
    return (
        <section>
            <form className='form'>
                <h3>Add New Movie</h3>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" title="title" />

                <label htmlFor="year">Year</label>
                <input type="" id="year" year="year" />

                <label htmlFor="poster">Poster</label>
                <input type="" id="poster" poster="poster" />

                <label htmlFor="genre">Genre</label>
                <input type="" id="genre" genre="genre" />

                <button className="submit" type="submit">Add Movie</button>

            </form>
        </section>


    )
}
export default NewMovieForm;