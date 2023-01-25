import React from 'react';



function Header({ isDarkMode, onToggleDarkMode }) {
    const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";
    return (

        <header>
            <nav>
                <h1 className="branding">
                    <span className="logo">{"//"}</span>
                    Home
                </h1>
                <div className="navigation">
                    <a className="button" href="/movies">
                        Movies
                    </a>
                    <a className="button" href="/movies/new">
                        Add Movies
                    </a>
                    <button onClick={onToggleDarkMode}>{buttonTextContent}</button>
                </div>
            </nav>
        </header>
    )
}
export default Header;