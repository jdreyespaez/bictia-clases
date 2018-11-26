// Llamamos a todas la librerías
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
// Clase 28 (26Nov), agregamos las rutas
const routes = require('../route/bandasRutas')

// Estamos definiendo un objeto app para instanciarlo de lo que nos trae Express
const app = express()
const config = require('./db')
const PORT = 4000;

// CONEXIÓN A BD
// Con '{useNewUrlParser: true}' estamos evitando que nos envíe una mensaje deprecated
// Si es correcto, la promesa nos envía un mensaje diciendo que la conexión es exitosa
mongoose.connect(config.DB, {useNewUrlParser: true}). then(
    () => {console.log(`Conexión Exitosa :'D`)},
    // Este salto de línea se ve en la consola
    error => {console.log(`Error en la conexión:
                            ${error}`)
});

// Me lo parsea como un JSON
app.use(bodyParser.json())
app.use('/api', routes)

app.use(function(err, req, res, next){
    res.status(422),send({error: err.message})
})


// Conexión a puerto
app.listen(PORT, function(){
    console.log(`Corriendo en el Puerto: ${PORT}`);
})