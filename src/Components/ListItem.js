import React from 'react';

const ListItem = (props) => {
    return (
        <li>

            <span> Artist: {props.Artist} -</span>

            <span> Title: {props.Title} -</span>

            <span> Genre: {props.Genre} -</span>

            <span> Rating: {props.Rating} </span>
        </li>
    )
}

export default ListItem;