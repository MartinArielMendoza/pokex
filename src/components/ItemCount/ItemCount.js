import {useState} from 'react';

const ItemCount = ({onAdd, stock}) =>{
    const [count, setCount]=useState (0)

    const decrement = () =>{
        setCount(prev => prev -1)
    }

    const increment = () =>{
        setCount(prev => {
            console.log(prev)
            console.log(count)
            return prev +1
        })
    }
return(
    <div>
        <h2>Capturados</h2>
        <h2>{count}</h2>
        <button onClick={decrement }>-</button>
        <button onClick={increment}>+</button>
        <button onClick={()=> onAdd('se agregaron'+count)}>agregar al carrito</button>
    </div>
)
}
export default ItemCount