import { useState } from 'react'
import Card from "./Card.jsx";
import Score from "./Score.jsx"

export default function Gameboard(props) {
  // lifted these state variables from Score and now passing state via props to Score
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  let pokemonChoices = []

  function makeChoice() {
    setCurrentScore(currentScore + 1)
    // resetGameboard()
    // if choice is wrong, setCurrentScore(0)
  }

  function resetGameboard() {
    // jumble the gameboard in a random order
  }

  return (
    <>
      <Score currentScore={currentScore} bestScore={bestScore} />
      <div className='gridContainer'>
        <div className="cardGrid" key={currentScore}>
          <Card makeChoice={makeChoice} />
          <Card makeChoice={makeChoice} />
          <Card makeChoice={makeChoice} />
          <Card makeChoice={makeChoice} />
          <Card makeChoice={makeChoice} />
          <Card makeChoice={makeChoice} />
          <Card makeChoice={makeChoice} />
          <Card makeChoice={makeChoice} />
        </div>
      </div>
    </>
  );
}
