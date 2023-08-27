async function fetchCharacter() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        const characterData = await response.json()
        console.log(characterData)
        return characterData
    }

    catch {
        console.log('Could not fetch character')
    }
}

// currently logs pokemon character information to console
// because starhub api is not returning data
// may need to change theme of guessing game due to api issues 
export default function Card(props) {
    return (
        <button onClick={fetchCharacter}>Click for character</button>
    )
}