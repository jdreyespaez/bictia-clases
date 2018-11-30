function asincrono(valor, ejecucion) {
    console.log(`Inicia ejecución: el Valor es = ${valor}`)
    setTimeout(function() {
    ejecucion(valor, valor * valor)
    }, 0 | Math.random() * 100)
    }

    var max = 10;
    var cnt = 0;

    for (var i = 0; i < max; i++) {

var promise = new Promise((resolved,reject)=>{
    
        return ((asincrono(i, function(valor, resultado) {
        console.log(`Finaliza con el valor = ${valor} y el resultado = ${resultado}`)
        if (++cnt === max) {
        console.log('Éxito')
        }
        }))) ? reject(new Error('Error al correr')): resolved(true);
    
})

    }

promise.then((resolve)=>{
}).catch((err)=>{
    console.log(err.message)
})