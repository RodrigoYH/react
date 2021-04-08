import logo from './logo.svg';
import './App.css';
import ByGoogle from './components/ByGoogle';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Inicio } from './components/Inicio';
import { Login } from './components/Login';
import { Registro } from "./components/Registrar"
import { Recuperar } from './components/Recuperar'
import { Navbar } from './components/Navbar'
import 'bootswatch/dist/cosmo/bootstrap.css'


function App() {
  return (
    
    <Router>
      <ByGoogle/>
      <div className = "container p-2">
        <Switch>
          <Route path="/inicio" component = {Inicio}/>
          <Route path = "/registro" component = {Registro}/>
          <Route path = "/recuperar" component = {Recuperar}/>
          <Route path="/" component = {Login}/>
        </Switch>
      </div>

    </Router>

  );
}


export default App;
