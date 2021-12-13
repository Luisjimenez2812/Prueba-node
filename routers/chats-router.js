var express = require('express')
var router = express.Router();
var chat = require('../models/chat');
var usuario = require('../models/usuario');
var mongoose = require('mongoose');

/*idUsuario:usuarioLogueado._id,
					nombreEmisor: usuarioLogueado.nombre,
					imagenEmisor: usuarioLogueado.foto,
					idUsuarioReceptor:id,
					nombreDestinatario: usuarioConversacion.nombre,
					imagenDestinatario: usuarioConversacion.foto */

//Crear chat
router.post("/", (req, res) => {
	console.log(req);
	let nuevoChat = new chat({
		emisor: {
			_id : mongoose.Types.ObjectId(req.body.idUsuario),
			nombre: req.body.nombreEmisor,
			imagen: req.body.imagenEmisor 
		},
		receptor: {
			_id : mongoose.Types.ObjectId(req.body.idUsuarioReceptor),
			nombre: req.body.nombreDestinatario,
			imagen: req.body.imagenDestinatario 
		},
		ultimoMensaje: "",
		fechaConversacion: req.body.fechaConversacion,
		mensajes: [],
	});
	nuevoChat
		.save()
		.then((result1) => {
			console.log(req.body.idUsuario);
			usuario
				.updateOne(
					{
						_id: mongoose.Types.ObjectId(req.body.idUsuario),
					},
					{
						$push: {
							conversaciones: {
								_id: mongoose.Types.ObjectId(result1._id),
								ultimoMensaje: "",
								horaUltimoMensaje: req.body.fechaConversacion,
								nombreDestinatario: req.body.nombreDestinatario,
								imagenDestinatario: req.body.imagenDestinatario,
							},
						},
					}
				)
				.then((result2) => {
					usuario
						.updateOne(
							{
								_id: mongoose.Types.ObjectId(req.body.idUsuarioReceptor),
							},
							{
								$push: {
									conversaciones: {
										_id: mongoose.Types.ObjectId(result1._id),
										ultimoMensaje: "",
										horaUltimoMensaje: req.body.fechaConversacion,
										nombreDestinatario: req.body.nombreEmisor,
										imagenDestinatario: req.body.imagenEmisor,
									},
								},
							}
						)
						.then((result3) => {
							res.send({ chat: result1, usuario: result2, usuarioReceptor: result3 });
							res.end();
						})
						.catch((error) => {
							res.send(error);
							res.end();
						}
					);
				})
				.catch((error) => {
					res.send(error);
					res.end();
				});
		})
		.catch((error) => {
			res.send(error);
			res.end();
		});
});

//Agregar un mensaje
router.post("/:idChat/mensajes", (req, res) => {
	chat
		.updateOne(
			{
				_id: mongoose.Types.ObjectId(req.params.idChat),
			},
			{
				$set: {
					emisor: req.body.emisor,
					receptor: req.body.receptor,
					ultimoMensaje: req.body.ultimoMensaje,
					fechaConversacion: req.body.fechaConversacion,
				},
				$push: {
					mensajes: {
						_id: mongoose.Types.ObjectId(),
						emisor: req.body.emisor,
						receptor: req.body.receptor,
						contenido: req.body.mensajes[0].contenido,
						hora: req.body.mensajes[0].hora,
					},
				},
			}
		)
		.then((result1) => {
			console.log(req.body)
			//Actualizar la conversacion en el usuario
			usuario
				.updateOne(
					{
						_id: mongoose.Types.ObjectId(req.body.emisor._id),
						"conversaciones._id": mongoose.Types.ObjectId(
							req.params.idChat
						),
					},
					{
						$set: {
							"conversaciones.$": {
								_id: mongoose.Types.ObjectId(req.params.idChat),
								ultimoMensaje: req.body.mensajes[0].contenido,
								horaUltimoMensaje: req.body.mensajes[0].hora,
								nombreDestinatario: req.body.receptor.nombre,
								imagenDestinatario: req.body.receptor.imagen,
							},
						},
					}
				)
				.then((result2) => {
					console.log("receptor",req.body.receptor._id);
					usuario
						.updateOne(
							{
								_id: mongoose.Types.ObjectId(req.body.receptor._id),
								"conversaciones._id": mongoose.Types.ObjectId(
									req.params.idChat
								),
							},
							{
								$set: {
									"conversaciones.$": {
										_id: mongoose.Types.ObjectId(req.params.idChat),
										ultimoMensaje: req.body.mensajes[0].contenido,
										horaUltimoMensaje: req.body.mensajes[0].hora,
										nombreDestinatario: req.body.emisor.nombre,
										imagenDestinatario: req.body.emisor.imagen,
									},
								},
							}
						)
						.then((result2) => {
							res.send({ conversacion: result1, usuario: result2 });
							res.end();
						})
						.catch((error) => {
							res.send(error);
							res.end();
						});
				})
				.catch((error) => {
					res.send(error);
					res.end();
				});
		})
		.catch((error) => {
			res.send(error);
			res.end();
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


//obterner los chats
router.get('/',function(req,res){
    chat.find()
	.then(result=>{
        res.send(result);
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