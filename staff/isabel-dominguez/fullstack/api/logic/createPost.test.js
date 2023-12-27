const createPost = require('./createPost')

try {
    createPost('4an7ym43zji0', 'https://th.bing.com/th/id/R.3e086d58b4ab50d24e6a981b515232a2?rik=KhnSi3rTB4PbTw&riu=http%3a%2f%2fimages2.fanpop.com%2fimages%2fphotos%2f5400000%2fPinocchio-classic-disney-5440060-1280-960.jpg&ehk=tjogbZNz1GvvgoH1mznJYvSW4NSvhNPdXYkH8zcmXJA%3d&risl=&pid=ImgRaw&r=0', 'I am happy!', error => {
        if (error) {
            console.error(error)

            return
        }

        console.log('created')
    })
} catch (error) {
    console.error(error)
}