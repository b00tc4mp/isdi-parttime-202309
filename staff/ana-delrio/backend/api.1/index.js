// fs es un paquete de node, que significa file system
const fs = require('fs')

// dentro de fs, estáreadFile, que te permite leer un archivo
// utf8: es el formato del sistema operativo

// fs.writeFile('./holamundo.txt', 'Hola, Mundo!', error => {
//     if (error) {
//         console.error(error)

//         return
//     }
//     console.log('saved')

// })


fs.readFile('./users.csv', 'utf8', (error, content) => {
    if (error) {
        console.error(error)

        return
    }
    const users = []

    // esto nos sirve para separar los strings con los saltos de linea (/n)
    const lines = content.split('\r\n')

    const fields = lines[0].split(',')

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i]

        const values = line.split(',')

        const user = {}

        // la j en el índice en el array de fields
        for (const j in fields) {
            const field = fields[j]

            user[field] = values[j]

        }
        users.push(user)

    }

    console.log(users)
})