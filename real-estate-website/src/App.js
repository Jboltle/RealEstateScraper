import React from 'react';
import { RealEstateData } from './zillowScript'; // Import RealEstateData function from zillowScript.js
import { VideoPlayer } from './VideoPlayer';
 function App() {
  return (
    <div className="App">
      <RealEstateData /> {/* Render the RealEstateData component */}
      <div className='VideoPlayer'>
        <VideoPlayer></VideoPlayer>
        </div>
    </div>
  );
}

