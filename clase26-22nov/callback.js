var fs = require('fs'),
    file = './juegos.txt',
    newFile = './juegos_CALLBACK.txt'

fs.access(file, fs.F_OK, function(err){
    if(err){
        console.log('Archivo inexistente')
    } else {
        console.log('El archivo existe')
        fs.readFile(file, function(err, data){
            if(err){
                console.log('No se pudo leer el archivo')
            } else {
                console.log('Se ha leído exitosamente el archivo')
                fs.writeFile(newFile, data, function(err){
                    return (err) ? console.log('No se pudo copiar el archivo') : console.log('El archivo se ha copiado');
                })
            }
        })
    }
})