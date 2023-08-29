import { useState } from 'react'

export default function Card(props) {

    const [pokemonName, setPokemonName] = useState('')

    async function fetchPokemon() {
        const pokemonCard = document.querySelector('.pokemonCard')

        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
            const pokemonData = await response.json()
            console.log(pokemonData.name)
            setPokemonName(pokemonData.name)
        }
    
        catch {
            console.log('Could not fetch pokemon')
        }
    }


    return (
        <>
            <button onClick={fetchPokemon}>Click for Pokemon</button>
            <div className='pokemonCard'>{pokemonName}</div>
        </>
    )
}
