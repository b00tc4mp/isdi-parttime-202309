var personaje = {
    nombre: 'Cristian',
    codeName: 'Dr Strange',
    vivo: true,
    edad: 41,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['capa', 'gema verde', 'libro de los malditos'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'malibu'
    },
    ultimaPelicula: 'Infinity War'

}
console.log(personaje);
console.log(personaje['nombre']);
console.log(personaje.edad);
console.log(personaje.coords.lat);
console.log('Numero de trajes: ', personaje.trajes.length);
console.log('ultimo traje: ', personaje.trajes[personaje.trajes.length - 1]);

var x = 'vivo'
console.log('Vivo ', personaje[x]);

console.log('Ultima pelicula: ', personaje.ultimaPelicula);

//Más detalles

delete personaje.edad
console.log(personaje);

personaje.casado = true

var entriesPares = Object.entries(personaje)
console.log(entriesPares);

