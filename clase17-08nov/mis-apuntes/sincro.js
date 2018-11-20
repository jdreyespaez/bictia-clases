// Aquí creamos nuestro servidor
var http = require("http"),
    fs = require("fs")

// readFileSync es una función de NodeJS
var contenido = fs.readFileSync('./index.html')

http.createServer(function(req, res) {
    res.write(contenido)

    // Es importante siempre finalizarlo
    res.end()
}).listen(8080)