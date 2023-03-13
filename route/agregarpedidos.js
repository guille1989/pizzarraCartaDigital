const express = require('express');
const ruta = express.Router();
const Pedidos = require('../model/pedidos');

//Definimos POST
ruta.post('/', (req, res) => {
    let body = req.body
    //console.log(body.aux[0].fecha_pedido)
    body.aux[0].fecha_pedido = new Date(body.aux[0].fecha_pedido);
    //console.log(body.aux[0].fecha_pedido)
    let resultado = agregarPedido(body)
    //imprimir(body)
    resultado
            .then(user => {
                res.json({
                    valor: user
                })
            }).catch(err => {
                res.json({
                    error: err
                })
            })
})

//Funcion para agregar los pedidos
async function agregarPedido(body){
    //console.log(body.aux[0].fecha_pedido.toISOString().split('T')[0])
    body.aux[0].fecha_pedido = body.aux[0].fecha_pedido.toISOString().split('T')[0]
    let pedidos = new Pedidos({
        aux: body.aux,
        pedido: body.pedido,     
    })
    return await pedidos.save();
}

//Funcion para imprimir
function imprimir(body){

    //Create ESP/POS commands for sample label
    var esc = '\x1B'; //ESC byte in hex notation
    var newLine = '\x0A'; //LF byte in hex notation  

    //******PARTE INICIAL******/
    var cmdsAux = esc + "@"; //Initializes the printer (ESC @)
    cmdsAux += esc + '!' + '\x38'; //Emphasized + Double-height + Double-width mode selected (ESC ! (8 + 16 + 32)) 56 dec => 38 hex
    cmdsAux += 'PEDIDO BEBIDAS'; //text to print
    cmdsAux += newLine;
    cmdsAux += esc + '!' + '\x00'; //Character font A selected (ESC ! 0)  

    var cmds = esc + "@"; //Initializes the printer (ESC @)
    cmds += esc + '!' + '\x38'; //Emphasized + Double-height + Double-width mode selected (ESC ! (8 + 16 + 32)) 56 dec => 38 hex
    cmds += 'PEDIDO COCINA'; //text to print
    cmds += newLine;
    cmds += esc + '!' + '\x00'; //Character font A selected (ESC ! 0)

    //Acomodamos la fehca
    var dia = body.aux[0].fecha_pedido.getDate() + 1;
    var mes = body.aux[0].fecha_pedido.getMonth() + 1;
    var anio = body.aux[0].fecha_pedido.getFullYear();

    if(body.aux[0].tipo_pedido.includes('MESA')){
        //
        cmds += body.aux[0].tipo_pedido + " : " + body.aux[0].mesa;
        cmds += esc + '!' + '\x00'
        cmds += newLine;
        cmds += "Fecha Pedido: " + anio + "-" + mes + "-" + dia;
        cmds += newLine;
        cmds += "Hora Pedido: " + body.aux[0].hora_pedido;
        cmds += newLine;
        cmds += newLine;

        //
        cmdsAux += body.aux[0].tipo_pedido + " : " + body.aux[0].mesa;
        cmdsAux += esc + '!' + '\x00'
        cmdsAux += newLine;
        cmdsAux += "Fecha Pedido: " + anio + "-" + mes + "-" + dia;
        cmdsAux += newLine;
        cmdsAux += "Hora Pedido: " + body.aux[0].hora_pedido;
        cmdsAux += newLine;
        cmdsAux += newLine;

    }else if(body.aux[0].tipo_pedido.includes('RECOGEN')){
        //
        cmds += body.aux[0].tipo_pedido;
        cmds += esc + '!' + '\x00'
        cmds += newLine;
        cmds += "Nombre: " + body.aux[0].recoge_nombre;
        cmds += newLine;
        cmds += "Telefono: " + body.aux[0].recoge_telefono;
        cmds += newLine;
        cmds += "Fecha Pedido: " + anio + "-" + mes + "-" + dia;
        cmds += newLine;
        cmds += "Hora Pedido: " + body.aux[0].hora_pedido;
        cmds += newLine;
        cmds += newLine;

        //
        cmdsAux += body.aux[0].tipo_pedido;
        cmdsAux += esc + '!' + '\x00'
        cmdsAux += newLine;
        cmdsAux += "Nombre: " + body.aux[0].recoge_nombre;
        cmdsAux += newLine;
        cmdsAux += "Telefono: " + body.aux[0].recoge_telefono;
        cmdsAux += newLine;
        cmdsAux += "Fecha Pedido: " + anio + "-" + mes + "-" + dia;
        cmdsAux += newLine;
        cmdsAux += "Hora Pedido: " + body.aux[0].hora_pedido;
        cmdsAux += newLine;
        cmdsAux += newLine;

    } else if(body.aux[0].tipo_pedido.includes('DOMICILIO')){
        //
        cmds += body.aux[0].tipo_pedido;
        cmds += esc + '!' + '\x00'
        cmds += newLine;
        cmds += "Nombre: " + body.aux[0].domi_nombre;
        cmds += newLine;
        cmds += "Telefono: " + body.aux[0].domi_telefono;
        cmds += newLine;
        cmds += "Direccion: " + body.aux[0].domi_direccion;
        cmds += newLine;
        cmds += "Observaciones: " + body.aux[0].domi_otros;
        cmds += newLine;
        cmds += "Fecha Pedido: " + anio + "-" + mes + "-" + dia;
        cmds += newLine;
        cmds += "Hora Pedido: " + body.aux[0].hora_pedido;
        cmds += newLine;
        cmds += newLine;

        //
        cmdsAux += body.aux[0].tipo_pedido;
        cmdsAux += esc + '!' + '\x00'
        cmdsAux += newLine;
        cmdsAux += "Nombre: " + body.aux[0].domi_nombre;
        cmdsAux += newLine;
        cmdsAux += "Telefono: " + body.aux[0].domi_telefono;
        cmdsAux += newLine;
        cmdsAux += "Direccion: " + body.aux[0].domi_direccion;
        cmdsAux += newLine;
        cmdsAux += "Observaciones: " + body.aux[0].domi_otros;
        cmdsAux += newLine;
        cmdsAux += "Fecha Pedido: " + anio + "-" + mes + "-" + dia;
        cmdsAux += newLine;
        cmdsAux += "Hora Pedido: " + body.aux[0].hora_pedido;
        cmdsAux += newLine;
        cmdsAux += newLine;

    }
   //************/
   
    body.pedido.map((item, index)=>{
        if(item.tipo.includes('CAFÉ') || item.tipo.includes('VINO') || item.tipo.includes('JUGO') || item.tipo.includes('CERVEZA') || item.tipo.includes('BEBIDA') || item.tipo.includes('GASEOSA'))
        {
            if(item.tipo.includes('CAFÉ')){    
                cmdsAux += "Bebida: " + item.tipo;
                cmdsAux += newLine;            
                cmdsAux += item.mod_sabor_cafe;
                cmdsAux += newLine;
            }else if(item.tipo.includes('JUGO')){
                cmdsAux += "Bebida: " + item.tipo;
                cmdsAux += newLine; 
                cmdsAux += item.mod_sabor_jugo;
                cmdsAux += newLine;
            }else if(item.tipo.includes('GASEOSA')){
                cmdsAux += "Bebida: " + item.tipo;
                cmdsAux += newLine; 
                cmdsAux += item.mod_sabor_gaseosa;
                cmdsAux += newLine;
            }else if(item.tipo.includes('VINO')){
                cmdsAux += "Bebida: " + item.tipo;
                cmdsAux += newLine;
            }else if(item.tipo.includes('CERVEZA')){
                cmdsAux += "Bebida: " + item.tipo;
                cmdsAux += newLine;
                cmdsAux += item.mod_sabor_cerveza;
                cmdsAux += newLine;
            }else if(item.tipo.includes('BEBIDA')){
                cmdsAux += "Bebida: " + item.tipo;
                cmdsAux += newLine;
                cmdsAux += item.mod_sabor_bebida;
                cmdsAux += newLine;
            }
        }         
      
        if(item.tipo.includes('GRANDE COMPLETA')){
            cmds += item.tipo;
            cmds += newLine;
            cmds += "Sabor: " + item.sabor_grande;
            cmds += newLine;
            cmds += "+/- Adiciones: " + item.mod_sabor_grande;
            cmds += newLine;
            cmds += "Observaciones: " + item.ind_grande_adicional;
            cmds += newLine;
            cmds += newLine;
        }else if(item.tipo.includes('PERSONAL COMPLETA')){
            cmds += item.tipo;
            cmds += newLine;
            cmds += "Sabor: " + item.sabor_personal;
            cmds += newLine;
            cmds += "+/- Adiciones: " + item.mod_sabor_personal;
            cmds += newLine;
            cmds += "Observaciones: " + item.ind_personal_adicional;
            cmds += newLine;
            cmds += newLine;
        }else if(item.tipo.includes('PERSONAL MITAD')){
            cmds += item.tipo;
            cmds += newLine;
            cmds += "Sabor mitad 1: " + item.mitad_uno;
            cmds += newLine;
            cmds += "Sabor mitad 2: " + item.mitad_dos;
            cmds += newLine;
            cmds += "+/- Adiciones mitad 1: " + item.mod_mitad_uno;
            cmds += newLine;
            cmds += "+/- Adiciones mitad 2: " + item.mod_mitad_dos;
            cmds += newLine;
            cmds += "Observaciones mitad 1: " + item.ind_mitad_uno_adicional;
            cmds += newLine;
            cmds += "Observaciones mitad 2: " + item.ind_mitad_dos_adicional;
            cmds += newLine;
            cmds += newLine;
        }else if(item.tipo.includes('GRANDE MITAD')){
            cmds += item.tipo;
            cmds += newLine;
            cmds += "Sabor mitad 1: " + item.mitad_uno;
            cmds += newLine;
            cmds += "Sabor mitad 2: " + item.mitad_dos;
            cmds += newLine;
            cmds += "+/- Adiciones mitad 1: " + item.mod_mitad_uno;
            cmds += newLine;
            cmds += "+/- Adiciones mitad 2: " + item.mod_mitad_dos;
            cmds += newLine;
            cmds += "Observaciones mitad 1: " + item.ind_mitad_uno_adicional;
            cmds += newLine;
            cmds += "Observaciones mitad 2: " + item.ind_mitad_dos_adicional;
            cmds += newLine;
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
            cmds += "+/- Adiciones cuarto 1: " + item.mod_cuarto_uno;
            cmds += newLine;
            cmds += "+/- Adiciones cuarto 2: " + item.mod_cuarto_dos;
            cmds += newLine;
            cmds += "+/- Adiciones cuarto 3: " + item.mod_cuarto_tres;
            cmds += newLine;
            cmds += "+/- Adiciones cuarto 4: " + item.mod_cuarto_cuatro;
            cmds += newLine;
            cmds += "Observaciones cuarto 1: " + item.ind_cuarto_uno_adicional;
            cmds += newLine;
            cmds += "Observaciones cuarto 2: " + item.ind_cuarto_dos_adicional;
            cmds += newLine;
            cmds += "Observaciones cuarto 3: " + item.ind_cuarto_tres_adicional;
            cmds += newLine;
            cmds += "Observaciones cuarto 4: " + item.ind_cuarto_cuatro_adicional;
            cmds += newLine;
            cmds += newLine;
        }else if(item.tipo.includes('PIZZA PANCOOK')){
            cmds += item.tipo;
            cmds += newLine;
            cmds += "Sabor: " + item.sabor_pancook;
            cmds += newLine;
            cmds += "+/- Adiciones: " + item.mod_sabor_pancook;
            cmds += newLine;
            cmds += "Observaciones: " + item.ind_pancook_adicional;
            cmds += newLine;
            cmds += newLine;
        }else if(item.tipo.includes('PIZZA PANTALON')){
            cmds += item.tipo;
            cmds += newLine;
            cmds += "Sabor: " + item.sabor_pantalon;
            cmds += newLine;
            cmds += "+/- Adiciones: " + item.mod_sabor_pantalon;
            cmds += newLine;
            cmds += "Observaciones: " + item.ind_pantalon_adicional;
            cmds += newLine;
        }else if(item.tipo.includes('LASAGNA')){
            cmds += item.tipo;
            cmds += newLine;
            cmds += "Sabor: " + item.sabor_lasagna;
            cmds += newLine;
            cmds += "+/- Adiciones: " + item.mod_sabor_lasagna;
            cmds += newLine;
            cmds += "Observaciones: " + item.ind_lasagna_adicional;
            cmds += newLine;
            cmds += newLine;
        }else if(item.tipo.includes('PASTA')){
            cmds += item.tipo;
            cmds += newLine;
            cmds += "Sabor: " + item.sabor_pasta;
            cmds += newLine;
            cmds += "+/- Adiciones: " + item.mod_sabor_pasta;
            cmds += newLine;
            cmds += "Observaciones: " + item.ind_pasta_adicional;
            cmds += newLine;
            cmds += newLine;
        }else if(item.tipo.includes('SOPA')){
            cmds += item.tipo;
            cmds += newLine;
            cmds += "Sabor: " + item.sabor_sopa;
            cmds += newLine;
            cmds += "+/- Adiciones: " + item.mod_sabor_sopa;
            cmds += newLine;
            cmds += "Observaciones: " + item.ind_sopa_adicional;
            cmds += newLine;
        }else if(item.tipo.includes('PAN')){
            cmds += "ENTRADA: " +  item.tipo;
            cmds += newLine;
            cmds += newLine;
        }
    //})        
    })

    cmds += newLine;
    cmds += newLine;
    cmds += newLine;
    cmds += newLine;

    cmdsAux += newLine;
    cmdsAux += newLine;
    cmdsAux += newLine;
    cmdsAux += newLine;

    //console.log("Cocina: " + cmds.length)
    //console.log("Bebidas: " +cmdsAux.length)

    /*
    var net = require('net');    
    if(cmds.includes("MESA")){
        if(cmds.length > 95){
            //Conexion con impresora:
            var client = new net.Socket();  
            client.connect(9100, '192.168.7.87', function() {
            console.log('Connected');
            client.write(cmds);        
            }); 
        }else{
            console.log("No hay pedido de mesa")
        }  
    
        if(cmdsAux.length > 95){
            //Conexion con impresora bebidas:   
            var client2 = new net.Socket();
            client2.connect(9100, '192.168.7.88', function() {
            console.log('Connected');
            client2.write(cmdsAux);
        });
        }else{
            console.log("No hay pedido de bebida")
        }
    }
    if(cmds.includes("RECOGEN")){
        //console.log(cmds)
        if(cmds.length > 140){
            //Conexion con impresora:
            var client = new net.Socket();  
            client.connect(9100, '192.168.7.87', function() {
            console.log('Connected');
            client.write(cmds);        
            }); 
        }else{
            console.log("No hay pedido de mesa")
        }  
    
        if(cmdsAux.length > 140){
            //Conexion con impresora bebidas:   
            var client2 = new net.Socket();
            client2.connect(9100, '192.168.7.88', function() {
            console.log('Connected');
            client2.write(cmdsAux);
        });
        }else{
            console.log("No hay pedido de bebida")
        }
    }
    if(cmds.includes("DOMICILIO")){
        //console.log(cmds)
        if(cmds.length > 210){
            //Conexion con impresora:
            var client = new net.Socket();  
            client.connect(9100, '192.168.7.87', function() {
            console.log('Connected');
            client.write(cmds);        
            }); 
        }else{
            console.log("No hay pedido de mesa")
        }  
    
        if(cmdsAux.length > 210){
            //Conexion con impresora bebidas:   
            var client2 = new net.Socket();
            client2.connect(9100, '192.168.7.88', function() {
            console.log('Connected');
            client2.write(cmdsAux);
        });
        }else{
            console.log("No hay pedido de bebida")
        }
    }
    //console.log(cmdsAux)        
    */
}

module.exports = ruta;