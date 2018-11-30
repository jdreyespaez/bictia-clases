var fs = require('fs'),
    promesa = new Promise((resolve, reject) =>{
        fs.readFile('./index.html', function(err,data){
            return(err) ? reject(new Error('No lee el archivo :(')) : resolve(data)
        })
    })

    promesa.then(function(datoHtml){
        console.log(`Se he leído el archivo!! :D ${datoHtml}`)
    }).catch(function(err){
        console.log(`Error: ${err.message}`)
        // console.log('Error: ' + err.message)
    })