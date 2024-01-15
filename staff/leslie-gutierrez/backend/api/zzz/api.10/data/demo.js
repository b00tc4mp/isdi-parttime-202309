const mongoose = require('mongoose')

const {User, Post} = require('./models')

const User = model('User', user)
const Post = model('Post', post)

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(()=> {
        // const pepito= new User({name:'Pepito Grillo', email:'pepito@grillo.com', password: '123123123'})

        // pepito.save()
        //     .then(()=> console.log('user created'))
        //     .catch(()=> console.error(error))

        // const post = new Post ({author: '659e7ba75fbd1937559ff99a', imagen: 'https://pepito.com/image', text: 'Hola,Pepito!'})

        // post.save()
        // .then(()=> console.log('post created'))
        // .catch(()=> console.error(error))

        // Post.findById('659e81b716d73b3ec91dfe48')
        // .then(post => {
        //     post.likes.push('659e81b716d73b3ec91dfe48')

        //     post.save()
        //         .then(()=> console.log('post liked'))
        //         .catch(error => console.error(error))
        // })
        // .catch(error => console.error(error))

        User.findById('659e907c9172c3faf1f5481a')
        .then(user => {
            user.favs.push('659e907c9172c3faf1f5481b')

            user.save()
                .then(()=> console.log('post favorited'))
                .catch(error => console.error(error))
        })
        .catch(error => console.error(error))
        
    })
    .catch(error => console.error(error))