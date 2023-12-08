// lectura de archivo

const fs = require('fs') // es un paquete pre-fabricado de node, que significa File System
// es una caja de herramientas que tiene entre otras cosas readFile, que te permite leer el archivo que tú le digas
// tiene que estar en la carpeta dnd ejecutamos el node

// utf8 es el formato del sistema operativo

// fs.readFile('./helloworld.txt', 'utf8', (error, content) => { //me lee el contenido del archivo, y en el callback me vendrá el error (o null, si no hay)
//     // y el contenido del archivo
//     debugger
//     if (error) {
//         console.error(error)

//         return
//     }

//     console.log(content)
// })

// console.log('continue...')

// Ejemplo de escritura de archivo (me crea el archivo holamundo.txt)

// fs.writeFile('./holamundo.txt', 'Hola Mundo', error => {
//     if (error) {
//         console.log(error)
//         return
//     }
//     console.log('saved')
// })

// console.log('continue...')

fs.readFile('./users.csv', 'utf8', (error, content) => {
    if (error) {
        console.error(error)
        return
    }

    const users = []

    const lines = content.split('\n') //aquí tenemos la 1a linea (separame hasta el salto de línea). Detecta todas las líneas

    const fields = lines[0].split(',') //aquí separo los elementos de la línea, me guio por las comas
    // en la línea 0 tengo las cabeceras

    for (let i = 1; i < lines.length - 1; i++) { //quiero recorrer todas las líneas de usuarios (empiezo por la 1)
        const line = lines[i] // me guardo la información de la línea en la que estoy en la constante line
        const values = line.split(',') // y los valores de la línea los guardo en la variable values
        const user = {} // aquí guardaré los datos de cada usuario

        for (let j in fields) { //la j es el índice en el array fields, itero en fields
            // la primera iteración que llega es "user-567,Pin Ocho,pin@ocho.com,123" j = 0
            const field = fields[j] // field == 'id' porque estoy recortado de la cabecera, el primer elemento const fields = lines[0].split(',')

            user[field] = values[j] // user[id] == 'user-567' // recorro values, que tiene los recortes de cada línea (y empiezo por la 1)
            //creo una propiedad en el objeto user, que se llama como el campo, que en este caso es id
        }

        users.push(user)
    }

    console.log(users)
})

console.log('Navida, navidad')