import mongoose from 'mongoose'

import { User, Post } from './models.js'
// en la propia dirección podemos indicar la bbdd a la que queremos conectarnos - test
mongoose
  .connect('mongodb://127.0.0.1:27017/test')
  .then(() => {
    // // CREAR USUARIO
    // // creamos el usuario en memoria guardándolo como una variable. Para guardarlo en la BBDD hacemos .save() después:
    // const ajo = new User({ name: 'A Jo', email: 'a@jo.com', password: 'aaa' })
    // ajo
    //   .save()
    //   .then(() => console.log('user created'))
    //   .catch((error) => console.error(error))

    // CREAR POST
    // const post = new Post({
    //   author: '65ad62b7b958109e79915778',
    //   image:
    //     'https://content.fortune.com/wp-content/uploads/2023/08/Barbie-Dancing-MCDBARB_WB048.jpg',
    //   text: "Let's dance the night away!",
    // })

    // post
    //   .save()
    //   .then(() => console.log('post published'))
    //   .catch((error) => console.error(error))

    // // DARLE LIKE A UN POST:
    // Post.findById('65ad69d88ce623d0fdd7cdc6')
    //   .then((post) => {
    //     post.likes.push('65acf7e1f0bad8bad5bcdd9e')

    //     post
    //       .save()
    //       .then(() => console.log('post liked'))
    //       .catch((error) => console.error(error))
    //   })
    //   .catch((error) => console.error(error))

    // GUARDAR POST COMO FAV
    User.findById('65acf7e1f0bad8bad5bcdd9e')
      .then((user) => {
        user.favs.push('65ad69d88ce623d0fdd7cdc6')

        user
          .save()
          .then(() => console.log('post favd'))
          .catch((error) => console.error(error))
      })
      .catch((error) => console.error(error))
  })
  .catch((error) => console.error(error))
