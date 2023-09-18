

// const arr = new Array(10);
// const arr = [];
// console.log(arr);

// let videoJuegos = ['Mario 3', 'Megaman' ,'Chrono trogger' ,'shining force 2' ,];
// console.log(videoJuegos[0]);

let arregloCosas = [
    true,
    123,
    'Fernando',
    1 + 2,
    function(){},
    ()=>{},
    { a: 1 },
    ['X', 'Megaman', 'Zeero','Dr. Light', [
        'Dr. Willy', 'Woodman'
    ]]
];

//Este resultado muestra el que esta anidado dentro en la posicion 1
console.log(arregloCosas[7][4][1]);

//Aqui muestro una letra
console.log(arregloCosas[7][1][1]);


let ultimo = arregloCosas[7];

console.log(ultimo[3]);