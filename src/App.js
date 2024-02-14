import React from 'react';
import './App.css';

import photo from './assets/photo.png'

function App() {
  return (
    <div className="App">
      <h1>Для самой лучшей девочки в мире!</h1>
      <div className="valentine-card">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF4F7D" width="100%" height="100%">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          <foreignObject x="3" y="-1" width="18" height="18">
            <img src={photo} alt="Your Image" width="60%" height="55%" />
          </foreignObject>
        </svg>
      </div>
    </div>
  );
}

export default App;
