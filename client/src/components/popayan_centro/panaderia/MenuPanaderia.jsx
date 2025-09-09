import React from 'react';
import { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

class MenuPanaderia extends Component{
    constructor(props){
        super(props);    
        this.state={
            estado: 'inicio',
            cantidadProducto: 1,
            modal: false,
        }
    }

   

    atrasPersonal = () => {
        this.setState({estado: 'inicio'})
    }

    //Pan de Ajo.
    togglePanAjo = (e, item, valor) => {
        //console.log(item)
        //Toggle Modal//
        this.setState({
            item_panaderia_costo: valor,
            item_panaderia: item,
            modal: !this.state.modal
        })     
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
        //Guardamos en local Storag 
        let contPersonales = [JSON.parse(localStorage.getItem('Numero_Panaderia'))]    
        if(contPersonales[0] === null){
            //Guardamos en local Storage
            pedidoPizza = { 'key_id' : 1,
                        'tipo' : ' ' + this.state.item_panaderia + ' X ' + this.state.cantidadProducto,                        
                        'costo_panaderia' : this.state.item_panaderia_costo * this.state.cantidadProducto,
                        'id_pedido': 'Pedido_Panaderia_0'};
            localStorage.setItem(`Pedido_Panaderia_0`, JSON.stringify(pedidoPizza))
            localStorage.setItem('Numero_Panaderia', JSON.stringify({'Numero': 1}))
        }else{
            pedidoPizza = { 'key_id' : contPersonales[0].Numero + 1,
                        'tipo' : ' ' + this.state.item_panaderia + ' X ' + this.state.cantidadProducto,                         
                        'costo_panaderia' : this.state.item_panaderia_costo * this.state.cantidadProducto,                       
                        'id_pedido': `Pedido_Panaderia_${contPersonales[0].Numero}`};
            localStorage.setItem(`Pedido_Panaderia_${contPersonales[0].Numero}`, JSON.stringify(pedidoPizza))
            localStorage.setItem('Numero_Panaderia', JSON.stringify({'Numero': contPersonales[0].Numero + 1}))
        } 

        //Toggle Modal
        this.setState({
            modal: !this.state.modal
        })
    }

    changeCantidadProducto = (e) => {
        this.setState({
            cantidadProducto: e.target.value
        })
    }

    render(){
        const opcionPizza = () => {
            switch(this.state.estado) 
            {
                case "inicio":
                    return(
                        <>
                        <div className="pizzaOrden">
                            <div>
                                <div className="pizzaItem" onClick={(e) => ( this.togglePanAjo(e, "PAN 10", 5000))}>
                                    <h1 className="pizzaOpcion">PAN X10</h1>
                                </div>    
                                <div className="pizzaItem" onClick={(e) => ( this.togglePanAjo(e, "PAN 20", 10000))}>
                                    <h1 className="pizzaOpcion">PAN X20</h1>
                                </div>       
                                <div className="pizzaItem" onClick={(e) => ( this.togglePanAjo(e, "PAN COOK 2", 4000))}>
                                    <h1 className="pizzaOpcion">PAN COOK X2</h1>
                                </div>  

                            </div>
                            <div> 
                                <div className="pizzaItem" onClick={(e) => ( this.togglePanAjo(e, "PAN UNIDAD", 500))}>
                                    <h1 className="pizzaOpcion">PAN UNIDAD</h1>
                                </div>   
                                <div className="pizzaItem" onClick={(e) => ( this.togglePanAjo(e, "PAN COOK UNIDAD", 2000))}>
                                    <h1 className="pizzaOpcion">PAN COOK UNIDAD</h1>
                                </div> 
                            </div>
                            <div>
                                <div className="pizzaItem" onClick={(e) => ( this.togglePanAjo(e, "MASAS PER. 5", 10000))}>
                                    <h1 className="pizzaOpcion">MASAS PER. X5</h1>
                                </div>     
                            </div>
                            <div>
                                <div className="pizzaItem" onClick={(e) => ( this.togglePanAjo(e, "MASAS MEDIANAS UNIDAD", 4000))}>
                                    <h1 className="pizzaOpcion">MASAS MEDIANAS UNIDAD</h1>
                                </div>
                            </div>
                        </div>
                        <Modal isOpen={this.state.modal}>                        
                        <ModalHeader>Cantidad</ModalHeader>
                        <ModalBody>
                            <p>Cantidad de {this.state.item_panaderia}:</p>
                            <Input value={this.state.cantidadProducto} onChange={this.changeCantidadProducto} placeholder="Cantidad" /><br></br>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={this.toggleModalAceptar}>Agregar Pedido</Button> {'  '}
                            <Button color="danger" onClick={this.toggleModalCancelar}>Cancelar</Button>
                        </ModalFooter>
                        </Modal>
                        </>
                    ); 
                default:  return <p style={{textAlign: 'center'}}>SELECCIONE OPCION</p>
            }
        }
        return(
            <div>{ opcionPizza() }</div>
        )
    }
}

export default MenuPanaderia