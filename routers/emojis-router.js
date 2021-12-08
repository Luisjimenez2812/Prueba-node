var express = require('express')
var router = express.Router();
var emoji = require('../models/emoji');

//obtener todos los emoji
router.get('/',function(req,res){
    emoji.find().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end()
    });
});

//obtener todos los emoji
router.get('/:idEmoji',function(req,res){
    emoji.find(
        {_id: req.params.idEmoji},
        {icono: true}
    )
    .then(result=>{
        res.send(result[0]);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end()
    });
});

module.exports = router