import React from 'react';
import { Component } from 'react';
import '../../../App.css';
import SaboresPizzaGrande from './SaboresPizzaGrande';
import CombinadaIngredientesGrande from './CombinadaIngredientesGrande';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

class PizzaGrandeUnCuarto extends Component {
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
            cuatrocuartosaboradicion: '',
            modal: false,
            indAdicionalUno : '',
            indAdicionalDos : '',
            indAdicionalTres : '',
            indAdicionalCuatro : '',
            promo: false,
            textoBoton: 'NO ES PROMOCION',
            stringPizza: 'PIZZA GRANDE CUARTO',
            classSinConPromo: 'buttonPromocion',
            costoPizzaMediana: parseInt(process.env.REACT_APP_PIZZA_GRANDE_COSTO),
        }
    }

indicacionAdicionalUno = (e) => {
    this.setState({
        indAdicionalUno: e.target.value
    })
}

indicacionAdicionalDos = (e) => {
    this.setState({
        indAdicionalDos: e.target.value
    })
}

indicacionAdicionalTres = (e) => {
    this.setState({
        indAdicionalTres: e.target.value
    })
}

indicacionAdicionalCuatro = (e) => {
    this.setState({
        indAdicionalCuatro: e.target.value
    })
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


agregarproducto = () => {
    /*console.log("1/2: ", this.state.mitaduno)
    console.log("1/2: ", this.state.mitadunoadicion)
    console.log("2/2: ", this.state.mitaddos)
    console.log("2/2: ", this.state.mitaddosadicion)*/
    //Abrimos modal    
    if(this.state.uncuartosabor === '' || this.state.doscuartosabor === '' || this.state.trescuartosabor === '' || this.state.cuatrocuartosabor === ''){
        alert('Completar sabores!!')
    }else{
        this.setState({
            modal: !this.state.modal
        })
        //***//
    }    
}

agregaraCuentaMitad = (dato, porcion) => {
    //console.log(dato, porcion)     
}

agregaraCuentaAdicionSinIng = (porcion, modificacionIng) => {
    //console.log(porcion, this.state.mitaduno, modificacionIng)     
}

toggleModalCancelar = () => {
    //Toggle Modal
    this.setState({
        modal: !this.state.modal
    })
    //
}

toggleModalAceptar = () => {
    let pedidoPizza = [];
    let costoadicion = 0;
    let keyId = 0;
    
    //Validamos costo ingredientes adicionales
    if(this.state.uncuartosaboradicion !== ''){
        for (let i = 0; i < this.state.uncuartosaboradicion.length; i++) {
            if(this.state.uncuartosaboradicion[i] === '+'){
                costoadicion = costoadicion + 2000
            }
        }
    }
    if(this.state.doscuartosaboradicion !== ''){
        for (let i = 0; i < this.state.doscuartosaboradicion.length; i++) {
            if(this.state.doscuartosaboradicion[i] === '+'){
                costoadicion = costoadicion + 2000
            }
        } 
    }
    if(this.state.trescuartosaboradicion !== ''){
        for (let i = 0; i < this.state.trescuartosaboradicion.length; i++) {
            if(this.state.trescuartosaboradicion[i] === '+'){
                costoadicion = costoadicion + 2000
            }
        } 
    }
    if(this.state.cuatrocuartosaboradicion !== ''){
        for (let i = 0; i < this.state.cuatrocuartosaboradicion.length; i++) {
            if(this.state.cuatrocuartosaboradicion[i] === '+'){
                costoadicion = costoadicion + 2000
            }
        } 
    }

    let contPersonales = [JSON.parse(localStorage.getItem('Numero_Grandes'))]

    if(contPersonales[0] === null){
        //Guardamos en local Storage
        //Estructura del dato
        pedidoPizza = {
            'key_id' : keyId,
            'tipo' : this.state.stringPizza,
            'cuarto_uno' : this.state.uncuartosabor,
            'mod_cuarto_uno' : this.state.uncuartosaboradicion,
            'ind_cuarto_uno_adicional': this.state.indAdicionalUno,
            'cuarto_dos' : this.state.doscuartosabor,
            'mod_cuarto_dos' : this.state.doscuartosaboradicion,
            'ind_cuarto_dos_adicional': this.state.indAdicionalDos,
            'cuarto_tres' : this.state.trescuartosabor,
            'mod_cuarto_tres' : this.state.trescuartosaboradicion,
            'ind_cuarto_tres_adicional': this.state.indAdicionalTres,
            'cuarto_cuatro' : this.state.cuatrocuartosabor,
            'mod_cuarto_cuatro' : this.state.cuatrocuartosaboradicion,
            'ind_cuarto_cuatro_adicional': this.state.indAdicionalCuatro,
            'costo_grande' : this.state.costoPizzaMediana,
            'costo_adiciones_grande' : costoadicion,
            'id_pedido': 'Pedido_Grande_Cuarto_0'}
        localStorage.setItem('Pedido_Grande_Cuarto_0', JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Grandes', JSON.stringify({'Numero': 1}))
    }else{
        pedidoPizza = {
            'key_id' : keyId,
            'tipo' : this.state.stringPizza,
            'cuarto_uno' : this.state.uncuartosabor,
            'mod_cuarto_uno' : this.state.uncuartosaboradicion,
            'ind_cuarto_uno_adicional': this.state.indAdicionalUno,
            'cuarto_dos' : this.state.doscuartosabor,
            'mod_cuarto_dos' : this.state.doscuartosaboradicion,
            'ind_cuarto_dos_adicional': this.state.indAdicionalDos,
            'cuarto_tres' : this.state.trescuartosabor,
            'mod_cuarto_tres' : this.state.trescuartosaboradicion,
            'ind_cuarto_tres_adicional': this.state.indAdicionalTres,
            'cuarto_cuatro' : this.state.cuatrocuartosabor,
            'mod_cuarto_cuatro' : this.state.cuatrocuartosaboradicion,
            'ind_cuarto_cuatro_adicional': this.state.indAdicionalCuatro,
            'costo_grande' : this.state.costoPizzaMediana,
            'costo_adiciones_grande' : costoadicion,
            'id_pedido': `Pedido_Grande_Cuarto_${contPersonales[0].Numero}`}
        localStorage.setItem(`Pedido_Grande_Cuarto_${contPersonales[0].Numero}`, JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Grandes', JSON.stringify({'Numero': contPersonales[0].Numero + 1}))
    }
   
    //Toggle Modal//
    this.setState({
        modal: !this.state.modal
    })
    //Atras
    this.props.atrasMenuPersonal();
}

esPromocion = () => {
    if(this.state.promo === false){
        this.setState({
            promo: true,
            textoBoton: 'ES PROMOCION',
            classSinConPromo: 'buttonPromocionOn',
            stringPizza: 'PIZZA GRANDE CUARTO PROMOCION',
            costoPizzaMediana: parseInt(process.env.REACT_APP_DOS_GRANDES_PROMOCION_COSTO)/2
        })
    }else(
        this.setState({
            promo: false,
            textoBoton: 'NO ES PROMOCION',
            classSinConPromo: 'buttonPromocion',
            stringPizza: 'PIZZA GRANDE CUARTO',
            costoPizzaMediana: parseInt(process.env.REACT_APP_PIZZA_GRANDE_COSTO)
        })
    ) 
}

render(){
    const opcionPizza = () => {
        switch(this.state.estado) {
            case "inicio": return(
                <>
                <div>
                    <p style={{textAlign: 'center'}}>PIZZA PERSONAL CUARTOS</p>
                    <div className='centrarButtonPromocion'>
                        <button className={this.state.classSinConPromo} onClick={this.esPromocion}>{this.state.textoBoton}</button>
                    </div> 
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
                        <button className='agregarapedido' color="warning" onClick={this.agregarproducto}>AGREGAR</button>
                    </div>
                    <div className="botonpedido">
                        <div>
                            <p onClick={this.onClickBack}
                            className='atras'>atras..</p>
                        </div>                        
                    </div>
                </div>

                <Modal isOpen={this.state.modal}>                        
                <ModalHeader>Pedido PIZZA GRANDE POR CUARTOS</ModalHeader>
                <ModalBody>
                    <p>Cuarto uno:  <strong>{this.state.uncuartosabor}</strong></p>
                    <p>Adicion y/o Sin ingredientes Cuarto uno: <strong>{this.state.cuatrocuartosaboradicion}</strong></p>
                    <Input value={this.state.indAdicionalUno} onChange={this.indicacionAdicionalUno} placeholder="Indicacion Adicional Cuarto Uno" /><br></br>
                    <p>Cuarto dos: <strong>{this.state.doscuartosabor}</strong></p>
                    <p>Adicion y/o Sin ingredientes Cuarto dos: <strong>{this.state.doscuartosaboradicion}</strong></p>
                    <Input value={this.state.indAdicionalDos} onChange={this.indicacionAdicionalDos} placeholder="Indicacion Adicional Cuarto Dos" /><br></br>
                    <p>Cuarto tres: <strong>{this.state.trescuartosabor}</strong></p>
                    <p>Adicion y/o Sin ingredientes Cuarto tres: <strong>{this.state.cuatrocuartosaboradicion}</strong></p>
                    <Input value={this.state.indAdicionalTres} onChange={this.indicacionAdicionalTres} placeholder="Indicacion Adicional Cuarto Tres" /><br></br>
                    <p>Cuarto cuatro: <strong>{this.state.cuatrocuartosabor}</strong></p>
                    <p>Adicion y/o Sin ingredientes Cuarto cuatro: <strong>{this.state.cuatrocuartosaboradicion}</strong></p>
                    <Input value={this.state.indAdicionalCuatro} onChange={this.indicacionAdicionalCuatro} placeholder="Indicacion Adicional Cuarto Cuatro" /><br></br>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={this.toggleModalAceptar}>Agregar Pedido</Button> {'  '}
                    <Button color="danger" onClick={this.toggleModalCancelar}>Cancelar</Button>
                </ModalFooter>
                </Modal>
                </>
            )
            case 'uncuarto': return (<SaboresPizzaGrande porcion="1/4" opcioncuarto='sabor de' atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSabor} cuentamitad={this.agregaraCuentaMitad}/>)
            case 'doscuarto': return (<SaboresPizzaGrande porcion="2/4" opcioncuarto='sabor de' atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSabor} cuentamitad={this.agregaraCuentaMitad}/>)
            case 'trescuarto': return (<SaboresPizzaGrande porcion="3/4" opcioncuarto='sabor de' atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSabor} cuentamitad={this.agregaraCuentaMitad}/>)
            case 'cuatrocuarto': return (<SaboresPizzaGrande porcion="4/4" opcioncuarto='sabor de' atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSabor} cuentamitad={this.agregaraCuentaMitad}/>)
            case 'combinadauno': return (<CombinadaIngredientesGrande porcion="1/4" opcioncuarto='adiciones'  atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSaborAdicion} cuentamitadmodificacion={this.agregaraCuentaAdicionSinIng}/>)
            case 'combinadados': return (<CombinadaIngredientesGrande porcion="2/4" opcioncuarto='adiciones'  atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSaborAdicion} cuentamitadmodificacion={this.agregaraCuentaAdicionSinIng}/>)
            case 'combinadatres': return (<CombinadaIngredientesGrande porcion="3/4" opcioncuarto='adiciones'  atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSaborAdicion} cuentamitadmodificacion={this.agregaraCuentaAdicionSinIng}/>)
            case 'combinadacuatro': return (<CombinadaIngredientesGrande porcion="4/4" opcioncuarto='adiciones'  atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSaborAdicion} cuentamitadmodificacion={this.agregaraCuentaAdicionSinIng}/>)
            case 'combinadaunomenos': return (<CombinadaIngredientesGrande porcion="1/4" opcioncuarto='ingredientemenos' atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSaborAdicion} cuentamitadmodificacion={this.agregaraCuentaAdicionSinIng}/>)
            case 'combinadadosmenos': return (<CombinadaIngredientesGrande porcion="2/4" opcioncuarto='ingredientemenos' atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSaborAdicion} cuentamitadmodificacion={this.agregaraCuentaAdicionSinIng}/>)
            case 'combinadatresmenos': return (<CombinadaIngredientesGrande porcion="3/4" opcioncuarto='ingredientemenos' atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSaborAdicion} cuentamitadmodificacion={this.agregaraCuentaAdicionSinIng}/>)
            case 'combinadacuatromenos': return (<CombinadaIngredientesGrande porcion="4/4" opcioncuarto='ingredientemenos' atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSaborAdicion} cuentamitadmodificacion={this.agregaraCuentaAdicionSinIng}/>)
            default:  return <p style={{textAlign: 'center'}}>SELECCIONE OPCION</p>
        }
    }
    return(
        <div>{ opcionPizza() }</div>  
    )
}
}

export default PizzaGrandeUnCuarto