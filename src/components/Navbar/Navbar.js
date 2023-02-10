import './Navbar.css'
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';

const Navbar = () => {


    return (
        <nav className = 'Navbar'>
            <Link to='/'>
                <h1>Pokedex</h1>
            </Link>
            <div clasName = 'botones'>
                <Link to='/'>Pokemones</Link>
                <Link to='/Info' clasName='Informacion'>Informacion</Link>
            </div>
            <CartWidget></CartWidget>
        </nav>
        
    )
    }
    export default Navbar
