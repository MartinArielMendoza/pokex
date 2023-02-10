import React from "react";
import {UseFetch} from "../Pokedex/UseFetch";
import './Cards.css';
import ItemCount from "../ItemCount/ItemCount";

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
                    <footer>
                    <ItemCount onAdd={(count) => console.log(count)} stock={100}/>
                    </footer>
                </div>
            }
        </div>
    )
}

export default CardPokemon