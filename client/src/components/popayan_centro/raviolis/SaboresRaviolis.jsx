import React, { Component } from 'react';
import CombinadaIngredientes from './CombinadaIngredientes'

class SaboresLasagna extends Component {
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

handleVegetariana = () => {
    var dato = "VEGETARIANA"
    var porcion = this.props.porcion
    this.props.cuentamitad(porcion, dato);
    this.props.atrasMenuPersonalSabor(dato, porcion);
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


handleRcarne = () => {
    var dato = "CARNE"
    var porcion = this.props.porcion
    this.props.cuentamitad(porcion, dato);
    this.props.atrasMenuPersonalSabor(dato, porcion);
}

handleRespinaca = () => {
    var dato = "ESPINACA"
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
                        <p style={{marginLeft: '10px'}}>Raviolis de: {this.props.porcion}</p>
                    </div>
                    <div className="SaboresPizza">
                        <div>
                            <div className="saborItem" onClick={this.handleRcarne}>
                                <h1 className="pizzaOpcionSabor">CARNE</h1>
                            </div>
                            <div className="saborItem" onClick={this.handleRespinaca}>
                                <h1 className="pizzaOpcionSabor">ESPINACA</h1>
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

export default SaboresLasagna;