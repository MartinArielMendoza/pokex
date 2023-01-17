import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting= 'Bienvenidos'/>
      <ItemCount onAdd={(count) => console.log(count)} stock={100}/>
    </div>
  );
}

export default App;
