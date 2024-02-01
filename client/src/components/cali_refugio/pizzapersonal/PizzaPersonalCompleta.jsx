import React from 'react';
import { Component } from 'react';
import '../../../App.css';
import SaboresPizza from './SaboresPizza';
import CombinadaIngredientes from './CombinadaIngredientes';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

class PizzaPersonalCompleta extends Component {
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
            stringPizza: 'PIZZA PERSONAL COMPLETA',
            classSinConPromo: 'buttonPromocion',
            costoPizzaPersonal: 22000,
            ingredientes: [],
            ingredientesExtra: [],
        }
    }
onClickBack = () => {
    this.props.atrasMenuPersonal();
}

atrasPersonal = () => {
    this.setState({estado: 'inicio'})
}

atrasPersonalSabor = (dato, porcion, ingredientes) => {
    if(porcion === "saborpizza"){
        this.setState({
            saborpizza: dato,
            estado: 'inicio',
            saborpizzaadicion: '',
            ingredientes: ingredientes
        })
    }
    
}

atrasPersonalSaborAdicion = (dato, porcion, ingrediente) => {
    if(porcion === "saborpizza"){
        this.setState({
            saborpizzaadicion: dato + this.state.saborpizzaadicion,
            ingredientesExtra: ingrediente,
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
    let insumosPizzaPersonal= [];
    let costoadicion = 0;
    let keyId = 0;
    
    //Validamos costo ingredientes adicionales
    if(this.state.saborpizzaadicion !== ''){
        for (let i = 0; i < this.state.saborpizzaadicion.length; i++) {
            if(this.state.saborpizzaadicion[i] === '+'){
                costoadicion = costoadicion + 2000
            }
        }
    }

    //Guardamos en local Storag 
    let contPersonales = [JSON.parse(localStorage.getItem('Numero_Personales'))]

    if(contPersonales[0] === null){
        //Guardamos en local Storage
        pedidoPizza = [{ 'key_id' : 1,
                    'tipo' : this.state.stringPizza,
                    'sabor_personal' : this.state.saborpizza,
                    'mod_sabor_personal' : this.state.saborpizzaadicion,
                    'ind_personal_adicional': this.state.indAdicional,
                    'costo_personal' : this.state.costoPizzaPersonal,
                    'costo_adiciones' : costoadicion,
                    'id_pedido': 'Pedido_Personal_0'}, this.state.ingredientes, this.state.ingredientesExtra];
        //insumosPizzaPersonal = this.state.ingredientes;
        localStorage.setItem('Pedido_Personal_0', JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Personales', JSON.stringify({'Numero': 1}))
    }else{
        pedidoPizza = [{ 'key_id' : contPersonales[0].Numero + 1,
                    'tipo' : this.state.stringPizza,
                    'sabor_personal' : this.state.saborpizza,
                    'mod_sabor_personal' : this.state.saborpizzaadicion,
                    'ind_personal_adicional': this.state.indAdicional,
                    'costo_personal' : this.state.costoPizzaPersonal,
                    'costo_adiciones' : costoadicion,
                    'id_pedido': `Pedido_Personal_${contPersonales[0].Numero}`}, this.state.ingredientes, this.state.ingredientesExtra];
        localStorage.setItem(`Pedido_Personal_${contPersonales[0].Numero}`, JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Personales', JSON.stringify({'Numero': contPersonales[0].Numero + 1}))
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
            stringPizza: 'PIZZA PERSONAL COMPLETA PROMOCION',
            costoPizzaPersonal: 20000
        })
    }else(
        this.setState({
            promo: false,
            textoBoton: 'NO ES PROMOCION',
            classSinConPromo: 'buttonPromocion',
            stringPizza: 'PIZZA PERSONAL COMPLETA',
            costoPizzaPersonal: 22000
        })
    ) 
}

render(){
    const opcionPizza = () => {
        switch(this.state.estado) {
            case "inicio": return(
            <>
            <div>
                <p style={{textAlign: 'center'}}>PIZZA PERSONAL COMPLETA</p>  
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
            case "saborpizza": return (<SaboresPizza porcion="saborpizza" atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSabor} cuentamitad={this.agregaraCuenta}/>)
            case "adicionentera":return (<CombinadaIngredientes porcion="saborpizza" atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSaborAdicion} cuentamitadmodificacion={this.agregaraCuentaAdicionSinIng}/>)
            case "siningredientes":return (<CombinadaIngredientes porcion="saborpizza" opcioncuarto='ingredientemenos' atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSaborAdicion} cuentamitadmodificacion={this.agregaraCuentaAdicionSinIng}/>)
        }
    }
    return(
        <div>{ opcionPizza()}</div>
    )
}
}

export default PizzaPersonalCompleta