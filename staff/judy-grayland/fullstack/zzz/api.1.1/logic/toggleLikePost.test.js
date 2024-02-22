const toggleLikePost = require('./toggleLikePost')

try {
  toggleLikePost('3kmmn4f11xe0', 't8gzwceff0', (error) => {
    if (error) {
      console.error(error)

      return
    }

    console.log('post like toggled')
  })
} catch (error) {
  console.error(error)
}
