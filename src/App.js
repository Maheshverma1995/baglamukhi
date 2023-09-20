import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {
  // Create a ref for the audio element
  const audioRef = useRef(null);

  useEffect(() => {
    // Play the background music when the component mounts
    audioRef.current.play().catch(error => {
      // Handle the error, e.g., the browser might block autoplay
      console.error('Error playing audio:', error);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      {/* Hidden audio element for background music */}
      <audio ref={audioRef} loop>
        <source src="./Image/background-music.mp3" type="audio/mpeg" />
       
      </audio>
      {/* Rest of your website content */}
    </div>
  );
}

export default App;
