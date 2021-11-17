const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const usuariosSchema = mongoose.Schema({
  nombre: {
    type: String,
  },
  apellido: {
    type: String,
  },
  usuario: {
    type: String
  },
  email: {
    type: String
  },
  clave: {
    type: String
  },
})

usuariosSchema.statics.encriptarClave = async (clave) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(clave, salt);
  };
  
usuariosSchema.statics.compararClave = async (claveEncriptada, clave) => {
    return await bcrypt.compare(claveEncriptada, clave)
  }

const usuarios = mongoose.model('usuarios', usuariosSchema);

module.exports = usuarios;