import React, { useEffect, useState } from 'react'
import axios from 'axios';
export const Poke = () => {
    const [pokemon, setPokemon] = useState([])
    const [click, setclick] = useState(false)
    useEffect(()=>{
        if(click){
            axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807')
            .then(response=>{setPokemon(response.data.results)})
        }
    }, [click]); 
    return (
        <div>
            <button onClick={() => setclick(true)}>Fetch Pokemon</button>
            <ol>
                {
                    pokemon.map((pokemon,index)=>{
                        return(<li key={index}>{pokemon.name}</li>)
                    })
                }
            </ol>
        </div>
    )
}
