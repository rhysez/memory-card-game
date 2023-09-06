import { useState } from "react";
import Gameboard from "./components/Gameboard";
import Score from "./components/Score";

function App() {

  return (
    <>
      <a href="https://www.textstudio.com/">
        <img
          src="../public/pokeguess-title.png"
          alt="pokeguess title"
          className="pageTitle"
        />
      </a>
      <Gameboard />
    </>
  );
}

export default App;
