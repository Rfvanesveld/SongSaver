import React from 'react';
import ListItem from './ListItem'

const List = (tracks) => {
    const trackList = tracks.allTracks.map((item, index) =>
        <ListItem key={index} {...item} />)

    return (
        <ul>
            {trackList}
        </ul>
    )
}

export default List;