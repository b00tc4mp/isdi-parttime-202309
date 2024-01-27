const createPost = require('./createPost.js')

try {

    createPost("4q0ivj68xgq0", 'https://media.istockphoto.com/id/181072765/es/foto/lechuga-aislado.jpg?s=612x612&w=0&k=20&c=7spdLdTK_iyTUdpdp6cjdHkDE9dCkahoTtnOvQYY8mE=', 'what a fresh day!',
        error => {
            if (error) {
                console.error(error)

                return
            }

            console.log('created')
        })

} catch (error) {
    console.error(error)

}