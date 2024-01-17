module.exports = (req, res, next) => {
    // en la respuesta se ponen los headers que tocan
    // le decimos al cliente que nos puede llamar desde cualquier origen.
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')
    next() // con esto, le decimos que primero pasará por el res.setHeader, luego sigue su camino
}