import { useEffect, useState } from 'react'
import Select from './Select'



function Pokemones() {
    const [pokemones, setPokemones] = useState([])
    useEffect(() => {
        async function traerLista() {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
                const data = await response.json()
                setPokemones(data.results)
            } catch (error) {
                alert(error)
            }
        }

        traerLista()
    }, [])

    return (
        <div className="Selection">
            <h1>¿Cual Pokemon es tu Preferido?</h1>
                <div className='textSelection fs-1'><Select list={pokemones}/></div>
        </div>
    )
}
export default Pokemones