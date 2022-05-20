import { Route } from 'react-router-dom';
import './App.css';
import Detail from './components/Detail/Detail';
import Home from './components/home/Home';
import Inicio from './components/Inicio/Inicio';
import Nav from './components/nav/Nav.jsx'

function App() {
  
  return (
    <div className="App">
      <h1>Henry Pokemon</h1>
      <Route path='/' component={Nav}/>
      <Route exact path='/home' component={Home}/>
      <Route path='/pokemon/:id' component={Detail}/>
    </div>
  );
}

export default App;
