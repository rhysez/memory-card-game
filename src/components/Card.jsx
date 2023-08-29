import { useState, useEffect } from "react";

export default function Card(props) {
  const [pokemonAvatar, setPokemonAvatar] = useState(null);
  const [pokemonName, setPokemonName] = useState('');

  const pokemonList = [
    "bulbasaur",
    "squirtle",
    "charizard",
    "snorlax",
    "oddish",
    "pikachu",
    "magikarp",
    "flareon",
    "diglett",
  ];

  const randomPokemon = Math.floor(Math.random() * pokemonList.length)

  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${randomPokemon}`

  async function fetchPokemon() {
    try {
      const response = await fetch(pokemonUrl);
      const pokemonData = await response.json();
      const pokemonNameCapitalised = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);
      console.log(pokemonData);
      setPokemonName(pokemonNameCapitalised)
      setPokemonAvatar(pokemonData.sprites.front_default);
    } 
    catch {
      throw new Error("Could not fetch pokemon!");
    }
  }

  const returnedPokemon = fetchPokemon();

  return (
    <>
      <div className="pokemonCard">
        <span>{pokemonName}</span>
        <img className='pokemonAvatar' src={pokemonAvatar}></img>
      </div>
    </>
  );
}
