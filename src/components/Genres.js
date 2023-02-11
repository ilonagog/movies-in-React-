import React from 'react';
//import MoviePage from './MoviePage';

function Genres({ genres, selectedGenre, setSelectedGenre }) {
    // const [genres, setGenres] = useState([])
    //const [selectedGenre, setSelectedGenre] = useState("All")

    // useEffect(() => {
    //     fetch(" http://localhost:3000/genres")
    //         .then(resp => resp.json())
    //         .then(data => setGenres(data))
    // }, [])
    // console.log(genres)

    const filteredButtons = genres.map((genre) => (


        <button
            key={genre}
            onClick={(e) => setSelectedGenre(genre)}
            className={genre === selectedGenre ? "selected" : null}>
            {genre}
        </button>

    ));



    return (
        <div>
            <section >
                <h2>Genres</h2>
                <div className="filter" >
                    {/* <button >All</button>
                    <button   >Action</button>
                    <button  >Cartoon</button>
                    <button >Comedy</button>
                    <button  >Crime</button>
                    <button  >Drama</button>
                    <button  >History</button>
                    <button  >Sci-Fi</button>
                    <button   >Thriller</button> */}
                    {filteredButtons}

                </div>
            </section>

        </div>
    )
}
export default Genres;