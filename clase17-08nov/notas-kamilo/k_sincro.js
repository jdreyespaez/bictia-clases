var http = require("http"),
    fs = require("fs")

var contenido = fs.readFileSync('./index.html')

http.createServer(function(req, res){
    res.write(contenido)
    res.end()
}).listen(8080)