const mongose = require('mongoose');
const pedidosFacturadosSchema = new mongose.Schema({
aux:{type: Array},
pedido:{type: Array},
tipo:{type: String},
//Pancook
sabor_pancook:{type: String},
mod_sabor_pancook:{type: String},
ind_pancook_adicional:{type: String},
costo_pancook:{type: String},
costo_adiciones_pancook:{type: String},
//Pantalon
sabor_pantalon:{type: String},
mod_sabor_pantalon:{type: String},
ind_pantalon_adicional:{type: String},
costo_pantalon:{type: String},
costo_adiciones_pantalon:{type: String},
//Grande
sabor_grande:{type: String},
mod_sabor_grande:{type: String},
ind_grande_adicional:{type: String},
costo_grande:{type: String},
costo_adiciones_grande:{type: String},
//Grande Cuartos
cuarto_cuatro :{type: String},
cuarto_dos :{type: String},
cuarto_tres :{type: String},
cuarto_uno :{type: String},
mod_cuarto_cuatro :{type: String},
mod_cuarto_dos :{type: String},
mod_cuarto_tres :{type: String},
mod_cuarto_uno :{type: String},
ind_cuarto_cuatro_adicional :{type: String},
ind_cuarto_dos_adicional :{type: String},
ind_cuarto_tres_adicional :{type: String},
ind_cuarto_uno_adicional :{type: String},
//Personal
sabor_personal:{type: String},
mod_sabor_personal:{type: String},
ind_personal_adicional:{type: String},
costo_personal:{type: String},
//Personal Mitad
mitad_uno:{type: String},
mod_mitad_uno:{type: String},
ind_mitad_uno_adicional:{type: String},
mitad_dos:{type: String},
mod_mitad_dos:{type: String},
ind_mitad_dos_adicional:{type: String},

sabor_cuarto_uno:{type: String},
mod_sabor_cuarto_uno:{type: String},
ind_adicional_cuarto_uno:{type: String},
sabor_cuarto_dos:{type: String},
mod_sabor_cuarto_dos:{type: String},
ind_adicional_cuarto_dos:{type: String},
sabor_cuarto_tres:{type: String},
mod_sabor_cuarto_tres:{type: String},
ind_adicional_cuarto_tres:{type: String},
sabor_cuarto_cuatro:{type: String},
mod_sabor_cuarto_cuatro:{type: String},
ind_adicional_cuarto_cuatro:{type: String},

costo:{type: String},
costo_adiciones:{type: String},

fecha_pedido:{type: Date}

})
module.exports = mongose.model('pedidosfacturados', pedidosFacturadosSchema)