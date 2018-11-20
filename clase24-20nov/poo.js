class Persona {
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }
    // También se pueden incluir métodos dentro del objeto
    presentarse(){
        return "Me llamo " + this.nombre + " y tengo " + this.edad + " años."
    }
}

// Aquí creamos una instancia del objeto
var Kamilo = new Persona('Kamilo', 27)
var saludo = Kamilo.presentarse()

console.log(saludo)