const createPost = require('./createPost')

// catch is there to handle errors that we did not anticipate and deal with in our function
// the callback error handler is there to deal with errors that we have contemplated.

try {
  createPost(
    '3kmmn4f11xe0',
    'https://i.guim.co.uk/img/media/89e26240da3c49a5053f4b750f9c4a749508ab6f/111_0_2415_1450/master/2415.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=6c581f2b42dba6b9dedb5e4f02b77b71',
    'Long live the lettuce',
    (error) => {
      if (error) {
        console.error(error)

        return
      }

      console.log('post created')
    }
  )
} catch (error) {
  console.error(error)
}
