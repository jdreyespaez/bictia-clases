var http = require('http').createServer()

function servidor(req, res){
    res.writeHead(200, {'Content-Type' : 'text/html'})
    res.end('<h1>Bienvenido</h1>')
}

http.on('request', servidor).listen(8080)

console.log('Conectado')