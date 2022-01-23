import React from "react"
import { Link } from "react-router-dom"

function Header() {
    return (
        <div className="Header">

            <h1> Richard's Playlist </h1>
            <ul className="Navigation">
                <Link className="NavigationLink"
                    to="/"><li>Richard's Playlist</li>
                </Link>

                <Link className="NavigationLink"
                    to="/about"><li>About this playlist</li>
                </Link>
            </ul>
        </div>
    )
}

export default Header