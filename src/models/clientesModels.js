const mongoose = require('mongoose');
const clienteSchema = mongoose.Schema({
  nombre: {
    type: String,
  },
  apellido: {
    type: String,
  },
  cedula: {
    type: String
  },
  contacto: {
    type: Number
  },
})
const clientes = mongoose.model('clientes', clienteSchema);

module.exports = clientes;