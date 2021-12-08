var express = require('express')
var router = express.Router();
var chat = require('../models/chat');

//crear un chat
router.post('/', function(req, res){
    let nuevo_chat =  new chat(
        [{
            mensajes : req.body.mensajes,
            emisor: req.body.emisor,
            receptor: req.body.receptor,
            ultimoMensaje: req.body.ultimoMensaje,
            fechaConversacion: req.body.fechaConversacion
        }]
    );
    nuevo_chat.save().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end()
    });
});


//obtener todos los chats
router.get('/',function(req,res){
    chat.find().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end()
    });
});

//obterner un chat
router.get('/:id',function(req,res){
    chat.find({_id:req.params.id},{}).then(result=>{
        res.send(result[0]);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end()
    });
});

//eliminar un chat
router.delete('/:id', function(req,res){
    chat.remove({
        _id:req.params.id
    }).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end()
    });
});

module.exports = router