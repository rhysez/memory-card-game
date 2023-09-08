import { useState } from 'react'
import Card from "./Card.jsx";
import Score from "./Score.jsx"

export default function Gameboard(props) {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const pokemonList = [
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

  function makeChoice(choice) {
    setCurrentScore(currentScore + 1)
    bestScore <= currentScore ? setBestScore(currentScore + 1) : null
    //currentScore == 5 ? resetGameboard(currentScore) : null
  }

  function resetGameboard(score) {
    setBestScore(score + 1)
    setCurrentScore(0)
  }

  return (
    <>
      <Score currentScore={currentScore} bestScore={bestScore} />
      <div className='gridContainer'>
        <div className="cardGrid" key={currentScore}>
          <Card makeChoice={makeChoice} pokemonassign={pokemonList[0]} />
          <Card makeChoice={makeChoice} pokemonassign={pokemonList[1]} />
          <Card makeChoice={makeChoice} pokemonassign={pokemonList[2]} />
          <Card makeChoice={makeChoice} pokemonassign={pokemonList[3]} />
          <Card makeChoice={makeChoice} pokemonassign={pokemonList[4]} />
          <Card makeChoice={makeChoice} pokemonassign={pokemonList[5]} />
          <Card makeChoice={makeChoice} pokemonassign={pokemonList[6]} />
          <Card makeChoice={makeChoice} pokemonassign={pokemonList[7]} />
        </div>
      </div>
    </>
  );
}
