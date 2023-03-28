import React from 'react';
import { Component } from 'react';
import '../../../App.css';
import MenuPizza from '../MenuPizza';
import DesayunoAmericanoMenu from './DesayunoAmericanoMenu';
import DesayunoHuespedMenu from './DesayunoHuespedMenu';
//import PizzaPersonalMitad from './PizzaPersonalMitad';
//import PizzaPersonalCompleta from './PizzaPersonalCompleta';

class MenuDesayunos extends Component {
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

render(){
    const opcionPizza = () => {
        switch(this.state.estado) {
          case "inicio": return (
            <div>
                <div className='pizzaforma'>
                    <div>
                        {/*<div className='opcionpersonal' onClick={()=> (
                            this.setState({estado: 'seleccionuncuarto'})
                        )}>
                            <p>CUARTO</p>
                        </div>*/}
                        <div className='opcionpersonal'onClick={()=> (
                            this.setState({estado: 'americano'})
                        )}>
                            <p>AMERICANO</p>
                        </div>
                        <div className='opcionpersonal'onClick={()=> (
                            this.setState({estado: 'huesped'})
                        )}>
                            <p>HUESPED</p>
                        </div>
                    </div>
                </div> 
                       
            </div>
          )
          case "americano": return <DesayunoAmericanoMenu atrasMenuPersonal={this.atrasPersonal} />
          case "huesped": return <DesayunoHuespedMenu atrasMenuPersonal={this.atrasPersonal}/>
          //case "seleccioncompleta": return <PizzaPersonalCompleta atrasMenuPersonal={this.atrasPersonal}/>
          default:  return <p style={{textAlign: 'center'}}>SELECCIONE OPCION</p>
        }
      }
    return(
        <div>{ opcionPizza() }</div>          
    );
}
}

export default MenuDesayunos