import { useState } from "react";
import {UseFetch} from "./UseFetch";
import {Cards} from "../Cards/Cards";

const Pokemon = () =>{
    const [url,setUrl]=useState('https://pokeapi.co/api/v2/pokemon')
    const estado=UseFetch(url)
    const{cargando,data}=estado

    return (
        <div>
            {
                cargando
                ?
                <h2>cargando...</h2>
                :
                <Cards results={data.results}/>
                
            }
            <button onClick={()=>setUrl(data.previous)} className="m-2 btn btn-dark">Anterior</button>
            <button onClick={()=>setUrl(data.next)} className="btn btn-dark">Siguiente</button>
        </div>

    )
}

export default Pokemon