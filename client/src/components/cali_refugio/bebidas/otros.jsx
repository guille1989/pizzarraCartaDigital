import React, { Component } from 'react';
//import CombinadaIngredientes from './CombinadaIngredientes'
import '../../../App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

class otros extends Component {
    constructor(props){
        super(props);    
        this.state={
            estado: 'inicio',
            combinada: 'false',
            porcion: '',
            comDosTresIngredientes: '',
            azucar: 'Sin Azucar',
            promo: false,
            textoBoton: 'Sin Azucar',
            classSalsa: 'buttonBolognesa',
            modalOtros: false,
            cantidadProducto: 1,
            producto: 'OTRO'
        }
    }

onClickBack = () => {
    this.props.atrasMenuPersonal();
}

atrasPersonal = () => {
    this.setState({estado: 'inicio'})
}

handleAgua = () => {
    this.setState({
        producto: 'AGUA SIN GAS'
    })

    //Toggle Modal
    this.setState({
        modalOtros: !this.state.modalOtros
    })
    //
    /*
    var dato = "AGUA"  

    let pedidoPizza = [];    
    //Guardamos en local Storag 
    let contPersonales = [JSON.parse(localStorage.getItem('Numero_Bebidas'))]    
    if(contPersonales[0] === null){
        //Guardamos en local Storage
        pedidoPizza = { 'key_id' : 1,
                    'tipo' : 'BEBIDA ' + dato ,   
                    'mod_sabor_bebida' : this.state.textoBoton ,                  
                    'costo_bebida' : 8000,
                    'id_pedido': 'Pedido_Bebida_0'};
        localStorage.setItem('Pedido_Bebida_0', JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Bebidas', JSON.stringify({'Numero': 1}))
    }else{
        pedidoPizza = { 'key_id' : contPersonales[0].Numero + 1,
                    'tipo' : 'BEBIDA ' + dato ,  
                    'mod_sabor_bebida' : this.state.textoBoton ,                    
                    'costo_bebida' : 8000,                       
                    'id_pedido': `Pedido_Bebida_${contPersonales[0].Numero}`};
        localStorage.setItem(`Pedido_Bebida_${contPersonales[0].Numero}`, JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Bebidas', JSON.stringify({'Numero': contPersonales[0].Numero + 1}))
    }   
    */
}

handleAguaGas = () => {
    this.setState({
        producto: 'AGUA CON GAS'
    })

    //Toggle Modal
    this.setState({
        modalOtros: !this.state.modalOtros
    })
    //
    /*
    var dato = "AGUA CON GAS"
    let pedidoPizza = [];    
    //Guardamos en local Storag 
    let contPersonales = [JSON.parse(localStorage.getItem('Numero_Bebidas'))]    
    if(contPersonales[0] === null){
        //Guardamos en local Storage
        pedidoPizza = { 'key_id' : 1,
                    'tipo' : 'BEBIDA ' + dato ,   
                    'mod_sabor_bebida' : this.state.textoBoton ,                  
                    'costo_bebida' : 8000,
                    'id_pedido': 'Pedido_Bebida_0'};
        localStorage.setItem('Pedido_Bebida_0', JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Bebidas', JSON.stringify({'Numero': 1}))
    }else{
        pedidoPizza = { 'key_id' : contPersonales[0].Numero + 1,
                    'tipo' : 'BEBIDA ' + dato ,  
                    'mod_sabor_bebida' : this.state.textoBoton ,                    
                    'costo_bebida' : 8000,                       
                    'id_pedido': `Pedido_Bebida_${contPersonales[0].Numero}`};
        localStorage.setItem(`Pedido_Bebida_${contPersonales[0].Numero}`, JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Bebidas', JSON.stringify({'Numero': contPersonales[0].Numero + 1}))
    } 
    */  
}

handleAFrutosRojos = () => {
    this.setState({
        producto: 'AROMATICA FRUTOS ROJOS'
    })

    //Toggle Modal
    this.setState({
        modalOtros: !this.state.modalOtros
    })
    //
    /*
    var dato = "Aromatica Frutos Rojos"
    let pedidoPizza = [];    
    //Guardamos en local Storag 
    let contPersonales = [JSON.parse(localStorage.getItem('Numero_Bebidas'))]    
    if(contPersonales[0] === null){
        //Guardamos en local Storage
        pedidoPizza = { 'key_id' : 1,
                    'tipo' : 'BEBIDA ' + dato ,   
                    'mod_sabor_bebida' : this.state.textoBoton ,                  
                    'costo_bebida' : 8000,
                    'id_pedido': 'Pedido_Bebida_0'};
        localStorage.setItem('Pedido_Bebida_0', JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Bebidas', JSON.stringify({'Numero': 1}))
    }else{
        pedidoPizza = { 'key_id' : contPersonales[0].Numero + 1,
                    'tipo' : 'BEBIDA ' + dato ,  
                    'mod_sabor_bebida' : this.state.textoBoton ,                    
                    'costo_bebida' : 8000,                       
                    'id_pedido': `Pedido_Bebida_${contPersonales[0].Numero}`};
        localStorage.setItem(`Pedido_Bebida_${contPersonales[0].Numero}`, JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Bebidas', JSON.stringify({'Numero': contPersonales[0].Numero + 1}))
    }  
    */
}

handleAMansanilla = () => {
    this.setState({
        producto: 'AROMATICA MANSANILLA'
    })

    //Toggle Modal
    this.setState({
        modalOtros: !this.state.modalOtros
    })
    //
    /*
    var dato = "Aromatica Mansanilla"
    let pedidoPizza = [];    
    //Guardamos en local Storag 
    let contPersonales = [JSON.parse(localStorage.getItem('Numero_Bebidas'))]    
    if(contPersonales[0] === null){
        //Guardamos en local Storage
        pedidoPizza = { 'key_id' : 1,
                    'tipo' : 'BEBIDA ' + dato ,   
                    'mod_sabor_bebida' : this.state.textoBoton ,                  
                    'costo_bebida' : 8000,
                    'id_pedido': 'Pedido_Bebida_0'};
        localStorage.setItem('Pedido_Bebida_0', JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Bebidas', JSON.stringify({'Numero': 1}))
    }else{
        pedidoPizza = { 'key_id' : contPersonales[0].Numero + 1,
                    'tipo' : 'BEBIDA ' + dato ,  
                    'mod_sabor_bebida' : this.state.textoBoton ,                    
                    'costo_bebida' : 8000,                       
                    'id_pedido': `Pedido_Bebida_${contPersonales[0].Numero}`};
        localStorage.setItem(`Pedido_Bebida_${contPersonales[0].Numero}`, JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Bebidas', JSON.stringify({'Numero': contPersonales[0].Numero + 1}))
    }  
    */
}

handleAYerbaBuena = () => {
    this.setState({
        producto: 'AROMATICA YERBE BUENA'
    })

    //Toggle Modal
    this.setState({
        modalOtros: !this.state.modalOtros
    })
    //
    /*
    var dato = "Aromatica Yerba Buena"
    let pedidoPizza = [];    
    //Guardamos en local Storag 
    let contPersonales = [JSON.parse(localStorage.getItem('Numero_Bebidas'))]    
    if(contPersonales[0] === null){
        //Guardamos en local Storage
        pedidoPizza = { 'key_id' : 1,
                    'tipo' : 'BEBIDA ' + dato ,   
                    'mod_sabor_bebida' : this.state.textoBoton ,                  
                    'costo_bebida' : 8000,
                    'id_pedido': 'Pedido_Bebida_0'};
        localStorage.setItem('Pedido_Bebida_0', JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Bebidas', JSON.stringify({'Numero': 1}))
    }else{
        pedidoPizza = { 'key_id' : contPersonales[0].Numero + 1,
                    'tipo' : 'BEBIDA ' + dato ,  
                    'mod_sabor_bebida' : this.state.textoBoton ,                    
                    'costo_bebida' : 8000,                       
                    'id_pedido': `Pedido_Bebida_${contPersonales[0].Numero}`};
        localStorage.setItem(`Pedido_Bebida_${contPersonales[0].Numero}`, JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Bebidas', JSON.stringify({'Numero': contPersonales[0].Numero + 1}))
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
            textoBoton: 'Con Azucar',
            classSalsa: 'buttonQueso',
            costoPizzaPersonal: 5000
        })
    }else(
        this.setState({
            promo: false,
            textoBoton: 'Sin Azucar',
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

toggleModalCancelarOtros = () => {
    //Toggle Modal
    this.setState({
        modalOtros: !this.state.modalOtros
    })
    //
}

toggleModalAceptarOtros = () => {
    var dato = this.state.producto
    let pedidoPizza = [];    
    //Guardamos en local Storag 
    let contPersonales = [JSON.parse(localStorage.getItem('Numero_Bebidas'))]    
    if(contPersonales[0] === null){
        //Guardamos en local Storage
        pedidoPizza = { 'key_id' : 1,
                    'tipo' : 'BEBIDA ' + dato + ' X ' + this.state.cantidadProducto,   
                    'mod_sabor_bebida' : this.state.textoBoton ,                  
                    'costo_bebida' : 4000 * this.state.cantidadProducto,
                    'id_pedido': 'Pedido_Bebida_0'};
        localStorage.setItem('Pedido_Bebida_0', JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Bebidas', JSON.stringify({'Numero': 1}))
    }else{
        pedidoPizza = { 'key_id' : contPersonales[0].Numero + 1,
                    'tipo' : 'BEBIDA ' + dato + ' X ' + this.state.cantidadProducto,  
                    'mod_sabor_bebida' : this.state.textoBoton ,                    
                    'costo_bebida' : 4000 * this.state.cantidadProducto,                       
                    'id_pedido': `Pedido_Bebida_${contPersonales[0].Numero}`};
        localStorage.setItem(`Pedido_Bebida_${contPersonales[0].Numero}`, JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Bebidas', JSON.stringify({'Numero': contPersonales[0].Numero + 1}))
    }  

    //Toggle Modal
    this.setState({
        modalOtros: !this.state.modalOtros,
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
                        <p style={{marginLeft: '10px'}}>Bebida de: {this.props.porcion}</p>
                        
                    </div>
                    <div className="SaboresPizza">
                        <div>
                            <div className="saborItem" onClick={this.handleAgua}>
                                <h1 className="pizzaOpcionSabor">Agua</h1>
                            </div>
                            <div className="saborItem" onClick={this.handleAguaGas}>
                                <h1 className="pizzaOpcionSabor">Agua Gas</h1>
                            </div>    
                            <div className="saborItem" onClick={this.handleAFrutosRojos}>
                                <h1 className="pizzaOpcionSabor">Aromatica Frutos Rojos</h1>
                            </div>      
                            <div className="saborItem" onClick={this.handleAMansanilla}>
                                <h1 className="pizzaOpcionSabor">Aromatica Mansanilla</h1>
                            </div>         
                            <div className="saborItem" onClick={this.handleAYerbaBuena}>
                                <h1 className="pizzaOpcionSabor">Aromatica Yerba Buena</h1>
                            </div>              
                        </div>
                       
                                 
                    </div>
                    <p onClick={this.onClickBack} className='atras'>atras..</p>
                    </div>


                    <Modal isOpen={this.state.modalOtros}>                        
                        <ModalHeader>Cantidad</ModalHeader>
                        <ModalBody>
                            <p>Cantidad:</p>
                            <Input value={this.state.cantidadProducto} onChange={this.changeCantidadProducto} placeholder="Cantidad" /><br></br>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={this.toggleModalAceptarOtros}>Agregar Pedido</Button> {'  '}
                            <Button color="danger" onClick={this.toggleModalCancelarOtros}>Cancelar</Button>
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

export default otros;