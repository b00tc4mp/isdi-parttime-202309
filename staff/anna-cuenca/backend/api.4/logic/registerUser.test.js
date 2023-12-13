const registerUser = require('./registerUser') // el requiere es como el input

try {
    registerUser('Gui Sante', 'gui@sante.com', '123', error => {
        if (error) {
            console.error(error)
            return
        }

        console.log('user registered')
    })

} catch (error) {
    console.log(error)
}