var fs = require('fs'),
    file = './juegos.txt',
    newFile = './juegos_PROMESAS.txt',
    // está instanciando una promesa que recibe dos parámetros:
    // resolve: lo que se va a cumplir, se devuelve como parámetro para la siguiente promesa
    // reject: lo que puede fallar
    promesa = new Promise((resolve, reject) =>{
        fs.access(file, fs.F_OK, function(err){
            // en esta condición ternaria, en el resolve(true)
            return (err) ? reject(new Error('Archivo inexistente')) : resolve(true)
        })
    })

    // Estamos haciendo uso de 3 promesas
    promesa.then((elDatoPrometido) =>{
        console.log('El archivo existe')
        return new Promise((resolve, reject) =>{
            fs.readFile(file, function(err, data){
                return (err) ? reject(new Error('Hay problemas al leer el archivo')) : resolve(data)
            })
        })
    }).then((elDatoPrometido) =>{
        console.log('Lectura exitosa del archivo')
        return new Promise((resolve, reject) =>{
            fs.writeFile(newFile, elDatoPrometido, function(err){
                return (err) ? reject(new Error('No fue posible copiar el archivo')) : resolve('Se copió exitosamente')
            })
        })
    }).then((elDatoPrometido) =>{
        console.log(elDatoPrometido)
    // Si hay un error que venga del reject, entonces en este punto es donde lo captura    
    }).catch((err) =>{
        console.log(err.message)
    })