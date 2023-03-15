const mongose = require('mongoose');
const express = require('express');
const path = require('path');
const app = express();
//Importamos rutas
const Pedidos = require('./route/leerpedidos');
const AgregarPedidos = require('./route/agregarpedidos');
const ActualizarOrdenPago = require('./route/actualizarpagopedido');
const ActualizarOrdenConPago = require('./route/leerpedidospagados')
const ActualizarOrdenSinPago = require('./route/leerpedidossinpago');
const BuscarMesaPedidos =  require('./route/filtromesa');
//middlewares
const corse = require('cors');
const bodyParser = require("body-parser");
app.use(corse());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Conexion con base de datos
mongose.connect('mongodb+srv://root:123@cluster0.jwxt0.mongodb.net/inventarios_prod?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Conectado con DB'))
    .catch(() => console.log('No se puedo conectar con DB'))


/*
//Conexion con base de datos local
mongose.connect('mongodb://localhost:27017/pizzarracalirefugio', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Conectado con DB'))
    .catch(() => console.log('No se puedo conectar con DB'))
*/

//Definimos las rutas de navegacion
app.use('/api/pedidos', Pedidos)
app.use('/api/agregarpedidos', AgregarPedidos)
app.use('/api/actualizarpedidos', ActualizarOrdenPago)
app.use('/api/actualizarpedidossinpago', ActualizarOrdenSinPago)
app.use('/api/actualizarpedidosconpago', ActualizarOrdenConPago)
app.use('/api/buscarmesapedidos', BuscarMesaPedidos)

//Configuramos la ruta del frontEnd
//app.use(express.static("client/build"));
/*
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
*/

//Iniciamos Server
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`BackEnd escuchando por puerto ${port}....`)
})