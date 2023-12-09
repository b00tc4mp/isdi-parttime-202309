const fs = require('fs')
// El (fs) es un paquete pre-fabricado ya de NODE que significa FileSystem y dentro, tiene el método .readFile() -LECTURA- y .writeFile() -ESCRITURA-

fs.readFile("./users.csv", "utf8", (error, content) => {
    if (error) {
        console.error(error)

        return
    }

    const users = []

    const lines = content.split('\r\n')
    // Con el .split() divide/separa un objeto en un array nuevo y con el símbolo "\n", se crean saltos de línea. 
    
    // El símbolo \r elimina el "\r" por defecto del final de cada línea

    const fields = lines[0].split(',')

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i]

        const values = line.split(',')

        const user = {}

        for (let j in fields) {
            const field = fields[j]

            user[field] = values[j]
        }

        users.push(user)
    }

    console.log(users)
})

// fs.writeFile("./helloworld.txt", "Hola, Mundo!", error => {
//     if (error) {
//         console.error(error)

//         return
//     }

//     console.log('saved!')
// })

console.log('continue...')