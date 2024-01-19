# Mongo

## server (esto para crear mongo)

```sh
$ ./bin/mongod --dbpath data
```

## shell (esto conecta con el servidor de arriba)

```sh
$ ./bin/mongosh
```

### Commands (ejemplos)

```sh
test> show databases
admin   40.00 KiB
config  60.00 KiB
local   40.00 KiB



test> show collections



// insertamos un usuario
test> db.users.insertOne({ name: 'Peter Pan', email: 'peter@pan.com', password: '123123123' })
{
  acknowledged: true,
  insertedId: ObjectId('6581f63fbc4abd5315fc8c24')
}


test> show collections
users

// Buscamos un usuario
test> db.users.find()
[{
    _id: ObjectId('6581f63fbc4abd5315fc8c24'),
    name: 'Peter Pan',
    email: 'peter@pan.com',
    password: '123123123'
  }]


// Insertamos un usuario
test> db.users.insertOne({ name: 'Wendy Darling', email: 'wendy@darling.com', password: '123123123' })
{
  acknowledged: true,
  insertedId: ObjectId('6581f7aabc4abd5315fc8c25')
}

// buscamos usuarios
test> db.users.find()
[{
    _id: ObjectId('6581f63fbc4abd5315fc8c24'),
    name: 'Peter Pan',
    email: 'peter@pan.com',
    password: '123123123'
  },
  {
    _id: ObjectId('6581f7aabc4abd5315fc8c25'),
    name: 'Wendy Darling',
    email: 'wendy@darling.com',
    password: '123123123'
  }]

// actualizamos los datos
test> db.users.updateOne({ _id: ObjectId('6581f63fbc4abd5315fc8c24') }, { $set: { password: '456456456' } })
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

test> db.users.find()
[
  {
    _id: ObjectId('6581f63fbc4abd5315fc8c24'),
    name: 'Peter Pan',
    email: 'peter@pan.com',
    password: '456456456'
  },
  {
    _id: ObjectId('6581f7aabc4abd5315fc8c25'),
    name: 'Wendy Darling',
    email: 'wendy@darling.com',
    password: '123123123'
  }
]

// para buscar un usuario solo
test> db.users.findOne({ _id: ObjectId('6581f63fbc4abd5315fc8c24') })
{
  _id: ObjectId('6581f63fbc4abd5315fc8c24'),
  name: 'Peter Pan',
  email: 'peter@pan.com',
  password: '456456456'
}

// eliminar un usuario
test> db.users.updateOne({ _id: ObjectId('658975f74daa8f923e8d35a3') }, { $set: { password: '456456456' } })

test> db.users.find()
[
  {
    _id: ObjectId('6581f7aabc4abd5315fc8c25'),
    name: 'Wendy Darling',
    email: 'wendy@darling.com',
    password: '123123123'
  }
]


// eliminar todos los elementos de la coleccion 
test> db.users.deleteMany({})
{ acknowledged: true, deletedCount: 1 }

test> db.users.find()

test> show collections
users


// cambiar el nombre de una colección
test> db.users.renameCollection('usuarios')
{ ok: 1 }

test> show collections
usuarios

test> db.usuarios.renameCollection('users')
{ ok: 1 }

test> show collections
users

test> db.users.insertOne({ name: 'Peter Pan', email: 'peter@pan.com', password: '123123123' })
{
  acknowledged: true,
  insertedId: ObjectId('6581f9b3bc4abd5315fc8c28')
}

test> db.users.insertOne({ name: 'Wendy Darling', email: 'wendy@darling.com', password: '123123123' })
{
  acknowledged: true,
  insertedId: ObjectId('6581f9b6bc4abd5315fc8c29')
}

test> db.users.find()
[
  {
    _id: ObjectId('6581f9b3bc4abd5315fc8c28'),
    name: 'Peter Pan',
    email: 'peter@pan.com',
    password: '123123123'
  },
  {
    _id: ObjectId('6581f9b6bc4abd5315fc8c29'),
    name: 'Wendy Darling',
    email: 'wendy@darling.com',
    password: '123123123'
  }
]

// insertamos posts
test> db.posts.insertOne({ author: ObjectId('6581f9b3bc4abd5315fc8c28'), image: 'https://static.wikia.nocookie.net/heroe/images/5/5e/Peter_Pan_en_blanco.png/revision/latest?cb=20230303050514&path-prefix=es', text: 'Hello, Peter!', likes: [] })
{
  acknowledged: true,
  insertedId: ObjectId('6581fac8bc4abd5315fc8c2c')
}

test> db.posts.insertOne({ author: ObjectId('6581f9b3bc4abd5315fc8c28'), image: 'https://static.wikia.nocookie.net/heroe/images/5/5e/Peter_Pan_en_blanco.png/revision/latest?cb=20230303050514&path-prefix=es', text: 'Hello, Peter! again', likes: [] })
{
  acknowledged: true,
  insertedId: ObjectId('6581fad6bc4abd5315fc8c2d')
}

test> db.posts.find()
[
  {
    _id: ObjectId('6581fac8bc4abd5315fc8c2c'),
    author: ObjectId('6581f9b3bc4abd5315fc8c28'),
    image: 'https://static.wikia.nocookie.net/heroe/images/5/5e/Peter_Pan_en_blanco.png/revision/latest?cb=20230303050514&path-prefix=es',
    text: 'Hello, Peter!',
    likes: []
  },
  {
    _id: ObjectId('6581fad6bc4abd5315fc8c2d'),
    author: ObjectId('6581f9b3bc4abd5315fc8c28'),
    image: 'https://static.wikia.nocookie.net/heroe/images/5/5e/Peter_Pan_en_blanco.png/revision/latest?cb=20230303050514&path-prefix=es',
    text: 'Hello, Peter! again',
    likes: []
  }
]

test> db.users.updateOne({ _id: ObjectId('6581f9b3bc4abd5315fc8c28') }, { $set: { favs: [] } })
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

test> db.users.updateOne({ _id: ObjectId('6581f9b3bc4abd5315fc8c29') }, { $set: { favs: [] } })
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
}

test> db.users.updateOne({ _id: ObjectId('6581f9b6bc4abd5315fc8c29') }, { $set: { favs: [] } })
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

// les añadimos el campo "favs"
test> db.users.find()
[
  {
    _id: ObjectId('6581f9b3bc4abd5315fc8c28'),
    name: 'Peter Pan',
    email: 'peter@pan.com',
    password: '123123123',
    favs: []
  },
  {
    _id: ObjectId('6581f9b6bc4abd5315fc8c29'),
    name: 'Wendy Darling',
    email: 'wendy@darling.com',
    password: '123123123',
    favs: []
  }
]

// insertamos un posts más
test> db.posts.insertOne({ author: ObjectId('6581f9b6bc4abd5315fc8c29'), image: 'https://static.wikia.nocookie.net/heroe/images/5/5e/Peter_Pan_en_blanco.png/revision/latest?cb=20230303050514&path-prefix=es', text: 'Hello, Peter! <3', likes: [] })
{
  acknowledged: true,
  insertedId: ObjectId('6581fbebbc4abd5315fc8c2e')
}

// mostramos los posts
test> db.posts.find()
[
  {
    _id: ObjectId('6581fac8bc4abd5315fc8c2c'),
    author: ObjectId('6581f9b3bc4abd5315fc8c28'),
    image: 'https://static.wikia.nocookie.net/heroe/images/5/5e/Peter_Pan_en_blanco.png/revision/latest?cb=20230303050514&path-prefix=es',
    text: 'Hello, Peter!',
    likes: []
  },
  {
    _id: ObjectId('6581fad6bc4abd5315fc8c2d'),
    author: ObjectId('6581f9b3bc4abd5315fc8c28'),
    image: 'https://static.wikia.nocookie.net/heroe/images/5/5e/Peter_Pan_en_blanco.png/revision/latest?cb=20230303050514&path-prefix=es',
    text: 'Hello, Peter! again',
    likes: []
  },
  {
    _id: ObjectId('6581fbebbc4abd5315fc8c2e'),
    author: ObjectId('6581f9b6bc4abd5315fc8c29'),
    image: 'https://static.wikia.nocookie.net/heroe/images/5/5e/Peter_Pan_en_blanco.png/revision/latest?cb=20230303050514&path-prefix=es',
    text: 'Hello, Peter! <3',
    likes: []
  }
]


// buscamos los posts de x author
test> db.posts.find({ author: ObjectId('6581f9b6bc4abd5315fc8c29') })
[
  {
    _id: ObjectId('6581fbebbc4abd5315fc8c2e'),
    author: ObjectId('6581f9b6bc4abd5315fc8c29'),
    image: 'https://static.wikia.nocookie.net/heroe/ximages/5/5e/Peter_Pan_en_blanco.png/revision/latest?cb=20230303050514&path-prefix=es',
    text: 'Hello, Peter! <3',
    likes: []
  }
]

// lo mismo con otro author
test> db.posts.find({ author: ObjectId('6581f9b3bc4abd5315fc8c28') })
[
  {
    _id: ObjectId('6581fac8bc4abd5315fc8c2c'),
    author: ObjectId('6581f9b3bc4abd5315fc8c28'),
    image: 'https://static.wikia.nocookie.net/heroe/images/5/5e/Peter_Pan_en_blanco.png/revision/latest?cb=20230303050514&path-prefix=es',
    text: 'Hello, Peter!',
    likes: []
  },
  {
    _id: ObjectId('6581fad6bc4abd5315fc8c2d'),
    author: ObjectId('6581f9b3bc4abd5315fc8c28'),
    image: 'https://static.wikia.nocookie.net/heroe/images/5/5e/Peter_Pan_en_blanco.png/revision/latest?cb=20230303050514&path-prefix=es',
    text: 'Hello, Peter! again',
    likes: []
  }
]
```