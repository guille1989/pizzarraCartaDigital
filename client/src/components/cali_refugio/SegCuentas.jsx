import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, CardBody, CardTitle, CardText, CardFooter, Card, CardHeader,CardColumns } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

class SegCuentas extends Component {
    constructor(){
        super()
        this.state={
            dataOrdenes:[],            
            mostrarOrdenes: true,
            colorCuenta: '#ebc509',
            claseCuenta: 'cuadroPedidoAux2',
            dataOrdenesMongo: [],
            dataOrdenesAux: [],
            mesaFiltro: 'mesaAux'
        }
    }
    
    componentDidMount(){  
        /*      
        //Fetch GET
        const requestOptions ={
            method: 'GET',
            headers : {'Content-type':'application/json' }   
          }
          
          fetch('http://localhost:8081/api/pedidos', requestOptions)
              .then(response => response.json())
              .then(data => {
                    //console.log(data.datos)
                    this.setState({
                        dataOrdenesMongo: data.datos
                    })                
                })
              .catch(err => console.log(err))
              */
    }   

    pedidosPendientesFactura(){   
        //
        //document.getElementById('Bpedido').style.backgroundColor = '#ebc509' 
        this.setState({
            claseCuenta: "cuadroPedido"
        })    
        //Leer base de datos
        const requestOptions ={
            method: 'GET',
            headers : {'Content-type':'application/json' }  
          }
        fetch(`http://${process.env.REACT_APP_URL_PRODUCCION}/api/actualizarpedidossinpago`, requestOptions)
          .then(response => response.json())
          .then(data => {   
                this.setState({
                    dataOrdenesMongo: data.datos
                })                
            })
          .catch(err => console.log(err))
          //console.log(this.state.dataOrdenesMongo)
    }

    pedidosFacturados(){   
        //
        //document.getElementById('Bpedido').style.backgroundColor = 'Green'     
        this.setState({
            claseCuenta: "cuadroPedidoAux"
        })        
        //Leer base de datos
        const requestOptions ={
            method: 'GET',
            headers : {'Content-type':'application/json' }   
          }

        fetch(`http://${process.env.REACT_APP_URL_PRODUCCION}/api/actualizarpedidosconpago`, requestOptions)
          .then(response => response.json())
          .then(data => {               
                this.setState({
                    dataOrdenesMongo: data.datos
                })                
            })
          .catch(err => console.log(err)) 
    }

    pedidosTodos(){
        //document.getElementById('Bpedido').style.backgroundColor = 'Green'     
        this.setState({
            claseCuenta: "cuadroPedidoAux2"
        })        
        //Leer base de datos
        const requestOptions ={
            method: 'GET',
            headers : {'Content-type':'application/json' }   
          }

        fetch(`http://${process.env.REACT_APP_URL_PRODUCCION}/api/pedidos`, requestOptions)
          .then(response => response.json())
          .then(data => {
                //console.log(data.datos)
                this.setState({
                    dataOrdenesMongo: data.datos
                })                
            })
          .catch(err => console.log(err)) 
    }

    changeTextMesa(e){
        this.setState({
            mesaFiltro: e.target.value
        })
    }

    buscarMesa(){        
        //console.log(this.state.mesaFiltro)
        const requestOptions ={
            method: 'GET',
            headers : {'Content-type':'application/json' }   
        }          
        fetch(`http://${process.env.REACT_APP_URL_PRODUCCION}/api/buscarmesapedidos/` + this.state.mesaFiltro, requestOptions)
            .then(response => response.json())
            .then(data => {
                //********************************
                    let nuevoPedido = [];
                    let nuevoAux = 0;
                    let AuxMuestra = [];
                    //console.log(data.datos)
                    if(data.datos.length === 0){
                        alert("Sin resultados")
                        this.setState({
                            dataOrdenesMongo: []
                        })
                    }else{
                        console.log("Con resutados")
                        AuxMuestra = [data.datos[0].aux[0]]                 
                        data.datos.map((item, index) => {    
                            nuevoAux = nuevoAux + item.aux[0].costo_pedido                
                            for(var i=0; i<item.pedido.length; i++){                           
                                nuevoPedido.push(item.pedido[i])
                            }
                        })
                        AuxMuestra[0].costo_pedido = nuevoAux   
                        //console.log(AuxMuestra[0].costo_pedido)                
                        let nuevoDato = [{aux: AuxMuestra, pedido: nuevoPedido}]                    
                        //console.log(nuevoDato)
                        this.setState({
                            dataOrdenesMongo: nuevoDato
                        })  
                    } 
                //********************************                            
                })
            .catch(err => console.log(err))
            //console.log(this.state.dataOrdenesMongo)
         }

    datosOrdenComanda(dato){       
        if(dato.tipo === undefined){ 
            if(dato[0].tipo_pedido === "MESA"){
                return(
                    <div className='datosOrdenFactura'>
                        <p>Tipo Pedido: <strong>{dato[0].tipo_pedido}</strong></p>
                        <p>Mesa: <strong>{dato[0].mesa}</strong></p>
                        <p>Estado Pedido: <strong>{dato[0].estado_pedido}</strong></p>
                        <p>Costo Pedido: <strong>{dato[0].costo_pedido}</strong></p>
                        <p>Fecha Pedido: <strong>{dato[0].fecha_pedido}</strong></p>
                    </div>           
                )
            }else if(dato[0].tipo_pedido === "DOMICILIO"){
                return(
                    <div className='datosOrdenFactura'>
                        <p>Tipo Pedido: <strong>{dato[0].tipo_pedido}</strong></p>
                        <p>Nombre: <strong>{dato[0].domi_nombre}</strong></p>
                        <p>Telefono: <strong>{dato[0].domi_telefono}</strong></p>
                        <p>Direccion: <strong>{dato[0].domi_direccion}</strong></p>
                        <p>Observacion: <strong>{dato[0].domi_otros}</strong></p>
                        <p>Estado Pedido: <strong>{dato[0].estado_pedido}</strong></p>
                        <p>Costo Pedido: <strong>{dato[0].costo_pedido}</strong></p>
                        <p>Fecha Pedido: <strong>{dato[0].fecha_pedido}</strong></p>
                    </div>           
                )
            }else if(dato[0].tipo_pedido === "RECOGEN"){
                return(
                    <div className='datosOrdenFactura'>
                        <p>Tipo Pedido: <strong>{dato[0].tipo_pedido}</strong></p>
                        <p>Nombre: <strong>{dato[0].recoge_nombre}</strong></p>
                        <p>Telefono Pedido: <strong>{dato[0].recoge_telefono}</strong></p>
                        <p>Estado Pedido: <strong>{dato[0].estado_pedido}</strong></p>
                        <p>Costo Pedido: <strong>{dato[0].costo_pedido}</strong></p>
                        <p>Fecha Pedido: <strong>{dato[0].fecha_pedido}</strong></p>
                    </div>           
                )
            }
        }        
    }

    datosOrdenComandaItems(item2){     
        return(
                <div>
                    <p>{item2.tipo}</p>
                    {/*Cerveza*/}
                    {item2.mod_sabor_cerveza ? ( <p className='itemSabor'>{item2.mod_sabor_cerveza}</p> ) : ( <p></p> )}
                    {/*PIZZA GRANDE*/}                                        
                    {item2.sabor_grande ? ( <p className='itemSabor'>Sabor: {item2.sabor_grande}</p> ) : ( <p></p> )}
                    {item2.mod_sabor_grande ? ( <p className='itemSabor'>Adicion: {item2.mod_sabor_grande}</p> ) : ( <p></p> )}
                    {item2.ind_grande_adicional ? ( <p className='itemSabor'>Observaciones: {item2.ind_grande_adicional}</p> ) : ( <p></p> )}
    
                    {/*Grande Completa Cuartos*/}
                    {item2.cuarto_uno ? ( <p className='itemSabor'>Sabor cuarto 1: {item2.cuarto_uno}</p> ) : ( <p></p> )}
                    {item2.cuarto_dos ? ( <p className='itemSabor'>Sabor cuarto 2: {item2.cuarto_dos}</p> ) : ( <p></p> )}
                    {item2.cuarto_tres ? ( <p className='itemSabor'>Sabor cuarto 3: {item2.cuarto_tres}</p> ) : ( <p></p> )}
                    {item2.cuarto_cuatro ? ( <p className='itemSabor'>Sabor cuarto 4: {item2.cuarto_cuatro}</p> ) : ( <p></p> )}
    
                    {item2.mod_cuarto_uno ? ( <p className='itemSabor'>Adicion cuarto 1: {item2.mod_cuarto_uno}</p> ) : ( <p></p> )}
                    {item2.mod_cuarto_dos ? ( <p className='itemSabor'>Adicion cuarto 2: {item2.mod_cuarto_dos}</p> ) : ( <p></p> )}
                    {item2.mod_cuarto_tres ? ( <p className='itemSabor'>Adicion cuarto 3: {item2.mod_cuarto_tres}</p> ) : ( <p></p> )}
                    {item2.mod_cuarto_cuatro ? ( <p className='itemSabor'>Adicion cuarto 4: {item2.mod_cuarto_cuatro}</p> ) : ( <p></p> )}
    
                    {item2.ind_cuarto_uno_adicional ? ( <p className='itemSabor'>Observaciones cuarto 1: {item2.ind_cuarto_uno_adicional}</p> ) : ( <p></p> )}
                    {item2.ind_cuarto_dos_adicional ? ( <p className='itemSabor'>Observaciones cuarto 2: {item2.ind_cuarto_dos_adicional}</p> ) : ( <p></p> )}
                    {item2.ind_cuarto_tres_adicional ? ( <p className='itemSabor'>Observaciones cuarto 3: {item2.ind_cuarto_tres_adicional}</p> ) : ( <p></p> )}
                    {item2.ind_cuarto_cuatro_adicional ? ( <p className='itemSabor'>Observaciones cuarto 4: {item2.ind_cuarto_cuatro_adicional}</p> ) : ( <p></p> )}
    
                    {/*personal Mitad*/}
                    {item2.mitad_uno ? ( <p className='itemSabor'>Sabor mitad 1: {item2.mitad_uno}</p> ) : ( <p></p> )}
                    {item2.mitad_dos ? ( <p className='itemSabor'>Sabor mitad 2: {item2.mitad_dos}</p> ) : ( <p></p> )}
                    {item2.mod_mitad_uno ? ( <p className='itemSabor'>Adicion mitad 1: {item2.mod_mitad_uno}</p> ) : ( <p></p> )}
                    {item2.mod_mitad_dos ? ( <p className='itemSabor'>Adicion mitad 2: {item2.mod_mitad_dos}</p> ) : ( <p></p> )}
                    {item2.ind_mitad_uno_adicional ? ( <p className='itemSabor'>Observaciones mitad 1: {item2.ind_mitad_uno_adicional}</p> ) : ( <p></p> )}
                    {item2.ind_mitad_dos_adicional ? ( <p className='itemSabor'>Observaciones mitad 2: {item2.ind_mitad_dos_adicional}</p> ) : ( <p></p> )}
    
                    {/*jugo*/}
                    {item2.mod_sabor_jugo ? ( <p className='itemSabor'>{item2.mod_sabor_jugo}</p> ) : ( <p></p> )}
                    {/*tinto*/}
                    {item2.mod_sabor_cafe ? ( <p className='itemSabor'>{item2.mod_sabor_cafe}</p> ) : ( <p></p> )}
                    {/*Sopa*/}
                    {item2.sabor_sopa ? ( <p className='itemSabor'>Sabor: {item2.sabor_sopa}</p> ) : ( <p></p> )}
                    {item2.mod_sabor_sopa ? ( <p className='itemSabor'>Adicion: {item2.mod_sabor_sopa}</p> ) : ( <p></p> )}
                    {item2.ind_sopa_adicional ? ( <p className='itemSabor'>Observaciones: {item2.ind_sopa_adicional}</p> ) : ( <p></p> )}
                    {/*pasta*/}
                    {item2.sabor_pasta ? ( <p className='itemSabor'>Sabor: {item2.sabor_pasta}</p> ) : ( <p></p> )}
                    {item2.mod_sabor_pasta ? ( <p className='itemSabor'>Adicion: {item2.mod_sabor_pasta}</p> ) : ( <p></p> )}
                    {item2.ind_pasta_adicional ? ( <p className='itemSabor'>Observaciones: {item2.ind_pasta_adicional}</p> ) : ( <p></p> )}
                    {/*lasagna*/}
                    {item2.sabor_lasagna ? ( <p className='itemSabor'>Sabor: {item2.sabor_lasagna}</p> ) : ( <p></p> )}
                    {item2.mod_sabor_lasagna ? ( <p className='itemSabor'>Adicion: {item2.mod_sabor_lasagna}</p> ) : ( <p></p> )}
                    {item2.ind_lasagna_adicional ? ( <p className='itemSabor'>Observaciones: {item2.ind_lasagna_adicional}</p> ) : ( <p></p> )}
                    {/*ravioli*/}
                    {item2.sabor_ravioli ? ( <p className='itemSabor'>Sabor: {item2.sabor_ravioli}</p> ) : ( <p></p> )}
                    {item2.mod_sabor_ravioli ? ( <p className='itemSabor'>Adicion: {item2.mod_sabor_ravioli}</p> ) : ( <p></p> )}
                    {item2.ind_ravioli_adicional ? ( <p className='itemSabor'>Observaciones: {item2.ind_ravioli_adicional}</p> ) : ( <p></p> )}
                    {/*pancook*/}
                    {item2.sabor_pancook ? ( <p className='itemSabor'>Sabor: {item2.sabor_pancook}</p> ) : ( <p></p> )}
                    {item2.mod_sabor_pancook ? ( <p className='itemSabor'>Adicion: {item2.mod_sabor_pancook}</p> ) : ( <p></p> )}
                    {item2.ind_pancook_adicional ? ( <p className='itemSabor'>Observaciones: {item2.ind_pancook_adicional}</p> ) : ( <p></p> )}
                    {/*pantalon*/}
                    {item2.sabor_pantalon ? ( <p className='itemSabor'>Sabor: {item2.sabor_pantalon}</p> ) : ( <p></p> )}
                    {item2.mod_sabor_pantalon ? ( <p className='itemSabor'>Adicion: {item2.mod_sabor_pantalon}</p> ) : ( <p></p> )}
                    {item2.ind_pantalon_adicional ? ( <p className='itemSabor'>Observaciones: {item2.ind_pantalon_adicional}</p> ) : ( <p></p> )}
                    {/*personal*/}
                    {item2.sabor_personal ? ( <p className='itemSabor'>Sabor: {item2.sabor_personal}</p> ) : ( <p></p> )}
                    {item2.mod_sabor_personal ? ( <p className='itemSabor'>Adicion: {item2.mod_sabor_personal}</p> ) : ( <p></p> )}
                    {item2.ind_personal_adicional ? ( <p className='itemSabor'>Observaciones: {item2.ind_personal_adicional}</p> ) : ( <p></p> )}
                </div>
            )   
    }

    indexOrdenes(index){
        if(window.confirm('Desea Sacar Cuetna')){
        //Actualizamos en DB
            const requestOptions ={
                method: 'PUT',
                headers : {'Content-type':'application/json' }   
            }          
            fetch(`http://${process.env.REACT_APP_URL_PRODUCCION}/api/actualizarpedidos/` + index, requestOptions)
                .then(response => response.json())
                .then(data => {
                        //console.log(data.datos)              
                    })
                .catch(err => console.log(err))
        //Actualizamos
        setTimeout(() => {
            const requestOptions ={
                method: 'GET',
                headers : {'Content-type':'application/json' }   
              }

            fetch(`http://${process.env.REACT_APP_URL_PRODUCCION}/api/pedidos`, requestOptions)
              .then(response => response.json())
              .then(data => {
                    //console.log(data.datos)
                    this.setState({
                        dataOrdenesMongo: data.datos
                    })                
                })
              .catch(err => console.log(err))
        }, 200);
        }else{

        }                
    }

    render() {
        return (
            <div>                               
                <div className='gestionPedidoPendienteFacturado'>
                    <Button color="warning" onClick={this.pedidosPendientesFactura.bind(this)}>Pendientes</Button>
                    <Button color="success" onClick={this.pedidosFacturados.bind(this)}>Facturadas</Button>
                    <Button color="info" onClick={this.pedidosTodos.bind(this)}>Todas</Button>
                </div>                
                        {Object.values(this.state.dataOrdenesMongo).map((item, index) => {
                            //console.log(item)                     
                            return(
                                <>  
                                    <div id='Bpedido' className={this.state.claseCuenta} onClick={()=>this.indexOrdenes(item._id)}>                 
                                    <div>
                                        {/*Dato de Pedidos*/}
                                        {this.datosOrdenComanda(item.aux)}
                                        {item.pedido.map((item, index) => {
                                            return(
                                                <>
                                                    {this.datosOrdenComandaItems(item)}
                                                </>                                                
                                            )
                                        })}                                        
                                    </div> 

                                    </div>
                                </>
                            )                                                                                 
                        })}   
                                    
            </div>
        );
    }
}

export default SegCuentas;