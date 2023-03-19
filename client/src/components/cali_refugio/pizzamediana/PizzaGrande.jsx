import React, { Component } from 'react';
import PizzaGrandeCompleta from './PizzaGrandeCompleta';
import PizzaGrandeMitad from './PizzaGrandeMitad';
import PizzaGrandeUnCuarto from './PizzaGrandeUnCuarto';

class PizzaGrande extends Component {
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
                <p style={{textAlign: 'center'}}>PIZZA GRANDE</p>
                <div className='pizzaforma'>
                    <div>
                        <div className='opcionpersonal' onClick={()=> (
                            this.setState({estado: 'seleccionuncuarto'})
                        )}>
                            <p>CUARTO</p>
                        </div>
                        <div className='opcionpersonal' onClick={()=> (
                            this.setState({estado: 'seleccionmitad'})
                        )}>
                            <p>MITAD</p>
                        </div>
                        <div className='opcionpersonal' onClick={()=> (
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
          case "seleccionuncuarto": return <PizzaGrandeUnCuarto atrasMenuPersonal={this.atrasPersonal} />
          case "seleccionmitad": return <PizzaGrandeMitad atrasMenuPersonal={this.atrasPersonal}/>
          case "seleccioncompleta": return <PizzaGrandeCompleta atrasMenuPersonal={this.atrasPersonal}/>
          default:  return <p style={{textAlign: 'center'}}>SELECCIONE OPCION</p>
        }
      }
    return(
        <div>{ opcionPizza() }</div>          
    );
}
}

export default PizzaGrande;