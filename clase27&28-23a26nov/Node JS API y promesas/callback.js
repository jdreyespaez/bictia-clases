var fs = require('fs'),
    file = './juegos.txt',
    newFile = './juegos_CALLBACK.txt'

fs.access(file, fs.F_OK, function(err){
    if(err){
        console.log('ARCHIVO INEXISTENTE')
    } else{
        console.log('EL ARCHIVO EXISTE')
        fs.readFile(file, function(err, data){
            if(err){
                console.log('NO SE PUDO LEER EL ARCHIVO')
            } else{
                console.log('SE HA LEIDO EXITOSAMENTE EL ARCHIVO')
                fs.writeFile(newFile, data, function(err){
                    return (err) ? console.log('NO SE PUDO COPIAR EL ARCHIVO') : console.log('EL ARCHIVO SE HA COPIADO CON EXITO')
                })
            }
        })
    }
})