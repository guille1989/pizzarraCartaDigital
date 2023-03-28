import '../../App.css';
import React from 'react';
import { Component } from 'react';
import MenuPizza from './MenuPizza';
import MenuPasta from './MenuPasta';
import InicioMenu from './InicioMenu';
import MenuBebidas from './MenuBebidas';
import MenuEntradas from './MenuEntradas';
import Pedido from './Pedido';
import SegCuentas from './SegCuentas';
import Panaderia from './panaderia/MenuPanaderia';
import Desayunos from './desayunos/MenuDesayunos';
import Moment from 'moment';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';


class appCali extends Component {
  constructor(props){
    super(props);    
    this.state={
      modalPedido : false,
      datoOrden: [],
      tipo_pedido_p: 'MESA',
      opcionOrden: 'MESA',
      mesaOrden: '',
      DomiNombre: '',
      DomiTelefono: '',
      DomiDireccion: '',
      DomiOtros: '',
      RecogeNombre: '',
      RecogeTelefono: '',
      costoOrden: 0,
      segPedidos: false,
      opcionCortesia: 'No',
      insumosOrden: []
    }
  }

  confirmarPedido = (orden, costo, insumos) => {
    this.setState({
      datoOrden: orden,
      costoOrden: costo,
      insumosOrden: insumos
    })
  }

  confirmarPedidoOrden = () => {
    this.setState({
      modalPedido: !this.state.modalPedido
    })
  }  

  toggleModalAceptar = () => {   
    if(this.state.opcionOrden === "MESA"){
      if(this.state.mesaOrden === ''){
        alert('Porfavor coloque No. de mesa')
      }else{
        //Miramos cortesia
        let aux = [];
        if(this.state.opcionCortesia === 'Si'){
          aux = [
            {local: "Popayan-Centro",
            tipo_pedido: "MESA", 
            mesa: this.state.mesaOrden, 
            estado_pedido: "SIN PAGO", 
            costo_pedido: 1,
            observacion_pedido: "CORTESIA",
            fecha_pedido: Moment().format('YYYY-MM-DD'),
            hora_pedido: Moment().format('HH:mm:ss'),
            insumos: this.state.insumosOrden}  
          ]
        }else{
          aux = [
            {local: "Popayan-Centro",            
            tipo_pedido: "MESA", 
            mesa: this.state.mesaOrden, 
            estado_pedido: "SIN PAGO", 
            costo_pedido: this.state.costoOrden,
            fecha_pedido: Moment().format('YYYY-MM-DD'),
            hora_pedido: Moment().format('HH:mm:ss'),
            insumos: this.state.insumosOrden},  
          ]
        }        
        //console.log({...this.state.datoOrden, aux})
        this.writeUserData({...this.state.datoOrden, aux}, {pedido:this.state.datoOrden, aux: aux})
        window.localStorage.clear()

        this.setState({
          modalPedido: !this.state.modalPedido,
          opcionCortesia: "No",
          opcionOrden: "MESA"
        })

        alert('Pedido Registrado !')
      }      
    } 

    if(this.state.opcionOrden === "DOMICILIO"){
      if(this.state.DomiNombre === '' || this.state.DomiTelefono === '' || this.state.DomiDireccion === '' || this.state.DomiOtros === ''){
        alert('Porfavor coloque toda la informacion')
      }else{  
        let aux = [];
        if(this.state.opcionCortesia === 'Si'){
          aux = [
            {local: "Popayan-Centro",
            tipo_pedido: "DOMICILIO", 
            domi_nombre: this.state.DomiNombre, 
            domi_telefono: this.state.DomiTelefono,
            domi_direccion: this.state.DomiDireccion, 
            domi_otros: this.state.DomiOtros, 
            estado_pedido: "SIN PAGO", 
            costo_pedido: 1,
            observacion_pedido: "CORTESIA",
            fecha_pedido: Moment().format('YYYY-MM-DD'),
            hora_pedido: Moment().format('HH:mm:ss')   }
          ]
        }else{
          aux = [
            {local: "Popayan-Centro",
            tipo_pedido: "DOMICILIO", 
            domi_nombre: this.state.DomiNombre, 
            domi_telefono: this.state.DomiTelefono,
            domi_direccion: this.state.DomiDireccion, 
            domi_otros: this.state.DomiOtros, 
            estado_pedido: "SIN PAGO", 
            costo_pedido: this.state.costoOrden,
            fecha_pedido: Moment().format('YYYY-MM-DD'),
            hora_pedido: Moment().format('HH:mm:ss')   }
          ] 
        }     
        //console.log({...this.state.datoOrden, aux})
        this.writeUserData({...this.state.datoOrden, aux}, {pedido:this.state.datoOrden, aux: aux})
        window.localStorage.clear()
        this.setState({
          modalPedido: !this.state.modalPedido,
          opcionCortesia: "No",
          opcionOrden: "MESA"
        })
        alert('Domicilio Registrado !')
    }
  }

  if(this.state.opcionOrden === "RECOGEN"){
    if(this.state.RecogeNombre === '' || this.state.RecogeTelefono === ''){
      alert('Porfavor coloque toda la informacion')
    }else{
      let aux = [];
        if(this.state.opcionCortesia === 'Si'){
          aux = [
            {local: "Popayan-Centro",
            tipo_pedido: "RECOGEN", 
            recoge_nombre: this.state.RecogeNombre, 
            recoge_telefono: this.state.RecogeTelefono, 
            estado_pedido: "SIN PAGO", 
            costo_pedido: 1,
            observacion_pedido: "CORTESIA",
            fecha_pedido: Moment().format('YYYY-MM-DD'),
            hora_pedido: Moment().format('HH:mm:ss')   
          }
          ]
        }else{
          aux = [
            {local: "Popayan-Centro",
            tipo_pedido: "RECOGEN", 
            recoge_nombre: this.state.RecogeNombre, 
            recoge_telefono: this.state.RecogeTelefono, 
            estado_pedido: "SIN PAGO", 
            costo_pedido: this.state.costoOrden,
            fecha_pedido: Moment().format('YYYY-MM-DD'),
            hora_pedido: Moment().format('HH:mm:ss')   
          }
          ]
        }
      
      //console.log({...this.state.datoOrden, aux})
        this.writeUserData({...this.state.datoOrden, aux}, {pedido:this.state.datoOrden, aux: aux})
        window.localStorage.clear()
        this.setState({
          modalPedido: !this.state.modalPedido,
          opcionCortesia: "No",
          opcionOrden: "MESA"
        })
        alert('Pedido Recoge Registrado !')
  }
}
}

  toggleModalCancelar = () => {
    this.setState({
      modalPedido: !this.state.modalPedido
    })
  }

  changeOpcion = (e) => {
    this.setState({
      opcionOrden: e.target.value
    }) 
}

changeOpcionCortesia = (e) => {
  this.setState({
    opcionCortesia: e.target.value
  })
}

changeMesaOrden = (e) => {
  this.setState({
    mesaOrden: e.target.value
  })
}

changeDomiNombre = (e) => {
  this.setState({
    DomiNombre: e.target.value
  })
}

changeDomiTelefono = (e) => {
  this.setState({
    DomiTelefono: e.target.value
  })
}

changeDomiDireccion = (e) => {
  this.setState({
    DomiDireccion: e.target.value
  })
}

changeDomiOtros = (e) => {
  this.setState({
    DomiOtros: e.target.value
  })
}

changeRecogeNombre = (e) => {
  this.setState({
    RecogeNombre: e.target.value
  })
}

changeRecogeTelefono = (e) => {
  this.setState({
    RecogeTelefono: e.target.value
  })
}

renderSwitch(params){
  if(params === 'MESA'){

    return(
      <Input value={this.state.mesaOrden} onChange={this.changeMesaOrden} placeholder="Mesa" />
      )
  }else if(params === 'DOMICILIO'){
   
    return(
      <>
        <Input value={this.state.DomiNombre} onChange={this.changeDomiNombre} placeholder="Nombre" />
        <Input value={this.state.DomiTelefono} onChange={this.changeDomiTelefono} placeholder="Telefono" />
        <Input value={this.state.DomiDireccion} onChange={this.changeDomiDireccion} placeholder="Direccion" />
        <Input value={this.state.DomiOtros} onChange={this.changeDomiOtros} placeholder="Otra Informacion" />
      </>
    )
  }else if(params === 'RECOGEN'){
    
    return(
      <>
        <Input value={this.state.RecogeNombre} onChange={this.changeRecogeNombre} placeholder="Nombre" />
        <Input value={this.state.RecogeTelefono} onChange={this.changeRecogeTelefono} placeholder="Telefono" />
      </>
    )
}
}


writeUserData(pedido, pedidoAux) { 
  //Fetch para enviar informacion al backend:
  const requestOptions ={
    method: 'POST',
    headers : {'Content-type':'application/json' },
    body: JSON.stringify(pedidoAux)        
  }
  
  fetch(`http://${process.env.REACT_APP_URL_PRODUCCION}/api/agregarpedidos`, requestOptions)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  
  //
}

cuentasSeguimiento(){  
  this.setState({
    segPedidos: !this.state.segPedidos
  })
}

printerConect = () => {
  //console.log(this.state.datoOrden)
  ////
//Create ESP/POS commands for sample label
var esc = '\x1B'; //ESC byte in hex notation
var newLine = '\x0A'; //LF byte in hex notation  

//******PARTE INICIAL******/   
let cmds = esc + "@"; //Initializes the printer (ESC @)
cmds += esc + '!' + '\x38'; //Emphasized + Double-height + Double-width mode selected (ESC ! (8 + 16 + 32)) 56 dec => 38 hex
cmds += 'PEDIDO COCINA'; //text to print
cmds += newLine;
cmds += esc + '!' + '\x00'; //Character font A selected (ESC ! 0)

//Acomodamos la fehca
//var dia = new Date().getDate() + 1;
//var mes = new Date().getMonth() + 1;
//var anio = new Date().getFullYear();

//****
if(this.state.opcionOrden === "MESA"){
  if(this.state.mesaOrden === ''){
    alert('Porfavor coloque No. de mesa')
  }else{
  cmds += "MESA" + " : " + this.state.mesaOrden;
  cmds += esc + '!' + '\x00'
  cmds += newLine;
  cmds += "Fecha Pedido: " + Moment().format('YYYY-MM-DD');
  cmds += newLine;
  cmds += "Hora Pedido: " + Moment().format('HH:mm:ss');
  cmds += newLine;
  cmds += newLine;

  this.printerPedidosConnect(cmds)
  }
}

if(this.state.opcionOrden === "DOMICILIO"){
  if(this.state.DomiNombre === '' || this.state.DomiTelefono === '' || this.state.DomiDireccion === '' || this.state.DomiOtros === ''){
    alert('Porfavor coloque toda la informacion')
  }else{

  cmds += "DOMICILIO";
  cmds += esc + '!' + '\x00'
  cmds += newLine;
  cmds += "Nombre: " + this.state.DomiNombre;
  cmds += newLine;
  cmds += "Telefono: " + this.state.DomiTelefono;
  cmds += newLine;
  cmds += "Direccion: " + this.state.DomiDireccion;
  cmds += newLine;
  cmds += "Observaciones: " + this.state.DomiOtros;
  cmds += newLine;
  cmds += "Fecha Pedido: " + Moment().format('YYYY-MM-DD');
  cmds += newLine;
  cmds += "Hora Pedido: " + Moment().format('HH:mm:ss');
  cmds += newLine;
  cmds += newLine;

  this.printerPedidosConnect(cmds)
}
}

if(this.state.opcionOrden === "RECOGEN"){
  if(this.state.RecogeNombre === '' || this.state.RecogeTelefono === ''){
    alert('Porfavor coloque toda la informacion')
  }else{
  cmds += "RECOGEN";
  cmds += esc + '!' + '\x00'
  cmds += newLine;
  cmds += "Nombre: " + this.state.RecogeNombre;
  cmds += newLine;
  cmds += "Telefono: " + this.state.RecogeTelefono;
  cmds += newLine;
  cmds += "Fecha Pedido: " + Moment().format('YYYY-MM-DD');
  cmds += newLine;
  cmds += "Hora Pedido: " + Moment().format('HH:mm:ss');
  cmds += newLine;
  cmds += newLine;

  this.printerPedidosConnect(cmds)
}
}
}

printerPedidosConnect(cmdsAux){

  //Create ESP/POS commands for sample label
  var esc = '\x1B'; //ESC byte in hex notation
  var newLine = '\x0A'; //LF byte in hex notation
  let cmds

  cmds += cmdsAux
  cmds += esc + '!' + '\x16'

  this.state.datoOrden.map((item, index)=>{   
    ///BEBIDAS
    if(item.tipo.includes('CAFÉ') || item.tipo.includes('CHOCOLATE') || item.tipo.includes('VINO') || item.tipo.includes('JUGO') || item.tipo.includes('CERVEZA') || item.tipo.includes('BEBIDA') || item.tipo.includes('GASEOSA'))
          {
              if(item.tipo.includes('CAFÉ')){    
                cmds += "Bebida: " + item.tipo;
                cmds += newLine;            
                cmds += item.mod_sabor_cafe;
                cmds += newLine;
                cmds += newLine;
              }else if(item.tipo.includes('CHOCOLATE')){
                cmds += "Bebida: " + item.tipo;
                cmds += newLine; 
                cmds += item.mod_sabor_chocolate;
                cmds += newLine;
                cmds += newLine;
              }else if(item.tipo.includes('JUGO')){
                cmds += "Bebida: " + item.tipo;
                cmds += newLine; 
                cmds += item.mod_sabor_jugo;
                cmds += newLine;
                cmds += newLine;
              }else if(item.tipo.includes('GASEOSA')){
                cmds += "Bebida: " + item.tipo;
                cmds += newLine; 
                cmds += item.mod_sabor_gaseosa;
                cmds += newLine;
                cmds += newLine;
              }else if(item.tipo.includes('VINO')){
                cmds += "Bebida: " + item.tipo;
                cmds += newLine;
                cmds += newLine;
              }else if(item.tipo.includes('CERVEZA')){
                cmds += "Bebida: " + item.tipo;
                cmds += newLine;
                cmds += item.mod_sabor_cerveza;
                cmds += newLine;
                cmds += newLine;
              }else if(item.tipo.includes('BEBIDA')){
                cmds += "Bebida: " + item.tipo;
                cmds += newLine;
                cmds += item.mod_sabor_bebida;
                cmds += newLine;
                cmds += newLine;
              }
          } 
    ///
      if(item.tipo.includes('GRANDE COMPLETA')){
          cmds += item.tipo;
          cmds += newLine;
          cmds += "Sabor: " + item.sabor_grande;
          cmds += newLine;
          //console.log(item.mod_sabor_grande)
          if(item.mod_sabor_grande){
            cmds += "+/- Adiciones: " + item.mod_sabor_grande;
            cmds += newLine;
          }
          if(item.ind_grande_adicional){
            cmds += "Observaciones: " + item.ind_grande_adicional;
            cmds += newLine;
          }          
          cmds += newLine;
      }else if(item.tipo.includes('PERSONAL COMPLETA')){
          cmds += item.tipo;
          cmds += newLine;
          cmds += "Sabor: " + item.sabor_personal;
          cmds += newLine;
          if(item.mod_sabor_personal){
            cmds += "+/- Adiciones: " + item.mod_sabor_personal;
            cmds += newLine;
          }
          if(item.ind_personal_adicional){
            cmds += "Observaciones: " + item.ind_personal_adicional;
            cmds += newLine;
          }          
          cmds += newLine;
      }else if(item.tipo.includes('PERSONAL MITAD')){
          cmds += item.tipo;
          cmds += newLine;
          cmds += "Sabor mitad 1: " + item.mitad_uno;
          cmds += newLine;
          cmds += "Sabor mitad 2: " + item.mitad_dos;
          cmds += newLine;
          if(item.mod_mitad_uno){
            cmds += "+/- Adiciones mitad 1: " + item.mod_mitad_uno;
            cmds += newLine;
          }
          if(item.mod_mitad_dos){
            cmds += "+/- Adiciones mitad 2: " + item.mod_mitad_dos;
            cmds += newLine;
          }
          if(item.ind_mitad_uno_adicional){
            cmds += "Observaciones mitad 1: " + item.ind_mitad_uno_adicional;
            cmds += newLine;
          }
          if(item.ind_mitad_dos_adicional){
            cmds += "Observaciones mitad 2: " + item.ind_mitad_dos_adicional;
            cmds += newLine;
          }
          cmds += newLine;
      }else if(item.tipo.includes('GRANDE MITAD')){
          cmds += item.tipo;
          cmds += newLine;
          cmds += "Sabor mitad 1: " + item.mitad_uno;
          cmds += newLine;
          cmds += "Sabor mitad 2: " + item.mitad_dos;
          cmds += newLine;
          if(item.mod_mitad_uno){
            cmds += "+/- Adiciones mitad 1: " + item.mod_mitad_uno;
            cmds += newLine;
          }
          if(item.mod_mitad_dos){
            cmds += "+/- Adiciones mitad 2: " + item.mod_mitad_dos;
            cmds += newLine;
          }
          if(item.ind_mitad_uno_adicional){
            cmds += "Observaciones mitad 1: " + item.ind_mitad_uno_adicional;
            cmds += newLine;
          }
          if(item.ind_mitad_dos_adicional){
            cmds += "Observaciones mitad 2: " + item.ind_mitad_dos_adicional;
            cmds += newLine;
          }
          
          cmds += newLine;
      }else if(item.tipo.includes('GRANDE CUARTO')){
          cmds += item.tipo;
          cmds += newLine;
          cmds += "Sabor cuarto 1: " + item.cuarto_uno;
          cmds += newLine;
          cmds += "Sabor cuarto 2: " + item.cuarto_dos;
          cmds += newLine;
          cmds += "Sabor cuarto 3: " + item.cuarto_tres;
          cmds += newLine;
          cmds += "Sabor cuarto 4: " + item.cuarto_cuatro;
          cmds += newLine;
          if(item.mod_cuarto_uno){
            cmds += "+/- Adiciones cuarto 1: " + item.mod_cuarto_uno;
            cmds += newLine;
          }
          if(item.mod_cuarto_dos){
            cmds += "+/- Adiciones cuarto 2: " + item.mod_cuarto_dos;
            cmds += newLine;
          }
          if(item.mod_cuarto_tres){
            cmds += "+/- Adiciones cuarto 3: " + item.mod_cuarto_tres;
            cmds += newLine;
          }
          if(item.mod_cuarto_cuatro){
            cmds += "+/- Adiciones cuarto 4: " + item.mod_cuarto_cuatro;
            cmds += newLine;
          }
          if(item.ind_cuarto_uno_adicional){
            cmds += "Observaciones cuarto 1: " + item.ind_cuarto_uno_adicional;
            cmds += newLine;
          }
          if(item.ind_cuarto_dos_adicional){
            cmds += "Observaciones cuarto 2: " + item.ind_cuarto_dos_adicional;
            cmds += newLine;
          }    
          if(item.ind_cuarto_tres_adicional){
            cmds += "Observaciones cuarto 3: " + item.ind_cuarto_tres_adicional;
            cmds += newLine;
          }
          if(item.ind_cuarto_cuatro_adicional){
            cmds += "Observaciones cuarto 4: " + item.ind_cuarto_cuatro_adicional;
            cmds += newLine;
          }
          cmds += newLine;
      }else if(item.tipo.includes('PIZZA PANCOOK')){
          cmds += item.tipo;
          cmds += newLine;
          cmds += "Sabor: " + item.sabor_pancook;
          cmds += newLine;
          if(item.mod_sabor_pancook){
            cmds += "+/- Adiciones: " + item.mod_sabor_pancook;
            cmds += newLine;
          }
          if(item.ind_pancook_adicional){
            cmds += "Observaciones: " + item.ind_pancook_adicional;
            cmds += newLine;
          }
      
          cmds += newLine;
      }else if(item.tipo.includes('PIZZA PANTALON')){
          cmds += item.tipo;
          cmds += newLine;
          cmds += "Sabor: " + item.sabor_pantalon;
          cmds += newLine;
          if(item.mod_sabor_pantalon){
            cmds += "+/- Adiciones: " + item.mod_sabor_pantalon;
            cmds += newLine;
          }
          if(item.ind_pantalon_adicional){
            cmds += "Observaciones: " + item.ind_pantalon_adicional;
            cmds += newLine;
          }
          
          cmds += newLine;
      }else if(item.tipo.includes('LASAGNA')){
          cmds += item.tipo;
          cmds += newLine;
          cmds += "Sabor: " + item.sabor_lasagna;
          cmds += newLine;
          if(item.mod_sabor_lasagna){
            cmds += "+/- Adiciones: " + item.mod_sabor_lasagna;
            cmds += newLine;
          }
          if(item.ind_lasagna_adicional){
            cmds += "Observaciones: " + item.ind_lasagna_adicional;
            cmds += newLine;
          }
          
          cmds += newLine;
      }else if(item.tipo.includes('PASTA')){
          cmds += item.tipo;
          cmds += newLine;
          cmds += "Sabor: " + item.sabor_pasta;
          cmds += newLine;
          if(item.mod_sabor_pasta){
            cmds += "+/- Adiciones: " + item.mod_sabor_pasta;
            cmds += newLine;
          }
          if(item.ind_pasta_adicional){
            cmds += "Observaciones: " + item.ind_pasta_adicional;
            cmds += newLine;
          }
          
          cmds += newLine;
      }else if(item.tipo.includes('SOPA')){
          cmds += item.tipo;
          cmds += newLine;
          cmds += "Sabor: " + item.sabor_sopa;
          cmds += newLine;
          if(item.mod_sabor_sopa){
            cmds += "+/- Adiciones: " + item.mod_sabor_sopa;
            cmds += newLine;
          }
          if(item.ind_sopa_adicional){
            cmds += "Observaciones: " + item.ind_sopa_adicional;
            cmds += newLine;
          }
          
          cmds += newLine;
      }else if(item.tipo.includes('PAN AJO')){
          cmds += "ENTRADA: " +  item.tipo;
          cmds += newLine;
          cmds += newLine;
      }else if(item.tipo.includes('PAN')){
        cmds += "PANADERIA: " +  item.tipo;
        cmds += newLine;
        cmds += newLine;
      }else if(item.tipo.includes('MASAS')){
        cmds += "PANADERIA: " +  item.tipo;
        cmds += newLine;
        cmds += newLine;
      }else if(item.tipo.includes('PAN COOK 2')){
        cmds += "PANADERIA: " +  item.tipo;
        cmds += newLine;
        cmds += newLine;
      }else if(item.tipo.includes('DESAYUNO')){
        cmds += "DESAYUNO: " +  item.tipo;
        cmds += newLine;
        cmds += "Huevos: " +  item.desayuno_tipo_huevos;
        cmds += newLine;
        cmds += "Bebida: " +  item.desayuno_tipo_bebida;
        cmds += newLine;
        cmds += newLine;
        if(item.mod_sabor_desayuno){
          cmds += "+/- Adiciones: " + item.mod_sabor_desayuno;
          cmds += newLine;
          cmds += newLine;
        }
        if(item.ind_desayuno_adicional){
          cmds += "Observaciones: " + item.ind_desayuno_adicional;
          cmds += newLine;
          cmds += newLine;
        }
      }
       
    })  
    ////
    navigator.bluetooth.requestDevice({
      acceptAllDevices: true,    
      optionalServices: ["0000eee2-0000-1000-8000-00805f9b34fb"]
    })    
    .then(device => device.gatt.connect())
    .then(server => {
      // Getting Service…
      return server.getPrimaryService('0000eee2-0000-1000-8000-00805f9b34fb');
    })
    .then(service => {
      // Getting Characteristic…
      return service.getCharacteristic('0000eee3-0000-1000-8000-00805f9b34fb');
    })
    .then(characteristic => {
      // Enviamos datos !!!…
      // Aqui crer los datos::::  
      let tamaniodato = cmds.length / 512
      let tamaniodatoaux = cmds.length/Math.ceil(tamaniodato)
  
      let cmdsAux = ""
      let countAux = 0
  
      var enc = new TextEncoder() 
      //console.log('Tamanio Dato: ' + cmds.length)
      //console.log('Numero de iteraciones: ' + Math.ceil(tamaniodato))
  
      const forloop = async () => {
        for(let i=1; i<=Math.ceil(tamaniodato); i++){
  
          //console.log(`iteracion ${i},  countAux:` + countAux)
          //console.log(`iteracion ${i},  tamaniodatoaux:` + tamaniodatoaux)
    
          for(let j=countAux; j<=tamaniodatoaux; j++){
            if(cmds[j]){
              cmdsAux = cmdsAux + cmds[j]
              countAux = countAux + 1
            }else{
    
            }        
          }
  
          if(i === Math.ceil(tamaniodato)){
            cmdsAux = cmdsAux + newLine; 
            cmdsAux = cmdsAux + newLine;
            cmdsAux = cmdsAux + newLine;
          }
    
          await characteristic.writeValue(enc.encode(cmdsAux))           
          
          tamaniodatoaux = tamaniodatoaux + countAux    
          //console.log('Tamanio del dato: ' + cmdsAux.length)
          //console.log('Datos: ' + cmdsAux)
          cmdsAux = "";
        }
        
      }
      forloop()    
      this.toggleModalAceptar() 
    })
    .catch(error => { console.error(error); }); 
}

  render(){
    return(
      <>
      <BrowserRouter>
        <div>
          <InicioMenu funcionSegCuentas={this.cuentasSeguimiento} />
        </div>
        <Switch>
          <Route path="/MenuPastaPopayan" component={MenuPasta} exact />
          <Route path="/MenuPizzaPopayan" component={MenuPizza} exact />
          <Route path="/MenuBebidasPopayan" component={MenuBebidas} exact />
          <Route path="/MenuEntradasPopayan" component={MenuEntradas} exact />
          <Route path="/MenuPanaderia" component={Panaderia} exact/>
          <Route path="/MenuDesayunosPopayan" component={Desayunos} exact/>
          <Route path="/SegCuentasPopayan" component={SegCuentas} exact />
        </Switch>
        
        <div className="pedido">
          <Pedido ordenPedido={this.confirmarPedido} />
        </div>
        <div className="centroboton">
          <div className="confirmarPedido">
            <Button onClick={this.confirmarPedidoOrden} color="success">Confirmar Pedido</Button>
          </div>
        </div>

      </BrowserRouter>
      <Modal isOpen={this.state.modalPedido}>                        
          <ModalHeader>
            <div className='centrarEnpedidoOrden'>
              <p><strong>PEDIDO: </strong></p>
              <Input className='opcionPedidoOrden' type="select" onChange={this.changeOpcion}>
                  <option>
                      MESA
                  </option>
                  <option>
                      DOMICILIO
                  </option>    
                  <option>
                      RECOGEN
                  </option>                      
              </Input>
              <p><strong>CORTESIA: </strong></p>
              <Input className='opcionPedidoOrden' type="select" onChange={this.changeOpcionCortesia}>
                  <option>
                      No
                  </option>
                  <option>
                      Si
                  </option>                        
              </Input>
            </div>  
          <div>
          {this.renderSwitch(this.state.opcionOrden)}
          </div>            
          </ModalHeader>
          <ModalBody> 
            {this.state.datoOrden.map((item, index) => {
              return(
                <>
                  <div className='itemOrdenCosto'>
                    <p className='itemOrden'>{item.tipo}</p>
                    {/*Costo gaseosa*/}
                    {item.costo_gaseosa ? ( <p className='itemPrecio'>....................{item.costo_gaseosa}</p> ) : ( <p></p> )}
                    {/*Costo bebidas*/}
                    {item.costo_bebida ? ( <p className='itemPrecio'>....................{item.costo_bebida}</p> ) : ( <p></p> )}
                    {/*Costo cerveza*/}
                    {item.costo_cerveza ? ( <p className='itemPrecio'>....................{item.costo_cerveza}</p> ) : ( <p></p> )}
                    {/*Costo jugos*/}
                    {item.costo_jugo ? ( <p className='itemPrecio'>....................{item.costo_jugo}</p> ) : ( <p></p> )}
                    {/*Costo cafe*/}
                    {item.costo_tinto ? ( <p className='itemPrecio'>....................{item.costo_tinto}</p> ) : ( <p></p> )}
                    {/*Costo vino*/}
                    {item.costo_vino ? ( <p className='itemPrecio'>....................{item.costo_vino}</p> ) : ( <p></p> )}
                    {/*Costo sopa*/}
                    {item.costo_sopa ? ( <p className='itemPrecio'>....................{item.costo_sopa + item.costo_adiciones_sopa}</p> ) : ( <p></p> )}
                    {/*Costo pan de ajo*/}
                    {item.costo_pan_ajo ? ( <p className='itemPrecio'>....................{item.costo_pan_ajo}</p> ) : ( <p></p> )}
                    {/*Costo pasta*/}
                    {item.costo_pasta ? ( <p className='itemPrecio'>....................{item.costo_pasta + item.costo_adiciones_pasta}</p> ) : ( <p></p> )}
                    {/*Costo lasagna*/}
                    {item.costo_lasagna ? ( <p className='itemPrecio'>....................{item.costo_lasagna + item.costo_adiciones_lasagna}</p> ) : ( <p></p> )}
                    {/*Costo pantalon*/}
                    {item.costo_pantalon ? ( <p className='itemPrecio'>....................{item.costo_pantalon + item.costo_adiciones_pantalon}</p> ) : ( <p></p> )}
                    {/*Costo pancook*/}
                    {item.costo_pancook ? ( <p className='itemPrecio'>....................{item.costo_pancook + item.costo_adiciones_pancook}</p> ) : ( <p></p> )}
                    {/*Costo personal*/}
                    {item.costo_personal ? ( <p className='itemPrecio'>....................{item.costo_personal + item.costo_adiciones}</p> ) : ( <p></p> )}
                    {/*Costo grande*/}
                    {item.costo_grande ? ( <p className='itemPrecio'  >....................{item.costo_grande + item.costo_adiciones_grande}</p> ) : ( <p></p> )}
                  </div>
                  {/*cerveza*/}
                  {item.mod_sabor_cerveza ? ( <p className='itemSabor'>{item.mod_sabor_cerveza}</p> ) : ( <p></p> )}
                  {/*jugo*/}
                  {item.mod_sabor_jugo ? ( <p className='itemSabor'>{item.mod_sabor_jugo}</p> ) : ( <p></p> )}
                  {/*tinto*/}
                  {item.mod_sabor_cafe ? ( <p className='itemSabor'>{item.mod_sabor_cafe}</p> ) : ( <p></p> )}

                  {item.mod_sabor_chocolate ? ( <p className='itemSabor'>{item.mod_sabor_chocolate}</p> ) : ( <p></p> )}
                  {/*Sopa*/}
                  {item.sabor_sopa ? ( <p className='itemSabor'>Sabor: {item.sabor_sopa}</p> ) : ( <p></p> )}
                  {item.mod_sabor_sopa ? ( <p className='itemSabor'>Adicion: {item.mod_sabor_sopa}</p> ) : ( <p></p> )}
                  {item.ind_sopa_adicional ? ( <p className='itemSabor'>Observaciones: {item.ind_sopa_adicional}</p> ) : ( <p></p> )}
                  {/*pasta*/}
                  {item.sabor_pasta ? ( <p className='itemSabor'>Sabor: {item.sabor_pasta}</p> ) : ( <p></p> )}
                  {item.mod_sabor_pasta ? ( <p className='itemSabor'>Adicion: {item.mod_sabor_pasta}</p> ) : ( <p></p> )}
                  {item.ind_pasta_adicional ? ( <p className='itemSabor'>Observaciones: {item.ind_pasta_adicional}</p> ) : ( <p></p> )}
                  {/*lasagna*/}
                  {item.sabor_lasagna ? ( <p className='itemSabor'>Sabor: {item.sabor_lasagna}</p> ) : ( <p></p> )}
                  {item.mod_sabor_lasagna ? ( <p className='itemSabor'>Adicion: {item.mod_sabor_lasagna}</p> ) : ( <p></p> )}
                  {item.ind_lasagna_adicional ? ( <p className='itemSabor'>Observaciones: {item.ind_lasagna_adicional}</p> ) : ( <p></p> )}
                  {/*pancook*/}
                  {item.sabor_pancook ? ( <p className='itemSabor'>Sabor: {item.sabor_pancook}</p> ) : ( <p></p> )}
                  {item.mod_sabor_pancook ? ( <p className='itemSabor'>Adicion: {item.mod_sabor_pancook}</p> ) : ( <p></p> )}
                  {item.ind_pancook_adicional ? ( <p className='itemSabor'>Observaciones: {item.ind_pancook_adicional}</p> ) : ( <p></p> )}
                  {/*pantalon*/}
                  {item.sabor_pantalon ? ( <p className='itemSabor'>Sabor: {item.sabor_pantalon}</p> ) : ( <p></p> )}
                  {item.mod_sabor_pantalon ? ( <p className='itemSabor'>Adicion: {item.mod_sabor_pantalon}</p> ) : ( <p></p> )}
                  {item.ind_pantalon_adicional ? ( <p className='itemSabor'>Observaciones: {item.ind_pantalon_adicional}</p> ) : ( <p></p> )}
                  {/*personal*/}
                  {item.sabor_personal ? ( <p className='itemSabor'>Sabor: {item.sabor_personal}</p> ) : ( <p></p> )}
                  {item.mod_sabor_personal ? ( <p className='itemSabor'>Adicion: {item.mod_sabor_personal}</p> ) : ( <p></p> )}
                  {item.ind_personal_adicional ? ( <p className='itemSabor'>Observaciones: {item.ind_personal_adicional}</p> ) : ( <p></p> )}
                  {/*personal Mitad*/}
                  {item.mitad_uno ? ( <p className='itemSabor'>Sabor mitad 1: {item.mitad_uno}</p> ) : ( <p></p> )}
                  {item.mitad_dos ? ( <p className='itemSabor'>Sabor mitad 2: {item.mitad_dos}</p> ) : ( <p></p> )}
                  {item.mod_mitad_uno ? ( <p className='itemSabor'>Adicion mitad 1: {item.mod_mitad_uno}</p> ) : ( <p></p> )}
                  {item.mod_mitad_dos ? ( <p className='itemSabor'>Adicion mitad 2: {item.mod_mitad_dos}</p> ) : ( <p></p> )}
                  {item.ind_mitad_uno_adicional ? ( <p className='itemSabor'>Observaciones mitad 1: {item.ind_mitad_uno_adicional}</p> ) : ( <p></p> )}
                  {item.ind_mitad_dos_adicional ? ( <p className='itemSabor'>Observaciones mitad 2: {item.ind_mitad_dos_adicional}</p> ) : ( <p></p> )}
                  {/*Grande Completa*/}
                  {item.sabor_grande ? ( <p className='itemSabor'>Sabor: {item.sabor_grande}</p> ) : ( <p></p> )}
                  {item.mod_sabor_grande ? ( <p className='itemSabor'>Adicion: {item.mod_sabor_grande}</p> ) : ( <p></p> )}
                  {item.ind_grande_adicional ? ( <p className='itemSabor'>Observaciones: {item.ind_grande_adicional}</p> ) : ( <p></p> )}
                  {/*Grande Completa Cuartos*/}
                  {item.cuarto_uno ? ( <p className='itemSabor'>Sabor cuarto 1: {item.cuarto_uno}</p> ) : ( <p></p> )}
                  {item.cuarto_dos ? ( <p className='itemSabor'>Sabor cuarto 2: {item.cuarto_dos}</p> ) : ( <p></p> )}
                  {item.cuarto_tres ? ( <p className='itemSabor'>Sabor cuarto 3: {item.cuarto_tres}</p> ) : ( <p></p> )}
                  {item.cuarto_cuatro ? ( <p className='itemSabor'>Sabor cuarto 4: {item.cuarto_cuatro}</p> ) : ( <p></p> )}

                  {item.mod_cuarto_uno ? ( <p className='itemSabor'>Adicion cuarto 1: {item.mod_cuarto_uno}</p> ) : ( <p></p> )}
                  {item.mod_cuarto_dos ? ( <p className='itemSabor'>Adicion cuarto 2: {item.mod_cuarto_dos}</p> ) : ( <p></p> )}
                  {item.mod_cuarto_tres ? ( <p className='itemSabor'>Adicion cuarto 3: {item.mod_cuarto_tres}</p> ) : ( <p></p> )}
                  {item.mod_cuarto_cuatro ? ( <p className='itemSabor'>Adicion cuarto 4: {item.mod_cuarto_cuatro}</p> ) : ( <p></p> )}

                  {item.ind_cuarto_uno_adicional ? ( <p className='itemSabor'>Observaciones cuarto 1: {item.ind_cuarto_uno_adicional}</p> ) : ( <p></p> )}
                  {item.ind_cuarto_dos_adicional ? ( <p className='itemSabor'>Observaciones cuarto 2: {item.ind_cuarto_dos_adicional}</p> ) : ( <p></p> )}
                  {item.ind_cuarto_tres_adicional ? ( <p className='itemSabor'>Observaciones cuarto 3: {item.ind_cuarto_tres_adicional}</p> ) : ( <p></p> )}
                  {item.ind_cuarto_cuatro_adicional ? ( <p className='itemSabor'>Observaciones cuarto 4: {item.ind_cuarto_cuatro_adicional}</p> ) : ( <p></p> )}

                  {/*DESAYUNOS*/}
                  {/*item.tipo ? ( <p className='itemSabor'>Desayuno: {item.tipo}</p> ) : ( <p></p> )*/}

                  {item.desayuno_tipo_huevos ? ( <p className='itemSabor'>Huevos: {item.desayuno_tipo_huevos}</p> ) : ( <p></p> )}
                  {item.desayuno_tipo_bebida ? ( <p className='itemSabor'>Adicion: {item.desayuno_tipo_bebida}</p> ) : ( <p></p> )}

                  {item.mod_sabor_desayuno ? ( <p className='itemSabor'>Adicion: {item.mod_sabor_desayuno}</p> ) : ( <p></p> )}
                  {item.ind_desayuno_adicional ? ( <p className='itemSabor'>Observaciones: {item.ind_desayuno_adicional}</p> ) : ( <p></p> )}
                </>
              )
            })}   
            <p className='itemOrdenFinal'>COSTO PEDIDO: {this.state.costoOrden}</p>         
          </ModalBody>
          <ModalFooter>
              <Button color="success" onClick={this.printerConect}>Imprimir / Aceptar Pedido</Button> 
              {/*<Button color="success" onClick={this.toggleModalAceptar}>Aceptar Pedido</Button>*/} 
              <Button color="danger" onClick={this.toggleModalCancelar}>Cancelar</Button>
          </ModalFooter>
      </Modal>      
      </>
    );
  } 
}

export default appCali;