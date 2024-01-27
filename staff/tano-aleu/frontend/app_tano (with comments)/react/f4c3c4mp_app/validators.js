// VALIDATOR REGISTER AND LOGIN

function validateText(text, explain) {
    if (typeof text !== 'string') throw new TypeError(explain + ' is not string')
    if (!text.trim().length) throw new Error(explain + ' is empty')
}

function validateNumber(number, explain) {
    if (typeof number !== 'number') throw new TypeError(`${explain} is not a number`)
}

/*El parámetro explain en las funciones validateText y validateNumber se utiliza para proporcionar un mensaje personalizado que describe el tipo de error que se produjo al validar el texto o el número.

Por ejemplo, si estás utilizando la función validateText para verificar un campo de nombre de usuario en un formulario de registro, podrías llamar a la función de esta manera:



try {

    validateText(username, 'Username');

} catch (error) {

    console.error(error.message);

    // Aquí podrías mostrar un mensaje de error al usuario, indicando que el campo de nombre de usuario no es válido
}



En este caso, si el campo de nombre de usuario no es una cadena de texto o está vacío, se lanzará un error con el mensaje "Username is not string" o "Username is empty", dependiendo del caso.

El parámetro explain se utiliza para personalizar el mensaje de error, de modo que puedas proporcionar información clara sobre qué campo no pasó la validación.*/