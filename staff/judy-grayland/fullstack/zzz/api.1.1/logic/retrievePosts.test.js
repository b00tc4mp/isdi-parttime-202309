const retrievePosts = require('./retrievePosts')

try {
  retrievePosts('3kmmn4f11xe0', (error, posts) => {
    if (error) {
      console.error(error)

      return
    }
    console.log('posts retrieved', posts)
  })
} catch (error) {
  console.error(error)
}
