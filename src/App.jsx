import { useState } from "react";
import Gameboard from "./components/Gameboard";
import Score from "./components/Score";

function App() {

  return (
    <>
      <div className='content'>
        <a href="https://www.textstudio.com/">
          <img
            src="../public/pokeguess-title.png"
            alt="pokeguess title"
            className="pageTitle"
          />
        </a>
        <Gameboard />
      </div>
    </>
  );
}

export default App;
