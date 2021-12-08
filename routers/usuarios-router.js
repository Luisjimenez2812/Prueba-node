var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var usuario = require('../models/usuario');

//Guardar Usuario post
router.post('/registro',function(req,res){
    let nuevoUsuario = new usuario(
        {
            nombre:req.body.nombre,
            foto:req.body.foto,
            estado:req.body.estado,
            telefono: req.body.telefono,
            contrasena:req.body.contrasena,
            contactos: [],
            conversaciones: []
        }
    );
    nuevoUsuario.save().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

//Login post
router.post('/login',function(req,res){
    usuario.find(
        {
            telefono:req.body.telefono,
            contrasena:req.body.contrasena
        },
        {}
    ).then(result=>{
        res.send(result[0]);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

//Actualizar Usuario Put
router.put('/:id',function(req,res){
    usuario.updateOne(
        {
            _id:req.params.id
        },
        {
            nombre:req.body.nombre,
            foto:req.body.foto,
            estado:req.body.estado,
            telefono: req.body.telefono,
            contrasena:req.body.contrasena,
        }
    ).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

//Agregar Contactos
router.post('/:idUsuario/contactos',function(req,res){
    usuario.updateOne(
        {
            _id:req.params.idUsuario
        },
        {
            $push: {
                contactos: mongoose.Types.ObjectId(req.body.idContacto),
            }
        }
    ).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});





//Actualizar lista conversacion

router.put('/:idUsuario/conversaciones/idConversacion',function(req,res){
    var conversaciones = []
    var idTemp;
    usuario.find(
        {
            _id:req.params.idUsuario
        },
        {
            conversaciones:true,
            _id:false
        }    
    ).then(result=>{
        conversaciones=result[0].conversaciones
        for (let i = 0; i < conversaciones.length; i++) {
            const element = conversaciones[i];
            idConv = JSON.stringify(element._id).replace("\"","").replace("\"","");
            // console.log(JSON.stringify(element._id).replace("\"","").replace("\"",""))
            if(idConv == req.params.idConversacion){
                idTemp = idConv
            }
        }
        res.send(result[0]);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });

    console.log(idTemp);
    // usuario.updateOne(
    //     {
    //         _id:req.params.idUsuario,
    //         "conversaciones._id": mongoose.Types.ObjectId(req.params.idConversacion)
    //     },
    //     {
    //         $set:{
    //             "conversaciones.$":{
    //                 _id: mongoose.Types.ObjectId(req.params.idConversacion),
    //                 ultimoMensaje: req.body.ultimoMensaje,
    //                 horaUltimoMensaje: req.body.horaUltimoMensaje,
    //                 nombreDestinatario: req.body.nombreDestinatario,
    //                 imagenDestinatario: req.body.imagenDestinatario
    //             }
    //         }
    //     }
    // ).then(result=>{
    //     res.send(result[0]);
    //     res.end();
    // }).catch(error=>{
    //     res.send(error);
    //     res.end();
    // });
});

//Obtener un Usuario get
router.get('/:id',function(req,res){
    usuario.find(
        {
            _id:req.params.id
        },
        {}
    ).then(result=>{
        res.send(result[0]);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

module.exports = router