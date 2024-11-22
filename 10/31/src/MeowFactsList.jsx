import {useEffect} from 'react'
import {useState} from 'react'

export default function MeowFactsList() {
    const [meowFacts, setMeowFacts] = useState([]) // used to be ''
    const [numOfFacts, setNumOfFacts] = useState(0)

    useEffect(() => {
        async function fetchMeowFacts() {
            const response = await fetch(`https://meowfacts.herokuapp.com/?count=${numOfFacts}`)
            const json = await response.json()
            setMeowFacts(json.data) //used to be [0]
        }
        fetchMeowFacts()

        // fetch("https://meowfacts.herokuapp.com/")
        //     .then(res => res.json())
        //     .then(json => setMeowFacts(json))
    }, [numOfFacts]) // [] for on page refresh, could replace with [count] to update each change of count

    return (
        <div>
            <p>get cats:</p>
            <input type="number" onChange={e => setNumOfFacts(e.target.value)}></input>
            <ul>
                {meowFacts.map((meowFact, index) => 
                    <li key={index}>{meowFact}</li>
                )}
            </ul>
        </div>
    )
}