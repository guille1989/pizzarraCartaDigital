import React from 'react';
import { Component } from 'react';
import '../../../App.css';
//import SaboresPizza from './SaboresPizza';
//import CombinadaIngredientes from './CombinadaIngredientes';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Ingredientes from './Ingredientes';

class DesayunoAmericanoMenu extends Component {
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
            costoDesaynoAmericano: 15000,
            ingredientes: [],
            ingredientesExtra: [],
            tipobebidadesayuno: '',
            tipohuevosdesayuno: '',
            cantidadDesayuno: 1
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
    this.setState({estado: "adicioningrediente"})
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
    this.setState({
        modal: !this.state.modal
    })
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

    if(this.state.tipobebidadesayuno === '' || this.state.tipohuevosdesayuno === ''){
        alert('Por favor indique tipo de huevos y bebida')
    }else{
        //Validamos costo ingredientes adicionales
        if(this.state.saborpizzaadicion !== ''){
            for (let i = 0; i < this.state.saborpizzaadicion.length; i++) {
                if(this.state.saborpizzaadicion[i] === '+'){
                    costoadicion = costoadicion + 2000
                }
            }
        }

        //Guardamos en local Storag 
        let contPersonales = [JSON.parse(localStorage.getItem('Numero_Desayuno_Americano'))]

        if(contPersonales[0] === null){
            //Guardamos en local Storage
            pedidoPizza = [{ 'key_id' : 1,
                        'tipo' : 'DESAYUNO AMERICANO X' + this.state.cantidadDesayuno,
                        'sabor_desayuno' : this.state.saborpizza,
                        'mod_sabor_desayuno' : this.state.saborpizzaadicion,
                        'ind_desayuno_adicional': this.state.indAdicional,
                        'desayuno_tipo_huevos': this.state.tipohuevosdesayuno,
                        'desayuno_tipo_bebida': this.state.tipobebidadesayuno,
                        'costo_desayuno_americano' :this.state.cantidadDesayuno * this.state.costoDesaynoAmericano,
                        'costo_adiciones_americano' :this.state.cantidadDesayuno * costoadicion,
                        'id_pedido': 'Pedido_Desayuno_Americano_0'}, this.state.ingredientes, this.state.ingredientesExtra];
            //insumosPizzaPersonal = this.state.ingredientes;
            localStorage.setItem('Pedido_Desayuno_Americano_0', JSON.stringify(pedidoPizza))
            localStorage.setItem('Numero_Desayuno_Americano', JSON.stringify({'Numero': 1}))
        }else{
            pedidoPizza = [{ 'key_id' : contPersonales[0].Numero + 1,
                        'tipo' : 'DESAYUNO AMERICANO X' + this.state.cantidadDesayuno,
                        'sabor_desayuno' : this.state.saborpizza,
                        'mod_sabor_desayuno' : this.state.saborpizzaadicion,
                        'ind_desayuno_adicional': this.state.indAdicional,
                        'desayuno_tipo_huevos': this.state.tipohuevosdesayuno,
                        'desayuno_tipo_bebida': this.state.tipobebidadesayuno,
                        'costo_desayuno_americano' :this.state.cantidadDesayuno * this.state.costoDesaynoAmericano,
                        'costo_adiciones_americano' :this.state.cantidadDesayuno * costoadicion,
                        'id_pedido': `Pedido_Desayuno_Americano_${contPersonales[0].Numero}`}, this.state.ingredientes, this.state.ingredientesExtra];
            localStorage.setItem(`Pedido_Desayuno_Americano_${contPersonales[0].Numero}`, JSON.stringify(pedidoPizza))
            localStorage.setItem('Numero_Desayuno_Americano', JSON.stringify({'Numero': contPersonales[0].Numero + 1}))
        }  

        //Toggle Modal//
        this.setState({
            modal: !this.state.modal
        })

        //Atras
        this.props.atrasMenuPersonal();
    }
}

esPromocion = () => {
    if(this.state.promo === false){
        this.setState({
            promo: true,
            textoBoton: 'ES PROMOCION',
            classSinConPromo: 'buttonPromocionOn',
            costoPizzaPersonal: 17000
        })
    }else(
        this.setState({
            promo: false,
            textoBoton: 'NO ES PROMOCION',
            classSinConPromo: 'buttonPromocion',
            costoPizzaPersonal: 19000
        })
    ) 
}

changeTipoCafe = (e) => {
    this.setState({
        tipobebidadesayuno: e.target.value
    }) 
}

changeTipoHuevos = (e) => {
    this.setState({
        tipohuevosdesayuno: e.target.value
    }) 
}

handleCantidadDesayuno = (e) => {
    this.setState({
        cantidadDesayuno: e.target.value
    }) 
}

render(){
    const opcionPizza = () => {
        switch(this.state.estado) {
            case "inicio": return(
            <>
            <div>
                <p style={{textAlign: 'center'}}>DESAYUNO AMERICANO</p>            
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div className='adicioncompleta' onClick={this.adicionIngrediente}>                                
                    </div>
                    <div className='siningredientescompleta' onClick={this.sinIngredientesPizza}>                                
                    </div>   
                </div>
                <div className='pizzaforma'>                    
                    <div>
                        <div className='completa'>
                        <p>AMERICANO {this.state.saborpizzaadicion}</p>
                        </div>
                    </div>
                    <button className='agregarapedido' onClick={this.agregarproducto}>AGREGAR</button>                       
                </div>             
                <p onClick={this.onClickBack} className='atras'>atras..</p>
            </div>

            <Modal isOpen={this.state.modal}>                        
            <ModalHeader>Pedido DESAYUNO AMERICANO</ModalHeader>
            <ModalBody>
                
                <p>Adicion y/o Sin ingredientes: <strong>{this.state.saborpizzaadicion}</strong></p>
                
                <p>Tipo Huevos</p>
                <Input type="select" onChange={this.changeTipoHuevos}>
                            <option>
                                Seleccione Opcion
                            </option>
                            <option>
                                Revueltos
                            </option>
                            <option>
                                Pericos
                            </option>
                            <option>
                                Fritos
                            </option>
                            <option>
                                Hervidos
                            </option>
                            </Input><br></br>
                <p>Tipo Bebida</p>
                <Input type="select" onChange={this.changeTipoCafe}>
                            <option>
                                Seleccione Opcion
                            </option>
                            <option>
                                Cafe
                            </option>
                            <option>
                                Chocolate
                            </option>
                            <option>
                                Agua Aromatica
                            </option>
                            <option>
                                Te
                            </option>
                            </Input><br></br>

                <p>Cantidad Desayuno</p>
                <Input type="Number" value={this.state.cantidadDesayuno} onChange={this.handleCantidadDesayuno}/><br></br>
                
                <p>Observaciones adicionales</p>
                <Input value={this.state.indAdicional} onChange={this.indicacionAdicional} placeholder="Indicacion Adicional" /><br></br>
            </ModalBody>
            <ModalFooter>
                <Button color="success" onClick={this.toggleModalAceptar}>Agregar Pedido</Button> {'  '}
                <Button color="danger" onClick={this.toggleModalCancelar}>Cancelar</Button>
            </ModalFooter>
            </Modal>
            </>
            )
            //case "saborpizza": return (<SaboresPizza porcion="saborpizza" atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSabor} cuentamitad={this.agregaraCuenta}/>)
            case "adicioningrediente":return (<Ingredientes porcion="saborpizza" atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSaborAdicion} cuentamitadmodificacion={this.agregaraCuentaAdicionSinIng}/>)
            //case "siningredientes":return (<CombinadaIngredientes porcion="saborpizza" opcioncuarto='ingredientemenos' atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSaborAdicion} cuentamitadmodificacion={this.agregaraCuentaAdicionSinIng}/>)
        }
    }
    return(
        <div>{ opcionPizza()}</div>
    )
}
}

export default DesayunoAmericanoMenu