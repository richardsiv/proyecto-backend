const Clientes = require('../models/clientesModels');

const crearCliente = async (req, res) => {
    const cliente = new Clientes(req.body);
    const nuevoCliente = await cliente.save();
    if (!nuevoCliente) {
        return res.json({ mensaje: "Ha ocurrido un error inesperado" })
    }
    const clientes = await Clientes.find();
    res.render('panel/clientes', { clientes });
}

const obtenerClientes = async (req, res) => {
    const clientes = await Clientes.find();
    res.render('panel/clientes', {
        clientes,
    });
}

const obtenerClientePorId = async (req, res) => {
    const cliente = await Clientes.findById(req.params.id);
    return res.json(cliente);
}

const obtenerYActualizarClientePorId = async (req, res) => {
    const cliente = await Clientes.findById(req.params.id);
    res.render('panel/actualizarCliente', { cliente });
}

const actualizarCliente = async (req, res) => {
    await Clientes.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.redirect('/api/clientes')
}

const eliminarCliente = async (req, res) => {
    await Clientes.findByIdAndDelete(req.params.id);
    res.redirect('/api/clientes')
}


module.exports = {
    crearCliente,
    obtenerClientes,
    obtenerClientePorId,
    eliminarCliente,
    obtenerYActualizarClientePorId,
    actualizarCliente
}