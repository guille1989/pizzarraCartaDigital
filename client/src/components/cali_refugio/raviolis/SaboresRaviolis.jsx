import React, { Component } from 'react';
import CombinadaIngredientes from './CombinadaIngredientes'

class SaboresLasagna extends Component {
    constructor(props){
        super(props);    
        this.state={
            estado: 'inicio',
            combinada: 'false',
            ravioliTipo: '',
            isRavioliSabor: false,
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

handleSoloRaviolis = () => {
    if(this.state.isRavioliSabor){
        let dato = this.state.ravioliTipo;
        let porcion = this.props.porcion
        this.props.cuentamitad(porcion, dato);
        this.props.atrasMenuPersonalSabor(dato, porcion);
    } else {
        alert("Seleccione un sabor de ravioli");
    }   
}

handleHawaiana = () => {
    var dato = "HAWAIANA"
    var porcion = this.props.porcion
    if(this.state.isRavioliSabor){
        dato = "Rv: " + this.state.ravioliTipo + " Sb: " + dato;
        this.props.cuentamitad(porcion, dato);
        this.props.atrasMenuPersonalSabor(dato, porcion);
    } else {
        alert("Seleccione un sabor de ravioli");
    }
}

handleHigosTocineta = () => {
    var dato = "HIGOSTOCINETA"
    var porcion = this.props.porcion
    if(this.state.isRavioliSabor){
        dato = "Rv: " + this.state.ravioliTipo + " Sb: " + dato;
        this.props.cuentamitad(porcion, dato);
        this.props.atrasMenuPersonalSabor(dato, porcion);
    } else {
        alert("Seleccione un sabor de ravioli");
    }
}

handlePolloChampi = () => {
    var dato = "POLLOCHAMPI"
    var porcion = this.props.porcion
    if(this.state.isRavioliSabor){
        dato = "Rv: " + this.state.ravioliTipo + " Sb: " + dato;
        this.props.cuentamitad(porcion, dato);
        this.props.atrasMenuPersonalSabor(dato, porcion);
    } else {
        alert("Seleccione un sabor de ravioli");
    }
}

handleJamonChampi = () => {
    var dato = "JAMONCHAMPI"
    var porcion = this.props.porcion
    if(this.state.isRavioliSabor){
        dato = "Rv: " + this.state.ravioliTipo + " Sb: " + dato;
        this.props.cuentamitad(porcion, dato);
        this.props.atrasMenuPersonalSabor(dato, porcion);
    } else {
        alert("Seleccione un sabor de ravioli");
    }
}

handleVegetariana = () => {
    var dato = "VEGETARIANA"
    var porcion = this.props.porcion
    if(this.state.isRavioliSabor){
        dato = "Rv: " + this.state.ravioliTipo + " Sb: " + dato;
        this.props.cuentamitad(porcion, dato);
        this.props.atrasMenuPersonalSabor(dato, porcion);
    } else {
        alert("Seleccione un sabor de ravioli");
    }
}

handleSamba = () => {
    var dato = "SAMBA"
    var porcion = this.props.porcion
    if(this.state.isRavioliSabor){
        dato = "Rv: " + this.state.ravioliTipo + " Sb: " + dato;
        this.props.cuentamitad(porcion, dato);
        this.props.atrasMenuPersonalSabor(dato, porcion);
    } else {
        alert("Seleccione un sabor de ravioli");
    }
}

handlePetete = () => {
    var dato = "PETETE"
    var porcion = this.props.porcion
    if(this.state.isRavioliSabor){
        dato = "Rv: " + this.state.ravioliTipo + " Sb: " + dato;
        this.props.cuentamitad(porcion, dato);
        this.props.atrasMenuPersonalSabor(dato, porcion);
    } else {
        alert("Seleccione un sabor de ravioli");
    }
}

handleCampesian = () => {
    var dato = "CAMPESINA"
    var porcion = this.props.porcion
    if(this.state.isRavioliSabor){
        dato = "Rv: " + this.state.ravioliTipo + " Sb: " + dato;
        this.props.cuentamitad(porcion, dato);
        this.props.atrasMenuPersonalSabor(dato, porcion);
    } else {
        alert("Seleccione un sabor de ravioli");
    }
}

handleMixta = () => {
    var dato = "MIXTA"
    var porcion = this.props.porcion
    if(this.state.isRavioliSabor){
        dato = "Rv: " + this.state.ravioliTipo + " Sb: " + dato;
        this.props.cuentamitad(porcion, dato);
        this.props.atrasMenuPersonalSabor(dato, porcion);
    } else {
        alert("Seleccione un sabor de ravioli");
    }
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
    if(this.state.isRavioliSabor){
        dato = "Rv: " + this.state.ravioliTipo + " Sb: " + dato;
        this.props.cuentamitad(porcion, dato);
        this.props.atrasMenuPersonalSabor(dato, porcion);
    } else {
        alert("Seleccione un sabor de ravioli");
    }
    //this.setState({estado: 'combinada', comDosTresIngredientes: '3', combinada: 'true'})
}

handleVegetariana = () => {
    var dato = "VEGETARIANA"
    var porcion = this.props.porcion
    if(this.state.isRavioliSabor){
        dato = "Rv: " + this.state.ravioliTipo + " Sb: " + dato;
        this.props.cuentamitad(porcion, dato);
        this.props.atrasMenuPersonalSabor(dato, porcion);
    } else {
        alert("Seleccione un sabor de ravioli");
    }
}

handleNapolitana = () => {
    var dato = "NAPOLITANA"
    var porcion = this.props.porcion
    if(this.state.isRavioliSabor){
        dato = "Rv: " + this.state.ravioliTipo + " Sb: " + dato;
        this.props.cuentamitad(porcion, dato);
        this.props.atrasMenuPersonalSabor(dato, porcion);
    } else {
        alert("Seleccione un sabor de ravioli");
    }
}

handleMargarita = () => {
    var dato = "MARGARITA"
    var porcion = this.props.porcion
    if(this.state.isRavioliSabor){
        dato = "Rv: " + this.state.ravioliTipo + " Sb: " + dato;
        this.props.cuentamitad(porcion, dato);
        this.props.atrasMenuPersonalSabor(dato, porcion);
    } else {
        alert("Seleccione un sabor de ravioli");
    }
}

handleGourmet = () => {
    var dato = "GOURMET"
    var porcion = this.props.porcion
    if(this.state.isRavioliSabor){
        dato = "Rv: " + this.state.ravioliTipo + " Sb: " + dato;
        this.props.cuentamitad(porcion, dato);
        this.props.atrasMenuPersonalSabor(dato, porcion);
    } else {
        alert("Seleccione un sabor de ravioli");
    }
}

handlePadrisima = () => {
    var dato = "PADRISIMA"
    var porcion = this.props.porcion
    if(this.state.isRavioliSabor){
        dato = "Rv: " + this.state.ravioliTipo + " Sb: " + dato;
        this.props.cuentamitad(porcion, dato);
        this.props.atrasMenuPersonalSabor(dato, porcion);
    } else {
        alert("Seleccione un sabor de ravioli");
    }
}


handleRcarne = () => {
    var dato = "CARNE"
    var porcion = this.props.porcion
    this.setState({
        isRavioliSabor: true,
        ravioliTipo: 'CARNE',
    })
    //this.props.cuentamitad(porcion, dato);
    //this.props.atrasMenuPersonalSabor(dato, porcion);
}

handleRespinaca = () => {
    var dato = "ESPINACA"
    var porcion = this.props.porcion
    this.setState({
        isRavioliSabor: true,
        ravioliTipo: 'ESPINACA',
    })
    //this.props.cuentamitad(porcion, dato);
    //this.props.atrasMenuPersonalSabor(dato, porcion);
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
                        <p style={{marginLeft: '10px'}}>Raviolis de: {this.state.ravioliTipo}</p>
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
                        <div>
                            <div>
                                <h1 className="pizzaOpcionSabor">Más</h1>
                            </div>
                            <div className="saborItem" onClick={this.handleSoloRaviolis}>
                                <h1 className="pizzaOpcionSabor">Solo raviolis</h1>
                            </div>
                        </div> 

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