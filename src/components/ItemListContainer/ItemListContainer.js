import './ItemListContainer.css'
import { useEffect, useState } from 'react';
import { getProducts } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState ([])
    const [loading, setLoading] =useState (false)

    useEffect (() =>{
        setLoading(true)
        getProducts().then(productssFromApi =>{
            setProducts(productssFromApi)
        }).finally(() =>{
            setLoading(false)
        })
    },[])

    if(loading){
        return <h1>Cargando...</h1>
    }

    console.log(products)

    return (
        <div className='ItemListContainer'>
            <h2>{greeting}</h2>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer