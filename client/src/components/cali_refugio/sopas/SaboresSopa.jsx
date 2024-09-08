import React, { Component } from 'react';
import CombinadaIngredientes from './CombinadaIngredientes'

class SaboresSopa extends Component {
    constructor(props){
        super(props);    
        this.state={
            estado: 'inicio',
            combinada: 'false',
            porcion: '',
            comDosTresIngredientes: ''
        }
    }

onClickBack = () => {
    this.props.atrasMenuPersonal();
}

atrasPersonal = () => {
    this.setState({estado: 'inicio'})
}

handleHawaiana = () => {
    var dato = "HAWAIANA"
    var porcion = this.props.porcion
    this.props.cuentamitad(porcion, dato);
    this.props.atrasMenuPersonalSabor(dato, porcion);
}

handleHigosTocineta = () => {
    var dato = "HIGOSTOCINETA"
    var porcion = this.props.porcion
    this.props.cuentamitad(porcion, dato);
    this.props.atrasMenuPersonalSabor(dato, porcion);
}

handlePolloChampi = () => {
    var dato = "POLLOCHAMPI"
    var porcion = this.props.porcion
    this.props.cuentamitad(porcion, dato);
    this.props.atrasMenuPersonalSabor(dato, porcion);
}

handleJamonChampi = () => {
    var dato = "JAMONCHAMPI"
    var porcion = this.props.porcion
    this.props.cuentamitad(porcion, dato);
    this.props.atrasMenuPersonalSabor(dato, porcion);
}

handleVegetariana = () => {
    var dato = "VEGETARIANA"
    var porcion = this.props.porcion
    this.props.cuentamitad(porcion, dato);
    this.props.atrasMenuPersonalSabor(dato, porcion);
}

handleSamba = () => {
    var dato = "SAMBA"
    var porcion = this.props.porcion
    this.props.cuentamitad(porcion, dato);
    this.props.atrasMenuPersonalSabor(dato, porcion);
}

handlePetete = () => {
    var dato = "PETETE"
    var porcion = this.props.porcion
    this.props.cuentamitad(porcion, dato);
    this.props.atrasMenuPersonalSabor(dato, porcion);
}

handleCampesian = () => {
    var dato = "CAMPESINA"
    var porcion = this.props.porcion
    this.props.cuentamitad(porcion, dato);
    this.props.atrasMenuPersonalSabor(dato, porcion);
}

handleMixta = () => {
    var dato = "MIXTA"
    var porcion = this.props.porcion
    this.props.cuentamitad(porcion, dato);
    this.props.atrasMenuPersonalSabor(dato, porcion);
}

handleCombinada = () => {
    var dato = "COMBINADA"
    var porcion = this.props.porcion
    //this.props.cuentamitad(porcion, dato);
    //this.props.atrasMenuPersonalSabor(dato, porcion);
    this.setState({estado: 'combinada', comDosTresIngredientes: '2', combinada: 'true'})
}

handleCombinadaTresIngredientes = () => {
    var dato = "COMBINADA"
    var porcion = this.props.porcion
    //this.props.cuentamitad(porcion, dato);
    //this.props.atrasMenuPersonalSabor(dato, porcion);
    this.setState({estado: 'combinada', comDosTresIngredientes: '3', combinada: 'true'})
}

handleBolognesa = () => {
    var dato = "BOLOGNESA"
    var porcion = this.props.porcion
    this.props.cuentamitad(porcion, dato);
    this.props.atrasMenuPersonalSabor(dato, porcion);
    //this.setState({estado: 'combinada', comDosTresIngredientes: '3', combinada: 'true'})
}

handleCarbonara = () => {
    var dato = "CARBONARA"
    var porcion = this.props.porcion
    this.props.cuentamitad(porcion, dato);
    this.props.atrasMenuPersonalSabor(dato, porcion);
    //this.setState({estado: 'combinada', comDosTresIngredientes: '3', combinada: 'true'})
}

handleNapolitana = () => {
    var dato = "NAPOLITANA"
    var porcion = this.props.porcion
    this.props.cuentamitad(porcion, dato);
    this.props.atrasMenuPersonalSabor(dato, porcion);
}

handleMargarita = () => {
    var dato = "MARGARITA"
    var porcion = this.props.porcion
    this.props.cuentamitad(porcion, dato);
    this.props.atrasMenuPersonalSabor(dato, porcion);
}

handleGourmet = () => {
    var dato = "GOURMET"
    var porcion = this.props.porcion
    this.props.cuentamitad(porcion, dato);
    this.props.atrasMenuPersonalSabor(dato, porcion);
}

handlePadrisima = () => {
    var dato = "PADRISIMA"
    var porcion = this.props.porcion
    this.props.cuentamitad(porcion, dato);
    this.props.atrasMenuPersonalSabor(dato, porcion);
}


handlePollo = () => {
    var dato = "POLLO"
    var porcion = this.props.porcion
    this.props.cuentamitad(porcion, dato);
    this.props.atrasMenuPersonalSabor(dato, porcion);
}

handleTomate = () => {
    var dato = "TOMATE"
    var porcion = this.props.porcion
    this.props.cuentamitad(porcion, dato);
    this.props.atrasMenuPersonalSabor(dato, porcion);
}

handleCebolla = () => {
    var dato = "CEBOLLA"
    var porcion = this.props.porcion
    this.props.cuentamitad(porcion, dato);
    this.props.atrasMenuPersonalSabor(dato, porcion);
}

handleVerduras = () => {
    var dato = "VERDURAS"
    var porcion = this.props.porcion
    this.props.cuentamitad(porcion, dato);
    this.props.atrasMenuPersonalSabor(dato, porcion);
}

agregaraCuentaMitadCombinada = (dato, porcion) => {
    this.props.cuentamitad(porcion, dato);
}

atrasPersonalSabor = (dato, porcion) => {
    this.props.atrasMenuPersonalSabor(dato, porcion);
}

    render(){
        const opcionPizza = () => {
            switch(this.state.estado) {
                case "inicio": return(
                    <div>
                    <div>
                        <p style={{marginLeft: '10px'}}>Sopa de: {this.props.porcion}</p>
                    </div>
                    <div className="SaboresPizza">
                        <div>
                            <div className="saborItem" onClick={this.handlePollo}>
                                <h1 className="pizzaOpcionSabor">Pollo</h1>
                            </div>
                            <div className="saborItem" onClick={this.handleTomate}>
                                <h1 className="pizzaOpcionSabor">Tomate</h1>
                            </div>      
                            <div className="saborItem" onClick={this.handleCebolla}>
                                <h1 className="pizzaOpcionSabor">Cebolla</h1>
                            </div>     
                            <div className="saborItem" onClick={this.handleVerduras}>
                                <h1 className="pizzaOpcionSabor">Verduras</h1>
                            </div>                     
                        </div>
                       
                                 
                    </div>
                    <p onClick={this.onClickBack} className='atras'>atras..</p>
                    </div>
                )
                case "combinada": return (<CombinadaIngredientes combinada={this.state.combinada} comDosTresIngre={this.state.comDosTresIngredientes} porcion={this.props.porcion} atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSabor} cuentamitad={this.agregaraCuentaMitadCombinada}/>)
                }
            }
        return(
            <div>{ opcionPizza() }</div>
        )
    }

}

export default SaboresSopa;