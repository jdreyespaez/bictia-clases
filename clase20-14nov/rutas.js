var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    urls = [
        {
            ruta: '',
            salida: './index.html'
        },
        {
            ruta: 'acerca',
            salida: './acerca.html'
        },
        {
            ruta: 'contacto',
            salida: './contacto.html'
        }
    ]

http.createServer(function(req, res){
    var pathUrl = path.basename(req.url)

    urls.forEach(function(posicion){
        if(posicion.ruta == pathUrl){
            fs.readFile(posicion.salida, function(err, data){
                res.writeHead(200, {'Content-Type' : 'text/html'})
                res.end(data)
            })
        }
    })

    if(!res.finished){
        fs.readFile('./error.html', function(err, data){
            res.writeHead(404, {'Content-Type' : 'text/html'})
            res.end(data)
        })
    }

}).listen(8080)