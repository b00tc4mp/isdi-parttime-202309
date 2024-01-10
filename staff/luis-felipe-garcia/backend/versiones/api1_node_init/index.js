const fs = require('fs')

fs.readFile('./users.csv', 'utf8', (error, content) => {
    if(error) {
        console.log('ERROR', error.message)
        return
    }

    const users =[]

    const lines = content.split('\r\n')
    const fields = lines[0].split(',')

    for (let i = 1; i < lines.length; i++) {
        const line = lines [i]
        const values = line.split(',')
        
        const user = {}
        for (let j = 0; j < fields.length; j++) {
            user[fields[j]] = values[j]
        }
        users.push(user)
    }


    console.log(users)
})


/*fs.writeFile('./holamundo.txt', 'Hola mundo', error => {
    if (error) {
        console.error(error)
        return
    }

    console.log('saved')
} )*/

/*const fs = require('fs')

fs.readFile('./users.csv', 'utf8', (error, content) => {
    if(error) {
        console.log('ERROR', error.message)
        return
    }

    const users =[]

    const lines = content.split('\r\n')
    const fields = lines[0].split(',')

    for (let i = 1; i < lines.length; i++) {
        const line = lines [i]
        const values = line.split(',')
        
        const user = {}
        for (let j = 0; j < fields.length; j++) {
            user[fields[j]] = values[j]
        }
        users.push(user)
    }


    console.log(users)
})


/*fs.writeFile('./holamundo.txt', 'Hola mundo', error => {
    if (error) {
        console.error(error)
        return
    }

    console.log('saved')
} )*/

console.log('continue...')