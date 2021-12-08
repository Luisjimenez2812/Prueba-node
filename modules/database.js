var mongoose = require('mongoose');
let db = 'mensajeria';
let port = '27017';
let host = 'localhost';

class Database{
    constructor(){
        this.conectar();
    }
    conectar(){
        mongoose.connect(`mongodb://${host}:${port}/${db}`)
        .then(result=>console.log('Se conecto a mongo'))
        .catch(error=>console.log(error));
    }
}

module.exports = new Database();