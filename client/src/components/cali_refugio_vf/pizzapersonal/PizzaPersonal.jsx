import React from 'react';
import { Component } from 'react';
import '../../../App.css';
import MenuPizza from '../MenuPizza';
import PizzaPersonalUnCuarto from './PizzaPersonalUnCuarto';
import PizzaPersonalMitad from './PizzaPersonalMitad';
import PizzaPersonalCompleta from './PizzaPersonalCompleta';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

class PizzaPersonal extends Component {
    constructor(props){
        super(props);    
        this.state={
            estado: 'inicio',
            modalPizzaFestival: false,
            cantidadProducto: 1,
        } 
    }

onClickBack = () => {
    this.props.atrasMenuPizza();
}

atrasPersonal = () => {
    this.setState({estado: 'inicio'})
}

funcionpadre = () => {
    alert('pizza personal')
}

toggleModalCancelar = () => {
    //Toggle Modal
    this.setState({
        modalPizzaFestival: !this.state.modalPizzaFestival
    })
    //
}

toggleModalAceptar = () => {
    let pedidoPizza = [];    
    //Guardamos en local Storag 
    let contPersonales = [JSON.parse(localStorage.getItem('Numero_PizzaEspecial'))]    
    if(contPersonales[0] === null){
        //Guardamos en local Storage
        pedidoPizza = { 'key_id' : 1,
                    'tipo' : ' PIZZA FESTIVAL X ' + this.state.cantidadProducto,                        
                    'costo_pizza_festival' : 19000 * this.state.cantidadProducto,
                    'id_pedido': 'Pedido_PizzaEspecial_0'};
        localStorage.setItem('Pedido_PizzaEspecial_0', JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_PizzaEspecial', JSON.stringify({'Numero': 1}))
    }else{
        pedidoPizza = { 'key_id' : contPersonales[0].Numero + 1,
                    'tipo' : ' PIZZA FESTIVAL X ' + this.state.cantidadProducto,                        
                    'costo_pizza_festival' : 19000 * this.state.cantidadProducto,                     
                    'id_pedido': `Pedido_PizzaEspecial_${contPersonales[0].Numero}`};
        localStorage.setItem(`Pedido_PizzaEspecial_${contPersonales[0].Numero}`, JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_PizzaEspecial', JSON.stringify({'Numero': contPersonales[0].Numero + 1}))
    } 

    //Toggle Modal
    this.setState({
        modalPizzaFestival: !this.state.modalPizzaFestival
    })
}

changeCantidadProducto = (e) => {
    this.setState({
        cantidadProducto: e.target.value
    })
}

render(){
    const opcionPizza = () => {
        switch(this.state.estado) {
          case "inicio": return (
            <div>
                <p style={{textAlign: 'center'}}>PIZZA PERSONAL</p>
                <div className='pizzaforma'>
                    <div>
                        {/*<div className='opcionpersonal' onClick={()=> (
                            this.setState({estado: 'seleccionuncuarto'})
                        )}>
                            <p>CUARTO</p>
                        </div>*/}
                        <div className='opcionpersonal'onClick={()=> (
                            this.setState({estado: 'seleccionmitad'})
                        )}>
                            <p>MITAD</p>
                        </div>
                        <div className='opcionpersonal'onClick={()=> (
                            this.setState({estado: 'seleccioncompleta'})
                        )}>
                            <p>COMPLETA</p>
                        </div>

                        {/* 
                        <div className='opcionpersonal'onClick={()=> (
                            this.setState({modalPizzaFestival: !this.state.modalPizzaFestival})
                        )}>
                            <p>PIZZA FESTIVAL</p>
                        </div>
                        */}

                    </div>
                </div> 
                <p onClick={this.onClickBack} 
                className='atras'>atras..</p>        

                <Modal isOpen={this.state.modalPizzaFestival}>                        
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

            </div>
          )
          case "seleccionuncuarto": return <PizzaPersonalUnCuarto atrasMenuPersonal={this.atrasPersonal} />
          case "seleccionmitad": return <PizzaPersonalMitad atrasMenuPersonal={this.atrasPersonal} funcionpadre={this.props.funcionpadre}/>
          case "seleccioncompleta": return <PizzaPersonalCompleta atrasMenuPersonal={this.atrasPersonal}/>
          default:  return <p style={{textAlign: 'center'}}>SELECCIONE OPCION</p>
        }
      }
    return(
        <div>{ opcionPizza() }</div>          
    );
}
}

export default PizzaPersonal