import './App.css';
import React from 'react';
import MenuPizza from './components/MenuPizza';
import MenuPasta from './components/MenuPasta';
import InicioMenu from './components/InicioMenu';
import MenuBebidas from './components/MenuBebidas';
import MenuEntradas from './components/MenuEntradas';
import MenuOtros from './MenuOtros';
import Pedido from './components/Pedido';
import Panaderia from './panaderia/MenuPanaderia';
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
        <Route path="/MenuPastaPopayan" component={MenuPasta} exact />
        <Route path="/MenuPizzaPopayan" component={() => (<MenuPizza funcionpadre={funcionpadre} />)} exact />
        <Route path="/MenuBebidasPopayan" component={MenuBebidas} exact />
        <Route path="/MenuEntradasPopayan" component={MenuEntradas} exact />
        <Route path="/MenuPanaderia" component={Panaderia} exact/>
        <Route path="/MenuOtrosPopayan" component={MenuOtros} exact/>
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