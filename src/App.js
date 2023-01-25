import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import Pokemones from './components/pokemones';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting= 'Bienvenidos'/>
      <Pokemones/>
      <ItemCount onAdd={(count) => console.log(count)} stock={100}/>
    </div>
  );


  }


export default App;
