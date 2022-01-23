import React, { useState } from 'react';
import TrackList from './TrackList'
import TrackSort from './TrackSort'
import NewTrack from './TrackNew'

function TrackOverview() {
    const [tracks, setTracks] = useState({
        allTracks: [
            { Artist: ' Blof ', Title: ' Aan de Kust ', Genre: ' Dutch ', Rating: 5 },
            { Artist: ' Kensington ', Title: ' Composure ', Genre: ' Pop ', Rating: 3 },
            { Artist: ' Tears for Fears ', Title: ' Shout ', Genre: ' Pop ', Rating: 4 },
            { Artist: ' Ed Sheeran ', Title: ' Visiting Hours ', Genre: ' Pop ', Rating: 1 },
            { Artist: ' Imagine Dragons ', Title: ' Natural ', Genre: ' Pop ', Rating: 2 },
            { Artist: ' Cruel Youth ', Title: ' Black River ', Genre: ' R&B ', Rating: 3 },
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

    const sortTracks = (fieldName, reverse = false) => {
        console.log(fieldName);

        let sortedTracks = tracks.allTracks.sort((track1, track2) => {
            if (fieldName === 'Rating') {
                return track1[fieldName] - track2[fieldName]
            } else if (track1[fieldName].toLowerCase() > track2[fieldName].toLowerCase()) {
                return 1;
            }
            if (track2[fieldName].toLowerCase() > track1[fieldName].toLowerCase()) {
                return -1;
            }
            return 0;
        });
        reverse && sortedTracks.reverse();
        setTracks({ allTracks: sortedTracks });
    };

    return (
        <div>

            <NewTrack addTrack={addTrack} />
            <TrackSort sortTracks={sortTracks} />
            <TrackList {...tracks} deleteTrack={deleteTrack} />

        </div>
    )
}

export default TrackOverview;


