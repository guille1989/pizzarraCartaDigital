import React, { Component } from 'react';
//import CombinadaIngredientes from './CombinadaIngredientes'
import '../../../App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

class gaseosas extends Component {
    constructor(props){
        super(props);    
        this.state={
            estado: 'inicio',
            combinada: 'false',
            porcion: '',
            comDosTresIngredientes: '',
            azucar: 'Sin Azucar',
            promo: false,
            textoBoton: 'Sin Michelar',
            classSalsa: 'buttonBolognesa',
            cantidadProducto: 1,
            modalCerveza: false,
            producto: 'CERVEZA',
            contAux: 1,
        }
    }

onClickBack = () => {
    this.props.atrasMenuPersonal();
}

atrasPersonal = () => {
    this.setState({estado: 'inicio'})
}

handlePoker = () => {
    this.setState({
        producto: 'COCA COLA 350',
        contAux: 4000
    })
    //Toggle Modal
    this.setState({
        modalCerveza: !this.state.modalCerveza
    })    
}

handleCocaColaZero = () => {
    this.setState({
        producto: 'COCA COLA ZERO 350',
        contAux: 4000
    })
    //Toggle Modal
    this.setState({
        modalCerveza: !this.state.modalCerveza
    })    
}

handleAguila = () => {
    this.setState({
        producto: 'COCA COLA LITRO/4',
        contAux: 9000
    })

    //Toggle Modal
    this.setState({
        modalCerveza: !this.state.modalCerveza
    })
    /*
    var dato = "AGUILA"
    let pedidoPizza = [];    
    //Guardamos en local Storag 
    let contPersonales = [JSON.parse(localStorage.getItem('Numero_Cervezas'))]    
    if(contPersonales[0] === null){
        //Guardamos en local Storage
        pedidoPizza = { 'key_id' : 1,
                    'tipo' : 'CERVEZA ' + dato ,   
                    'mod_sabor_cerveza' : this.state.textoBoton ,                  
                    'costo_cerveza' : 8000,
                    'id_pedido': 'Pedido_Cerveza_0'};
        localStorage.setItem('Pedido_Cerveza_0', JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Cervezas', JSON.stringify({'Numero': 1}))
    }else{
        pedidoPizza = { 'key_id' : contPersonales[0].Numero + 1,
                    'tipo' : 'CERVEZA ' + dato ,  
                    'mod_sabor_cerveza' : this.state.textoBoton ,                    
                    'costo_cerveza' : 8000,                       
                    'id_pedido': `Pedido_Cerveza_${contPersonales[0].Numero}`};
        localStorage.setItem(`Pedido_Cerveza_${contPersonales[0].Numero}`, JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Cervezas', JSON.stringify({'Numero': contPersonales[0].Numero + 1}))
    }   
    */
}

handleClub = () => {
    this.setState({
        producto: 'CLUB COLOMBIA'
    })

    //Toggle Modal
    this.setState({
        modalCerveza: !this.state.modalCerveza
    })
    /*
    var dato = "CLUB COLOMBIA"
    let pedidoPizza = [];    
    //Guardamos en local Storag 
    let contPersonales = [JSON.parse(localStorage.getItem('Numero_Cervezas'))]    
    if(contPersonales[0] === null){
        //Guardamos en local Storage
        pedidoPizza = { 'key_id' : 1,
                    'tipo' : 'CERVEZA ' + dato ,   
                    'mod_sabor_cerveza' : this.state.textoBoton ,                  
                    'costo_cerveza' : 8000,
                    'id_pedido': 'Pedido_Cerveza_0'};
        localStorage.setItem('Pedido_Cerveza_0', JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Cervezas', JSON.stringify({'Numero': 1}))
    }else{
        pedidoPizza = { 'key_id' : contPersonales[0].Numero + 1,
                    'tipo' : 'CERVEZA ' + dato ,  
                    'mod_sabor_cerveza' : this.state.textoBoton ,                    
                    'costo_cerveza' : 8000,                       
                    'id_pedido': `Pedido_Cerveza_${contPersonales[0].Numero}`};
        localStorage.setItem(`Pedido_Cerveza_${contPersonales[0].Numero}`, JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Cervezas', JSON.stringify({'Numero': contPersonales[0].Numero + 1}))
    }   
    */
}

agregaraCuentaMitadCombinada = (dato, porcion) => {
    this.props.cuentamitad(porcion, dato);
}

atrasPersonalSabor = (dato, porcion) => {
    this.props.atrasMenuPersonalSabor(dato, porcion);
}

esPromocion = () => {
    if(this.state.promo === false){
        this.setState({
            promo: true,
            textoBoton: 'Michelar',
            classSalsa: 'buttonQueso',
            costoPizzaPersonal: 5000
        })
    }else(
        this.setState({
            promo: false,
            textoBoton: 'Sin Michelada',
            classSalsa: 'buttonBolognesa',
            costoPizzaPersonal: 5000
        })
    ) 
}

changeCantidadProducto = (e) => {
    this.setState({
        cantidadProducto: e.target.value
    })
}

toggleModalCancelarCerveza = () => {
    //Toggle Modal
    this.setState({
        modalCerveza: !this.state.modalCerveza
    })
    //
}

toggleModalAceptarCerveza = () => {

    var dato = this.state.producto
    let pedidoPizza = [];    
    //Guardamos en local Storag 
    let contPersonales = [JSON.parse(localStorage.getItem('Numero_Gaseosas'))]    
    if(contPersonales[0] === null){
        //Guardamos en local Storage
        pedidoPizza = { 'key_id' : 1,
                    'tipo' : 'GASEOSA ' + dato + ' X ' + this.state.cantidadProducto,   
                    'mod_sabor_gaseosa' : '' ,                  
                    'costo_gaseosa' : this.state.contAux * this.state.cantidadProducto,
                    'id_pedido': 'Pedido_Gaseosa_0'};
        localStorage.setItem('Pedido_Gaseosa_0', JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Gaseosas', JSON.stringify({'Numero': 1}))
    }else{
        pedidoPizza = { 'key_id' : contPersonales[0].Numero + 1,
                    'tipo' : 'GASEOSA ' + dato + ' X ' + this.state.cantidadProducto ,  
                    'mod_sabor_gaseosa' : '' ,                    
                    'costo_gaseosa' : this.state.contAux * this.state.cantidadProducto,                       
                    'id_pedido': `Pedido_Gaseosa_${contPersonales[0].Numero}`};
        localStorage.setItem(`Pedido_Gaseosa_${contPersonales[0].Numero}`, JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Gaseosas', JSON.stringify({'Numero': contPersonales[0].Numero + 1}))
    } 

    //Toggle Modal
    this.setState({
        modalCerveza: !this.state.modalCerveza,
        cantidadProducto: 1
    })
    //
}

    render(){
        const opcionPizza = () => {
            switch(this.state.estado) {
                case "inicio": return(
                    <>
                    <div>
                    <div className='centrarButtonPromocionLasagna'>
                        <p style={{marginLeft: '10px'}}>Cerveza de: {this.props.porcion}</p>
                    </div>
                    <div className="SaboresPizza">
                        <div>
                            <div className="saborItem" onClick={this.handleCocaColaZero}>
                                <h1 className="pizzaOpcionSabor">Coca Cola Zero 350</h1>
                            </div>
                            <div className="saborItem" onClick={this.handlePoker}>
                                <h1 className="pizzaOpcionSabor">Coca Cola 350</h1>
                            </div>
                            <div className="saborItem" onClick={this.handleAguila}>
                                <h1 className="pizzaOpcionSabor">Coca Cola Litro 4</h1>
                            </div>                            
                        </div>
                       
                                 
                    </div>
                    <p onClick={this.onClickBack} className='atras'>atras..</p>
                    </div>
                    
                    <Modal isOpen={this.state.modalCerveza}>                        
                        <ModalHeader>Cantidad</ModalHeader>
                        <ModalBody>
                            <p>Cantidad:</p>
                            <Input value={this.state.cantidadProducto} onChange={this.changeCantidadProducto} placeholder="Cantidad" /><br></br>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={this.toggleModalAceptarCerveza}>Agregar Pedido</Button> {'  '}
                            <Button color="danger" onClick={this.toggleModalCancelarCerveza}>Cancelar</Button>
                        </ModalFooter>
                    </Modal>

                    </>
                )
                //case "combinada": return (<CombinadaIngredientes combinada={this.state.combinada} comDosTresIngre={this.state.comDosTresIngredientes} porcion={this.props.porcion} atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSabor} cuentamitad={this.agregaraCuentaMitadCombinada}/>)
                }
            }
        return(
            <div>{ opcionPizza() }</div>
        )
    }

}

export default gaseosas;