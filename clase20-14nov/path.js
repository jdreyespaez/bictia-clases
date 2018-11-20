var http = require('http'),
    path = require('path'),
    urls = [
        {
            ruta: '',
            salida: '<h2>Home</h2>'
        },
        {
            ruta: 'acerca',
            salida: '<h2>Acerca</h2>'
        },
        {
            ruta: 'contacto',
            salida: '<h2>Contacto</h2>'
        }
    ]

http.createServer(function(req, res){
    var mensaje = 'Bienvenido',
        // este método nos da el último trozo de la URL
        pathUrl = path.basename(req.url)

    urls.forEach(function(posicion){
        if(posicion.ruta == pathUrl){
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.end(mensaje + posicion.salida)
        }
    })

    // Este es un método del paquete http
    if(!res.finished){
        res.writeHead(404, {'Content-Type' : 'text/html'})
        res.end('<h1>Error 404: Not Found</h1>')
    }
}).listen(8080)