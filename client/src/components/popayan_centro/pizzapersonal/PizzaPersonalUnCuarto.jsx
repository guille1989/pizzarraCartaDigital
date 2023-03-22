import React from 'react';
import { Component } from 'react';
import '../../../App.css';
import SaboresPizza from './SaboresPizza';
import CombinadaIngredientes from './CombinadaIngredientes';

class PizzaPersonalUnCuarto extends Component {
    constructor(props){
        super(props);    
        this.state={
            estado: 'inicio',
            porcion: '',
            uncuartosabor: '',
            doscuartosabor: '',
            trescuartosabor: '',
            cuatrocuartosabor: '',
            uncuartosaboradicion: '',
            doscuartosaboradicion: '',
            trescuartosaboradicion: '',
            cuatrocuartosaboradicion: ''
        }
    }

onClickBack = () => {
    this.props.atrasMenuPersonal();
}

atrasPersonal = () => {
    this.setState({estado: 'inicio'})
}

atrasPersonalSabor = (dato, porcion) => {
    if(porcion === "1/4"){
        this.setState({uncuartosabor: dato,
            estado: 'inicio'})
    }else if(porcion === "2/4"){
        this.setState({doscuartosabor: dato,
            estado: 'inicio'})
    }else if(porcion === "3/4"){
        this.setState({trescuartosabor: dato,
            estado: 'inicio'})
    }else if(porcion === "4/4"){
        this.setState({cuatrocuartosabor: dato,
            estado: 'inicio'})
    }
    
}

atrasPersonalSaborAdicion = (dato, porcion) => {
    if(porcion === "1/4"){
        this.setState({uncuartosaboradicion: dato + this.state.uncuartosaboradicion,
            estado: 'inicio'})
    }else if(porcion === "2/4"){
        this.setState({doscuartosaboradicion: dato + this.state.doscuartosaboradicion,
            estado: 'inicio'})
    }else if(porcion === "3/4"){
        this.setState({trescuartosaboradicion: dato + this.state.trescuartosaboradicion,
            estado: 'inicio'})
    }else if(porcion === "4/4"){
        this.setState({cuatrocuartosaboradicion: dato + this.state.cuatrocuartosaboradicion,
            estado: 'inicio'})
    }
}

ingredienteUnoMenos = () => {
    if(this.state.uncuartosabor === "") {
        alert('No hay sabor')
    }else{
        this.setState({estado: "combinadaunomenos"})
    }
}

ingredienteDosMenos = () => {
    if(this.state.doscuartosabor === "") {
        alert('No hay sabor')
    }else{
        this.setState({estado: "combinadadosmenos"})
    }
}

ingredienteTresMenos = () => {
    if(this.state.trescuartosabor === "") {
        alert('No hay sabor')
    }else{
        this.setState({estado: "combinadatresmenos"})
    }
}

ingredienteCuatroMenos = () => {
    if(this.state.cuatrocuartosabor === "") {
        alert('No hay sabor')
    }else{
        this.setState({estado: "combinadacuatromenos"})
    }
}

ingredienteAdicionalUno = () => {
    if(this.state.uncuartosabor === "") {
        alert('No hay sabor')
    }else{
        this.setState({estado: "combinadauno"})
    }
}

ingredienteAdicionalDos = () => {
    if(this.state.doscuartosabor === "") {
        alert('No hay sabor')
    }else{
        this.setState({estado: "combinadados"})
    }
}

ingredienteAdicionalTres = () => {
    if(this.state.trescuartosabor === "") {
        alert('No hay sabor')
    }else{
        this.setState({estado: "combinadatres"})
    }
}

ingredienteAdicionalCuatro = () => {
    if(this.state.cuatrocuartosabor === "") {
        alert('No hay sabor')
    }else{
        this.setState({estado: "combinadacuatro"})
    }
}

confirmarPedido = () => {
    console.log(this.state.uncuartosabor)
    console.log(this.state.doscuartosabor)
    console.log(this.state.trescuartosabor)
    console.log(this.state.cuatrocuartosabor)
}

render(){
    const opcionPizza = () => {
        switch(this.state.estado) {
            case "inicio": return(
                <div>
                    <p style={{textAlign: 'center'}}>PIZZA PERSONAL CUARTOS</p>
                    <div className='pizzaforma'>
                        <div>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <div className='adicion' onClick={this.ingredienteAdicionalDos}>                                
                                </div>

                                <div className='siningredientes' onClick={this.ingredienteDosMenos}>                                
                                </div>
                            </div>
                            <div className='uncuarto' onClick={() => (
                                this.setState({estado: 'doscuarto'})
                            )}>
                                <p>{this.state.doscuartosabor} {this.state.doscuartosaboradicion}</p>
                            </div>
                            
                            <div className='doscuarto' onClick={() => (
                                this.setState({estado: 'trescuarto'})
                            )}>
                                <p>{this.state.trescuartosabor} {this.state.trescuartosaboradicion}</p>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <div className='adicion' onClick={this.ingredienteAdicionalTres}>                                
                                </div>
                                <div className='siningredientes' onClick={this.ingredienteTresMenos}>                                
                                </div>
                            </div>
                            
                        </div>
                        <div>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <div className='adiciondos' onClick={this.ingredienteAdicionalUno}>                                
                                </div>
                                <div className='siningredientes' onClick={this.ingredienteUnoMenos}>                                
                                </div>
                            </div>
                            <div className='trescuarto' onClick={() => (
                                this.setState({estado: 'uncuarto'})
                            )}>
                                <p>{this.state.uncuartosabor} {this.state.uncuartosaboradicion}</p>
                            </div>
                            <div className='cuatrcuarto' onClick={() => (
                                this.setState({estado: 'cuatrocuarto'})
                            )}>
                                <p>{this.state.cuatrocuartosabor} {this.state.cuatrocuartosaboradicion}</p>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <div className='adiciondos'onClick={this.ingredienteAdicionalCuatro}>                                
                                </div>
                                <div className='siningredientes' onClick={this.ingredienteCuatroMenos}>                                
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="centrobotonConfirmar">
                        <h1 onClick={this.confirmarPedido}>CONFIRMAR</h1>
                    </div>
                    <div className="botonpedido">
                        <div>
                            <p onClick={this.onClickBack}
                            className='atras'>atras..</p>
                        </div>                        
                    </div>
                </div>
            )
            case 'uncuarto': return (<SaboresPizza porcion="1/4" opcioncuarto='sabor de' atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSabor}/>)
            case 'doscuarto': return (<SaboresPizza porcion="2/4" opcioncuarto='sabor de' atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSabor}/>)
            case 'trescuarto': return (<SaboresPizza porcion="3/4" opcioncuarto='sabor de' atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSabor}/>)
            case 'cuatrocuarto': return (<SaboresPizza porcion="4/4" opcioncuarto='sabor de' atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSabor}/>)
            case 'combinadauno': return (<CombinadaIngredientes porcion="1/4" opcioncuarto='adiciones'  atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSaborAdicion}/>)
            case 'combinadados': return (<CombinadaIngredientes porcion="2/4" opcioncuarto='adiciones'  atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSaborAdicion}/>)
            case 'combinadatres': return (<CombinadaIngredientes porcion="3/4" opcioncuarto='adiciones'  atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSaborAdicion}/>)
            case 'combinadacuatro': return (<CombinadaIngredientes porcion="4/4" opcioncuarto='adiciones'  atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSaborAdicion}/>)
            case 'combinadaunomenos': return (<CombinadaIngredientes porcion="1/4" opcioncuarto='ingredientemenos' atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSaborAdicion}/>)
            case 'combinadadosmenos': return (<CombinadaIngredientes porcion="2/4" opcioncuarto='ingredientemenos' atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSaborAdicion}/>)
            case 'combinadatresmenos': return (<CombinadaIngredientes porcion="3/4" opcioncuarto='ingredientemenos' atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSaborAdicion}/>)
            case 'combinadacuatromenos': return (<CombinadaIngredientes porcion="4/4" opcioncuarto='ingredientemenos' atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSaborAdicion}/>)
            default:  return <p style={{textAlign: 'center'}}>SELECCIONE OPCION</p>
        }
    }
    return(
        <div>{ opcionPizza() }</div>  
    )
}
}

export default PizzaPersonalUnCuarto