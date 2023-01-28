import React from 'react';



function Header({ isDarkMode, onToggleDarkMode }) {
    const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";
    return (

        <header>
            <nav>
                <h1 className="branding">
                    <span className="logo">{""}</span>
                    <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/2x/external-home-multimedia-kiranshastry-gradient-kiranshastry.png" alt="home" />
                </h1>
                <div className="navigation">
                    <a className="button" href="/movies">
                        Movies
                    </a>
                    <a className="button" href="/genres">
                        Genres
                    </a>
                    <a className="button" href="/movies/new">
                        Add Movies
                    </a>
                    <a className="button" href="/favorites">
                        Favorites
                    </a>
                    <input type="text" placeholder="Search....    🔍" />

                    <button onClick={onToggleDarkMode}>{buttonTextContent}</button>
                </div>
            </nav>
        </header>
    )
}
export default Header;