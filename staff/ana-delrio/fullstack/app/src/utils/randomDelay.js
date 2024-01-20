function randomDelay(callback) {
    setTimeout(callback, Math.random() * 100)
}

export default randomDelay