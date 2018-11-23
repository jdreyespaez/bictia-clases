//'use strict'

class Clock{
    constructor(){

        setInterval(() =>{
            this.tiempo()
        }, 1000)

    }

    tiempo(){
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

}

module.exports = new Clock()