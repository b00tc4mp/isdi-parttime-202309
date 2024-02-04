const changeUserEmail = require('./changeUserEmail')

try {

    changeUserEmail('amhkljhnhc4', 'cala@bacin.com', 'cala@bacin.com', '123123123', error => {
        if(error) {
            console.error(error)
            return
        }

        console.log('mail changed')


    })
    
} catch (error) {
    console.error(error.message)
    
}