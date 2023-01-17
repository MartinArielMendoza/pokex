const products = [
    {
        id:'1',
        name: 'Bulbasaur',
        type: 'Planta',
        img:'https://pokefanaticos.com/pokedex/assets/images/pokemon_imagenes/1.png',
    }
]

export const getProducts =() => {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve (products)
        }, 1500)
    })
}
