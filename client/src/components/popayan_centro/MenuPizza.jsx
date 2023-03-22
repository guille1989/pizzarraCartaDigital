import React from 'react';
import { Component } from 'react';
import '../../App.css';
import PizzaPersonal from './pizzapersonal/PizzaPersonal';
import PizzaGrande from './pizzamediana/PizzaGrande';
import PizzaPantalon from './pizzapantalon/PizzaPantalon';
import PizzaPancook from './pizzapancook/PizzaPancook';
import PizzaPersonalPromocion from './pizzapersonalpromocion/PizzaPersonalPromocion';

class MenuPizza extends Component {
    constructor(props){
        super(props);    
        this.state={
            estado: 'inicio'
        }
    }

menuopciones(event){
    if(this.state.estado === 'inicio'){
        this.setState({estado: 'PERSONAL'})
    }else{
        this.setState({estado: 'inicio'})
    }
}

menuopcionesGrande(event){
    if(this.state.estado === 'inicio'){
        this.setState({estado: 'GRANDE'})
    }else{
        this.setState({estado: 'inicio'})
    }
}

menuopcionesPantalon(event){
    if(this.state.estado === 'inicio'){
        this.setState({estado: 'PANTALON'})
    }else{
        this.setState({estado: 'inicio'})
    }
}

menuopcionesPancook(event){
    if(this.state.estado === 'inicio'){
        this.setState({estado: 'PANCOOK'})
    }else{
        this.setState({estado: 'inicio'})
    }
}

menuopcionesPromocionPersonal(event){
    if(this.state.estado === 'inicio'){
        this.setState({estado: 'PERSONALPROMOCION'})
    }else{
        this.setState({estado: 'inicio'})
    }
}

atrasPizza = () => {
    this.setState({estado: 'inicio'})
}

funcionpadre = () => {
    alert("aqui menu pizza")
}

atrasPersonal = () => {
    this.setState({estado: 'inicio'})
}
    
    render(){
        const opcionPizza = () => {
            switch(this.state.estado) {
              case "inicio":    return (
                <div className="pizzaOrden">
                    <div>
                        <div className="pizzaItem" onClick={(e) => ( this.menuopciones(e))}>
                            <h1 className="pizzaOpcion">PERSONAL</h1>
                        </div>
                        <div className="pizzaItem" onClick={(e) => ( this.menuopcionesGrande(e))}>
                            <h1 className="pizzaOpcion">GRANDE</h1>
                        </div>
                        {/*<div className="pizzaItem" onClick={(e) => ( this.menuopcionesPromocionPersonal(e))}>
                            <h1 className="pizzaOpcion">4 PERSONALES</h1>
                        </div>*/}
                    </div>
                    <div>
                        {/*<div className="pizzaItem">
                            <h1 className="pizzaOpcion">2 GRANDES</h1>
                        </div>*/}
                        <div className="pizzaItem" onClick={(e) => ( this.menuopcionesPantalon(e))}>
                            <h1 className="pizzaOpcion">PIZZA PANTALON</h1>
                        </div>
                        <div className="pizzaItem" onClick={(e) => ( this.menuopcionesPancook(e))}>
                            <h1 className="pizzaOpcion">PANCOOK</h1>
                        </div>
                    </div>
                </div>
                );
              case "PERSONAL": return <PizzaPersonal atrasMenuPizza={this.atrasPizza} funcionpadre={this.props.funcionpadre} />
              case "GRANDE": return <PizzaGrande atrasMenuPizza={this.atrasPizza} />
              case "PANTALON": return <PizzaPantalon atrasMenuPersonal={this.atrasPersonal} atrasMenuPizza={this.atrasPizza}/>
              case "PANCOOK": return <PizzaPancook atrasMenuPersonal={this.atrasPersonal} atrasMenuPizza={this.atrasPizza}/>
              case "PERSONALPROMOCION": return <PizzaPersonalPromocion atrasMenuPersonal={this.atrasPersonal} atrasMenuPizza={this.atrasPizza}/>
              default:  return <p style={{textAlign: 'center'}}>SELECCIONE OPCION</p>
            }
          }
        return(
            <div>{ opcionPizza() }</div>
        )
    }
}

export default MenuPizza