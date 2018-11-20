var http =require("http"),
    fs= require("fs")//file sistem

    http.createServer(function(req,res){
        fs.readFile("./index.html", function(err,html){
            var html_string = html.toString()
            var arreglos_param = [], parametros ={}
            var variables = html_string.match(/[^\{\}]+(?=\})/g)


        if(req.url.indexOf("?")>0){
        // si encuentra algo depues de el / (depues de el dominio localhost:8080) si existe algo ahi
        //url_dt=['/','nombre=valor&apellido=valor']
        
        var url_data =req.url.split("?")
        //[nombre=valor, apellido=valor]

        var arreglos_param=url_data[1].split("&")// en [0] esta solamente /
        }

        for( var i = arreglos_param.length-1; i >=0; i--){
            //param=nombre=valor
            var param = arreglos_param[i]
            //param_data=['nombre','valor']
            var param_data= param.split("=")
            parametros[param_data[0]]=param_data[1]// es un objeto Prametro[nombre]=valor
        }

        for(var i = variables.length-1;i>=0;i--){
        var variable=variables[i]
        html_string=html_string.replace("{"+variable+"}",parametros[variable])
        }

        res.writeHead(200,{"Conten.type":"text/html"})
        res.write(html_string)
        res.end()

        })
    }).listen(8080)

