import { useState, useEffect } from "react";
import Gameboard from './Gameboard'

export default function Card(props) {
  const [pokemonAvatar, setPokemonAvatar] = useState(null);
  const [pokemonName, setPokemonName] = useState("");
  const [isLoading, setLoading] = useState(true);

  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/` + props.pokemonassign;

  function fetchPokemon() {
    useEffect(() => {
      async function fetchData() {
        setLoading(true);
        try {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          const response = await fetch(pokemonUrl);
          const pokemonData = await response.json();
          const pokemonName =
            pokemonData.name.charAt(0).toUpperCase() +
            pokemonData.name.slice(1);
          setPokemonName(pokemonName);
          setPokemonAvatar(pokemonData.sprites.front_default);
          setLoading(false);
        } catch {
          throw new Error("Could not retrieve pokemon data");
        }
      }
      fetchData();
    }, []);
  }

  const returnedPokemon = fetchPokemon();

  function handleClick(choice) {
    Gameboard.makeChoice(choice)
  }

  if (isLoading == true) {
    return (
      <img src="../public/pokeball.gif" alt="pokeball" className="loading" />
    );
  } else if (isLoading == false) {
    return (
      <>
        <div
          className="pokemonCard"
          onClick={props.handleClick}
          pokemonassign={props.pokemonassign}
        >
          <span className="pokemonName">{pokemonName}</span>
          <img className="pokemonAvatar" src={pokemonAvatar}></img>
        </div>
      </>
    );
  }
}
