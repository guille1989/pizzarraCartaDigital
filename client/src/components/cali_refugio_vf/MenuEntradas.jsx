import React from 'react';
import { Component } from 'react';
import Sopas from './sopas/sopas';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

class MenuEntradas extends Component{
    constructor(props){
        super(props);    
        this.state={
            estado: 'inicio',
            cantidadProducto: 1,
            modal: false,
        }
    }

    menusopas(event){
        if(this.state.estado === 'inicio'){
            this.setState({estado: 'SOPAS'})
        }else{
            this.setState({estado: 'inicio'})
        }
    }

    atrasPersonal = () => {
        this.setState({estado: 'inicio'})
    }

    //Pan de Ajo.
    togglePanAjo = () => {

        //Toggle Modal//
        this.setState({
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
        let contPersonales = [JSON.parse(localStorage.getItem('Numero_PanAjos'))]    
        if(contPersonales[0] === null){
            //Guardamos en local Storage
            pedidoPizza = { 'key_id' : 1,
                        'tipo' : ' PAN AJO X ' + this.state.cantidadProducto,                        
                        'costo_pan_ajo' : parseInt(process.env.REACT_APP_PAN_AJO_COSTO) * this.state.cantidadProducto,
                        'id_pedido': 'Pedido_PanAjo_0'};
            localStorage.setItem('Pedido_PanAjo_0', JSON.stringify(pedidoPizza))
            localStorage.setItem('Numero_PanAjos', JSON.stringify({'Numero': 1}))
        }else{
            pedidoPizza = { 'key_id' : contPersonales[0].Numero + 1,
                        'tipo' : ' PAN AJO X ' + this.state.cantidadProducto,                         
                        'costo_pan_ajo' : parseInt(process.env.REACT_APP_PAN_AJO_COSTO) * this.state.cantidadProducto,                       
                        'id_pedido': `Pedido_PanAjo_${contPersonales[0].Numero}`};
            localStorage.setItem(`Pedido_PanAjo_${contPersonales[0].Numero}`, JSON.stringify(pedidoPizza))
            localStorage.setItem('Numero_PanAjos', JSON.stringify({'Numero': contPersonales[0].Numero + 1}))
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
                                <div className="pizzaItem" onClick={(e) => ( this.togglePanAjo(e))}>
                                    <h1 className="pizzaOpcion">PAN AJO</h1>
                                </div>                
                            </div>
                            <div>
                                <div className="pizzaItem" onClick={(e) => ( this.menusopas(e))}>
                                    <h1 className="pizzaOpcion">SOPAS</h1>
                                </div>                
                            </div>
                        </div>
                        <Modal isOpen={this.state.modal}>                        
                        <ModalHeader>Cantidad</ModalHeader>
                        <ModalBody>
                            <p>Cantidad:</p>
                            <Input value={this.state.cantidadProducto} onChange={this.changeCantidadProducto} placeholder="Cantidad" /><br></br>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={this.toggleModalAceptar}>Agregar Pedido</Button> {'  '}
                            <Button color="danger" onClick={this.toggleModalCancelar}>Cancelar</Button>
                        </ModalFooter>
                        </Modal>
                        </>
                    ); 
                case "SOPAS":
                    return (<Sopas atrasMenuPersonal={this.atrasPersonal} />)
                default:  return <p style={{textAlign: 'center'}}>SELECCIONE OPCION</p>
            }
        }
        return(
            <div>{ opcionPizza() }</div>
        )
    }
}

export default MenuEntradas