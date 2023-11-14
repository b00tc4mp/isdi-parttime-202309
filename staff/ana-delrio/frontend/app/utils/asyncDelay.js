// Definimos la función asyncDelay que toma una función de devolución (callback) y una cantidad de segundos
function asyncDelay(callback, seconds) {
    // La función setTimeout ejecutará la función de devolución (callback) después de la cantidad de segundos especificada
    setTimeout(callback, seconds * 1000)
}