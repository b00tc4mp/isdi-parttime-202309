var juego = ['zelda', 'Mario', 'shining force 2', 'Metroid']

console.log('largo: ', juego.length);

var ultimo = juego[juego.length - 1]

console.log(ultimo);

juego.forEach((elemento, indice, arr) => {
    console.log(elemento, indice, arr);
})

var nuevalongitud = juego.push('F-Zero')
console.log({ nuevalongitud, juego });

nuevalongitud = juego.unshift('Fire Emblem')
console.log({ nuevalongitud, juego });

var juegoBorrado = juego.pop()
console.log({ juegoBorrado, juego });

var posicion = 1

juegoBorrados = juego.splice(posicion, 2)
console.log({ juegoBorrados, juego });

var metroidIndex = juego.indexOf('Metroid')
console.log(metroidIndex);