import React from "react";
import {UseFetch} from "../Pokedex/UseFetch";
import './Cards.css';

export const CardPokemon = ({url}) =>{
    const estado=UseFetch(url)
    const{cargando,data}=estado

    return (
        <div>
            {
                cargando
                ?
                <h1>Cargando</h1>
                :
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">{data.id}</h3>
                    </div>
                    <div className="card-body">
                        <img src={data.sprites.front_default} alt="pokemon" />
                    </div>
                    <div className="card-footer">
                        <p className="card-text">{data.forms[0].name}</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default CardPokemon