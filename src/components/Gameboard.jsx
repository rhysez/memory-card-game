import { useState, useEffect } from "react";
import Card from "./Card.jsx";
import Score from "./Score.jsx";

// pokemonChoice state is always 1 step behind :(
// figure out how to use useEffect hook to get immediate state value

export default function Gameboard(props) {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [pokemonChoice, setPokemonChoices] = useState([]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
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

  let pokemonListShuffled = shuffleArray(pokemonList);

  function updatePokemonChoices(choice) {
    setPokemonChoices([...pokemonChoice, choice]);
    shuffleArray(pokemonList);
  }

  function makeChoice(choice) {
    setCurrentScore(currentScore + 1);
    bestScore <= currentScore ? setBestScore(currentScore + 1) : null;
    return choice;
  }

  function resetGameboard(score) {
    setBestScore(score + 1);
    setCurrentScore(0);
    setPokemonChoices([]);
  }

  // this give us the correct pokemonChoice value!!
  // need to get it to reset gameboard when value appears twice in array
  useEffect(() => {
    console.log(pokemonChoice);
    let duplicateChecker = pokemonChoice.filter((item, index) => pokemonChoice.indexOf(item) !== index);
    duplicateChecker.length > 0
      ? resetGameboard(currentScore)
      : null;
  }, [pokemonChoice, pokemonList]);

  if (currentScore < 8) {
    return (
      <>
        <Score currentScore={currentScore} bestScore={bestScore} />
        <div className="gridContainer">
          <div className="cardGrid" key={currentScore}>
            <Card
              handleClick={() => {
                makeChoice(pokemonList[0]);
                updatePokemonChoices(pokemonList[0]);
              }}
              pokemonassign={pokemonList[0]}
            />
            <Card
              handleClick={() => {
                makeChoice(pokemonList[1]);
                updatePokemonChoices(pokemonList[1]);
              }}
              pokemonassign={pokemonList[1]}
            />
            <Card
              handleClick={() => {
                makeChoice(pokemonList[2]);
                updatePokemonChoices(pokemonList[2]);
              }}
              pokemonassign={pokemonList[2]}
            />
            <Card
              handleClick={() => {
                makeChoice(pokemonList[3]);
                updatePokemonChoices(pokemonList[3]);
              }}
              pokemonassign={pokemonList[3]}
            />
            <Card
              handleClick={() => {
                makeChoice(pokemonList[4]);
                updatePokemonChoices(pokemonList[4]);
              }}
              pokemonassign={pokemonList[4]}
            />
            <Card
              handleClick={() => {
                makeChoice(pokemonList[5]);
                updatePokemonChoices(pokemonList[5]);
              }}
              pokemonassign={pokemonList[5]}
            />
            <Card
              handleClick={() => {
                makeChoice(pokemonList[6]);
                updatePokemonChoices(pokemonList[6]);
              }}
              pokemonassign={pokemonList[6]}
            />
            <Card
              handleClick={() => {
                makeChoice(pokemonList[7]);
                updatePokemonChoices(pokemonList[7]);
              }}
              pokemonassign={pokemonList[7]}
            />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <p className="playAgain" onClick={props.playAgain}>
        You win! Play again?
      </p>
    );
  }
}
