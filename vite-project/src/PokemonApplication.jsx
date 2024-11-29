import React, { useEffect, useState } from 'react';
import Pokemon from './Pokemon';

function PokemonApplication() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => response.json())
      .then((data) => setPokemonList(data.results))
      .catch((error) => console.error('Error fetching Pokémon:', error));
  }, []);

  const fetchPokemonDetails = () => {
    if (!selectedPokemon) return;

    fetch(selectedPokemon)
      .then((response) => response.json())
      .then((data) => setPokemonData(data))
      .catch((error) => console.error('Error fetching Pokémon details:', error));
  };

  return (
    <div className="container">
      <h1>Pokemon Application</h1>
      {pokemonList.length > 0 ? (
        <div>
          <select onChange={(e) => setSelectedPokemon(e.target.value)} defaultValue="">
            <option value="" disabled>Välj en Pokémon</option>
            {pokemonList.map((pokemon) => (
              <option key={pokemon.name} value={pokemon.url}>
                {pokemon.name}
              </option>
            ))}
          </select>
          <button onClick={fetchPokemonDetails}>Klicka här för vald Pokémon</button>
        </div>
      ) : (
        <p className="loading">Loading Pokémon...</p>
      )}

      {pokemonData && <Pokemon data={pokemonData} />}
    </div>
  );
}

export default PokemonApplication;
