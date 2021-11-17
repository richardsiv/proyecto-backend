const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const connection = require('./db/db.config');

const rutaProductos = require('./routes/productos.routes');
const rutaPrincipal = require('./routes/principal.routes');
const rutaAcceso = require('./routes/usuarios.routes');
const rutaClientes = require('./routes/clientes.routes');
const rutaCompras = require('./routes/compras.routes');
const { checkUser } = require('./middlewares/auth');


dotenv.config();
const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cookieParser());

app.use( rutaPrincipal );
app.use( '/api', rutaProductos );
app.use( '/api', rutaAcceso );
app.use( '/api', rutaClientes );
app.use( '/api', rutaCompras );

//Views
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen( port, async function() {
    await connection;
    console.log('Servidor iniciado en el puerto', port);
    console.log('Base de datos conectada');
})

