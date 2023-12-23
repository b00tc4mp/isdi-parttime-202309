const toogleLikePost = require('./toogleLikePost')

try {
    toogleLikePost("3vxs04m50tk0", "4mls4h86aba0", error => {
        if (error) {
            console.error(error)
            return
        }

        console.log('post like toogled')
    })

} catch (error) {
    console.error(error)
}

