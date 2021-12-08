var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    codigo: String,
    nombre: String,
    categoria: String,
    icono: String
});

module.exports = mongoose.model('emoji', esquema);