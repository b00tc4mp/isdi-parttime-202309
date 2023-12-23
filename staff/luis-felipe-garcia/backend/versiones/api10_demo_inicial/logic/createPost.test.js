const createPost = require('./createPost.js')



try {
    createPost(
        '5hjsjd4co740',
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.agroponiente.com%2Fcatalogo-fruta-verdura%2Fpepino-almeria%2F&psig=AOvVaw37f9ptd9x1kLQ34gQfTk7M&ust=1702443959476000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjnjI-QiYMDFQAAAAAdAAAAABAD',
        'Pepino from agropinente',
        error => {
            if (error) {
                console.error(error)
                return
            }
            console.log('post created')
        })

} catch (error) {
    console.log(error)

}