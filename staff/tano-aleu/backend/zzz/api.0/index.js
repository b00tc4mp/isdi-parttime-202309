const fs = require('fs')

// fs.readFile('./helloworld.txt', 'utf8', (error, content) => {
//     debugger
//     if (error) {
//         console.error(error)

//         return
//     }

//     console.log(content)
// })

fs.writeFile('./holamundo.txt', 'Hola, Mundo!', error => {
    if(error) {
        console.error(error)

        return
    }

    console.log('saved')
})

console.log('continue...')


// En Node.js, el módulo fs proporciona funcionalidades para trabajar con el sistema de archivos. Una de las funciones más comunes es readFile, que se utiliza para leer el contenido de un archivo. 

// Es un proceso asincrono

// fs es como una caja de herramientas, readFile es una de ellas