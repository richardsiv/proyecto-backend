const mongoose = require('mongoose');
const productosSchema = mongoose.Schema({
  nombre: {
    type: String,
  },
  marca: {
    type: String,
  },
  procesador: {
    type: String
  },
  precio: {
    type: Number
  },
  cantidad: {
    type: Number
  },
  estado: {
    type: Boolean
  },
  file: {
    type: String
  }
})
const productos = mongoose.model('productos', productosSchema);

module.exports = productos;