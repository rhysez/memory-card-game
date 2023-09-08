import { useState } from "react";
import Card from "./Card.jsx";
import Score from "./Score.jsx";

export default function Gameboard(props) {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  // NEED TO FIGURE OUT HOW TO PASS makeChoice FUNCTION TO CARD VIA PROPS AND CALL IT e.g makeChoice(pokemonChoices[0])

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      console.log(array)
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

  const pokemonChoices = [];

  function checkPokemonExists(selectedPokemon) {
    pokemonList.indexOf(selectedPokemon) > -1
      ? resetGameboard(currentScore)
      : null;
  }

  function makeChoice(choice) {
    checkPokemonExists(choice);
    setCurrentScore(currentScore + 1);
    bestScore <= currentScore ? setBestScore(currentScore + 1) : null;
    pokemonChoices.push(choice);
    shuffleArray(pokemonList)
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
            <Card handleClick={makeChoice} pokemonassign={pokemonList[0]} />
            <Card handleClick={makeChoice} pokemonassign={pokemonList[1]} />
            <Card handleClick={makeChoice} pokemonassign={pokemonList[2]} />
            <Card handleClick={makeChoice} pokemonassign={pokemonList[3]} />
            <Card handleClick={makeChoice} pokemonassign={pokemonList[4]} />
            <Card handleClick={makeChoice} pokemonassign={pokemonList[5]} />
            <Card handleClick={makeChoice} pokemonassign={pokemonList[6]} />
            <Card handleClick={makeChoice} pokemonassign={pokemonList[7]} />
          </div>
        </div>
      </>
    );
  } else {
    return <p className="playAgain" onClick={props.playAgain}>You win! Play again?</p>;
  }
}
