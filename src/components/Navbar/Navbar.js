import './Navbar.css'
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return (
        <nav className = 'Navbar'>
            <h1>Pokedex</h1>
            <div clasName = 'botones'>
                <button><a href="">Pokemones</a></button>
                <button><a href="">Tipos</a></button>
                <button><a href="">Generaciones</a></button>
                <button><a href="">Capturados</a></button>
            </div>
            <CartWidget></CartWidget>
        </nav>
    )
    }
    export default Navbar
