var http = require("http"),
    fs = require("fs")

http.createServer(function(req, res){
    fs.readFile('./index.html', function(err, html){
        console.log(html.toString())
    })
}).listen(8080)

