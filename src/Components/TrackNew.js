import React, { useState } from 'react';

const TrackNew = (tracks) => {
    const [newTrack, setNewTrack] = useState({

        Artist: '',
        Title: '',
        Genre: '',
        Rating: ''
    })

    const handleChange = (event) => {
        event.preventDefault()
        const { name, value } = event.target
        if (name === 'newTrack') {

            tracks.addTrack(newTrack)
            return setNewTrack({
                Title: '',
                Artist: '',
                Genre: '',
                Rating: ''
            })
        }
        setNewTrack(Object.assign({ ...newTrack }, { [name]: value }))
    }

    return (

        <form name='newTrack' onSubmit={handleChange}>

            <input
                type='text'
                name='Artist'
                value={newTrack.Artist}
                placeholder='Enter Artist'
                onChange={handleChange} >
            </input>

            <input
                type='text'
                name='Title'
                value={newTrack.Title}
                placeholder='Enter Track Title'
                onChange={handleChange} >
            </input>

            <select
                name="Genre"
                size="1"
                onChange={handleChange}
                value={newTrack.Genre}>
                <option value="Select Genre">Select Genre</option>
                <option value="Classic">Classic</option>
                <option value="Rock">Rock</option>
                <option value="R&B">R&B</option>
                <option value="Latin">House</option>
                <option value="Hiphop">Hip-Hop</option>
                <option value="Dutch">Dutch</option>
            </select>

            <select
                name="Rating"
                size="1"
                onChange={handleChange}
                value={newTrack.Rating}>
                <option value="Select Rating">Select Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>


            <button className="AddTrack">ADD TRACK</button>
        </form>
    )
}

export default TrackNew;

