import React from 'react';
import '../../App.css';
import Moment from 'moment'
import{
    Link
  } from "react-router-dom";

const InicioMenu = () => {
    return (
        <div>       
            <h1 className="titulo">LA PIZZARRA - POPAYAN - LA PLAZUELA</h1> 
            <h2 className="titulo">%100 MASA MADRE</h2>  
            <p className="titulo"><strong>{Moment().format('DD-MMM-YYYY')}</strong></p>  
            <ul className="menu">
                <div>
                    <li className="menuitem">
                        <Link className="link" to="/MenuPizzaPopayan">PIZZA</Link>
                    </li>
                    <li className="menuitem">
                        <Link className="link" to="/MenuPastaPopayan">PASTA</Link>
                    </li>
                </div>
                <div>
                    <li className="menuitem">
                        <Link className="link" to="/MenuDesayunosPopayan">DESAYUNOS</Link>
                    </li>
                    <li className="menuitem">
                        <Link className="link" to="/MenuPanaderia">PANADERIA</Link>
                    </li>
                </div>                
                
                <li className="menuitem">
                    <Link className="link" to="/MenuEntradasPopayan">ENTRADAS</Link>
                </li>
                
                <li className="menuitem">
                    <Link className="link" to="/MenuBebidasPopayan">BEBIDAS</Link>
                </li>                
            </ul>                 
        </div>
      );
}

export default InicioMenu