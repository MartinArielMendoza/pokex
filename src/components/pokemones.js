import {useState, useEffect} from 'react';
import './pokemones.css'

function Pokemones (){
    const [Pokemones, setPokemones]= useState([]);

    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
    .then(response =>{
        return response.json()
})
.then(json=>{
    setPokemones(json.results)
})

},[])

    return (
        Pokemones.map((data, index)=>{
            return (
                <div key={index}>
            <li>{data.name}</li>

            </div>

            )
        })
    )
}

export default Pokemones