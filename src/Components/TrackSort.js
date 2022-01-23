import React from "react"

const TrackSort = (props) => {
    return (
        <header>

            <p>In which sequence do you want to see tracks?</p>

            <p></p>
            <button className="TrackSequence" onClick={() => props.sortTracks('Title')}> Title Up</button>
            <button className="TrackSequence" onClick={() => props.sortTracks('Title', true)}>Title Down</button>

            <p></p>
            <button className="TrackSequence" onClick={() => props.sortTracks('Artist')}>Artist Up</button>
            <button className="TrackSequence" onClick={() => props.sortTracks('Artist', true)}>Artist Down</button>

            <p></p>
            <button className="TrackSequence" onClick={() => props.sortTracks('Rating')}>Rating Up</button>
            <button className="TrackSequence" onClick={() => props.sortTracks('Rating', true)}>Rating Down</button>

        </header>
    )
}
export default TrackSort