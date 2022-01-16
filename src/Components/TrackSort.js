import React from "react"

const TrackSort = (props) => {
    return (
        <header>
            <p>TITLE
                <button onClick={() => props.sortTracks('Title', true)}> Title Up</button>
                <button onClick={() => props.sortTracks('Title', true)}>Title Down</button>
            </p>

            <p>ARTIST
                <button onClick={() => props.sortTracks('Artist', true)}>Artist Up</button>
                <button onClick={() => props.sortTracks('Artist', true)}>Artist Down</button>
            </p>

            <p>RATING
                <button onClick={() => props.sortTracks('Rating', true)}>Rating Up</button>
                <button onClick={() => props.sortTracks('Rating', true)}>Rating Down</button>
            </p>
        </header>
    )
}
export default TrackSort