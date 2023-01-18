import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import { useEffect} from 'react';

function App() {
  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
    .then((response) =>
    response.json())
    .then((data) =>{
    console.log(data)
    })
  },[])



  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting= 'Bienvenidos'/>
      <ItemCount onAdd={(count) => console.log(count)} stock={100}/>
    </div>
  );
}

export default App;
