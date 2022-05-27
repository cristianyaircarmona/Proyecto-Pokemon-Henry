import { Route } from 'react-router-dom';
import './App.css';
import CreatePokemon from './components/Create/Create';
import Default from './components/Default/Default';
import Detail from './components/Detail/Detail';
import Home from './components/home/Home';
import Inicio from './components/Inicio/Inicio';
import Nav from './components/nav/Nav.jsx'

function App() {
  
  return (
    <div className="App">
      <Route exact path='/' component={Inicio}/>
      <Route path='/poke' component={Nav}/>
      <Route path='/poke/home' component={Home}/>
      <Route path='/poke/pokemon/:id' component={Detail}/>
      <Route path='/poke/create' component={CreatePokemon}/>
      <Route exact path='/:cualquierCosa' component={Default}/>
    </div>
  );
}

export default App;
