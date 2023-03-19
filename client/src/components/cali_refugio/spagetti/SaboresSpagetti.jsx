import React, { Component } from 'react';
import CombinadaIngredientes from './CombinadaIngredientes'

class SaboresSpagetti extends Component {
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
                        <p style={{marginLeft: '10px'}}>Lasagna de: {this.props.porcion}</p>
                    </div>
                    <div className="SaboresPizza">
                        <div>
                            <div className="saborItem" onClick={this.handleHawaiana}>
                                <h1 className="pizzaOpcionSabor">Hawaiana</h1>
                            </div>
                            <div className="saborItem" onClick={this.handleHigosTocineta}>
                                <h1 className="pizzaOpcionSabor">HigosTocineta</h1>
                            </div>
                            <div className="saborItem" onClick={this.handlePolloChampi}>
                                <h1 className="pizzaOpcionSabor">PolloChampi</h1>
                            </div>
                            <div className="saborItem" onClick={this.handleJamonChampi}>
                                <h1 className="pizzaOpcionSabor">JamonChampi</h1>
                            </div>
                            <div className="saborItem" onClick={this.handleVegetariana}>
                                <h1 className="pizzaOpcionSabor">Vegetariana</h1>
                            </div>

                            <div className="saborItem" onClick={this.handleBolognesa}>
                                <h1 className="pizzaOpcionSabor">Bolognesa</h1>
                            </div>
                            
                        </div>
                        <div>
                            <div className="saborItem" onClick={this.handleSamba}>
                                <h1 className="pizzaOpcionSabor">Samba</h1>
                            </div>
                            <div className="saborItem" onClick={this.handlePetete}>
                                <h1 className="pizzaOpcionSabor">Petete</h1>
                            </div>
                            <div className="saborItem" onClick={this.handleCampesian}>
                                <h1 className="pizzaOpcionSabor">Campesina</h1>
                            </div>
                            <div className="saborItem" onClick={this.handleMixta}>
                                <h1 className="pizzaOpcionSabor">Mixta</h1>
                            </div>
                            <div className="saborItem" onClick={this.handleCombinada}>
                                <h1 className="pizzaOpcionSabor">Combinada 2 Ingredientes</h1>
                            </div>

                            <div className="saborItem" onClick={this.handleCarbonara}>
                                <h1 className="pizzaOpcionSabor">Carbonara</h1>
                            </div>
                        </div>
                        <div>
                            <div className="saborItem" onClick={this.handleNapolitana}>
                                <h1 className="pizzaOpcionSabor">Napolitana</h1>
                            </div>
                            <div className="saborItem" onClick={this.handleMargarita}>
                                <h1 className="pizzaOpcionSabor">Margarita</h1>
                            </div>
                            <div className="saborItem" onClick={this.handleGourmet}>
                                <h1 className="pizzaOpcionSabor">Gourmet</h1>
                            </div>
                            <div className="saborItem" onClick={this.handlePadrisima}>
                                <h1 className="pizzaOpcionSabor">Padrisima</h1>
                            </div>
                            <div className="saborItem" onClick={this.handleCombinadaTresIngredientes}>
                                <h1 className="pizzaOpcionSabor">Combinada 3 Ingredientes</h1>
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

export default SaboresSpagetti;