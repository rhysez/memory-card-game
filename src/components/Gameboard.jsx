import { useState, useEffect } from "react";
import Card from "./Card.jsx";
import Score from "./Score.jsx";

// pokemonChoice state is always 1 step behind :(
// could be worth trying to lift pokemonChoices array into App component
// and adding choices to that array via a function using props

export default function Gameboard(props) {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [pokemonChoice, setPokemonChoices] = useState([]) 

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array
  }

  let pokemonList = [
    "bulbasaur",
    "squirtle",
    "charizard",
    "snorlax",
    "pikachu",
    "magikarp",
    "diglett",
    "jigglypuff",
    "blastoise",
    "psyduck",
    "slowpoke",
    "eevee",
    "jolteon",
  ];

  let pokemonListShuffled = shuffleArray(pokemonList)

  function updatePokemonChoices(choice) {
    setPokemonChoices([...pokemonChoice, choice])
    console.log(pokemonChoice)
    shuffleArray(pokemonList)
  }

  function checkPokemonExists(selectedPokemon) {
    pokemonChoice.includes(selectedPokemon)
      ? resetGameboard(currentScore)
      : null;
  }

  function makeChoice(choice) {
    checkPokemonExists(choice);
    setCurrentScore(currentScore + 1);
    bestScore <= currentScore ? setBestScore(currentScore + 1) : null;
  }

  function confirmChoice(choice) {
    makeChoice(choice);
    updatePokemonChoices(choice);
  }

  function resetGameboard(score) {
    setBestScore(score + 1);
    setCurrentScore(0);
  }

  if (currentScore < 8) {
    return (
      <>
        <Score currentScore={currentScore} bestScore={bestScore} />
        <div className="gridContainer">
          <div className="cardGrid" key={currentScore}>
            <Card handleClick={() => confirmChoice(pokemonList[0])} pokemonassign={pokemonList[0]} />
            <Card handleClick={() => confirmChoice(pokemonList[1])} pokemonassign={pokemonList[1]} />
            <Card handleClick={() => confirmChoice(pokemonList[2])} pokemonassign={pokemonList[2]} />
            <Card handleClick={() => confirmChoice(pokemonList[3])} pokemonassign={pokemonList[3]} />
            <Card handleClick={() => confirmChoice(pokemonList[4])} pokemonassign={pokemonList[4]} />
            <Card handleClick={() => confirmChoice(pokemonList[5])} pokemonassign={pokemonList[5]} />
            <Card handleClick={() => confirmChoice(pokemonList[6])} pokemonassign={pokemonList[6]} />
            <Card handleClick={() => confirmChoice(pokemonList[7])} pokemonassign={pokemonList[7]} />
          </div>
        </div>
      </>
    );
  } else {
    return <p className="playAgain" onClick={props.playAgain}>You win! Play again?</p>;
  }
}
