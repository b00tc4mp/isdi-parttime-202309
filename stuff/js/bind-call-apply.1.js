function me() {
    return 'i am ' + this.name
}

window.name = 'Winona'

console.log(me())
console.log(window.me())

var o = { name: 'Oswald' }
o.me = me
console.log(o.me())

var printOswald = me.bind(o)
console.log(printOswald())

function bind(fun, ctx) {
    return function () {
        return fun.call(ctx)
    }
}

var printOswald2 = bind(me, o)
console.log(printOswald2())

var p = { name: 'Petra' }
console.log(me.call(p))
console.log(me.apply(p))

// VM889:7 i am Winona
// VM889:8 i am Winona
// VM889:12 i am Oswald
// VM889:15 i am Oswald
// VM889:24 i am Oswald
// VM889:27 i am Petra
// VM889:28 i am Petra