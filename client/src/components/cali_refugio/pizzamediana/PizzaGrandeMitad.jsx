import React from 'react';
import { Component } from 'react';
import '../../../App.css';
import SaboresPizzaGrande from './SaboresPizzaGrande';
import CombinadaIngredientesGrande from './CombinadaIngredientesGrande';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

class PizzaGrandeMitad extends Component {
    constructor(props){
        super(props);    
        this.state={
            estado: 'inicio',
            porcion: '',
            mitaduno: '',
            mitaddos: '',
            mitadunoadicion: '',
            mitaddosadicion: '',
            modal: false,
            indAdicionalUno : '',
            indAdicionalDos : '',
            promo: false,
            textoBoton: 'NO ES PROMOCION',
            classSinConPromo: 'buttonPromocion',
            costoPizzaMediana: 56000,
        }
    }

onClickBack = () => {
    this.props.atrasMenuPersonal();
}

atrasPersonal = () => {
    this.setState({estado: 'inicio'})
}

atrasPersonalSabor = (dato, porcion) => {
    if(porcion === "mitaduno"){
        this.setState({
            mitaduno: dato,
            estado: 'inicio',
            mitadunoadicion: ''
        })        
    }else if(porcion === "mitaddos"){
        this.setState({
            mitaddos: dato,
            estado: 'inicio',
            mitaddosadicion: ''
        })        
    }
    /*setTimeout(() => {
        this.validadorproductocompleto()
    }, 100);*/ 
}

atrasPersonalSaborAdicion = (dato, porcion) => {
    if(porcion === "mitaduno"){
        this.setState({mitadunoadicion: dato + this.state.mitadunoadicion,
            estado: 'inicio'})
    }else if(porcion === "mitaddos"){
        this.setState({mitaddosadicion: dato + this.state.mitaddosadicion,
            estado: 'inicio'})
    }
}

sinIngredientesMitadUno = () => {
    if(this.state.mitaduno === "") {
        alert('No hay sabor')
    }else{
        this.setState({estado: "siningredientesmitaduno"})
    }
}

sinIngredientesMitadDos = () => {
    if(this.state.mitaddos === "") {
        alert('No hay sabor')
    }else{
        this.setState({estado: "siningredientesmitaddos"})
    }
}

adicionMitadUno = () => {
    if(this.state.mitaduno === "") {
        alert('No hay sabor')
    }else{
        this.setState({estado: "adicionmitaduno"})
    }
}

adicionMitadDos = () => {
    if(this.state.mitaddos === "") {
        alert('No hay sabor')
    }else{
        this.setState({estado: "adicionmitaddos"})
    }
}

agregaraCuentaMitad = (dato, porcion) => {
    //console.log(dato, porcion)     
}

agregaraCuentaAdicionSinIng = (porcion, modificacionIng) => {
    //console.log(porcion, this.state.mitaduno, modificacionIng)     
}

agregarproducto = () => {
    /*console.log("1/2: ", this.state.mitaduno)
    console.log("1/2: ", this.state.mitadunoadicion)
    console.log("2/2: ", this.state.mitaddos)
    console.log("2/2: ", this.state.mitaddosadicion)*/
    //Abrimos modal    
    if(this.state.mitaduno === '' || this.state.mitaddos === ''){
        alert('Completar sabores!!')
    }else{
        this.setState({
            modal: !this.state.modal
        })
        //***//
    }    
}

validadorproductocompleto = () => {
    if(this.state.mitaduno === '' || this.state.mitaddos === ''){
        /*console.log("Por favor agrege todos los sabores !")*/
    }else{
        //document.getElementById("confOrden").style.backgroundColor = 'greenyellow'
    }
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
    if(this.state.mitadunoadicion !== ''){
        for (let i = 0; i < this.state.mitadunoadicion.length; i++) {
            if(this.state.mitadunoadicion[i] === '+'){
                costoadicion = costoadicion + 4000
            }
        }
    }
    if(this.state.mitaddosadicion !== ''){
        for (let i = 0; i < this.state.mitaddosadicion.length; i++) {
            if(this.state.mitaddosadicion[i] === '+'){
                costoadicion = costoadicion + 4000
            }
        } 
    }

    let contPersonales = [JSON.parse(localStorage.getItem('Numero_Grandes'))]

    if(contPersonales[0] === null){
        //Guardamos en local Storage
        //Estructura del dato
        pedidoPizza = {
            'key_id' : keyId,
            'tipo' : 'PIZZA GRANDE MITAD',
            'mitad_uno' : this.state.mitaduno,
            'mod_mitad_uno' : this.state.mitadunoadicion,
            'ind_mitad_uno_adicional': this.state.indAdicionalUno,
            'mitad_dos' : this.state.mitaddos,
            'mod_mitad_dos' : this.state.mitaddosadicion,
            'ind_mitad_dos_adicional': this.state.indAdicionalDos,
            'costo_grande' : this.state.costoPizzaMediana,
            'costo_adiciones_grande' : costoadicion,
            'id_pedido': 'Pedido_Grande_Mitad_0'}
        localStorage.setItem('Pedido_Grande_Mitad_0', JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Grandes', JSON.stringify({'Numero': 1}))
    }else{
        pedidoPizza = {
            'key_id' : keyId,
            'tipo' : 'PIZZA GRANDE MITAD',
            'mitad_uno' : this.state.mitaduno,
            'mod_mitad_uno' : this.state.mitadunoadicion,
            'ind_mitad_uno_adicional': this.state.indAdicionalUno,
            'mitad_dos' : this.state.mitaddos,
            'mod_mitad_dos' : this.state.mitaddosadicion,
            'ind_mitad_dos_adicional': this.state.indAdicionalDos,
            'costo_grande' : this.state.costoPizzaMediana,
            'costo_adiciones_grande' : costoadicion,
            'id_pedido': `Pedido_Grande_Mitad_${contPersonales[0].Numero}`}
        localStorage.setItem(`Pedido_Grande_Mitad_${contPersonales[0].Numero}`, JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Grandes', JSON.stringify({'Numero': contPersonales[0].Numero + 1}))
    }
   
    //Toggle Modal//
    this.setState({
        modal: !this.state.modal
    })
    //Atras
    this.props.atrasMenuPersonal();
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

esPromocion = () => {
    if(this.state.promo === false){
        this.setState({
            promo: true,
            textoBoton: 'ES PROMOCION',
            classSinConPromo: 'buttonPromocionOn',
            costoPizzaMediana: 49500
        })
    }else(
        this.setState({
            promo: false,
            textoBoton: 'NO ES PROMOCION',
            classSinConPromo: 'buttonPromocion',
            costoPizzaMediana: 56000
        })
    ) 
}

render(){
    const opcionPizza = () => {
        switch(this.state.estado) {
            case "inicio": return(
            <>
            <div>
                <p style={{textAlign: 'center'}}>PIZZA PERSONAL POR MITADES MITAD</p>
                <div className='centrarButtonPromocion'>
                    <button className={this.state.classSinConPromo} onClick={this.esPromocion}>{this.state.textoBoton}</button>
                </div> 
                <div className='pizzaforma'>
                    <div>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div className='adicion' onClick={this.adicionMitadUno}>                                
                        </div>
                        <div className='siningredientesmitad' onClick={this.sinIngredientesMitadUno}>                                
                        </div>
                    </div>
                        <div className='mitaduno' onClick={() => (
                        this.setState({estado: 'mitaduno'})
                    )}>
                        <p>{this.state.mitaduno} {this.state.mitadunoadicion}</p>
                        </div>
                        <div className='mitaddos' onClick={() => (
                        this.setState({estado: 'mitaddos'})
                    )}>
                        <p>{this.state.mitaddos} {this.state.mitaddosadicion}</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div className='adicion' onClick={this.adicionMitadDos}>                                
                        </div>
                        <div className='siningredientesmitad' onClick={this.sinIngredientesMitadDos}>                                
                        </div> 
                        </div>                        
                    </div>                    
                    <button className='agregarapedido' onClick={this.agregarproducto}>AGREGAR</button>
                                                   
                </div>                
                <p onClick={this.onClickBack} 
                className='atras'>atras..</p>
            </div>
            
            <Modal isOpen={this.state.modal}>                        
                <ModalHeader>Pedido PIZZA PERSONAL POR MITADES</ModalHeader>
                <ModalBody>
                    <p>Mitad uno:  <strong>{this.state.mitaduno}</strong></p>
                    <p>Adicion y/o Sin ingredientes Mitad uno: <strong>{this.state.mitadunoadicion}</strong></p>
                    <Input value={this.state.indAdicionalUno} onChange={this.indicacionAdicionalUno} placeholder="Indicacion Adicional Mitad Uno" /><br></br>
                    <p>Mitad dos: <strong>{this.state.mitaddos}</strong></p>
                    <p>Adicion y/o Sin ingredientes Mitad uno: <strong>{this.state.mitaddosadicion}</strong></p>
                    <Input value={this.state.indAdicionalDos} onChange={this.indicacionAdicionalDos} placeholder="Indicacion Adicional Mitad Dos" /><br></br>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={this.toggleModalAceptar}>Agregar Pedido</Button> {'  '}
                    <Button color="danger" onClick={this.toggleModalCancelar}>Cancelar</Button>
                </ModalFooter>
            </Modal>   

           </>
            )
            case 'mitaduno': return (<SaboresPizzaGrande porcion="mitaduno" atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSabor} cuentamitad={this.agregaraCuentaMitad}/>)
            case 'mitaddos': return (<SaboresPizzaGrande porcion="mitaddos" atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSabor} cuentamitad={this.agregaraCuentaMitad}/>)
            case 'adicionmitaduno': return (<CombinadaIngredientesGrande porcion="mitaduno" atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSaborAdicion} cuentamitadmodificacion={this.agregaraCuentaAdicionSinIng}/>)
            case 'adicionmitaddos': return (<CombinadaIngredientesGrande porcion="mitaddos" atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSaborAdicion} cuentamitadmodificacion={this.agregaraCuentaAdicionSinIng}/>)
            case 'siningredientesmitaduno': return (<CombinadaIngredientesGrande porcion="mitaduno" opcioncuarto='ingredientemenos' atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSaborAdicion} cuentamitadmodificacion={this.agregaraCuentaAdicionSinIng}/>)
            case 'siningredientesmitaddos': return (<CombinadaIngredientesGrande porcion="mitaddos" opcioncuarto='ingredientemenos' atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSaborAdicion} cuentamitadmodificacion={this.agregaraCuentaAdicionSinIng}/>)
        }
    }
    return(
        <div>{ opcionPizza()}</div>
    )
}
}

export default PizzaGrandeMitad