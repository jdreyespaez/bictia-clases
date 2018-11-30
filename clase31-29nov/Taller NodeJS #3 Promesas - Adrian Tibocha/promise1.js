function multiplicaPorSiMismo(valor, ejecuta) {
    console.log(`Inicia ejecución: el Valor es = ${valor}`)
    setTimeout(function() {
    ejecuta(valor, valor * valor);
    //ejecuta(2,2*2)
    }, 1000)
    }

var promise = new Promise((resolve,reject)=>{
   return ((multiplicaPorSiMismo(2,(valor, resultado)=> {
        console.log(`Finaliza con el valor = ${valor} y el resultado = ${resultado}`)
     }))) ? reject(new Error('problema en la ejecucion')): resolve(true)
})

promise.then((resolve)=>{
    console.log(`Procesando`)
}).catch((err)=>{
    console.log(err.message)
})