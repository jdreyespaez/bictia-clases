var http = require("http")

var controlador = function(peticion, respuesta){
    console.log('recibido')
    respuesta.end('Bienvenidos a Node.js')
}

var servidor = http.createServer(controlador)

servidor.listen(8080)