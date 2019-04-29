import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <span className="navbar-brand">
                Google Books Search
            </span>
            <a className="navbar-link" href="/search">
                Search
            </a>
            <a className="navbar-link" href="/saved">
                Saved
            </a>
        </nav>
    );
}

export default Nav;
