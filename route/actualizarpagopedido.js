const express = require('express');
const ruta = express.Router();
const Pedidos = require('../model/pedidos');

ruta.put('/:_id', (req, res) => {
    let id_aux = req.params._id;
    let actualizarPedido = actualizarOrden(id_aux);
    actualizarPedido
        .then(data => {
            res.json({
                datos: data
            })
        })
        .catch(err => res.json({error: err}))        
})

async function actualizarOrden(id_aux){

    let actualizar = Pedidos.updateOne({_id: id_aux, "aux.estado_pedido": "SIN PAGO"},{$set:{"aux.$.estado_pedido": "PEDIDO PAGADO"}})    
    return await actualizar
}

module.exports = ruta;