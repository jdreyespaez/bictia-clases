var fs = require('fs')
    leerStream = fs.createReadStream('./juegos.txt')
    escribirStream = fs.createWriteStream('./juegos_copia.txt')

leerStream.pipe(escribirStream)


