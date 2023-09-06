import { useState } from "react";
import Gameboard from "./components/Gameboard";
import Score from "./components/Score";

function App() {

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <>
      <a href="https://www.textstudio.com/">
        <img
          src="../public/pokeguess-title.png"
          alt="pokeguess title"
          className="pageTitle"
        />
      </a>
      <Score currentScore={currentScore} bestScore={bestScore} />
      <Gameboard />
    </>
  );
}

export default App;
