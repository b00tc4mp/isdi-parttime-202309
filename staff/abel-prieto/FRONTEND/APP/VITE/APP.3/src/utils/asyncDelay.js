// ASINCRONÍA

function asyncDelay(callback, seconds) {
    setTimeout(callback, seconds * Math.round(Math.random() * 100))
}

export {
    asyncDelay
}