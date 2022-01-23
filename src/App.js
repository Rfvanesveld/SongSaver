import { Routes, Route } from 'react-router-dom';
import TrackOverview from './Components/TrackOverview';
import Header from './Components/Header';
import About from './Components/About';
import React from 'react';
import './App.css';

function App() {

  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path="/" element={<TrackOverview />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </div>
  );
}

export default App;
