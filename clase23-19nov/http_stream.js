var http = require('http'),
    fs = require('fs'),
    // Lea un chorro de información que está en index.html
    index = fs.createReadStream('./index.html')

function servidor(req, res){
    res.writeHead(200, {'Content-Type' : 'text/html'})
    index.pipe(res)
}

http.createServer(servidor).listen(8080)

console.log('Conectado')

// Recordemos la clase del viernes donde se leía juegos.txt
// Por medio del método pipe podemos pasar streams de información