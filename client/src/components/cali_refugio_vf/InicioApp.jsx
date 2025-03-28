import '../../App.css';
import React from 'react';
import MenuPizza from './MenuPizza';
import MenuPasta from './MenuPasta';
import InicioMenu from './InicioMenu';
import MenuBebidas from './MenuBebidas';
import MenuEntradas from './MenuEntradas';
import MenuOtros from '../popayan_centro/MenuOtros';
import Pedido from './Pedido';
import Panaderia from '../popayan_centro/panaderia/MenuPanaderia';
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
        <Route path="/MenuPizzaPopayan" component={() => (<MenuPizza />)} exact />
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