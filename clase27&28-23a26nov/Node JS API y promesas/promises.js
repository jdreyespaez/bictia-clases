var fs = require('fs'),
    file = './juegos.txt',
    newFile = './juegos_PROMISES.txt',
    promise = new Promise((resolve, reject) =>{
        fs.access(file, fs.F_OK, function(err){
            return (err) ? reject(new Error('ARCHIVO INEXISTENTE')) : resolve(true)
        })
    })

    promise.then((dataPromise) =>{
        console.log('EL ARCHIVO EXISTE')
        return new Promise((resolve, reject) =>{
            fs.readFile(file, function(err, data){
                return (err) ? reject(new Error('PROBLEMAS AL LEER EL ARCHIVO')) : resolve(data)
            })
        })
    }).then((dataPromise) =>{
        console.log('LECTURA EXITOSA DEL ARCHIVO')
        return new Promise((resolve, reject) =>{
            fs.writeFile(newFile, dataPromise, function(err){
                return (err) ? reject(new Error('NO FUE POSIBLE COPIAR EL ARCHIVO')) : resolve('SE HA COPIADO EL ARCHIVO EXITOSAMENTE')
            })
        })
    }).then((dataPromise) =>{
        console.log(dataPromise)
    }).catch((err) =>{
        console.log(err.message)
    })










    /* var fs = require('fs'),
    file = './juegos.txt',
    newFile = './juegos_PROMISES.txt',
    promise = new Promise(function(resolve, reject){
        fs.access(file, fs.F_OK, function(err){
            return (err) ? reject(new Error('ARCHIVO INEXISTENTE')) : resolve(true)
        })
    })

    promise.then(function(resolve, reject){
        console.log('EL ARCHIVO EXISTE')
        fs.readFile(file, function(err, data){
            return (err) ? reject(new Error('PROBLEMAS AL LEER EL ARCHIVO')) : resolve(data)
        })
    }).then(function(resolve, reject){
        console.log('LECTURA EXITOSA DEL ARCHIVO')
        fs.writeFile(newFile, resolve, function(err){
            return (err) ? reject(new Error('NO FUE POSIBLE COPIAR EL ARCHIVO')) : resolve('SE HA COPIADO EL ARCHIVO EXITOSAMENTE')
        })
    }).then(function(resolve, reject){
        console.log(resolve)
    }).catch(function(err){
        console.log(err.message)
    }) */