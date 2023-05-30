const mongoose = require('mongoose');

const mensajeSchema = new mongoose.Schema({
  remitente: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true,
    unique: true
  },
  contenido: {
    type: String,
    required: true
  }
});

const Mensaje = mongoose.model('Mensaje', mensajeSchema);

module.exports = Mensaje;
