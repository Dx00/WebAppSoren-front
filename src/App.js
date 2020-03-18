import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './App.css';

import Footer from './Footer';

import Inicio from './Pages/index.js';
import Locais from './Pages/Places.js';
import Sobre from './Pages/About.js';
import Perfil from './Pages/Profile.js';
import Entrar from './Pages/Entrar.js';
import Cadastro from './Pages/Cadastro.js';

class App extends Component {
  render() {
    return (
     <div className="App">

       <BrowserRouter>

        <Switch>

          <Route exact path = "/" component = {Inicio}/>
          <Route path = "/locais" component = {Locais}/>
          <Route path = "/sobre" component = {Sobre}/>
          <Route path = "/perfil" component = {Perfil}/>
          <Route path = "/entrar" component = {Entrar}/>
          <Route path = "/cadastro" component = {Cadastro}/>

        </Switch>
        <Footer/>
      
        </BrowserRouter>
     
      </div >
    );
  }
}
export default App;
