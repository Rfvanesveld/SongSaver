import React from "react"

const TrackSort = (props) => {
    return (
        <header>
            <p>TITLE</p>
            <button onClick={() => props.sortTracks('Title')}> Title Up</button>
            <button onClick={() => props.sortTracks('Title', true)}>Title Down</button>


            <p>ARTIST</p>
            <button onClick={() => props.sortTracks('Artist')}>Artist Up</button>
            <button onClick={() => props.sortTracks('Artist', true)}>Artist Down</button>


            <p>RATING</p>
            <button onClick={() => props.sortTracks('Rating')}>Rating Up</button>
            <button onClick={() => props.sortTracks('Rating', true)}>Rating Down</button>

        </header>
    )
}
export default TrackSort