import React, { useState } from 'react';
import TrackList from './TrackList'
import NewTrack from './NewTrack'

function TrackOverview() {
    const [tracks, setTracks] = useState({
        allTracks: [
            { Artist: ' London Gramar ', Title: ' How does it feel ', Genre: ' Pop ', Rating: 5 },
            { Artist: ' Kensington ', Title: ' Composure ', Genre: ' Pop ', Rating: 3 },
            { Artist: ' Tears for Fears ', Title: ' Shout ', Genre: ' Pop ', Rating: 4 },
            { Artist: ' Ed Sheeran ', Title: ' Visiting Hours ', Genre: ' Pop ', Rating: 5 },
            { Artist: ' Imagine Dragons ', Title: ' Natural ', Genre: ' Pop ', Rating: 5 },
        ]
    })

    const addTrack = newTrack => setTracks
        ({
            allTracks:
                [...tracks.allTracks].concat(newTrack)
        })

    const deleteTrack = (event) => {
        const id = parseInt(event.target.parentNode.id)
        const filteredTracks = tracks.allTracks.filter((item, index) => index !== id)
        setTracks({ allTracks: filteredTracks })
    }



    return (
        <div>
            <NewTrack addTrack={addTrack} />
            <TrackList {...tracks} deleteTrack={deleteTrack} />
        </div>
    )
}

export default TrackOverview;


