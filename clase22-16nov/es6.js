// Constantes
var edad = 27
var lugar = 'Colombia'
const NOMBRE = 'Juan David'

// Los tentáculos de la variable pueden tomar otro valor.
var edad = 28

console.log(`${NOMBRE} es de ${lugar} y tiene ${edad} años`);
// Nota: si se declara nuevamente una consta, entonces hay un error, pues sólo es posible 
// declararla una vez.

// Map - Mapas
var juegos = new Map()

juegos.set('Nombre', 'Resident Evil')
juegos.set('Género', 'Survival')
juegos.set('Empresa', 'Capcom')

console.log(juegos)
console.log(juegos.get('Nombre'))
console.log(juegos.has('Género'))
juegos.delete('Empresa')
console.log(juegos)

// Set o Conjunto
var anime = new Set()

anime.add('Hellsing')
anime.add('Elfen Lied')
anime.add('Another')

console.log(anime)
console.log(anime.size)
console.log(anime.has('Dragon Ball'))
anime.delete('Hellsing')

// Parámetros Spread
function info(seleccion, deporte, torneo){
    console.log(`la selección ${}`)
}

// Parámetros Rest
function tv()