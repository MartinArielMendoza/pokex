import './Navbar.css'
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return (
        <nav className = 'Navbar'>
            <h1>Pokedex</h1>
            <div clasName = 'botones'>
                <button>Pokemones</button>
                <button>Tipos</button>
                <button>Generaciones</button>
                <button>Capturados</button>
            </div>
            <CartWidget></CartWidget>
        </nav>
    )
    }
    export default Navbar
