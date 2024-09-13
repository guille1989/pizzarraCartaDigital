import React from 'react';
import { Component } from 'react';
import '../../../App.css';
import SaboresLasagna from './SaboresSpagetti';
import CombinadaIngredientes from './CombinadaIngredientes';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

class spagetti extends Component {
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
            promoS: false,
            textoBoton: 'SPAGHETTI',
            textoBotonSalsa: 'NAPOLITANA',
            classSinConPromo: 'buttonPromocion',
            costoPizzaPersonal: parseInt(process.env.REACT_APP_FETTUCCINE_SPAGHETTI_BOLOGNESA_COSTO),
            costoPizzaPersonalSalsa: 0,
            classSalsa: 'buttonBolognesa',
            classTipo: 'buttonBolognesa',
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
                costoadicion = costoadicion + 2000
            }
        }
    }

    //Guardamos en local Storag 
    let contPersonales = [JSON.parse(localStorage.getItem('Numero_Pastas'))]

    if(contPersonales[0] === null){
        //Guardamos en local Storage
        pedidoPizza = { 'key_id' : 1,
                    'tipo' : 'PASTA' + ' TIPO: ' + this.state.textoBoton + ' SALSA: ' + this.state.textoBotonSalsa,
                    'sabor_pasta' : this.state.saborpizza,
                    'mod_sabor_pasta' : this.state.saborpizzaadicion,
                    'ind_pasta_adicional': this.state.indAdicional,
                    'costo_pasta' : this.state.costoPizzaPersonal + this.state.costoPizzaPersonalSalsa,
                    'costo_adiciones_pasta' : costoadicion,
                    'id_pedido': 'Pedido_Pasta_0'};
        localStorage.setItem('Pedido_Pasta_0', JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Pastas', JSON.stringify({'Numero': 1}))
    }else{
        pedidoPizza = { 'key_id' : contPersonales[0].Numero + 1,
                    'tipo' : 'PASTA' + ' TIPO: ' + this.state.textoBoton + ' SALSA: ' + this.state.textoBotonSalsa,
                    'sabor_pasta' : this.state.saborpizza,
                    'mod_sabor_pasta' : this.state.saborpizzaadicion,
                    'ind_pasta_adicional': this.state.indAdicional,
                    'costo_pasta' : this.state.costoPizzaPersonal + this.state.costoPizzaPersonalSalsa, 
                    'costo_adiciones_pasta' : costoadicion,
                    'id_pedido': `Pedido_Pasta_${contPersonales[0].Numero}`};
        localStorage.setItem(`Pedido_Pasta_${contPersonales[0].Numero}`, JSON.stringify(pedidoPizza))
        localStorage.setItem('Numero_Pastas', JSON.stringify({'Numero': contPersonales[0].Numero + 1}))
    }  

    //Toggle Modal//
    this.setState({
        modal: !this.state.modal
    })

    //Atras
    this.props.atrasMenuPersonal();
}

tipoPasta = () => {
    if(this.state.promo === false){
        this.setState({
            promo: true,
            textoBoton: 'FETUCCINI',
            classSalsa: 'buttonQueso',
            costoPizzaPersonal: parseInt(process.env.REACT_APP_FETTUCCINE_SPAGHETTI_BOLOGNESA_COSTO)
        })
    }else(
        this.setState({
            promo: false,
            textoBoton: 'SPAGHETTI',
            classSalsa: 'buttonBolognesa',
            costoPizzaPersonal: parseInt(process.env.REACT_APP_FETTUCCINE_SPAGHETTI_BOLOGNESA_COSTO)
        })
    ) 
}

pasSalsa = (e) => {

    switch(e.target.value){
        case "NAPOLITANA": 
            this.setState({
                costoPizzaPersonalSalsa: 0
            }); 
            break;
        case "SALSA BLANCA": 
            this.setState({
                costoPizzaPersonalSalsa: 6000
            }); 
            break;
        case "PESTO": 
            this.setState({
                costoPizzaPersonalSalsa: 6000
            }); 
            break;
    }
}

render(){
    const opcionPizza = () => {
        switch(this.state.estado) {
            case "inicio": return(
            <>
            <div>                
                <div className='centrarButtonPromocionLasagna'>
                    <div>
                        <div>
                            <p style={{textAlign: 'center'}}>PASTA - TIPO:</p>
                            <p> </p>  
                        </div>
                        <div>
                            <button className={this.state.classSalsa} onClick={this.tipoPasta}>{this.state.textoBoton}</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p style={{textAlign: 'center'}}>PASTA - SALSA:</p>
                            <p> </p>  
                        </div>
                        <div>
                            <select 
                                className="form-select" 
                                aria-label="Default select example" 
                                style={{width:"100%"}}
                                value={this.state.textoBotonSalsa}
                                onChange={(e) => {
                                    this.pasSalsa(e);
                                    this.setState({ textoBotonSalsa: e.target.value })
                                }}
                            >
                                <option value="NAPOLITANA">NAPOLITANA</option>
                                <option value="SALSA BLANCA">SALSA BLANCA</option>
                                <option value="PESTO">PESTO</option>
                            </select>
                        </div>
                    </div>
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
            <ModalHeader>Pedido PASTA</ModalHeader>
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
            case "saborpizza": return (<SaboresLasagna porcion="saborpizza" atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSabor} cuentamitad={this.agregaraCuenta}/>)
            case "adicionentera":return (<CombinadaIngredientes porcion="saborpizza" atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSaborAdicion} cuentamitadmodificacion={this.agregaraCuentaAdicionSinIng}/>)
            case "siningredientes":return (<CombinadaIngredientes porcion="saborpizza" opcioncuarto='ingredientemenos' atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSaborAdicion} cuentamitadmodificacion={this.agregaraCuentaAdicionSinIng}/>)
        }
    }
    return(
        <div>{ opcionPizza()}</div>
    )
}
}

export default spagetti