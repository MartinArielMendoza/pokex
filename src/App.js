import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import Pokemon from './components/Pokedex/pokemon';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting= 'Bienvenidos'/>
      <Pokemon/>
      <ItemCount onAdd={(count) => console.log(count)} stock={100}/>
    </div>
  );


  }


export default App;
