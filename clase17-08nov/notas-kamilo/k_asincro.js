var http = require("http"),
    fs = require("fs")

 /*
    fs.readFile('./index.html', function(err, html){
    http.createServer(function(req, res){
        res.write(html)
        res.end()
    }).listen(8080)
})
*/



http.createServer(function(req, res){
    fs.readFile('./index.html', function(err, html){
        res.write(html)
        res.end()
    })
}).listen(8080)

