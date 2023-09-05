import { useState } from 'react'
import Gameboard from './components/Gameboard'
import Score from './components/Score'

function App() {

  return (
    <>
      <h1 className='pageTitle'>PokeGuess</h1>
      <Score />
      <Gameboard />
    </>
  )
}

export default App
