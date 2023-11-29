function asyncDelay(callback, seconds) {
    setTimeout(callback, seconds * 1000)
}

export {
    asyncDelay
}