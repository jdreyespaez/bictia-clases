var http = require('http')
var promesa = new Promise((resolve, reject)=>{
    console.log('Iniciado Promesas')
    http.createServer((peticion, respuesta) =>{
        return(!peticion) ? reject(new Error('Conexion faliida al servidor')) : resolve(respuesta)
        /* //SImplifica un if(){
            reject(new Error('conecionfallida..))
        }else{
            resolve(respuesta)
        } */
    }).listen(8080)
})

promesa.then(function(res){
    console.log('Puerto activo 8080 / Escuchando peticiones')
    res.end('Bienvenido')
}).catch(function(err){
    console.log(err.message)
})