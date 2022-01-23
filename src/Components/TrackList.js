import React from 'react';
import TrackListItems from './TrackListItems'

const TrackList = (tracks) => {

    const trackList = tracks.allTracks.map((item, index) =>

        <TrackListItems
            key={index}
            id={index}
            {...item}
            deleteTrack={tracks.deleteTrack}
        />)

    return (
        <ul>
            {trackList}
        </ul>
    )
}

export default TrackList;