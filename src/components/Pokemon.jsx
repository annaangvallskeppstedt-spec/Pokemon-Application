import { useState, useEffect } from "react";


const Pokemon = ({ index, data }) => {
  const [pokemon, setPokemon] = useState(null);
  const [types, setTypes] = useState([]);
   
//Instructs the component to use the animated gif of the pokémon if available and if not the still image as a backup
 const sprite = 
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${data.id}.gif`
  || sprites.front_default;

  // Update state whenever new data is passed
  useEffect(() => {
    if (data) {
      setPokemon(data);
      setTypes(data.types.map((t) => t.type.name));
    }
  }, [data]);

  if (!pokemon) return <div>Loading Pokémon...</div>;

  return (
    <div className="pokemon-display">
      <h3>{pokemon.name}</h3>
      <img src={
      pokemon.sprites.versions?.["generation-v"]?.["black-white"]?.animated?.front_default ||
      pokemon.sprites.front_default 
      }
      alt={pokemon.name}
      className="pokemon-info"
      />
      <p>Type: {types.join(", ")}</p>
      <p>Height: {pokemon.height * 10} cm</p>
      <p>Weight: {pokemon.weight / 10} kg</p>
    </div>
  );
};

export default Pokemon;
