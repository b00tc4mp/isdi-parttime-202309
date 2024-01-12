module.exports = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*') // Permite cualquier puerto
    res.setHeader('Access-Control-Allow-Headers', '*') // Permite cualquier header
    res.setHeader('Access-Control-Allow-Methods', '*') // Permite cualquier método

    next()
}
    
