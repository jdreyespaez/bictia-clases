// constantes
/* var edad = 27
var lugar = 'Colombia'
const NOMBRE = 'Kamilo'

var edad = 19
var lugar = 'Finlandia'


console.log(`${NOMBRE} es de ${lugar} y tiene ${edad} años`) */

// Map - Mapas
/* var juegos = new Map()

juegos.set('Nombre', 'Resident Evil')
juegos.set('Genero', 'Survival')
juegos.set('Empresa', 'Capcom')
juegos.set('Personaje' , 'Claire Redfield')

console.log(juegos)
console.log(juegos.get('Nombre'))
console.log(juegos.has('Genero'))
juegos.delete('Empresa')
console.log(juegos.get('Empresa'))
console.log(juegos.get('Resident Evil')) */


// Set - Conjunto / Coleccion
/*  var anime = new Set()

anime.add('Hellsing')
anime.add('Elfen Lied')
anime.add('Another')
anime.add('Another')

console.log(anime)
console.log(anime.size)
console.log(anime.has('Dragon Ball'))
anime.delete('Hellsing') */

// Parametros Spread
/* function info(seleccion, deporte, torneo){
    console.log(`la selección ${seleccion} de ${deporte} es la campeona del ${torneo}`)
}

var datos = new Array('Francesa', 'fútbol', 'mundial')

info(...datos) */


// Parametros Rest
function tv(...series){
    for(let serie of series){
        console.log(serie)
    }
}

tv('Walking Dead', 'Game of Thrones', 'Rick & Morty')