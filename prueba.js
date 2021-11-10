////////////////// conectar con MongoDB por medio de mongoose en Node/////////////////////
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/Mongo_quiz";  // Mongo_quiz corresponde al nombre de la BBDD

mongoose.connect(url);

mongoose.connect(url, function (err) {
    if (err) throw err;
    console.log("Conexión correcta");
});


///////////////////////// creacion de la estructura de la BBDD ////////////////////////
const objectSchema = {
    _id: mongoose.Schema.Types.ObjectId,
        nombre: String,
        email: String,
        fecha: Date,
      
    
       
};
const objectSchema2 = {
    _id: mongoose.Schema.Types.ObjectId,
        partidas_jugadas: Number,
        puntuacion: Number,
        preguntas:{
            q_correctas: String,
            q_incorrectas: String,
        }

};

/*
//////////////////////////// Insercion de datos en el schema ///////////////////////

const userSchema = mongoose.Schema(objectSchema, objectSchema2);


let User = mongoose.model('quiz1', userSchema,objectSchema2); //quiz1 corresponde al nombre de la coleccion

/*let dataUser = {
    _id: new mongoose.Types.ObjectId(),
    nombre: "Jalid",
    fecha: Date.now(),
    puntuacion: 10,
    partidas_jugadas: 10,
    preguntas:{
        q_correctas: "1,2,3,4,5,6,7,8,9,10",
        q_incorrectas: "0"
    }
    

};
let userPartidas = new User(dataUser);
userPartidas.save(function (err) {
    if (err) throw err;
    console.log("Inserción correcta");
    mongoose.disconnect();
});

///////////////// Actualizacion ///////////////////////////////////

User.findById('61893e4fbe5fad50600a435a', function(err, user){
    if (err) throw err;
    user.partidas_jugadas = 5;
    user.save(function(err){
        if (err) throw err;
        console.log("Actualización correcta");
        mongoose.disconnect();
    });
    
});
*/
/*
/////////// busqueda  Obtener el ranking por participante y día //////////////////////////////////

User.findById('61893e4fbe5fad50600a435a', function(err, user){
    if (err) throw err;
    console.log("User con id 61893e4fbe5fad50600a435a tiene una puntuación de :\n"+user.puntuacion+":\n" 
    +"y las respuestas acertadas son " +user.preguntas.q_correctas);
    mongoose.disconnect();
});
*/
//////////////////// Borrado ///////////////////////////////
