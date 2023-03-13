import './App.css';
import React from 'react';
import MenuPizza from './components/MenuPizza';
import MenuPasta from './components/MenuPasta';
import InicioMenu from './components/InicioMenu';
import MenuBebidas from './components/MenuBebidas';
import MenuEntradas from './components/MenuEntradas';
import Pedido from './components/Pedido';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

const InicioApp = () => {
  return(
    <BrowserRouter>
      <div>
        <InicioMenu />
      </div>
      <Switch>
        <Route path="/MenuPasta" component={MenuPasta} exact />
        <Route path="/MenuPizza" component={() => (<MenuPizza funcionpadre={funcionpadre} />)} exact />
        <Route path="/MenuBebidas" component={MenuBebidas} exact />
        <Route path="/MenuEntradas" component={MenuEntradas} exact />
      </Switch>
      <div className="pedido">
        <Pedido/>
      </div>
      <div className="centroboton">
        <div className="confirmarPedido">
          <Button onClick={()=>localStorage.clear()} color="success">Confirmar Pedido</Button>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default InicioApp;