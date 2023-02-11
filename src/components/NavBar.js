import React from 'react';
import { Link } from "react-router-dom";


function NavBar({ isDarkMode, handleDarkMode }) {
    const buttonText = isDarkMode ? "Light Mode" : "Dark Mode";

    return (
        <header>
            <nav>
                <div className="navigation">
                    <Link to="/">

                        <h1 className="branding">
                            <span className="logo">{""}</span>
                            <img src="https://img.icons8.com/external-flat-glyph-papa-vector/2x/external-Home-ui-flat-glyph-papa-vector.png" alt="home" />
                        </h1>
                        <button className='button'>
                            Movies
                        </button>
                    </Link>

                    <Link className="button" to="/genres">
                        Genres
                    </Link>
                    <Link className="button" to="/newmovieform">
                        Add New Movie
                    </Link>
                    <Link className="button" to="/favorites">
                        Favorites
                    </Link>

                    {/* <input type="text" placeholder="Search....    🔍" /> */}

                    <button onClick={handleDarkMode}>{buttonText}</button>
                </div>
            </nav>
        </header>
    )
}
export default NavBar;

// Input for search