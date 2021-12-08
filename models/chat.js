var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    mensajes : mongoose.SchemaTypes.Mixed,
    emisor: mongoose.SchemaTypes.Mixed,
    receptor: mongoose.SchemaTypes.Mixed,
    ultimoMensaje: String,
    fechaConversacion: String
});

module.exports = mongoose.model('chats', esquema);