const Mensaje = require('../models/Mensaje');


exports.obtenerMensajes = async (req, res) => {
  try {
    const mensajes = await Mensaje.find();
    res.json(mensajes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener los mensajes' });
  }
};


exports.crearMensaje = async (req, res) => {
  const { remitente, id, contenido } = req.body;
  try {
    const mensaje = new Mensaje({ remitente, id, contenido });
    await mensaje.save();
    res.json(mensaje);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al crear el mensaje' });
  }
};


exports.obtenerMensajePorId = async (req, res) => {
  const { id } = req.params;
  try {
    const mensaje = await Mensaje.findById(id);
    if (!mensaje) {
      return res.status(404).json({ mensaje: 'Mensaje no encontrado' });
    }
    res.json(mensaje);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener el mensaje' });
  }
};


exports.eliminarMensaje = async (req, res) => {
  const { id } = req.params;
  try {
    const mensaje = await Mensaje.findByIdAndDelete(id);
    if (!mensaje) {
      return res.status(404).json({ mensaje: 'Mensaje no encontrado' });
    }
    res.json({ mensaje: 'Mensaje eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al eliminar el mensaje' });
  }
};
