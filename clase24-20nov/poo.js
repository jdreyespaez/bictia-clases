class Persona {
    // Con el constructo se definen las variables que se recibirán
    // y guardarlas en objeto usando this
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }
    // También se pueden incluir métodos dentro del objeto
    presentarse(){
        return "Me llamo " + this.nombre + " y tengo " + this.edad + " años.";
    }
}

// Aquí creamos una instancia del objeto
var Kamilo = new Persona('Kamilo', 27)
var saludo = Kamilo.presentarse()
console.log(Kamilo);
console.log(saludo);


// Este constructor se puede usar para cerar otro objeto
var otraPersona = new Persona('Germán Rodrigo', 38);
console.log(otraPersona);
console.log(otraPersona.presentarse())
