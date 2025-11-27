import { use, useEffect, useState } from 'react'
import './App.css'
import PokemonApp from './components/PokemonApplication';

function App() {

  const [showPokemonApp, setShowPokemonApp]= useState(false);
  
  // This sequence of instructions calls the PokemonApplication

  return (
     <div className="app-root">

      <header className="app-header">
      <h1>Pokémon Application</h1>

      {showPokemonApp && <strong className="app-subtitle">Choose a Pokémon from the dropdown and click the button to see details.</strong>}

      {!showPokemonApp && <p className="app-subtitle">Start your Pokémon adventure by learning about the first 151 Pokémon.</p>}

      </header>
      <button onClick={() => setShowPokemonApp(!showPokemonApp)}>
        {showPokemonApp ? 'Hide' : 'Show'} Pokémon Application
      </button>
      
      {showPokemonApp && <PokemonApp />}

    </div>
  )
}

export default App
