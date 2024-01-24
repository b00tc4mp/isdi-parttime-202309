function add() {
    for (var i = 0; i < arguments.length; i++) {
        this.worth += arguments[i]
    }
}

var o = { name: 'Oswald', worth: 10 }

//add.call(o, 5, 7, 2, 4)
//add.apply(o, [5, 7, 2, 4])

function bind(fun, ctx) {
    return function () { // closure
        //return fun.call(ctx, ...arguments) // ES6
        return fun.apply(ctx, arguments)
    }
}

//var addGainsForOswald = add.bind(o)
var addGainsForOswald = bind(add, o)
addGainsForOswald(5, 7, 2, 4)

console.log(o)

var p = { name: 'Petra', worth: 5 }

//var addGainsForPetra = bind(addGainsForOswald, p)
//var addGainsForPetra = addGainsForOswald.bind(p)
//var addGainsForPetra = add.bind(p)
var addGainsForPetra = bind(add, p)

addGainsForPetra(11, 22, 33, 44)

console.log(p)
console.log(o)

// VM1312:23 {name: 'Oswald', worth: 28}
// VM1312:34 {name: 'Petra', worth: 115}
// VM1312:35 {name: 'Oswald', worth: 28}