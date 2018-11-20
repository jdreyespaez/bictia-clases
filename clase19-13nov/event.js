var EventEmitter = require("events").EventEmitter,
    publicar = new EventEmitter()

    publicar.on('mievento',function(mensaje){
        console.log(mensaje)
    })

    publicar.once('mievento', function(mensaje){
        console.log('Mostraré este mensaje sólo una vez: ' + mensaje)
    })

    publicar.emit('mievento', 'SOY UN EMISOR DE EVENTOS (éste fue emitido por primera vez)')