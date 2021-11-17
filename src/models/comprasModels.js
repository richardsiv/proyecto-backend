const mongoose = require('mongoose');
const comprasSchema = mongoose.Schema({
  nombre: {
    type: String,
  },
  descripcion: {
    type: String,
  },
  email: {
    type: String
  },
})
const compras = mongoose.model('compras', comprasSchema);

module.exports = compras;