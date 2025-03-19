const express = require('express');
const ruta = express.Router();
const Pedidos = require('../model/pedidos');

ruta.get('/:fecha/:local', (req, res) => {
    let fecha = req.params.fecha
    let local = req.params.local

    let leerPedidos = leerPedidosPizzeria(fecha, local);
    leerPedidos
        .then(data => {
            res.json({
                datos: data
            })
        })
        .catch(err => res.json({error: err}))        
})

async function leerPedidosPizzeria(fecha, local){    
    const query = [
        {
          $match: {
            "aux.fecha_pedido": fecha,
            "aux.local": local
          }
        },
        {
          $count: "numberOfPedidos"
        }
      ]

    let pedidos = await Pedidos.aggregate(query)  
    return pedidos
}

module.exports = ruta;