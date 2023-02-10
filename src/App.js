import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Pokemon from './components/Pokedex/pokemon';
import Info from './components/info/Info';

import {BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <ItemListContainer greeting= 'Bienvenidos'/>
        <Routes>
          <Route path='/'element={<Pokemon/>}/>
          <Route path='/info'element={<Info/>}/>
        </Routes>

      </BrowserRouter>

      



    </div>
  );


  }


export default App;
