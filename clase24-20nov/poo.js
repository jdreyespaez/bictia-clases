// Por convención las clases siempre se escriben en mayúscula
class Persona {
    // Con el constructo se definen las variables que se recibirán
    // y guardarlas en objeto usando this
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }
    // También se pueden incluir métodos dentro del objeto
    presentarse(){
        return "Me llamo " + this.nombre + ", tengo " + this.edad + " años";
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

class Perro {
    constructor(nombre, raza){
        this.nombre = nombre
        this.raza = raza
    }
    ladrar(){
        return "Soy un " + this.raza + " y ladro así: Guau, guau!!!";
    }
}

var loboSiberiano = new Perro('Asgard', 'Lobo Siberiano');
console.log(loboSiberiano.ladrar());

// HERENCIA DE CLASES
// Es posible también heredar de una clase
class Profesion extends Persona{
    constructor(nombre, edad, cargo){
        // super nos indican que nombre y edad están declarados en la clase padre
        super(nombre, edad);
        this.cargo = cargo;
        // éstas son las propiedad de esta clase
    }

    presentarse(){
        // Aquí también la palabra super, llama el método que está en la clase padre
        return super.presentarse() + " y trabajo como " + this.cargo;
    }
}

var juanDavid = new Profesion('Juan David', 28, 'Indie Hacker');
var miVisionDesdeHoy = juanDavid.presentarse();
console.log(juanDavid);
console.log(miVisionDesdeHoy);