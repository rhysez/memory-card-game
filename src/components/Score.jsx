import { useState } from 'react'

export default function Score(props) {

    const [currentScore, setCurrentScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)

    return (
        <div className='scoreContainer'>
            <span>Current score: {currentScore}</span>
            <span>Best score: {bestScore}</span>
        </div>
    )
}