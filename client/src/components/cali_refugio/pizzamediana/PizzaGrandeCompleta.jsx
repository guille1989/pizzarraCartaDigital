import React from 'react';
import { Component } from 'react';
import '../../../App.css';
import SaboresPizzaGrande from './SaboresPizzaGrande';
import CombinadaIngredientesGrande from './CombinadaIngredientesGrande';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

class PizzaGrandeCompleta extends Component {
    constructor(props){
        super(props);    
        this.state={
            estado: 'inicio',
            porcion: '',
            saborpizza: '',
            saborpizzaadicion: '',
            modal: false,
            indAdicional: '',
            indicacionAdicional: '',
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
    if(porcion === "saborpizza"){
        this.setState({
            saborpizza: dato,
            estado: 'inicio',
            saborpizzaadicion: ''
        })
    }
    
}

atrasPersonalSaborAdicion = (dato, porcion) => {
    if(porcion === "saborpizza"){
        this.setState({saborpizzaadicion: dato + this.state.saborpizzaadicion,
            estado: 'inicio'})
    }
}

sinIngredientesPizza = () => {
    if(this.state.saborpizza === "") {
        alert('No hay sabor')
    }else{
        this.setState({estado: "siningredientes"})
    }
}

adicionIngrediente = () => {
    if(this.state.saborpizza === "") {
        alert('No hay sabor')
    }else{
        this.setState({estado: "adicionentera"})
    }
}

agregaraCuenta = (dato, porcion) => {
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
    if(this.state.saborpizza === ''){
        alert('Completar sabores!!')
    }else{
        this.setState({
            modal: !this.state.modal
        })
        //***//
    }    
}

indicacionAdicional = (e) => {
    this.setState({
        indAdicional: e.target.value
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
    let costoadicion = 0;
    let keyId = 0;
    
    //Validamos costo ingredientes adicionales
    if(this.state.saborpizzaadicion !== ''){
        for (let i = 0; i < this.state.saborpizzaadicion.length; i++) {
            if(this.state.saborpizzaadicion[i] === '+'){
                costoadicion = costoadicion + 8000
            }
        }
    }

    //Guardamos en local Storag 
    let contPersonales = [JSON.parse(localStorage.getItem('Numero_Grandes'))]

    if(contPersonales[0] === null){
        //Guardamos en local Storage
        pedidoPizza = { 'key_id' : keyId,
                        'tipo' : 'PIZZA GRANDE COMPLETA',
                        'sabor_grande' : this.state.saborpizza,
                        'mod_sabor_grande' : this.state.saborpizzaadicion,
                        'ind_grande_adicional': this.state.indAdicional,
                        'costo_grande' : this.state.costoPizzaMediana,
                        'costo_adiciones_grande' : costoadicion,
                        'id_pedido': 'Pedido_Grande_0'};
        localStorage.setItem('Pedido_Grande_0', JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Grandes', JSON.stringify({'Numero': 1}))
    }else{
        pedidoPizza = { 'key_id' : keyId,
                        'tipo' : 'PIZZA GRANDE COMPLETA',
                        'sabor_grande' : this.state.saborpizza,
                        'mod_sabor_grande' : this.state.saborpizzaadicion,
                        'ind_grande_adicional': this.state.indAdicional,
                        'costo_grande' : this.state.costoPizzaMediana,
                        'costo_adiciones_grande' : costoadicion,
                        'id_pedido': `Pedido_Grande_${contPersonales[0].Numero}`};
        localStorage.setItem(`Pedido_Grande_${contPersonales[0].Numero}`, JSON.stringify(pedidoPizza))
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
                <p style={{textAlign: 'center'}}>PIZZA GRANDE COMPLETA</p>  
                <div className='centrarButtonPromocion'>
                    <button className={this.state.classSinConPromo} onClick={this.esPromocion}>{this.state.textoBoton}</button>
                </div>              
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div className='adicioncompleta' onClick={this.adicionIngrediente}>                                
                    </div>
                    <div className='siningredientescompleta' onClick={this.sinIngredientesPizza}>                                
                    </div>   
                </div>
                <div className='pizzaforma'>                    
                    <div>
                        <div className='completa' onClick={() => (
                        this.setState({estado: 'saborpizza'})
                    )}>
                        <p>{this.state.saborpizza} {this.state.saborpizzaadicion}</p>
                        </div>
                    </div>
                    <button className='agregarapedido' onClick={this.agregarproducto}>AGREGAR</button>                       
                </div>             
                <p onClick={this.onClickBack} className='atras'>atras..</p>
                </div>

            <Modal isOpen={this.state.modal}>                        
            <ModalHeader>Pedido PIZZA PERSONAL POR MITADES</ModalHeader>
            <ModalBody>
                <p>Sabor:  <strong>{this.state.saborpizza}</strong></p>
                <p>Adicion y/o Sin ingredientes: <strong>{this.state.saborpizzaadicion}</strong></p>
                <Input value={this.state.indAdicional} onChange={this.indicacionAdicional} placeholder="Indicacion Adicional" /><br></br>
            </ModalBody>
            <ModalFooter>
                <Button color="success" onClick={this.toggleModalAceptar}>Agregar Pedido</Button> {'  '}
                <Button color="danger" onClick={this.toggleModalCancelar}>Cancelar</Button>
            </ModalFooter>
            </Modal>
            </>
            )
            case "saborpizza": return (<SaboresPizzaGrande porcion="saborpizza" atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSabor} cuentamitad={this.agregaraCuenta}/>)
            case "adicionentera":return (<CombinadaIngredientesGrande porcion="saborpizza" atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSaborAdicion} cuentamitadmodificacion={this.agregaraCuentaAdicionSinIng}/>)
            case "siningredientes":return (<CombinadaIngredientesGrande porcion="saborpizza" opcioncuarto='ingredientemenos' atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSaborAdicion} cuentamitadmodificacion={this.agregaraCuentaAdicionSinIng}/>)
        }
    }
    return(
        <div>{ opcionPizza()}</div>
    )
}
}

export default PizzaGrandeCompleta