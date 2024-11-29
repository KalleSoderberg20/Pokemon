import React, { useState } from 'react';
import PokemonApplication from './PokemonApplication.jsx';
import './App.css';

function App() {
  const [showApp, setShowApp] = useState(false);

  return (
    <div>
      {!showApp ? (
        <button onClick={() => setShowApp(true)}>Starta Pokemon App</button>
      ) : (
        <PokemonApplication />
      )}
    </div>
  );
}

export default App;
