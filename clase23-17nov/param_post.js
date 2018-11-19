var http = require('http'),
    formulario = require('fs').readFileSync('./formulario.html'),
    dataString = ''

function servidor(req,res){
    if(req.method == 'GET'){
        res.writeHead(200, {'Content-Type' : 'text/html'})
        res.end(formulario)
    }

    if(req.method == 'POST'){
        req.on('data', function(data){
            dataString += data
        })

        req.on('end', function(){
            var templateString = `Los datos son: ${dataString}`

            console.log(templateString)
            res.end(templateString)
        })
    }
}

http.createServer(servidor).listen(8080)

console.log('Conectado al servidor')