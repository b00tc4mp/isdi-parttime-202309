// Verifica si 'text' no es una cadena ('string'). Si no es una cadena, lanza un error de tipo.
// Verifica si 'text' está vacío después de eliminar espacios en blanco. Si está vacío, lanza un error. 

function validateText(text, explain) {
    if (typeof text !== 'string') throw new TypeError(explain + ' is not string')
    if (!text.trim().length) throw new Error(explain + ' is empty')
}

// validamos que es un número 
function validateNumber(number, explain) {
    if (typeof number !== 'number') throw new TypeError(`${explain} is not a number`)
}

