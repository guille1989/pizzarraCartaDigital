import './App.css';
import React from 'react';
import { Component } from 'react';
import Moment from 'moment';
//CALI
import MenuPizza from './components/cali_refugio/MenuPizza';
import MenuPasta from './components/cali_refugio/MenuPasta';
import InicioMenu from './components/cali_refugio/InicioMenu';
import MenuBebidas from './components/cali_refugio/MenuBebidas';
import MenuEntradas from './components/cali_refugio/MenuEntradas';
import Pedido from './components/cali_refugio/Pedido';
import SegCuentas from './components/cali_refugio/SegCuentas';
import InicioAppCali from './components/cali_refugio/appCali';


//POPAYAN
import MenuPizzaPopayan from './components/popayan_centro/MenuPizza';
import MenuPastaPopayan from './components/popayan_centro/MenuPasta';
import InicioMenuPopayan from './components/popayan_centro/InicioMenu';
import MenuBebidasPopayan from './components/popayan_centro/MenuBebidas';
import MenuEntradasPopayan from './components/popayan_centro/MenuEntradas';
import PedidoPopayan from './components/popayan_centro/Pedido';
import SegCuentasPopayan from './components/popayan_centro/SegCuentas';
import InicioAppPopayan from './components/popayan_centro/appPopayan'

//LOGIN
import Login from './components/loginCartaDigital';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  constructor(props){
    super(props);    
        this.state={
          usuarioLogin: ''
        }
  }

  componentDidMount(){
    const usuarioAutenticacion = localStorage.getItem( 'usuario' )
    if(usuarioAutenticacion === 'Cali - Refugio'){
      this.setState({
        usuarioLogin: 'Cali - Refugio'
      })
    }else if(usuarioAutenticacion === 'Popayan - Centro'){
      this.setState({
        usuarioLogin: 'Popayan - Centro'
      })
    }else{
      this.setState({
        usuarioLogin: ''
      })
    }
  }

  handleLogInCaliRefugio(usuario){
    if(usuario === 'Cali - Refugio'){
      this.setState({
        usuarioLogin: 'Cali - Refugio'
      })
    }else if(usuario === 'Popayan - Centro'){
      this.setState({
        usuarioLogin: 'Popayan - Centro'
      })
    }
  }

  handleLogOut(){
    localStorage.removeItem('usuario')
    this.setState({
      usuarioLogin: ''
    })
  }

  render(){
    const opcionPantalla = () => {
      switch(this.state.usuarioLogin){
        case "": return <Login loginHandlerCaliRefugio={this.handleLogInCaliRefugio.bind(this)}/>
        case "Cali - Refugio": return <InicioAppCali logoutHandler={this.handleLogOut.bind(this)}/>
        case "Popayan - Centro": return <InicioAppPopayan logoutHandler={this.handleLogOut.bind(this)}/>

        default: return <h1>Algo paso.... contacte al administrador !</h1>
      }
    }
    return(
      <>
        { opcionPantalla() }
      </>
    );
  } 
}

export default App;
