const express = require('express');
const ruta = express.Router();
const Pedidos = require('../model/pedidos');

ruta.get('/', (req, res) => {
    let leerPedidos = leerPedidosPizzeria();
    leerPedidos
        .then(data => {
            res.json({
                datos: data
            })
        })
        .catch(err => res.json({error: err}))        
})

async function leerPedidosPizzeria(){
    let todayAux = new Date(new Date().setHours(-5,0,0,0))
    //console.log(todayAux)
    let pedidos = await Pedidos.find({"aux.estado_pedido": {$ne:"SIN PAGO"}, "aux.fecha_pedido": {$eq: todayAux}})    
    return await pedidos
}

module.exports = ruta;