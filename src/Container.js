import React, { useState } from 'react';
import List from './Components/List'

const Container = () => {
    const [tracks] = useState({
        allTracks: [
            {
                Artist: ' London Gramar ',
                Title: 'How does it feel ',
                Genre: ' pop ',
                Rating: 5
            },
            {
                Artist: ' Kensington ',
                Title: ' Composure (Unplugged/Live) ',
                Genre: ' pop ',
                Rating: 5
            },
            {
                Artist: ' Armin van Buuren & Davina Michelle ',
                Ritle: ' Hold On ',
                Genre: ' electronic ',
                Rating: 4
            },
        ]
    })

    return (
        <div>

            <List {...tracks} />
        </div>
    )
}

export default Container;

