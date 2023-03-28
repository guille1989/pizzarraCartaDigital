import React from 'react';
import { Component } from 'react';
import Jugos from './bebidas/jugosnaturales'
import Cervezas from './bebidas/cervezas'
import Otros from './bebidas/otros'
import Gaseosas from './bebidas/gaseosas'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

class MenuBebidas extends Component {
    constructor(props){
        super(props);    
        this.state={
            estado: 'inicio',
            cantidadProducto: 1,
            cantidadProductoCafe: 1,
            cantidadProductoChocolate: 1,
            modal: false,
            modalCafe: false,
            cafeLeche: 'Sin Leche',
            chocolateLeche: 'Sin Leche',
            modalBotella: false,
            modalChocolate: false
        }
    }

    //Copa Vina
    toggleVino = () => {
          //Toggle Modal
        this.setState({
            modal: !this.state.modal
        })
        //    
    }

    //Botella Vina
    toggleVinoBotella = () => {
        //Toggle Modal
      this.setState({
            modalBotella: !this.state.modalBotella
      })
      //    
  }

    //Tinto
    toggleTinto = () => {
        //Toggle Modal
        this.setState({
            modalCafe: !this.state.modalCafe
        })
        //   
    }

    //Chocolate
    toggleChocolate = () => {
        //Toggle Modal
        this.setState({
            modalChocolate: !this.state.modalChocolate
        })
        // 
    }

    menuJugos(event){
        if(this.state.estado === 'inicio'){
            this.setState({estado: 'JUGOS'})
        }else{
            this.setState({estado: 'inicio'})
        }
    }

    menuCervezas(event){
        if(this.state.estado === 'inicio'){
            this.setState({estado: 'CERVEZAS'})
        }else{
            this.setState({estado: 'inicio'})
        }
    }

    menuOtros(event){
        if(this.state.estado === 'inicio'){
            this.setState({estado: 'OTROS'})
        }else{
            this.setState({estado: 'inicio'})
        }
    }

    menuGaseosa(event){
        if(this.state.estado === 'inicio'){
            this.setState({estado: 'GASEOSAS'})
        }else{
            this.setState({estado: 'inicio'})
        }
    }

    atrasPersonal = () => {
        this.setState({estado: 'inicio'})
    }

    toggleModalCancelar = () => {
        //Toggle Modal
        this.setState({
            modal: !this.state.modal
        })
        //
    }

    toggleModalCancelarBotellaVino = () => {
        //Toggle Modal
        this.setState({
            modalBotella: !this.state.modalBotella
        })
        //
    }

    toggleModalAceptar = () => {
        let pedidoPizza = [];    
        //Guardamos en local Storag 
        let contPersonales = [JSON.parse(localStorage.getItem('Numero_Vinos'))]    
        if(contPersonales[0] === null){
            //Guardamos en local Storage
            pedidoPizza = { 'key_id' : 1,
                        'tipo' : ' VINO X ' + this.state.cantidadProducto,                        
                        'costo_vino' : 8000 * this.state.cantidadProducto,
                        'id_pedido': 'Pedido_Vino_0'};
            localStorage.setItem('Pedido_Vino_0', JSON.stringify(pedidoPizza))
            localStorage.setItem('Numero_Vinos', JSON.stringify({'Numero': 1}))
        }else{
            pedidoPizza = { 'key_id' : contPersonales[0].Numero + 1,
                        'tipo' : ' VINO X ' + this.state.cantidadProducto,                  
                        'costo_vino' : 8000 * this.state.cantidadProducto,                       
                        'id_pedido': `Pedido_Vino_${contPersonales[0].Numero}`};
            localStorage.setItem(`Pedido_Vino_${contPersonales[0].Numero}`, JSON.stringify(pedidoPizza))
            localStorage.setItem('Numero_Vinos', JSON.stringify({'Numero': contPersonales[0].Numero + 1}))
        }

        //Toggle Modal
        this.setState({
            modal: !this.state.modal
        })
        //
    }

    toggleModalAceptarBotellaVinio = () => {
        let pedidoPizza = [];    
        //Guardamos en local Storag 
        let contPersonales = [JSON.parse(localStorage.getItem('Numero_Vinos'))]    
        if(contPersonales[0] === null){
            //Guardamos en local Storage
            pedidoPizza = { 'key_id' : 1,
                        'tipo' : ' BOTELLA VINO X ' + this.state.cantidadProducto,                        
                        'costo_vino' : 40000 * this.state.cantidadProducto,
                        'id_pedido': 'Pedido_Vino_0'};
            localStorage.setItem('Pedido_Vino_0', JSON.stringify(pedidoPizza))
            localStorage.setItem('Numero_Vinos', JSON.stringify({'Numero': 1}))
        }else{
            pedidoPizza = { 'key_id' : contPersonales[0].Numero + 1,
                        'tipo' : ' BOTELLA VINO X ' + this.state.cantidadProducto,                  
                        'costo_vino' : 40000 * this.state.cantidadProducto,                       
                        'id_pedido': `Pedido_Vino_${contPersonales[0].Numero}`};
            localStorage.setItem(`Pedido_Vino_${contPersonales[0].Numero}`, JSON.stringify(pedidoPizza))
            localStorage.setItem('Numero_Vinos', JSON.stringify({'Numero': contPersonales[0].Numero + 1}))
        }

        //Toggle Modal
        this.setState({
            modalBotella: !this.state.modalBotella
        })
        //
    }

    changeCantidadProducto = (e) => {
        this.setState({
            cantidadProducto: e.target.value
        })
    }

    changeCantidadProductoCafe = (e) => {
        this.setState({
            cantidadProductoCafe: e.target.value
        })
    }

    changeCantidadProductoChocolate = (e) => {
        this.setState({
            cantidadProductoChocolate: e.target.value
        })
    }

    toggleModalAceptarCafe = () => {

        let costoAdicionLeche = 0
        if(this.state.cafeLeche === 'Con Leche'){
            costoAdicionLeche = 1000
        }

        let pedidoPizza = [];    
        //Guardamos en local Storag 
        let contPersonales = [JSON.parse(localStorage.getItem('Numero_Tintos'))]    
        if(contPersonales[0] === null){
            //Guardamos en local Storage
            pedidoPizza = { 'key_id' : 1,
                        'tipo' : this.state.tipoCafe + ' CAFÉ X ' + this.state.cantidadProductoCafe,                        
                        'costo_tinto' : (this.state.valorCafeBebida + costoAdicionLeche) * this.state.cantidadProductoCafe,
                        'mod_sabor_cafe' : this.state.cafeLeche,
                        'id_pedido': 'Pedido_Tinto_0'};
            localStorage.setItem('Pedido_Tinto_0', JSON.stringify(pedidoPizza))
            localStorage.setItem('Numero_Tintos', JSON.stringify({'Numero': 1}))
        }else{
            pedidoPizza = { 'key_id' : contPersonales[0].Numero + 1,
                        'tipo' :this.state.tipoCafe + ' CAFÉ X ' + this.state.cantidadProductoCafe,                       
                        'costo_tinto' : (this.state.valorCafeBebida + costoAdicionLeche) * this.state.cantidadProductoCafe, 
                        'mod_sabor_cafe' : this.state.cafeLeche,                      
                        'id_pedido': `Pedido_Tinto_${contPersonales[0].Numero}`};
            localStorage.setItem(`Pedido_Tinto_${contPersonales[0].Numero}`, JSON.stringify(pedidoPizza))
            localStorage.setItem('Numero_Tintos', JSON.stringify({'Numero': contPersonales[0].Numero + 1}))
        } 
        //Toggle Modal
        this.setState({
            modalCafe: !this.state.modalCafe,
            cafeLeche: 'Sin Leche'
        })
        //
    }

    toggleModalAceptarChocolate = () => {

        let costoAdicionLeche = 0
        if(this.state.chocolateLeche === 'Con Leche'){
            costoAdicionLeche = 1000
        }

        let pedidoPizza = [];    
        //Guardamos en local Storag 
        let contPersonales = [JSON.parse(localStorage.getItem('Numero_Chocolates'))]    
        if(contPersonales[0] === null){
            //Guardamos en local Storage
            pedidoPizza = { 'key_id' : 1,
                        'tipo' : ' CHOCOLATE X ' + this.state.cantidadProductoCafe,                        
                        'costo_chocolate' : costoAdicionLeche + 3000 * this.state.cantidadProductoCafe,
                        'mod_sabor_chocolate' : this.state.chocolateLeche,
                        'id_pedido': 'Pedido_Chocolate_0'};
            localStorage.setItem('Pedido_Chocolate_0', JSON.stringify(pedidoPizza))
            localStorage.setItem('Numero_Chocolates', JSON.stringify({'Numero': 1}))
        }else{
            pedidoPizza = { 'key_id' : contPersonales[0].Numero + 1,
                        'tipo' : ' CHOCOLATE X ' + this.state.cantidadProductoCafe,                       
                        'costo_chocolate' : costoAdicionLeche + 3000 * this.state.cantidadProductoCafe, 
                        'mod_sabor_chocolate' : this.state.chocolateLeche,                      
                        'id_pedido': `Pedido_Chocolate_${contPersonales[0].Numero}`};
            localStorage.setItem(`Pedido_Chocolate_${contPersonales[0].Numero}`, JSON.stringify(pedidoPizza))
            localStorage.setItem('Numero_Chocolates', JSON.stringify({'Numero': contPersonales[0].Numero + 1}))
        } 
        //Toggle Modal
        this.setState({
            modalChocolate: !this.state.modalChocolate,
            chocolateLeche: 'Sin Leche'
        })
        //
    }

    toggleModalCancelarCafe = () => {
        //Toggle Modal
        this.setState({
            modalCafe: !this.state.modalCafe
        })
        //
    }

    toggleModalCancelarChocolate = () => {
        //Toggle Modal
        this.setState({
            modalChocolate: !this.state.modalChocolate
        })
        //
    }

    changeCafeLeche = (e) => {
        this.setState({
            cafeLeche: e.target.value
        }) 
    }

    changeChocolateLeche = (e) => {
        this.setState({
            chocolateLeche: e.target.value
        }) 
    }

    changeTipoCafe = (e) => {

        if(e.target.value === "Tinto"){
            this.setState({
                valorCafeBebida: 3000
            })
        }
        if(e.target.value === "Expreso Pequeño"){
            this.setState({
                valorCafeBebida: 2000
            })
        }
        if(e.target.value === "Expreso Grande"){
            this.setState({
                valorCafeBebida: 4000
            })
        }
        if(e.target.value === "Americano Grande"){
            this.setState({
                valorCafeBebida: 4000
            })
        }
        if(e.target.value === "Americano Pequeño"){
            this.setState({
                valorCafeBebida: 2000
            })
        }
        if(e.target.value === "Capuccino Grande"){
            this.setState({
                valorCafeBebida: 5000
            })
        }
        if(e.target.value === "Capuccino Pequeño"){
            this.setState({
                valorCafeBebida: 3000
            })
        }


        this.setState({
            tipoCafe: e.target.value
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
                                {/*<div className="pizzaItem">
                                    <h1 className="pizzaOpcion">LULADA</h1>
                                </div>
                                <div className="pizzaItem">
                                    <h1 className="pizzaOpcion">LIMONADA NATURAL</h1>
                                </div>
                                <div className="pizzaItem">
                                    <h1 className="pizzaOpcion">LIMONADA JARRA</h1>
                                </div>*/}
                                <div className="pizzaItem" onClick={(e) => ( this.toggleTinto(e))}>
                                    <h1 className="pizzaOpcion">CAFE</h1>
                                </div>
                                <div className="pizzaItem" onClick={(e) => ( this.toggleChocolate(e))}>
                                    <h1 className="pizzaOpcion">CHOCOLATE</h1>
                                </div>
                                <div className="pizzaItem" onClick={(e) => ( this.toggleVino(e))}>
                                    <h1 className="pizzaOpcion">COPA DE VINO</h1>
                                </div>
                                <div className="pizzaItem" onClick={(e) => ( this.toggleVinoBotella(e))}>
                                    <h1 className="pizzaOpcion">BOTELLA DE VINO</h1>
                                </div>
                            </div>
                            <div>
                                <div className="pizzaItem" onClick={(e) => ( this.menuJugos(e))}>
                                    <h1 className="pizzaOpcion">JUGOS NATURALES</h1>
                                </div>
                                <div className="pizzaItem" onClick={(e) => ( this.menuCervezas(e))}>
                                    <h1 className="pizzaOpcion">CERVEZA NACIONAL</h1>
                                </div>                
                                <div className="pizzaItem" onClick={(e) => ( this.menuOtros(e))}>
                                    <h1 className="pizzaOpcion">AGUA O AROMATICA</h1>
                                </div>
                                <div className="pizzaItem" onClick={(e) => ( this.menuGaseosa(e))}>
                                    <h1 className="pizzaOpcion">GASEOSAS</h1>
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

                        <Modal isOpen={this.state.modalBotella}>                        
                        <ModalHeader>Cantidad</ModalHeader>
                        <ModalBody>
                            <p>Cantidad:</p>
                            <Input value={this.state.cantidadProducto} onChange={this.changeCantidadProducto} placeholder="Cantidad" /><br></br>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={this.toggleModalAceptarBotellaVinio}>Agregar Pedido</Button> {'  '}
                            <Button color="danger" onClick={this.toggleModalCancelarBotellaVino}>Cancelar</Button>
                        </ModalFooter>
                        </Modal>

                        <Modal isOpen={this.state.modalCafe}>                        
                        <ModalHeader>Cantidad</ModalHeader>
                        <ModalBody>
                            <p>Cantidad:</p>
                            <Input value={this.state.cantidadProductoCafe} onChange={this.changeCantidadProductoCafe} placeholder="Cantidad" /><br></br>
                            <p>Tipo Café:</p>
                            <Input type="select" onChange={this.changeTipoCafe}>
                            <option>
                                Seleccione Opcion
                            </option>
                            <option>
                                Tinto
                            </option>
                            <option>
                                Expreso Pequeño
                            </option>
                            <option>
                                Expreso Grande
                            </option>
                            <option>
                                Americano Grande
                            </option>
                            <option>
                                Americano Pequeño
                            </option>
                            <option>
                                Capuccino Grande
                            </option>
                            <option>
                                Capuccino Pequeño
                            </option>
                            </Input><br></br>
                            <p>Adicion de Leche:</p>
                            <Input type="select" onChange={this.changeCafeLeche}>
                            <option>
                                Seleccione Opcion
                            </option>
                            <option>
                                Con Leche
                            </option>
                            <option>
                                Sin Leche
                            </option>
                            </Input><br></br>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={this.toggleModalAceptarCafe}>Agregar Pedido</Button> {'  '}
                            <Button color="danger" onClick={this.toggleModalCancelarCafe}>Cancelar</Button>
                        </ModalFooter>
                        </Modal>

                        <Modal isOpen={this.state.modalChocolate}>                        
                        <ModalHeader>Cantidad</ModalHeader>
                        <ModalBody>
                            <p>Cantidad:</p>
                            <Input value={this.state.cantidadProductoChocolate} onChange={this.changeCantidadProductoChocolate} placeholder="Cantidad" /><br></br>
                            <p>Adicion de Leche:</p>
                            <Input type="select" onChange={this.changeChocolateLeche}>
                            <option>
                                Seleccione Opcion
                            </option>
                            <option>
                                Con Leche
                            </option>
                            <option>
                                Sin Leche
                            </option>
                            </Input><br></br>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={this.toggleModalAceptarChocolate}>Agregar Pedido</Button> {'  '}
                            <Button color="danger" onClick={this.toggleModalCancelarChocolate}>Cancelar</Button>
                        </ModalFooter>
                        </Modal>
                        </>
                    );
                case "JUGOS":
                    return (<Jugos atrasMenuPersonal={this.atrasPersonal} />)
                case "CERVEZAS":
                    return (<Cervezas atrasMenuPersonal={this.atrasPersonal} />)
                case "OTROS":
                    return (<Otros atrasMenuPersonal={this.atrasPersonal} />)
                case "GASEOSAS":
                    return (<Gaseosas atrasMenuPersonal={this.atrasPersonal} />)
                default:  return <p style={{textAlign: 'center'}}>SELECCIONE OPCION</p>
            }
        }
        return(
            <div>{ opcionPizza() }</div>
        )
    }
    
}

export default MenuBebidas