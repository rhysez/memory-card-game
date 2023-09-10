import { useState } from "react";
import Gameboard from "./components/Gameboard";

function App() {
  const [key, setKey] = useState(0)

  function playAgain(){
    setKey(key + 1)
  }

  return (
    <>
      <div className='content'>
        <a href="https://www.textstudio.com/">
          <img
            src="/public/pokeguess-title.png"
            alt="pokeguess title"
            className="pageTitle"
          />
        </a>
        <Gameboard key={key} playAgain={playAgain} />
      </div>
    </>
  );
}

export default App;
