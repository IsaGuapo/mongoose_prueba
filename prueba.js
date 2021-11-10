////////////////// conectar con MongoDB por medio de mongoose en Node/////////////////////
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/Mongo_quiz";  // Mongo_quiz corresponde al nombre de la BBDD

mongoose.connect(url);

mongoose.connect(url, function (err) {
    if (err) throw err;
    console.log("Conexión correcta");
});


///////////////////////// creacion de la estructura de la BBDD TABLA 1  JUGADOR////////////////////////
const objectSchemaJugador = {
    _id: mongoose.Schema.Types.ObjectId,
    nombre: String,
    email: {
        type: String,
        match: [/.+\@.+\..+/, "Por favor ingrese un correo válido"],
        password: {
            type: String,
            validate: {
                validator: function (pass) {
                    return (pass.length >= 6);
                },
                message: "La contraseña debe tener al menos 6 caracteres"
            }
        },
    }
};
//// genero vaiable para crear dentro la coleccion //////
const userSchema = mongoose.Schema(objectSchemaJugador);
/*
const Player = mongoose.model('Player', userSchema); //quiz1 corresponde al nombre de la coleccion
/////// Insercion de datos /////////////
let dataUser = {
    _id: new mongoose.Types.ObjectId(),
    nombre: "Mario",
    email: "mma@gmail.com",
    password: "125478ll",
    };

///////// guardado de los datos /////////
let user = new Player(dataUser);
user.save(function (err) {
    if (err) throw err;
    console.log("Inserción correcta");
    mongoose.disconnect();
});
*/
//////////////// CREACION DE SEGUNDA TABLA PARTIDAS ///////////////

const objectSchemaPartidas = {
    _id: mongoose.Schema.Types.ObjectId,
    id_jugador: { type: mongoose.Schema.ObjectId, ref: "Quiz1" },// relaciona tablas
    fecha: Date, 
    partidas_jugadas: Number,
    puntuacion: Number,
    preguntas: {
        q_correctas: String,
        q_incorrectas: String,
    }
};

///// varibale para partidas /////////////
const partidasSchema = mongoose.Schema(objectSchemaPartidas);
/*
////// Insercion de 2º tabla /////////
const Game = mongoose.model('Game', partidasSchema);
let Partidas = {
    _id: new mongoose.Types.ObjectId(),
    id_jugador: "618b953438adeaba7a57cad2",
    fecha:Date.now(),
    puntuacion: 10,
    partidas_jugadas: 10,
    preguntas: {
        q_correctas: "1,2,3,4,5,6,7,8,9,10",
        q_incorrectas: "0"
    }
};
let dataPartidas = new Game(Partidas);

    dataPartidas.save(function (err) {
        if (err) throw err;
        console.log("Inserción correcta");
        mongoose.disconnect();
    });

*/

/*
///////////////// Actualizacion ///////////////////////////////////

Player.findById('618b953438adeaba7a57cad2', function (err, user) {
    if (err) throw err;
    user.partidas_jugadas = 5;
    user.save(function (err) {
        if (err) throw err;
        console.log("Actualización correcta");
        mongoose.disconnect();
    });

});

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
