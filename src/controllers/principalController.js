const Productos = require('../models/productosModels');

const paginaPrincipal = async (req, res) => {
    const productos = await Productos.find();
    res.render('principal', {
        productos,
    });
}

const comprarPrincipal = async (req, res) => {
    res.render('comprar');
}
module.exports = {
    paginaPrincipal,
    comprarPrincipal
}
