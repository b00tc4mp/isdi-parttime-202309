function randomDelay(callback) {
    setTimeout(callback, Math.round(Math.random() * 100))
}

// ejecuta la función callback después de un retraso de unos segundos


export default randomDelay