import React, { Component } from 'react';
//import CombinadaIngredientes from './CombinadaIngredientes'
import '../../../App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

class jugosnaturales extends Component {
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
            modalMango: false,
            cantidadProducto: 1,
            MangoLeche: 'Sin Leche',
            modalLulo: false,
            modalMora: false,
            modalGuanabana: false,  
            modalLimonada: false,
            modalLimonadaJarra: false,
            modalLulada: false,
        }
    }

onClickBack = () => {
    this.props.atrasMenuPersonal();
}

atrasPersonal = () => {
    this.setState({estado: 'inicio'})
}

handleMango = () => {
    //Toggle Modal
    this.setState({
        modalMango: !this.state.modalMango
    })
    //       
}

handleLulo = () => {
     //Toggle Modal
    this.setState({
        modalLulo: !this.state.modalLulo
    })
    // 
}

handleLulaDa = () => {
    //Toggle Modal
   this.setState({
        modalLulada: !this.state.modalLulada
   })
   // 
}

handleMora = () => {
     //Toggle Modal
     this.setState({
        modalMora: !this.state.modalMora
    })
    // 
}

handleGuanabana = () => {
    //Toggle Modal
    this.setState({
        modalGuanabana: !this.state.modalGuanabana
    })
    //
}

handleLimonada = () => {
    this.setState({
        modalLimonada: !this.state.modalLimonada
    })
}

handleJarraLimonada = () => {
    this.setState({
        modalLimonadaJarra: !this.state.modalLimonadaJarra
    })
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
        })
    }else(
        this.setState({
            promo: false,
            textoBoton: 'Sin Azucar',
            classSalsa: 'buttonBolognesa',            
        })
    ) 
}

changeCantidadProducto = (e) => {
    this.setState({
        cantidadProducto: e.target.value
    })
}

toggleModalCancelarMango = () => {
    //Toggle Modal
    this.setState({
        modalMango: !this.state.modalMango
    })
    //
}

toggleModalCancelarLulo = () => {
    //Toggle Modal
    this.setState({
        modalLulo: !this.state.modalLulo
    })
    //
}

toggleModalCancelarMora = () => {
    //Toggle Modal
    this.setState({
        modalMora: !this.state.modalMora
    })
    //
}

toggleModalCancelarGuanabana = () => {
    //Toggle Modal
    this.setState({
        modalGuanabana: !this.state.modalGuanabana
    })
    //
}

toggleModalCancelarLimonada = () => {
    this.setState({
        modalLimonada: !this.state.modalLimonada
    })
}

toggleModalCancelarLimonadaJarra = () => {
    this.setState({
        modalLimonadaJarra: !this.state.modalLimonadaJarra
    })
}

toggleModalAceptarLimonadaJarra = () => {
    var dato = "JARRA LIMONADA"
    let pedidoPizza = [];    
    //Guardamos en local Storag 
    let contPersonales = [JSON.parse(localStorage.getItem('Numero_Jugos'))]    
    if(contPersonales[0] === null){
        //Guardamos en local Storage
        pedidoPizza = { 'key_id' : 1,
                    'tipo' : 'JUGO ' + dato + ' X ' + this.state.cantidadProducto ,   
                    'mod_sabor_jugo' : this.state.textoBoton,               
                    'costo_jugo' : process.env.REACT_APP_JARRA_LIMONADA_COSTO * this.state.cantidadProducto,
                    'id_pedido': 'Pedido_Jugo_0'};
        localStorage.setItem('Pedido_Jugo_0', JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Jugos', JSON.stringify({'Numero': 1}))
    }else{
        pedidoPizza = { 'key_id' : contPersonales[0].Numero + 1,
                    'tipo' : 'JUGO ' + dato + ' X ' + this.state.cantidadProducto ,  
                    'mod_sabor_jugo' : this.state.textoBoton,                  
                    'costo_jugo' : (process.env.REACT_APP_JARRA_LIMONADA_COSTO) * this.state.cantidadProducto,                    
                    'id_pedido': `Pedido_Jugo_${contPersonales[0].Numero}`};
        localStorage.setItem(`Pedido_Jugo_${contPersonales[0].Numero}`, JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Jugos', JSON.stringify({'Numero': contPersonales[0].Numero + 1}))
    }  

    //Toggle Modal
    this.setState({
        modalLimonadaJarra: !this.state.modalLimonadaJarra,
        cantidadProducto: 1
    })
    //
}

toggleModalAceptarMango = () => {
    let adicionLeche = 0
    if(this.state.MangoLeche === 'Con Leche'){
        adicionLeche = 1000
    }

    var dato = "MANGO"  
    let pedidoPizza = [];    
    //Guardamos en local Storag 
    let contPersonales = [JSON.parse(localStorage.getItem('Numero_Jugos'))]    
    if(contPersonales[0] === null){
        //Guardamos en local Storage
        pedidoPizza = { 'key_id' : 1,
                    'tipo' : 'JUGO ' + dato + ' X ' + this.state.cantidadProducto ,   
                    'mod_sabor_jugo' : this.state.textoBoton + ', ' +  this.state.MangoLeche,                  
                    'costo_jugo' : (parseInt(process.env.REACT_APP_JUGOS_NATURALES_COSTO) + adicionLeche) * this.state.cantidadProducto,
                    'id_pedido': 'Pedido_Jugo_0'};
        localStorage.setItem('Pedido_Jugo_0', JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Jugos', JSON.stringify({'Numero': 1}))
    }else{
        pedidoPizza = { 'key_id' : contPersonales[0].Numero + 1,
                    'tipo' : 'JUGO ' + dato + ' X ' + this.state.cantidadProducto,  
                    'mod_sabor_jugo' : this.state.textoBoton + ', ' +  this.state.MangoLeche ,                    
                    'costo_jugo' : (parseInt(process.env.REACT_APP_JUGOS_NATURALES_COSTO) + adicionLeche) * this.state.cantidadProducto,                       
                    'id_pedido': `Pedido_Jugo_${contPersonales[0].Numero}`};
        localStorage.setItem(`Pedido_Jugo_${contPersonales[0].Numero}`, JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Jugos', JSON.stringify({'Numero': contPersonales[0].Numero + 1}))
    } 

    //Toggle Modal
    this.setState({
        modalMango: !this.state.modalMango,
        MangoLeche: 'Sin Leche',
        cantidadProducto: 1
    })
    //
}

toggleModalAceptarLulo = () => {
    let adicionLeche = 0
    if(this.state.MangoLeche === 'Con Leche'){
        adicionLeche = 1000
    }

    var dato = "LULO"
    let pedidoPizza = [];    
    //Guardamos en local Storag 
    let contPersonales = [JSON.parse(localStorage.getItem('Numero_Jugos'))]    
    if(contPersonales[0] === null){
        //Guardamos en local Storage
        pedidoPizza = { 'key_id' : 1,
                    'tipo' : 'JUGO ' + dato + ' X ' + this.state.cantidadProducto ,   
                    'mod_sabor_jugo' : this.state.textoBoton + ', ' +  this.state.MangoLeche  ,                  
                    'costo_jugo' : (parseInt(process.env.REACT_APP_JUGOS_NATURALES_COSTO) + adicionLeche) * this.state.cantidadProducto,
                    'id_pedido': 'Pedido_Jugo_0'};
        localStorage.setItem('Pedido_Jugo_0', JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Jugos', JSON.stringify({'Numero': 1}))
    }else{
        pedidoPizza = { 'key_id' : contPersonales[0].Numero + 1,
                    'tipo' : 'JUGO ' + dato + ' X ' + this.state.cantidadProducto ,  
                    'mod_sabor_jugo' : this.state.textoBoton + ', ' +  this.state.MangoLeche  ,                    
                    'costo_jugo' : (parseInt(process.env.REACT_APP_JUGOS_NATURALES_COSTO) + adicionLeche) * this.state.cantidadProducto,                       
                    'id_pedido': `Pedido_Jugo_${contPersonales[0].Numero}`};
        localStorage.setItem(`Pedido_Jugo_${contPersonales[0].Numero}`, JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Jugos', JSON.stringify({'Numero': contPersonales[0].Numero + 1}))
    }

    //Toggle Modal
    this.setState({
        modalLulo: !this.state.modalLulo,
        MangoLeche: 'Sin Leche',
        cantidadProducto: 1
    })
    //
}

toggleModalAceptarLulada = () => {
    let adicionLeche = 0

    var dato = "LULADA"
    let pedidoPizza = [];    
    //Guardamos en local Storag 
    let contPersonales = [JSON.parse(localStorage.getItem('Numero_Jugos'))]    
    if(contPersonales[0] === null){
        //Guardamos en local Storage
        pedidoPizza = { 'key_id' : 1,
                    'tipo' : 'JUGO ' + dato + ' X ' + this.state.cantidadProducto ,   
                    'mod_sabor_jugo' : this.state.textoBoton + ', ' +  this.state.MangoLeche  ,                  
                    'costo_jugo' : (parseInt(process.env.REACT_APP_LULADA_COSTO) + adicionLeche) * this.state.cantidadProducto,
                    'id_pedido': 'Pedido_Jugo_0'};
        localStorage.setItem('Pedido_Jugo_0', JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Jugos', JSON.stringify({'Numero': 1}))
    }else{
        pedidoPizza = { 'key_id' : contPersonales[0].Numero + 1,
                    'tipo' : 'JUGO ' + dato + ' X ' + this.state.cantidadProducto ,  
                    'mod_sabor_jugo' : this.state.textoBoton + ', ' +  this.state.MangoLeche  ,                    
                    'costo_jugo' : (parseInt(process.env.REACT_APP_LULADA_COSTO) + adicionLeche) * this.state.cantidadProducto,                       
                    'id_pedido': `Pedido_Jugo_${contPersonales[0].Numero}`};
        localStorage.setItem(`Pedido_Jugo_${contPersonales[0].Numero}`, JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Jugos', JSON.stringify({'Numero': contPersonales[0].Numero + 1}))
    }

    //Toggle Modal
    this.setState({
        modalLulada: !this.state.modalLulada,
        cantidadProducto: 1
    })
    //
}

toggleModalAceptarLimonada = () => {
    var dato = "LIMONADA"
    let pedidoPizza = [];    
    //Guardamos en local Storag 
    let contPersonales = [JSON.parse(localStorage.getItem('Numero_Jugos'))]    
    if(contPersonales[0] === null){
        //Guardamos en local Storage
        pedidoPizza = { 'key_id' : 1,
                    'tipo' : 'JUGO ' + dato + ' X ' + this.state.cantidadProducto ,   
                    'mod_sabor_jugo' : this.state.textoBoton,               
                    'costo_jugo' : parseInt(process.env.REACT_APP_LIMONADA_COSTO) * this.state.cantidadProducto,
                    'id_pedido': 'Pedido_Jugo_0'};
        localStorage.setItem('Pedido_Jugo_0', JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Jugos', JSON.stringify({'Numero': 1}))
    }else{
        pedidoPizza = { 'key_id' : contPersonales[0].Numero + 1,
                    'tipo' : 'JUGO ' + dato + ' X ' + this.state.cantidadProducto ,  
                    'mod_sabor_jugo' : this.state.textoBoton,                  
                    'costo_jugo' : parseInt(process.env.REACT_APP_LIMONADA_COSTO) * this.state.cantidadProducto,                    
                    'id_pedido': `Pedido_Jugo_${contPersonales[0].Numero}`};
        localStorage.setItem(`Pedido_Jugo_${contPersonales[0].Numero}`, JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Jugos', JSON.stringify({'Numero': contPersonales[0].Numero + 1}))
    }  

    //Toggle Modal
    this.setState({
        modalLimonada: !this.state.modalLimonada,
        cantidadProducto: 1
    })
    //
}

toggleModalAceptarMora = () => {
    let adicionLeche = 0
    if(this.state.MangoLeche === 'Con Leche'){
        adicionLeche = 1000
    }

    var dato = "MORA"
    let pedidoPizza = [];    
    //Guardamos en local Storag 
    let contPersonales = [JSON.parse(localStorage.getItem('Numero_Jugos'))]    
    if(contPersonales[0] === null){
        //Guardamos en local Storage
        pedidoPizza = { 'key_id' : 1,
                    'tipo' : 'JUGO ' + dato + ' X ' + this.state.cantidadProducto ,   
                    'mod_sabor_jugo' : this.state.textoBoton + ', ' +  this.state.MangoLeche,                  
                    'costo_jugo' : (parseInt(process.env.REACT_APP_JUGOS_NATURALES_COSTO) + adicionLeche) * this.state.cantidadProducto,
                    'id_pedido': 'Pedido_Jugo_0'};
        localStorage.setItem('Pedido_Jugo_0', JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Jugos', JSON.stringify({'Numero': 1}))
    }else{
        pedidoPizza = { 'key_id' : contPersonales[0].Numero + 1,
                    'tipo' : 'JUGO ' + dato + ' X ' + this.state.cantidadProducto ,  
                    'mod_sabor_jugo' : this.state.textoBoton + ', ' +  this.state.MangoLeche,                    
                    'costo_jugo' : (parseInt(process.env.REACT_APP_JUGOS_NATURALES_COSTO) + adicionLeche) * this.state.cantidadProducto,                    
                    'id_pedido': `Pedido_Jugo_${contPersonales[0].Numero}`};
        localStorage.setItem(`Pedido_Jugo_${contPersonales[0].Numero}`, JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Jugos', JSON.stringify({'Numero': contPersonales[0].Numero + 1}))
    }  

    //Toggle Modal
    this.setState({
        modalMora: !this.state.modalMora,
        MangoLeche: 'Sin Leche',
        cantidadProducto: 1
    })
    //
}

toggleModalAceptarGuanabana = () => {
    let adicionLeche = 0
    if(this.state.MangoLeche === 'Con Leche'){
        adicionLeche = 1000
    }

    var dato = "GUANABANA"
    let pedidoPizza = [];    
    //Guardamos en local Storag 
    let contPersonales = [JSON.parse(localStorage.getItem('Numero_Jugos'))]    
    if(contPersonales[0] === null){
        //Guardamos en local Storage
        pedidoPizza = { 'key_id' : 1,
                    'tipo' : 'JUGO ' + dato + ' X ' + this.state.cantidadProducto ,   
                    'mod_sabor_jugo' : this.state.textoBoton + ', ' +  this.state.MangoLeche,                  
                    'costo_jugo' : (parseInt(process.env.REACT_APP_JUGOS_NATURALES_COSTO) + adicionLeche) * this.state.cantidadProducto,
                    'id_pedido': 'Pedido_Jugo_0'};
        localStorage.setItem('Pedido_Jugo_0', JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Jugos', JSON.stringify({'Numero': 1}))
    }else{
        pedidoPizza = { 'key_id' : contPersonales[0].Numero + 1,
                    'tipo' : 'JUGO ' + dato + ' X ' + this.state.cantidadProducto ,  
                    'mod_sabor_jugo' : this.state.textoBoton + ', ' +  this.state.MangoLeche,                    
                    'costo_jugo' : (parseInt(process.env.REACT_APP_JUGOS_NATURALES_COSTO) + adicionLeche) * this.state.cantidadProducto,                    
                    'id_pedido': `Pedido_Jugo_${contPersonales[0].Numero}`};
        localStorage.setItem(`Pedido_Jugo_${contPersonales[0].Numero}`, JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Jugos', JSON.stringify({'Numero': contPersonales[0].Numero + 1}))
    }  

    //Toggle Modal
    this.setState({
        modalGuanabana: !this.state.modalGuanabana,
        MangoLeche: 'Sin Leche',
        cantidadProducto: 1
    })
    //
}

    changeMangoLeche = (e) => {
        this.setState({
            MangoLeche: e.target.value
        }) 
    }

    render(){
        const opcionPizza = () => {
            switch(this.state.estado) {
                case "inicio": return(
                    <>
                    <div>
                    <div className='centrarButtonPromocionLasagna'>
                        <p style={{marginLeft: '10px'}}>Jugo de: {this.props.porcion}</p>
                        <p> </p>  
                        <button className={this.state.classSalsa} onClick={this.esPromocion}>{this.state.textoBoton}</button>
                    </div>
                    <div className="SaboresPizza">
                        <div>
                            <div className="saborItem" onClick={this.handleMango}>
                                <h1 className="pizzaOpcionSabor">Mango</h1>
                            </div>
                            <div className="saborItem" onClick={this.handleLulo}>
                                <h1 className="pizzaOpcionSabor">Lulo</h1>
                            </div>    
                            <div className="saborItem" onClick={this.handleLulaDa}>
                                <h1 className="pizzaOpcionSabor">LulaDA</h1>
                            </div> 
                            <div className="saborItem" onClick={this.handleMora}>
                                <h1 className="pizzaOpcionSabor">Mora</h1>
                            </div>      
                            <div className="saborItem" onClick={this.handleGuanabana}>
                                <h1 className="pizzaOpcionSabor">Guanabana</h1>
                            </div>   
                            <div className="saborItem" onClick={this.handleLimonada}>
                                <h1 className="pizzaOpcionSabor">Limonada</h1>
                            </div> 
                            <div className="saborItem" onClick={this.handleJarraLimonada}>
                                <h1 className="pizzaOpcionSabor">Jarra Limonada</h1>
                            </div>                 
                        </div>
                       
                                 
                    </div>
                    <p onClick={this.onClickBack} className='atras'>atras..</p>
                    </div>

                    <Modal isOpen={this.state.modalMango}>                        
                        <ModalHeader>Cantidad</ModalHeader>
                        <ModalBody>
                            <p>Cantidad:</p>
                            <Input value={this.state.cantidadProducto} onChange={this.changeCantidadProducto} placeholder="Cantidad" /><br></br>
                            <p>Adicion de Leche:</p>
                            <Input type="select" onChange={this.changeMangoLeche}>
                            <option>
                                Opcion
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
                            <Button color="success" onClick={this.toggleModalAceptarMango}>Agregar Pedido</Button> {'  '}
                            <Button color="danger" onClick={this.toggleModalCancelarMango}>Cancelar</Button>
                        </ModalFooter>
                    </Modal>

                    <Modal isOpen={this.state.modalLulo}>                        
                        <ModalHeader>Cantidad</ModalHeader>
                        <ModalBody>
                            <p>Cantidad:</p>
                            <Input value={this.state.cantidadProducto} onChange={this.changeCantidadProducto} placeholder="Cantidad" /><br></br>
                            <p>Adicion de Leche:</p>
                            <Input type="select" onChange={this.changeMangoLeche}>
                            <option>
                                Opcion
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
                            <Button color="success" onClick={this.toggleModalAceptarLulo}>Agregar Pedido</Button> {'  '}
                            <Button color="danger" onClick={this.toggleModalCancelarLulo}>Cancelar</Button>
                        </ModalFooter>
                    </Modal>

                    <Modal isOpen={this.state.modalLulada}>                        
                        <ModalHeader>Cantidad</ModalHeader>
                        <ModalBody>
                            <p>Cantidad:</p>
                            <Input value={this.state.cantidadProducto} onChange={this.changeCantidadProducto} placeholder="Cantidad" /><br></br>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={this.toggleModalAceptarLulada}>Agregar Pedido</Button> {'  '}
                            <Button color="danger" onClick={this.toggleModalCancelarLulada}>Cancelar</Button>
                        </ModalFooter>
                    </Modal>

                    <Modal isOpen={this.state.modalMora}>                        
                        <ModalHeader>Cantidad</ModalHeader>
                        <ModalBody>
                            <p>Cantidad:</p>
                            <Input value={this.state.cantidadProducto} onChange={this.changeCantidadProducto} placeholder="Cantidad" /><br></br>
                            <p>Adicion de Leche:</p>
                            <Input type="select" onChange={this.changeMangoLeche}>
                            <option>
                                Opcion
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
                            <Button color="success" onClick={this.toggleModalAceptarMora}>Agregar Pedido</Button> {'  '}
                            <Button color="danger" onClick={this.toggleModalCancelarMora}>Cancelar</Button>
                        </ModalFooter>
                    </Modal>

                    <Modal isOpen={this.state.modalGuanabana}>                        
                        <ModalHeader>Cantidad</ModalHeader>
                        <ModalBody>
                            <p>Cantidad:</p>
                            <Input value={this.state.cantidadProducto} onChange={this.changeCantidadProducto} placeholder="Cantidad" /><br></br>
                            <p>Adicion de Leche:</p>
                            <Input type="select" onChange={this.changeMangoLeche}>
                            <option>
                                Opcion
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
                            <Button color="success" onClick={this.toggleModalAceptarGuanabana}>Agregar Pedido</Button> {'  '}
                            <Button color="danger" onClick={this.toggleModalCancelarGuanabana}>Cancelar</Button>
                        </ModalFooter>
                    </Modal>

                    <Modal isOpen={this.state.modalLimonada}>                        
                        <ModalHeader>Cantidad</ModalHeader>
                        <ModalBody>
                            <p>Cantidad:</p>
                            <Input value={this.state.cantidadProducto} onChange={this.changeCantidadProducto} placeholder="Cantidad" /><br></br>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={this.toggleModalAceptarLimonada}>Agregar Pedido</Button> {'  '}
                            <Button color="danger" onClick={this.toggleModalCancelarLimonada}>Cancelar</Button>
                        </ModalFooter>
                    </Modal>

                    <Modal isOpen={this.state.modalLimonadaJarra}>                        
                        <ModalHeader>Cantidad</ModalHeader>
                        <ModalBody>
                            <p>Cantidad:</p>
                            <Input value={this.state.cantidadProducto} onChange={this.changeCantidadProducto} placeholder="Cantidad" /><br></br>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={this.toggleModalAceptarLimonadaJarra}>Agregar Pedido</Button> {'  '}
                            <Button color="danger" onClick={this.toggleModalCancelarLimonadaJarra}>Cancelar</Button>
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

export default jugosnaturales;