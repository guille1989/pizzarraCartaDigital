import React, {Component} from 'react'
import { Button } from 'reactstrap';
import '../../App.css';

class Pedido extends Component {
    constructor(props){
        super(props);    
        this.state={
            costoOrde: 0,
            estado: 'inicio',
            pedidoOrden: [],
            pedidoInsumos: [],
            hayorden:false,
            personalmitaduno: '',
            personalmitaddos: '',
            personaluncuarto: '',
            personaldoscuarto: '',
            personaltrescuarto: '',
            personalcuatrocuarto: '',
            adicionpersonaluncuarto: '',
            adicionpersonaldoscuarto: '',
            adicionpersonaltrescuarto: '',
            adicionpersonalcuatrocuarto: '',
            menosingredienteuncuarto: '',
            menosingredientedoscuarto: '',
            menosingredientetrescuarto: '',
            menosingredientecuatrocuarto: '',
            auxCondicion: 0
        } 
    }
    
componentDidMount() {
    this.setState({
        costoOrde : 0
    })
    this.interval = setInterval(() => this.leerLocalStorage(), 500);   
}


leerLocalStorage = () => {    
    let dato = []
    let datoInsumos = []
    let orden = [] 
    let costoAux = 0
    let costoAuxGrande = 0
    let costoAuxPantalon = 0
    let costoAuxPancook = 0
    let costoAuxLasagna = 0
    let costoAuxPasta = 0
    let costoAuxSopa = 0
    let costoAucPanAjo = 0
    let costoAucPanaderia = 0
    let costoAucDesayunoAmericano = 0
    let costoAucDesayunoHuesped = 0
    let costoAuxTinto = 0
    let costoAuxVino = 0
    let costoAuxJugo = 0
    let costoAuxCerveza = 0
    let costoAuxBebidas = 0
    let costoAuxGaseosas = 0

    //Personales-----------------
    let pizzaPersonal = [JSON.parse(localStorage.getItem('Numero_Personales'))]
    //console.log(pizzaPersonal)

    if(pizzaPersonal[0] !== null){
        for(let i=0; i <= pizzaPersonal[0].Numero; i++){            
            dato = JSON.parse(localStorage.getItem(`Pedido_Personal_Mitad_${i}`))            
            if(dato !== null){
                //console.log(dato)
                orden.push(dato[0])
                datoInsumos.push(dato[1])
                datoInsumos.push(dato[2])
                datoInsumos.push(dato[3])
                datoInsumos.push(dato[4])
            }
        }     
        //AQUI COMIENZA LA PRUEBA !!!   
        for(let i=0; i <= pizzaPersonal[0].Numero; i++){
            //console.log(JSON.parse(localStorage.getItem(`Pedido_Personal_${i}`)))
            dato = JSON.parse(localStorage.getItem(`Pedido_Personal_${i}`))            
            if(dato !== null){
                //console.log(dato)
                orden.push(dato[0])
                datoInsumos.push(dato[1])
                datoInsumos.push(dato[2])
            }
        }  
        //Sacamos el total        
        Object.values(orden).map((item, i) => {
            costoAux = costoAux + item.costo_adiciones + item.costo_personal  
        })
        this.setState({
            hayorden: true
        })
    }

    //Pizza Geande--------------
    let pizzaGrande = [JSON.parse(localStorage.getItem('Numero_Grandes'))]
    if(pizzaGrande[0] !== null){

        for(let i=0; i < pizzaGrande[0].Numero; i++){
            dato = JSON.parse(localStorage.getItem(`Pedido_Grande_Cuarto_${i}`))
            if(dato !== null){
                orden.push(dato)
            }
        }

        for(let i=0; i < pizzaGrande[0].Numero; i++){
            dato = JSON.parse(localStorage.getItem(`Pedido_Grande_Mitad_${i}`))
            if(dato !== null){
                orden.push(dato)
            }
        }

        for(let i=0; i < pizzaGrande[0].Numero; i++){
            dato = JSON.parse(localStorage.getItem(`Pedido_Grande_${i}`))
            if(dato !== null){
                orden.push(dato)
            }
        }  
        //Sacamos el total        
        Object.values(orden).map((item, i) => {
            if(item.costo_adiciones_grande !== undefined && item.costo_grande !== undefined){
                costoAuxGrande = costoAuxGrande + item.costo_adiciones_grande + item.costo_grande
            }   
        })
        this.setState({
            hayorden: true
        })
    }

    //Pizza Pantalon---------
    let pizzaPantalon = [JSON.parse(localStorage.getItem('Numero_Pantalon'))]
    if(pizzaPantalon[0] !== null){

        for(let i=0; i < pizzaPantalon[0].Numero; i++){
            dato = JSON.parse(localStorage.getItem(`Pedido_Pantalon_${i}`))
            if(dato !== null){
                orden.push(dato)
            }
        }  
        //Sacamos el total        
        Object.values(orden).map((item, i) => {
            if(item.costo_adiciones_pantalon !== undefined && item.costo_pantalon !== undefined){
                costoAuxPantalon = costoAuxPantalon + item.costo_adiciones_pantalon + item.costo_pantalon
            }   
        })
        this.setState({
            hayorden: true
        })
    }

    //Pizza Pancook
    let pizzaPancook = [JSON.parse(localStorage.getItem('Numero_Pancook'))]
    if(pizzaPancook[0] !== null){

        for(let i=0; i < pizzaPancook[0].Numero; i++){
            dato = JSON.parse(localStorage.getItem(`Pedido_Pancook_${i}`))
            if(dato !== null){
                orden.push(dato)
            }
        }  
        //Sacamos el total        
        Object.values(orden).map((item, i) => {
            if(item.costo_adiciones_pancook !== undefined && item.costo_pancook !== undefined){
                costoAuxPancook = costoAuxPancook + item.costo_adiciones_pancook + item.costo_pancook
            }   
        })
        this.setState({
            hayorden: true
        })
    }

    //Lasagna
    let pizzaLasagna = [JSON.parse(localStorage.getItem('Numero_Lasagnas'))]
    if(pizzaLasagna[0] !== null){
        for(let i=0; i < pizzaLasagna[0].Numero; i++){
            dato = JSON.parse(localStorage.getItem(`Pedido_Lasagna_${i}`))
            if(dato !== null){
                orden.push(dato)
            }
        }  
        //Sacamos el total        
        Object.values(orden).map((item, i) => {
            if(item.costo_adiciones_lasagna !== undefined && item.costo_lasagna !== undefined){
                costoAuxLasagna = costoAuxLasagna + item.costo_adiciones_lasagna + item.costo_lasagna
            }   
        })
        this.setState({
            hayorden: true
        })
    }

    //Pasta
    let pizzaPasta = [JSON.parse(localStorage.getItem('Numero_Pastas'))]
    if(pizzaPasta[0] !== null){
        for(let i=0; i < pizzaPasta[0].Numero; i++){
            dato = JSON.parse(localStorage.getItem(`Pedido_Pasta_${i}`))
            if(dato !== null){
                orden.push(dato)
            }
        }  
        //Sacamos el total        
        Object.values(orden).map((item, i) => {
            if(item.costo_adiciones_pasta !== undefined && item.costo_pasta !== undefined){
                costoAuxPasta = costoAuxPasta + item.costo_adiciones_pasta + item.costo_pasta
            }   
        })
        this.setState({
            hayorden: true
        })
    }

    //Sopa
    let pizzaSopa = [JSON.parse(localStorage.getItem('Numero_Sopas'))]
    if(pizzaSopa[0] !== null){
        for(let i=0; i < pizzaSopa[0].Numero; i++){
            dato = JSON.parse(localStorage.getItem(`Pedido_Sopa_${i}`))
            if(dato !== null){
                orden.push(dato)
            }
        }  
        //Sacamos el total        
        Object.values(orden).map((item, i) => {
            if(item.costo_adiciones_sopa !== undefined && item.costo_sopa !== undefined){
                costoAuxSopa = costoAuxSopa + item.costo_adiciones_sopa + item.costo_sopa
            }   
        })
        this.setState({
            hayorden: true
        })
    }

    //PanAjo
    let pizzaPan = [JSON.parse(localStorage.getItem('Numero_PanAjos'))]
    if(pizzaPan[0] !== null){
        for(let i=0; i < pizzaPan[0].Numero; i++){
            dato = JSON.parse(localStorage.getItem(`Pedido_PanAjo_${i}`))
            if(dato !== null){
                orden.push(dato)
            }
        }  
        //Sacamos el total        
        Object.values(orden).map((item, i) => {
            if(item.costo_pan_ajo !== undefined){
                costoAucPanAjo = costoAucPanAjo + item.costo_pan_ajo
            }   
        })
        this.setState({
            hayorden: true
        })
    }

    //Panaderia
    let pizzaPanaderia = [JSON.parse(localStorage.getItem('Numero_Panaderia'))]
    //console.log(pizzaPanaderia)
    if(pizzaPanaderia[0] !== null){
        for(let i=0; i < pizzaPanaderia[0].Numero; i++){
            //console.log(i)
            //console.log(JSON.parse(localStorage.getItem(`Pedido_Panaderia_${i}`)))
            dato = JSON.parse(localStorage.getItem(`Pedido_Panaderia_${i}`))
            if(dato !== null){
                orden.push(dato)
            }
        }  
        //Sacamos el total        
        Object.values(orden).map((item, i) => {
            if(item.costo_panaderia !== undefined){
                costoAucPanaderia = costoAucPanaderia + item.costo_panaderia
            }   
        })
        this.setState({
            hayorden: true
        })
    }

    //Desayuno Americano
    let pizzaDesayunoAmericano = [JSON.parse(localStorage.getItem('Numero_Desayuno_Americano'))]
    //console.log(pizzaDesayunoAmericano)
    if(pizzaDesayunoAmericano[0] !== null){
        for(let i=0; i < pizzaDesayunoAmericano[0].Numero; i++){
            //console.log(i)
            //console.log(JSON.parse(localStorage.getItem(`Pedido_Desayuno_Americano_${i}`)))
            if(JSON.parse(localStorage.getItem(`Pedido_Desayuno_Americano_${i}`)) !== null){
                dato = JSON.parse(localStorage.getItem(`Pedido_Desayuno_Americano_${i}`))[0]
                if(dato !== null){
                    orden.push(dato)
                }
            }            
        }  
        //Sacamos el total        
        Object.values(orden).map((item, i) => {
            if(item.costo_desayuno_americano !== undefined){
                costoAucDesayunoAmericano = costoAucDesayunoAmericano + item.costo_desayuno_americano + item.costo_adiciones_americano
            }   
        })
        this.setState({
            hayorden: true
        })
    }

    //Desayuno Huesped
    let pizzaDesayunoHuesped = [JSON.parse(localStorage.getItem('Numero_Desayuno_Huesped'))]
    //console.log(pizzaDesayunoAmericano)
    if(pizzaDesayunoHuesped[0] !== null){
        for(let i=0; i < pizzaDesayunoHuesped[0].Numero; i++){
            //console.log(i)
            //console.log(JSON.parse(localStorage.getItem(`Pedido_Desayuno_Americano_${i}`)))
            if(JSON.parse(localStorage.getItem(`Pedido_Desayuno_Huesped_${i}`)) !== null){
                dato = JSON.parse(localStorage.getItem(`Pedido_Desayuno_Huesped_${i}`))[0]
                if(dato !== null){
                    orden.push(dato)
                }
            }            
        }  
        //Sacamos el total        
        Object.values(orden).map((item, i) => {
            //console.log(item.costo_desayuno_huesped)
            if(item.costo_desayuno_huesped !== undefined){
                costoAucDesayunoHuesped = costoAucDesayunoHuesped + item.costo_desayuno_huesped + item.costo_adiciones_huesped
            }   
        })
        this.setState({
            hayorden: true
        })
    }

    //Tinto
    let pizzaTinto = [JSON.parse(localStorage.getItem('Numero_Tintos'))]
    if(pizzaTinto[0] !== null){
        for(let i=0; i < pizzaTinto[0].Numero; i++){
            dato = JSON.parse(localStorage.getItem(`Pedido_Tinto_${i}`))
            if(dato !== null){
                orden.push(dato)
            }
        }  
        //Sacamos el total        
        Object.values(orden).map((item, i) => {
            if(item.costo_tinto !== undefined){
                costoAuxTinto = costoAuxTinto + item.costo_tinto
            }   
        })
        this.setState({
            hayorden: true
        })
    }

    //Vino
    let pizzaVino = [JSON.parse(localStorage.getItem('Numero_Vinos'))]
    if(pizzaVino[0] !== null){
        for(let i=0; i < pizzaVino[0].Numero; i++){
            dato = JSON.parse(localStorage.getItem(`Pedido_Vino_${i}`))
            if(dato !== null){
                orden.push(dato)
            }
        }  
        //Sacamos el total        
        Object.values(orden).map((item, i) => {
            if(item.costo_vino !== undefined){
                costoAuxVino = costoAuxVino + item.costo_vino
            }   
        })
        this.setState({
            hayorden: true
        })
    }

    //Jugos
    let pizzaJugos = [JSON.parse(localStorage.getItem('Numero_Jugos'))]
    if(pizzaJugos[0] !== null){
        for(let i=0; i < pizzaJugos[0].Numero; i++){
            dato = JSON.parse(localStorage.getItem(`Pedido_Jugo_${i}`))
            if(dato !== null){
                orden.push(dato)
            }
        }  
        //Sacamos el total        
        Object.values(orden).map((item, i) => {
            if(item.costo_jugo !== undefined){
                costoAuxJugo = costoAuxJugo + item.costo_jugo
            }   
        })
        this.setState({
            hayorden: true
        })
    }

    //Cervezas
    let pizzaCerveza = [JSON.parse(localStorage.getItem('Numero_Cervezas'))]
    if(pizzaCerveza[0] !== null){
        for(let i=0; i < pizzaCerveza[0].Numero; i++){
            dato = JSON.parse(localStorage.getItem(`Pedido_Cerveza_${i}`))
            if(dato !== null){
                orden.push(dato)
            }
        }  
        //Sacamos el total        
        Object.values(orden).map((item, i) => {
            if(item.costo_cerveza !== undefined){
                costoAuxCerveza = costoAuxCerveza + item.costo_cerveza
            }   
        })
        this.setState({
            hayorden: true
        })
    }

    //Bebidas
    let pizzaBebidas = [JSON.parse(localStorage.getItem('Numero_Bebidas'))]
    if(pizzaBebidas[0] !== null){
        for(let i=0; i < pizzaBebidas[0].Numero; i++){
            dato = JSON.parse(localStorage.getItem(`Pedido_Bebida_${i}`))
            if(dato !== null){
                orden.push(dato)
            }
        }  
        //Sacamos el total        
        Object.values(orden).map((item, i) => {
            if(item.costo_bebida !== undefined){
                costoAuxBebidas = costoAuxBebidas + item.costo_bebida
            }   
        })
        this.setState({
            hayorden: true
        })
    }


    //Gaseosas
    let pizzaGaseosas = [JSON.parse(localStorage.getItem('Numero_Gaseosas'))]
    if(pizzaGaseosas[0] !== null){
        for(let i=0; i < pizzaGaseosas[0].Numero; i++){
            dato = JSON.parse(localStorage.getItem(`Pedido_Gaseosa_${i}`))
            if(dato !== null){
                orden.push(dato)
            }
        }  
        //Sacamos el total        
        Object.values(orden).map((item, i) => {
            if(item.costo_gaseosa !== undefined){
                costoAuxGaseosas = costoAuxGaseosas + item.costo_gaseosa
            }   
        })
        this.setState({
            hayorden: true
        })
    }

    //Actualizamos pedido
    this.setState({
        pedidoOrden : orden,
        costoOrde: costoAuxGrande + costoAux + costoAuxPantalon + costoAuxPancook + costoAuxLasagna + costoAuxPasta + costoAuxSopa + costoAucPanAjo + costoAuxTinto + costoAuxVino + costoAuxJugo + costoAuxCerveza + costoAuxBebidas + costoAuxGaseosas + costoAucPanaderia + costoAucDesayunoAmericano + costoAucDesayunoHuesped,
        pedidoInsumos: datoInsumos
    })

    //Pasamos a funcion main el pedido    
    if(this.state.auxCondicion === this.state.pedidoOrden.length){
        //console.log('Igual')
    }else{
        //console.log('Diferencia')
        this.setState({
            auxCondicion : this.state.pedidoOrden.length
        })

        this.props.ordenPedido(this.state.pedidoOrden, this.state.costoOrde, this.state.pedidoInsumos)
    }

    //console.log(orden)
}

componentWillUnmount() {
    clearInterval(this.interval);
}

render(){
    return(
        <div>
            <div>
                <h1 style={{marginLeft:'10px'}}><strong>RESUMEN PEDIDO:</strong></h1><br></br>
                <p style={{marginTop:'-35px'}}>Costo Total Pedido: <strong style={{textDecoration : 'underline', fontSize: '30px'}}>{this.state.costoOrde}</strong></p>
                <hr></hr>
                    <div className='contenedorPedido'>
                    { this.state.hayorden ? (
                        Object.values(this.state.pedidoOrden).map((item, i) => {  
                            //console.log(item) 
                            return(
                                <div key={i} className="pedidoOrden">
                                    <hr className='hr'></hr>
                                    {/* TIPO DE PRODUCTO */}
                                    <p><strong>{item.tipo}</strong></p>

                                    {/* SABORES */} 
                                    {item.mod_sabor_cerveza ? ( <p><strong>{item.mod_sabor_cerveza}</strong></p> ) : ( <p></p> )}
                                    {item.mod_sabor_jugo ? ( <p><strong>{item.mod_sabor_jugo}</strong></p> ) : ( <p></p> )}
                                    {item.mod_sabor_cafe ? ( <p><strong>{item.mod_sabor_cafe}</strong></p> ) : ( <p></p> )}
                                    {item.sabor_sopa ? ( <p>Sabor Sopa: <strong>{item.sabor_sopa} {item.mod_sabor_sopa}</strong></p> ) : ( <p></p> )}     
                                    {item.sabor_pasta ? ( <p>Sabor Pasta: <strong>{item.sabor_pasta} {item.mod_sabor_pasta}</strong></p> ) : ( <p></p> )} 
                                    {item.sabor_lasagna ? ( <p>Sabor Lasagna: <strong>{item.sabor_lasagna} {item.mod_sabor_lasagna}</strong></p> ) : ( <p></p> )}   
                                    {item.cuarto_uno ? ( <p>Cuarto Uno: <strong>{item.cuarto_uno} {item.mod_cuarto_uno}</strong></p> ) : ( <p></p> )}
                                    {item.ind_cuarto_uno_adicional ? ( <p>Cuarto Uno Observaciones: <strong>{item.ind_cuarto_uno_adicional}</strong></p> ) : ( <p></p> )}
                                    {item.cuarto_dos ? ( <p>Cuarto Dos: <strong>{item.cuarto_dos} {item.mod_cuarto_dos}</strong></p> ) : ( <p></p> )}
                                    {item.ind_cuarto_dos_adicional ? ( <p>Cuarto Dos Observaciones: <strong>{item.ind_cuarto_dos_adicional}</strong></p> ) : ( <p></p> )}
                                    {item.cuarto_tres ? ( <p>Cuarto Tres: <strong>{item.cuarto_tres} {item.mod_cuarto_tres}</strong></p> ) : ( <p></p> )}
                                    {item.ind_cuarto_tres_adicional ? ( <p>Cuarto Tres Observaciones: <strong>{item.ind_cuarto_tres_adicional}</strong></p> ) : ( <p></p> )}
                                    {item.cuarto_cuatro ? ( <p>Cuarto Cuatro: <strong>{item.cuarto_cuatro} {item.mod_cuarto_cuatro}</strong></p> ) : ( <p></p> )}
                                    {item.ind_cuarto_cuatro_adicional ? ( <p>Cuarto Cuatro Observaciones: <strong>{item.ind_cuarto_cuatro_adicional}</strong></p> ) : ( <p></p> )}

                                    {item.mitad_uno ? ( <p>Mitad Uno: <strong>{item.mitad_uno} {item.mod_mitad_uno}</strong></p> ) : ( <p></p> )}
                                    {item.sabor_grande ? ( <p>Sabor Pizza: <strong>{item.sabor_grande} {item.mod_sabor_grande}</strong></p> ) : ( <p></p> )}

                                    {/* DESAYUNOS */} 
                                    {item.mod_sabor_desayuno ? ( <p>Desayuno Adiciones: <strong>{item.mod_sabor_desayuno} </strong></p> ) : ( <p></p> )}
                                    {item.ind_desayuno_adicional ? ( <p>Desayuno Observaciones: <strong>{item.ind_desayuno_adicional} </strong></p> ) : ( <p></p> )}
                                    
                                    {item.desayuno_tipo_huevos ? ( <p>Huevos: <strong>{item.desayuno_tipo_huevos} </strong></p> ) : ( <p></p> )}
                                    {item.desayuno_tipo_bebida ? ( <p>Bebida: <strong>{item.desayuno_tipo_bebida} </strong></p> ) : ( <p></p> )}
                                    
                                    {/*<p>Mitad Uno: <strong>{item.mitad_uno} {item.mod_mitad_uno}</strong></p>*/}                                    
                                    
                                    {item.mitad_dos ? ( <p>Mitad Dos: <strong>{item.mitad_dos} {item.mod_mitad_dos}</strong></p> ) : ( <p></p> )}
                                    {/*<p>Mitad Dos: <strong>{item.mitad_dos} {item.mod_mitad_dos}</strong></p>*/}                                

                                    {/* MODIFICACIONES */}   
                                    {item.ind_sopa_adicional ? ( <p>Sopa Observaciones: <strong>{item.ind_sopa_adicional}</strong></p> ) : ( <p></p> )} 
                                    {item.ind_pasta_adicional ? ( <p>Pasta Observaciones: <strong>{item.ind_pasta_adicional}</strong></p> ) : ( <p></p> )} 
                                    {item.ind_lasagna_adicional ? ( <p>Lasagna Observaciones: <strong>{item.ind_lasagna_adicional}</strong></p> ) : ( <p></p> )}
                                    {/*item.mod_mitad_uno ? ( <p>Mitad Uno Adiciones/Sin: <strong>{item.mod_mitad_uno}</strong></p> ) : ( <p></p> )*/}
                                    {item.ind_mitad_uno_adicional ? ( <p>Mitad Uno Observaciones: <strong>{item.ind_mitad_uno_adicional}</strong></p> ) : ( <p></p> )}

                                    {/*item.mod_mitad_dos ? ( <p>Mitad Dos Adiciones/Sin: <strong>{item.mod_mitad_dos}</strong></p> ) : ( <p></p> )*/}                                
                                    {item.ind_mitad_dos_adicional ? ( <p>Mitad Dos Observaciones: <strong>{item.ind_mitad_dos_adicional}</strong></p> ) : ( <p></p> )}
                                    
                                    {item.sabor_pancook ? ( <p>Sabor: <strong>{item.sabor_pancook} {item.mod_sabor_pancook}</strong></p> ) : ( <p></p> )}
                                    {item.sabor_personal ? ( <p>Sabor: <strong>{item.sabor_personal} {item.mod_sabor_personal}</strong></p> ) : ( <p></p> )}
                                    {item.sabor_pantalon ? ( <p>Sabor: <strong>{item.sabor_pantalon} {item.mod_sabor_pantalon}</strong></p> ) : ( <p></p> )}
                                    {/*item.mod_sabor_personal ? ( <p>Adiciones y/o Sin: <strong>{item.mod_sabor_personal}</strong></p> ) : ( <p></p> )*/}
                                    {item.ind_personal_adicional ? ( <p>Observaciones: <strong>{item.ind_personal_adicional}</strong></p> ) : ( <p></p> )}
                                    {item.ind_pantalon_adicional ? ( <p>Observaciones: <strong>{item.ind_pantalon_adicional}</strong></p> ) : ( <p></p> )}
                                    {item.ind_grande_adicional ? ( <p>Observaciones: <strong>{item.ind_grande_adicional}</strong></p> ) : ( <p></p> )}
                                    {item.ind_pancook_adicional ? ( <p>Observaciones: <strong>{item.ind_pancook_adicional}</strong></p> ) : ( <p></p> )}

                                    {item.costo_adiciones_pasta ? ( <p>Total Adicion: <strong>{item.costo_adiciones_pasta}</strong></p> ) : <p></p> }
                                    {item.costo_adiciones_lasagna ? ( <p>Total Adicion: <strong>{item.costo_adiciones_lasagna}</strong></p> ) : <p></p> }
                                    {item.costo_adiciones ? ( <p>Total Adicion: <strong>{item.costo_adiciones}</strong></p> ) : <p></p> }
                                    {item.costo_adiciones_grande ? ( <p>Total Adicion: <strong>{item.costo_adiciones_grande}</strong></p> ) : <p></p> }
                                    {item.costo_adiciones_pantalon ? ( <p>Total Adicion: <strong>{item.costo_adiciones_pantalon}</strong></p> ) : <p></p> }
                                    {item.costo_adiciones_pancook ? ( <p>Total Adicion: <strong>{item.costo_adiciones_pancook}</strong></p> ) : <p></p> }
                                    {item.costo_adiciones_sopa ? ( <p>Total Adicion: <strong>{item.costo_adiciones_sopa}</strong></p> ) : <p></p> }
                                    {item.costo_adiciones_americano ? ( <p>Total Adicion: <strong>{item.costo_adiciones_americano}</strong></p> ) : <p></p> }
                                    
                                    {item.costo_pantalon ? ( <p>Total Pantalon: <strong>{item.costo_pantalon}</strong></p> ) : <p></p> }
                                    {item.costo_gaseosa ? ( <p>Total Bebida: <strong>{item.costo_gaseosa}</strong></p> ) : <p></p> }
                                    {item.costo_bebida ? ( <p>Total Bebida: <strong>{item.costo_bebida}</strong></p> ) : <p></p> }
                                    {item.costo_cerveza ? ( <p>Total Cerveza: <strong>{item.costo_cerveza}</strong></p> ) : <p></p> }
                                    {item.costo_jugo ? ( <p>Total Jugo: <strong>{item.costo_jugo}</strong></p> ) : <p></p> }
                                    {item.costo_vino ? ( <p>Total Vino: <strong>{item.costo_vino}</strong></p> ) : <p></p> }
                                    {item.costo_tinto ? ( <p>Total Tinto: <strong>{item.costo_tinto}</strong></p> ) : <p></p> }
                                    {item.costo_pan_ajo ? ( <p>Total Pan Ajo: <strong>{item.costo_pan_ajo}</strong></p> ) : <p></p> }
                                    {item.costo_panaderia ? ( <p>Total Panaderia: <strong>{item.costo_panaderia}</strong></p> ) : <p></p> }
                                    {item.costo_desayuno_americano ? ( <p>Total Desayuno: <strong>{item.costo_desayuno_americano}</strong></p> ) : <p></p> }
                                    {item.costo_sopa ? ( <p>Total Sopa: <strong>{item.costo_sopa}</strong></p> ) : <p></p> }
                                    {item.costo_pasta ? ( <p>Total Pasta: <strong>{item.costo_pasta}</strong></p> ) : <p></p> }
                                    {item.costo_lasagna ? ( <p>Total Lasagna: <strong>{item.costo_lasagna}</strong></p> ) : <p></p> }
                                    {item.costo_personal ? ( <p>Total Pizza: <strong>{item.costo_personal}</strong></p> ) : <p></p>}
                                    {item.costo_grande ? ( <p>Total Pizza: <strong>{item.costo_grande}</strong></p> ) : <p></p>}
                                    {item.costo_pancook ? ( <p>Total Pancook: <strong>{item.costo_pancook}</strong></p> ) : <p></p>}
                                    {/*<p style={{textDecoration : 'underline'}}>Total: <strong>{item.costo_adiciones + item.costo_personal}</strong></p>*/}
                                    
                                    <Button onClick={()=>{                                        

                                        if(item.id_pedido.includes('Personal')){  
                                            localStorage.removeItem(item.id_pedido)
                                            //  
                                            //let contPersonales = [JSON.parse(localStorage.getItem('Numero_Personales'))]
                                            //console.log(contPersonales)
                                            //localStorage.setItem('Numero_Personales', JSON.stringify({'Numero': contPersonales[0].Numero - 1}))                                                                             
                                        }

                                        if(item.id_pedido.includes('Grande')){                                            
                                            localStorage.removeItem(item.id_pedido)                                       
                                        }

                                        if(item.id_pedido.includes('Pantalon')){                                            
                                            localStorage.removeItem(item.id_pedido)                                       
                                        }

                                        if(item.id_pedido.includes('Pancook')){                                            
                                            localStorage.removeItem(item.id_pedido)                                       
                                        }

                                        if(item.id_pedido.includes('Lasagna')){                                            
                                            localStorage.removeItem(item.id_pedido)                                       
                                        }

                                        if(item.id_pedido.includes('Pasta')){                                            
                                            localStorage.removeItem(item.id_pedido)                                       
                                        }

                                        if(item.id_pedido.includes('Sopa')){                                            
                                            localStorage.removeItem(item.id_pedido)                                       
                                        }

                                        if(item.id_pedido.includes('Pan')){                                            
                                            localStorage.removeItem(item.id_pedido)                                       
                                        }

                                        if(item.id_pedido.includes('Tinto')){                                            
                                            localStorage.removeItem(item.id_pedido)                                       
                                        }

                                        if(item.id_pedido.includes('Americano')){
                                            localStorage.removeItem(item.id_pedido)
                                        }

                                        if(item.id_pedido.includes('Huesped')){
                                            localStorage.removeItem(item.id_pedido)
                                        }

                                        if(item.id_pedido.includes('Vino')){                                            
                                            localStorage.removeItem(item.id_pedido)                                       
                                        }

                                        if(item.id_pedido.includes('Jugo')){                                            
                                            localStorage.removeItem(item.id_pedido)                                       
                                        }

                                        if(item.id_pedido.includes('Cerveza')){                                            
                                            localStorage.removeItem(item.id_pedido)                                       
                                        }

                                        if(item.id_pedido.includes('Bebida')){                                            
                                            localStorage.removeItem(item.id_pedido)                                       
                                        }

                                        if(item.id_pedido.includes('Gaseosa')){                                            
                                            localStorage.removeItem(item.id_pedido)                                       
                                        }
                                        
                                    }} style={{marginLeft: '10px'}} color='warning'>Eliminar</Button>
                                    <hr className='hr'></hr>
                                </div>
                            )})
                    ) : (
                        <p>Sin Orden</p>
                    )
                    } 
                    </div>
            </div>
        </div>
        )
    }
}

export default Pedido