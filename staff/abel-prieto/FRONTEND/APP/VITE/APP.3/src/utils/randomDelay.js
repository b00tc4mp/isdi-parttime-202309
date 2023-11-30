// ASINCRONÍA
function randomDelay(callback, seconds) {
    setTimeout(callback, seconds * Math.round(Math.random() * 100))
}

export default randomDelay