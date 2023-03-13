import React from 'react';
import { Component } from 'react';
import '../../App.css';
import MenuPizza from '../MenuPizza';
import PizzaPersonalUnCuarto from './PizzaPersonalUnCuarto';
import PizzaPersonalMitad from './PizzaPersonalMitad';
import PizzaPersonalCompleta from './PizzaPersonalCompleta';

class PizzaPersonal extends Component {
    constructor(props){
        super(props);    
        this.state={
            estado: 'inicio'
        } 
    }

onClickBack = () => {
    this.props.atrasMenuPizza();
}

atrasPersonal = () => {
    this.setState({estado: 'inicio'})
}

funcionpadre = () => {
    alert('pizza personal')
}

render(){
    const opcionPizza = () => {
        switch(this.state.estado) {
          case "inicio": return (
            <div>
                <p style={{textAlign: 'center'}}>PIZZA PERSONAL</p>
                <div className='pizzaforma'>
                    <div>
                        {/*<div className='opcionpersonal' onClick={()=> (
                            this.setState({estado: 'seleccionuncuarto'})
                        )}>
                            <p>CUARTO</p>
                        </div>*/}
                        <div className='opcionpersonal'onClick={()=> (
                            this.setState({estado: 'seleccionmitad'})
                        )}>
                            <p>MITAD</p>
                        </div>
                        <div className='opcionpersonal'onClick={()=> (
                            this.setState({estado: 'seleccioncompleta'})
                        )}>
                            <p>COMPLETA</p>
                        </div>
                    </div>
                </div> 
                <p onClick={this.onClickBack} 
                className='atras'>atras..</p>           
            </div>
          )
          case "seleccionuncuarto": return <PizzaPersonalUnCuarto atrasMenuPersonal={this.atrasPersonal} />
          case "seleccionmitad": return <PizzaPersonalMitad atrasMenuPersonal={this.atrasPersonal} funcionpadre={this.props.funcionpadre}/>
          case "seleccioncompleta": return <PizzaPersonalCompleta atrasMenuPersonal={this.atrasPersonal}/>
          default:  return <p style={{textAlign: 'center'}}>SELECCIONE OPCION</p>
        }
      }
    return(
        <div>{ opcionPizza() }</div>          
    );
}
}

export default PizzaPersonal