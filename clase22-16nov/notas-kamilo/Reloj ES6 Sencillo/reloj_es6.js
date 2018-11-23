var Clock = require('./reloj_es6_modulo.js'),
    reloj = new Clock()

reloj.on('tictac', function(){
    reloj.tiempo()
})
