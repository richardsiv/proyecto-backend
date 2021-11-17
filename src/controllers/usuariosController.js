const Usuario = require('../models/usuariosModels');
const jwt = require('jsonwebtoken');

const getRegister = (req, res) => {
    res.render('sesion/registro');
}
const getLogin = (req, res) => {
    res.render('sesion/login');
}

const register = async (req, res) => {
    try {
        const nuevoUsuario = new Usuario(req.body);
        nuevoUsuario.clave = await Usuario.encriptarClave(req.body.clave)
        const guardarUsuario = await nuevoUsuario.save();
        const token = jwt.sign({ id: guardarUsuario._id }, 'marketlaptops', {
            expiresIn: '1d'
        });
        res.cookie('token', token, { maxAge: 3600 * 1000 * 24 * 365, httpOnly: false })
        return res.render('sesion/login', { register: 'Registrado correcamente' });
    } catch (error) {
        return res.json(error);
    }
}

const login = async (req, res) => {
    try {

        const usuarioExiste = await Usuario.findOne({ usuario: req.body.usuario })

        if (!usuarioExiste) return res.json({ mensaje: "Usuario no existe" });

        const compararClave = await Usuario.compararClave(
            req.body.clave,
            usuarioExiste.clave
        );

        if (!compararClave)
            return res.json({
                token: null,
                mensaje: "Clave invalida",
            });

        const token = jwt.sign({ id: usuarioExiste._id }, 'marketlaptops', {
            expiresIn: '1d',
        });
        res.cookie('token', token, { maxAge: 3600 * 1000 * 24 * 365, httpOnly: false })
        return res.redirect('/api/productos')
    } catch (error) {
        console.log(error);
    }
}

const logout = (req, res) => {
    res.cookie('token', '', { maxAge: 1 });
    return res.redirect('/api/login');
}

module.exports = {
    register,
    login,
    getRegister,
    getLogin,
    logout
}