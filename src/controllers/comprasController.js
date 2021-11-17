const Compras = require('../models/comprasModels');

const crearCompra = async (req, res) => {
    const compra = new Compras(req.body);
    const nuevaCompra = await compra.save();
    if (!nuevaCompra) {
        return res.json({ mensaje: "Ha ocurrido un error inesperado" })
    }
    res.redirect('/')
}

const obtenerCompras = async (req, res) => {
    const compras = await Compras.find();
    res.render('panel/compras', {
        compras,
    });
}

module.exports = {
    crearCompra,
    obtenerCompras,
}