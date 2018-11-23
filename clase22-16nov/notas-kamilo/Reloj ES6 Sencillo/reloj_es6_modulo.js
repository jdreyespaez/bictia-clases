var Elreloj = (function(){

    var EventEmitter = require('events').EventEmitter,
        util = require ('util').inherits

    var Clock = function(){

        setInterval(() =>{
            this.emit('tictac')
        }, 1000)
    }

    util(Clock, EventEmitter)

    Clock.prototype.tiempo = function(){
        var date = new Date(),
            horaAmPm = (date.getHours() > 12) ? (date.getHours() - 12) : date.getHours(),
            hrs = agregarCero(horaAmPm),
            min = agregarCero(date.getMinutes()),
            sec = agregarCero(date.getSeconds()),
            ampm = (date.getHours() < 12) ? 'am' : 'pm',
            hora = `${hrs}:${min}:${sec}${ampm}`

            function agregarCero(numero){
                return (numero < 10) ? ('0' + numero) : numero
            }

            console.log(hora)    
    }

    return Clock
})()

module.exports = Elreloj