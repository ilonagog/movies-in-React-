import React from 'react'

function Genres() {
    // const [selectedGenre, setSelectedGenre] = useState("All")

    // const filteredGenres = movies.filter(movie => movie.genre === selectedGenre || selectedGenre === "All")
    // console.log(genre)

    // const click = (e) => {
    //     console.log("hi")
    // }

    // const filteredButtons = genres.map(genre => (

    //     <button
    //         key={genre}
    //         onClick={(e) => setSelectedGenre(genre)}
    //         className={genre === selectedGenre ? "selected" : null}
    //     >
    //         {genre}
    //     </button>


    // ))
    //console.log(genres)
    // console.log("")
    return (
        <div>
            <section>
                <h2>Genres</h2>
                <div className="filter">
                    <button onClick={(e) => { console.log("hi") }} >All</button>
                    <button onClick={(e) => { console.log("hi") }}   >Action</button>
                    <button onClick={(e) => { console.log("hi") }}  >Cartoon</button>
                    <button onClick={(e) => { console.log("hi") }} >Comedy</button>
                    <button onClick={(e) => { console.log("hi") }}   >Crime</button>
                    <button onClick={(e) => { console.log("hi") }}   >Drama</button>
                    <button onClick={(e) => { console.log("hi") }}   >History</button>
                    <button onClick={(e) => { console.log("hi") }}   >Sci-Fi</button>
                    <button onClick={(e) => { console.log("hi") }}   >Thriller</button>
                    {/* {filteredButtons} */}

                    {/* {filteredGenres} */}
                </div>
            </section>
        </div>
    )
}
export default Genres;