import { useState, useEffect } from 'react';
import Pokemon from "./Pokemon";


const PokemonApplication = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [selectedUrl, setSelectedUrl] = useState("");
  const [pokemonData, setPokemonData] = useState(null);

  // Fetch all 151 Pokémon on load
  useEffect(() => {
    const fetchList = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const data = await res.json();
      setAllPokemon(data.results);
    };
    fetchList();
  }, []);

  // Fetch selected Pokémon
  const fetchSelectedPokemon = async () => {
    if (!selectedUrl) return;
    const res = await fetch(selectedUrl);
    const data = await res.json();
    setPokemonData(data);
  };

  return (
    <div className="p-4">
      <h2>Pokémon Selector</h2>

      {/* Dropdown */}
      <select
        className="pokemon-dropdown"
        value={selectedUrl}
        onChange={(e) => setSelectedUrl(e.target.value)}
      >
        <option value="">Choose a Pokémon</option>
        {allPokemon.map((p) => (
          <option key={p.name} value={p.url}>
            {p.name}
          </option>
        ))}
      </select>

    
      <button onClick={fetchSelectedPokemon}>Get Pokémon Info</button>



     
      {pokemonData && <Pokemon data={pokemonData} />}
    </div>
  );
};

export default PokemonApplication;
