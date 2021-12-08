var mongoose = require('mongoose');
var esquema = new mongoose.Schema({
    nombre:String,
    foto:String,
    estado:String,
    telefono: String,
    contrasena:String,
    contactos: mongoose.SchemaTypes.Mixed,
    conversaciones: mongoose.SchemaTypes.Mixed
});

module.exports = mongoose.model('usuarios', esquema);