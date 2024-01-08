const createPost = require('./createPost')

try {
    createPost('1mtb9uvewfmo', 'https://images.cookforyourlife.org/wp-content/uploads/2018/08/shutterstock_219547156-min.jpg', 'Garbanzo!', error => {
        if (error) {
            console.error(error)
            return
        }

        console.log('created')
    })

} catch (error) {
    console.error(error)
}