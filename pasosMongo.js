/////////////////////////////////////////////////////////////////////
/*  1--  npm install mongoose*/
/////////////////////////////////////////////////////////////////////
//-->npm install mongoose
/////////////////////////////////////////////////////////////////////
/*Segunda parte: conectar con MongoDB por medio de mongoose en Node*/
/////////////////////////////////////////////////////////////////////
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/test";
mongoose.connect(url);
mongoose.connection.on("error", function (e) { console.error(e); });
mongoose.disconnect();
//->Viendo el código indicado en la documentación, podríamos hacer algo como lo siguiente:
    const mongoose = require("mongoose");
    const url = "mongodb://localhost:27016/test";
    async function conn(url) {
        try {
            await mongoose.connect(url);
        } catch (error) {
            console.error(error);
        }
        mongoose.disconnect();
    }
    conn(url);
   //-> Veamos una tercera manera de abrir la conexión, que recuerda a la usada con MongoDB en el CRUD:
    const mongoose = require("mongoose");
    const url = "mongodb://localhost:27017/test";
    mongoose.connect(url, function(err){
        if (err) throw err;
        console.log("Conexión correcta");
    });
    //mongoose.disconnect();
/////////////////////////////////////////////////////////////////////
/*  2--  npm install mongoose*/
/////////////////////////////////////////////////////////////////////
const mongoose = require("mongoose");
const url = "mongodb://localhost:27016/test";
async function conn(url) {
    try {
        await mongoose.connect(url);
    } catch (error) {
        console.error(error);
    }
    mongoose.disconnect();
}
conn(url);
/////////////////////////////////////////////////////////////////////
/*  3-- Creación de esquema, de objeto y escribir en la BD*/
/////////////////////////////////////////////////////////////////////
    const mongoose = require("mongoose");
    const url = "mongodb://localhost:27017/test";
    mongoose.connect(url, function(err){
        if (err) throw err;
        console.log("Conexión correcta");
    });
    const objectSchema = {
        _id: mongoose.Schema.Types.ObjectId,
        name: {
            firstName: String,
            lastName: String
        },
        created: Date,
    };
    const userSchema = mongoose.Schema(objectSchema);
    let User = mongoose.model('User', userSchema);
    let davinia = {
        _id: new mongoose.Types.ObjectId(),
        name: {
            firstName: 'Davinia',
            lastName: 'de la Rosa'
        },
        created: Date.now()
    };
    let userDavinia = new User (davinia);
    userDavinia.save(function(err){
        if (err) throw err;
        console.log("Inserción correcta");
        mongoose.disconnect();
    });
///////////////////////////////////////////////////////////////////////////////////////////////
/// 4--- Validación de datos/
//Podemos incluir por medio de mongoose, usando una estructura con valores fijos, validaciones.
//Veamos un ejemplo, incluyendo la url de Linkedin de los usuarios:/
///////////////////////////////////////////////////////////////////////////////////////////////////
    const mongoose = require("mongoose");
    const url = "mongodb://localhost:27017/test";
    mongoose.connect(url, function(err){
        if (err) throw err;
        console.log("Conexión correcta");
    });
    const objectSchema = {
        _id: mongoose.Schema.Types.ObjectId,
        name: {
            firstName: String,
            lastName: String
        },
        created: Date,
        linkedin: {
            type: String,
            validate: {
                validator: function(urlLinkedin){
                    return urlLinkedin.indexOf('https://www.linkedin.com/') == 0;
                },
                message: "Linkedin Incorrecto"
            }
        }
    };
    const userSchema = mongoose.Schema(objectSchema);
    let User = mongoose.model('User', userSchema);
    let davinia = {
        _id: new mongoose.Types.ObjectId(),
        name: {
            firstName: 'Davinia',
            lastName: 'de la Rosa'
        },
        created: Date.now(),
        linkedin: "https://www.linkedin.com/daviniadelarosahernandez"
    };
    let userDavinia = new User (davinia);
    userDavinia.save(function(err){
        if (err) throw err;
        console.log("Inserción correcta");
        mongoose.disconnect();
    });
//mongoose.disconnect();
///////////////////////////////////
///05-> Búsquedas Podemos usar findById:
////////////////////////////////
    User.findById('6188559ab4294928976e8aab', function(err, user){
        if (err) throw err;
        console.log("User con id 6188559ab4294928976e8aab:\n"+user);
        mongoose.disconnect();
    });
////////////////////
    /*find*/
 ////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
//6--Actualizaciones
//Para actualizar, lo que hacemos es buscar, cambiar el campo que queramos y volver a escribir:
//////////////////////////////////////////////////////////////////////////////////////////////
User.findById('6188559ab4294928976e8aab', function(err, user){
    if (err) throw err;
    user.delete(function(err){
        if (err) throw err;
        console.log("Borrado correcto");
        mongoose.disconnect();
    });
});