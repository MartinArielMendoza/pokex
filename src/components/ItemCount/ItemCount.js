import {useState} from 'react';

const ItemCount = ({initial =1 }) =>{
    const [count, setCount]=useState (initial)

    const decrement = () =>{
        if (count > 1){
            setCount(prev => prev -1)
        }

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
        <button onClick={()=> ('se agregaron'+count)}>Capturaste</button>
    </div>
)
}
export default ItemCount