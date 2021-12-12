var mongoose = require('mongoose');

let db = 'mensajeria';
let user = 'dalar';
let password = 'dalar';


const conexion = `mongodb+srv://${user}:${password}@dalar-mensajeria.whheu.mongodb.net/${db}?retryWrites=true&w=majority`;

class Database{
    constructor(){
        this.conectar();
    }
    conectar(){
        mongoose.connect(conexion)
        .then(result=>console.log('Se conecto a mongo'))
        .catch(error=>console.log(error));
    }
}

module.exports = new Database();