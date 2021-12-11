
db.usuarios.insertMany([
    {
        "_id": ObjectId("61aef542f49c7a7e4f3e1ecc"),
        "nombre":"Abner",
        "foto":"images/abner.jpg",
        "estado":"disponible",
        "telefono": "96317926",
        "contrasena": "abner",
        "contactos": [
            ObjectId("61aef542f49c7a7e4f3e1ecd"),
            ObjectId("61aef542f49c7a7e4f3e1ece"),
            ObjectId("61aef542f49c7a7e4f3e1ecf"),
            ObjectId("61aef542f49c7a7e4f3e1ec0"),
            ObjectId("61aef542f49c7a7e4f3e1ec1")
        ],
        "conversaciones": [
            {
                "_id": ObjectId("61aef542f49c7a7e4f3e1ecd"),
                "ultimoMensaje": "",
                "horaUltimoMensaje": "18:18",
                "nombreDestinatario": "Rosa",
                "imagenDestinatario": "images/rosa.jpg"
            },{
                "_id": ObjectId("61aef542f49c7a7e4f3e1ec1"),
                "ultimoMensaje": "",
                "horaUltimoMensaje": "10:04",
                "nombreDestinatario": "Aaron",
                "imagenDestinatario": "images/aaron.jpg"
            },{
                "_id": ObjectId("61aef542f49c7a7e4f3e1ec0"),
                "ultimoMensaje": "",
                "horaUltimoMensaje": "08:31",
                "nombreDestinatario": "David",
                "imagenDestinatario": "images/david.jpg"
            },{
                "_id": ObjectId("61aef542f49c7a7e4f3e1ece"),
                "ultimoMensaje": "",
                "horaUltimoMensaje": "08:31",
                "nombreDestinatario": "Katherine",
                "imagenDestinatario": "images/katherine.jpg"
            },{
                "_id": ObjectId("61aef542f49c7a7e4f3e1ecf"),
                "ultimoMensaje": "",
                "horaUltimoMensaje": "11:04",
                "nombreDestinatario": "Luis",
                "imagenDestinatario": "images/luis.jpg"
            }
        ]
    },{
        "_id": ObjectId("61aef542f49c7a7e4f3e1ecd"),
        "nombre":"Rosa",
        "foto":"images/rosa.jpg",
        "estado":"disponible",
        "telefono": "33044175",
        "contrasena": "rosa",
        "contactos": [
            ObjectId("61aef542f49c7a7e4f3e1ecc"),
            ObjectId("61aef542f49c7a7e4f3e1ece"),
            ObjectId("61aef542f49c7a7e4f3e1ecf"),
            ObjectId("61aef542f49c7a7e4f3e1ec0"),
            ObjectId("61aef542f49c7a7e4f3e1ec1")
        ],
        "conversaciones": [
            {
                "_id": ObjectId("61aef542f49c7a7e4f3e1ecc"),
                "ultimoMensaje": "",
                "horaUltimoMensaje": "17:18",
                "nombreDestinatario": "Abner",
                "imagenDestinatario": "images/abner.jpg"
            },{
                "_id": ObjectId("61aef542f49c7a7e4f3e1ecf"),
                "ultimoMensaje": "",
                "horaUltimoMensaje": "11:04",
                "nombreDestinatario": "Luis",
                "imagenDestinatario": "images/luis.jpg"
            },{
                "_id": ObjectId("61aef542f49c7a7e4f3e1ec0"),
                "ultimoMensaje": "",
                "horaUltimoMensaje": "09:31",
                "nombreDestinatario": "David",
                "imagenDestinatario": "images/david.jpg"
            }
        ]
    },{
        "_id": ObjectId("61aef542f49c7a7e4f3e1ece"),
        "nombre":"Katherine",
        "foto":"images/katherine.jpg",
        "estado":"disponible",
        "telefono": "96420485",
        "contrasena": "katherine",
        "contactos": [
            ObjectId("61aef542f49c7a7e4f3e1ecc"),
            ObjectId("61aef542f49c7a7e4f3e1ecd"),
            ObjectId("61aef542f49c7a7e4f3e1ecf"),
            ObjectId("61aef542f49c7a7e4f3e1ec0"),
            ObjectId("61aef542f49c7a7e4f3e1ec1")
        ],
        "conversaciones": [
            {
                "_id": ObjectId("61aef542f49c7a7e4f3e1ecc"),
                "ultimoMensaje": "",
                "horaUltimoMensaje": "15:18",
                "nombreDestinatario": "Abner",
                "imagenDestinatario": "images/abner.jpg"
            },{
                "_id": ObjectId("61aef542f49c7a7e4f3e1ec1"),
                "ultimoMensaje": "",
                "horaUltimoMensaje": "10:04",
                "nombreDestinatario": "Aaron",
                "imagenDestinatario": "images/aaron.jpg"
            },{
                "_id": ObjectId("61aef542f49c7a7e4f3e1ec0"),
                "ultimoMensaje": "",
                "horaUltimoMensaje": "08:31",
                "nombreDestinatario": "David",
                "imagenDestinatario": "images/david.jpg"
            }
        ]
    },{
        "_id":ObjectId("61aef542f49c7a7e4f3e1ecf"),
        "nombre":"Luis",
        "foto":"images/luis.jpg",
        "estado":"disponible",
        "telefono": "32472880",
        "contrasena": "luis",
        "contactos": [
            ObjectId("61aef542f49c7a7e4f3e1ecc"),
            ObjectId("61aef542f49c7a7e4f3e1ecd"),
            ObjectId("61aef542f49c7a7e4f3e1ece"),
            ObjectId("61aef542f49c7a7e4f3e1ec0"),
            ObjectId("61aef542f49c7a7e4f3e1ec1")
        ],
        "conversaciones": [
            {
                "_id": ObjectId("61aef542f49c7a7e4f3e1ecd"),
                "ultimoMensaje": "",
                "horaUltimoMensaje": "18:18",
                "nombreDestinatario": "Rosa",
                "imagenDestinatario": "images/rosa.jpg"
            },{
                "_id": ObjectId("61aef542f49c7a7e4f3e1ecc"),
                "ultimoMensaje": "",
                "horaUltimoMensaje": "17:18",
                "nombreDestinatario": "Abner",
                "imagenDestinatario": "images/abner.jpg"
            },{
                "_id": ObjectId("61aef542f49c7a7e4f3e1ec0"),
                "ultimoMensaje": "",
                "horaUltimoMensaje": "08:31",
                "nombreDestinatario": "David",
                "imagenDestinatario": "images/david.jpg"
            },{
                "_id": ObjectId("61aef542f49c7a7e4f3e1ec1"),
                "ultimoMensaje": "",
                "horaUltimoMensaje": "10:04",
                "nombreDestinatario": "Aaron",
                "imagenDestinatario": "images/aaron.jpg"
            }
        ]
    },{
        "_id": ObjectId("61aef542f49c7a7e4f3e1ec0"),
        "nombre":"David",
        "foto":"images/david.jpg",
        "estado":"disponible",
        "telefono": "94626294",
        "contrasena": "david",
        "contactos": [
            ObjectId("61aef542f49c7a7e4f3e1ecc"),
            ObjectId("61aef542f49c7a7e4f3e1ecd"),
            ObjectId("61aef542f49c7a7e4f3e1ece"),
            ObjectId("61aef542f49c7a7e4f3e1ecf"),
            ObjectId("61aef542f49c7a7e4f3e1ec1")
        ],
        "conversaciones": [
            {
                "_id": ObjectId("61aef542f49c7a7e4f3e1ecd"),
                "ultimoMensaje": "",
                "horaUltimoMensaje": "18:18",
                "nombreDestinatario": "Rosa",
                "imagenDestinatario": "images/rosa.jpg"
            },{
                "_id": ObjectId("61aef542f49c7a7e4f3e1ecc"),
                "ultimoMensaje": "",
                "horaUltimoMensaje": "17:18",
                "nombreDestinatario": "Abner",
                "imagenDestinatario": "images/abner.jpg"
            },{
                "_id": ObjectId("61aef542f49c7a7e4f3e1ecf"),
                "ultimoMensaje": "",
                "horaUltimoMensaje": "11:04",
                "nombreDestinatario": "Luis",
                "imagenDestinatario": "images/luis.jpg"
            },{
                "_id": ObjectId("61aef542f49c7a7e4f3e1ece"),
                "ultimoMensaje": "",
                "horaUltimoMensaje": "08:31",
                "nombreDestinatario": "Katherine",
                "imagenDestinatario": "images/katherine.jpg"
            }
        ]
    },{
        "_id": ObjectId("61aef542f49c7a7e4f3e1ec1"),
        "nombre":"Aaron",
        "foto":"images/aaron.jpg",
        "estado":"disponible",
        "telefono": "95440680",
        "contrasena": "aaron",
        "contactos": [
            ObjectId("61aef542f49c7a7e4f3e1ecc"),
            ObjectId("61aef542f49c7a7e4f3e1ecd"),
            ObjectId("61aef542f49c7a7e4f3e1ece"),
            ObjectId("61aef542f49c7a7e4f3e1ecf"),
            ObjectId("61aef542f49c7a7e4f3e1ec0")
        ],
        "conversaciones": [
            {
                "_id": ObjectId("61aef542f49c7a7e4f3e1ecc"),
                "ultimoMensaje": "",
                "horaUltimoMensaje": "17:18",
                "nombreDestinatario": "Abner",
                "imagenDestinatario": "images/abner.jpg"
            },{
                "_id": ObjectId("61aef542f49c7a7e4f3e1ecf"),
                "ultimoMensaje": "",
                "horaUltimoMensaje": "11:04",
                "nombreDestinatario": "Luis",
                "imagenDestinatario": "images/luis.jpg"
            },{
                "_id": ObjectId("61aef542f49c7a7e4f3e1ece"),
                "ultimoMensaje": "",
                "horaUltimoMensaje": "08:31",
                "nombreDestinatario": "Katherine",
                "imagenDestinatario": "images/katherine.jpg"
            }
        ]
    }
]);

db.chats.insertMany([
    {
        "_id": ObjectId(),
        "mensajes": [
            {
                "_id": ObjectId(),
                "emisor": {
                    "_id": "",
                    "nombre": "",
                    "imagen": ""
                },
                "receptor": {
                    "_id": "",
                    "nombre": "",
                    "imagen": ""
                },
                "contenido": "",
                "hora": ""
            }
        ],
        "emisor": {
            "_id": "",
            "nombre": "",
            "imagen": ""
        },
        "receptor": {
            "_id": "",
            "nombre": "",
            "imagen": ""
        },
        "ultimoMensaje": "",
        "fechaConversacion": ""
    }
]);

db.emojis.insertMany([
    {
        "codigo": ":redHeart:",
        "nombre": "corazon rojo",
        "categoria": "symbols",
        "icono": ""
    },{
        "codigo": ":happyFace:",
        "nombre": "cara feliz",
        "categoria": "smiles",
        "icono": ""
    },{
        "codigo": ":funnyFace:",
        "nombre": "risa",
        "categoria": "smiles",
        "icono": ""
    },{
        "codigo": ":soccerBall:",
        "nombre": "pelota",
        "categoria": "sports",
        "icono": ""
    }
]);