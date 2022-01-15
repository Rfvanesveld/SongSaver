import React from 'react';

const TrackListItems = (props) => {
    return (
        <li id={props.id}>

            <p> Artist: {props.Artist}</p>

            <p> Title: {props.Title}</p>

            <p> Genre: {props.Genre}</p>

            <p> Rating: {props.Rating} </p>
            <button onClick={props.deleteTrack}>Delete</button>
        </li>
    )
}

export default TrackListItems;