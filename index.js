var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var database = require('./modules/database');
var usuariosRouter = require('./routers/usuarios-router');
var chatsRouter = require('./routers/chats-router');
var emojisRouter = require('./routers/emojis-router');

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/usuarios', usuariosRouter);
app.use('/chats', chatsRouter);
app.use('/emojis', emojisRouter);

const PORT = process.vm.PORT || 8888;

app.listen(PORT, ()=>console.log('Se levanto el servidor'));
