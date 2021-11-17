const Productos = require('../models/productosModels');

const crearProducto = async (req, res) => {
    const producto = new Productos(req.body);
    producto.file = req.file.filename;
    const nuevoProducto = await producto.save();
    if (!nuevoProducto) {
        return res.json({ mensaje: "Ha ocurrido un error inesperado" })
    }
    const productos = await Productos.find();
    res.render('panel/productos', {
        productos,
    });
}

const obtenerProductos = async (req, res) => {
    const productos = await Productos.find();
    res.render('panel/productos', {
        productos,
    });
}

const obtenerProductoPorId = async (req, res) => {
    const producto = await Productos.findById(req.params.id);
    return res.json(producto);
}

const obtenerYActualizarProductoPorId = async (req, res) => {
    const producto = await Productos.findById(req.params.id);
    res.render('panel/actualizarProductos', { producto });
}

const actualizarProducto = async (req, res) => {
    await Productos.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.redirect('/api/productos')
}

const eliminarProducto = async (req, res) => {
    await Productos.findByIdAndDelete(req.params.id);
    res.redirect('/api/productos')
}
module.exports = {
    crearProducto,
    obtenerProductos,
    obtenerProductoPorId,
    eliminarProducto,
    obtenerYActualizarProductoPorId,
    actualizarProducto
}