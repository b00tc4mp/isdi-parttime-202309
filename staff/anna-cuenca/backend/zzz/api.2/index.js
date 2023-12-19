const CSV = require('./utils/CSV') //así se importa en node

CSV.loadAsObject('./users.csv', (error, users) => {
    if (error) {
        console.error(error)
        return
    }

    CSV.saveFromObject('./users2.csv', users, error => {
        if (error) {
            console.log(error)
            return
        }
        console.log('end')
    })
}) //llamo a la función