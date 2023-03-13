const express = require('express');
const ruta = express.Router();
const Pedidos = require('../model/pedidos');

ruta.get('/:mesa', (req, res) => {
    let mesa_aux = req.params.mesa;
    let buscarMesa = fbuscarMesa(mesa_aux);
    buscarMesa
        .then(data => {
            res.json({
                datos: data
            })
        })
        .catch(err => res.json({error: err}))        
})

async function fbuscarMesa(mesa){
    if(mesa === "mesaAux"){
        /*let todayAux = new Date(new Date().setHours(-5,0,0,0))
        let buscarM = Pedidos.find({"aux.fecha_pedido": {$eq: todayAux}})
        return await buscarM*/
    }else{
        let todayAux = new Date(new Date().setHours(-5,0,0,0))
        let buscarM = Pedidos.find({"aux.mesa": mesa, "aux.fecha_pedido": {$eq: todayAux}})
        return await buscarM
    }        
}

module.exports = ruta;