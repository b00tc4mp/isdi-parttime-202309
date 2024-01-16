# Mongo

## server

```sh
$ ./bin/mongod --dbpath data
```

## shell

```sh (estando en la carpeta de shell)
$ ./bin/mongosh
```

N.B. cuando conectas a Mongo con la shell, aparece "test>" para que no toques otra cosa
N.B. la BBDD no devuelve errores, sino resultados
N.B. MongoDB Aggregation es un frameworkde Mongo muy potente (avanzado)

### Commands

test> show databases

test> show collections

test> db.users.insertOne => inserta un elemento en la BBDD que indicas (en este caso Users).
si es successful, te lo indica con un acknowledged: true. Le otorga también un ID (ObjectId)

test> show collections: la segunda vez que lo ejecutamos sí nos indica una collection (users) porque hemos creado un user

test> db.users.find(): te pone un guion bajo antes de id para que puedas, si quieres, utilizar luego la propiedad ID sin guion. ie. para no interferir. El guion bajo también indica algo interno - no lo toques

test> db.users.updateOne(): para actualizar uno de los documentos, le pasas el objectid y le indicas qué quieres hacer, poniendo, por ejemplo, $set: que significa cambiáme seguido por la palabra password y una nueva clave.

test> db.users.deleteMany() => borra todos. si quieres borrarlos todos, hay que pasarle un objecto vacío porque si no da error. si quieres, puedes pasarle un parámetro para hacer un filtro a la hora de borrar.

```sh

test> show databases
admin  40.000 KiB
config 60.000 KiB
local  40.000 KiB

test> show collections

test> db.users.insertOne({ name: 'Peter Pan', email: 'peter@pan.com', password: '123123123'})
{
        acknowledged: true,
        insertedId: ObjectId('659be6460093e6bdc0b0ad0e')
    }

test> show collections
users

test> db.users.find()
[
  {
    _id: ObjectId('659be6460093e6bdc0b0ad0e'),
    name: 'Peter Pan',
    email: 'peter@pan.com',
    password: '123123123'
  }
]

test> db.users.insertOne({ name: 'Wendy Darling', email: 'wendy@darling.com', password: '123123123'})
{
  acknowledged: true,
  insertedId: ObjectId('659be8ac0093e6bdc0b0ad0f')
}

test> db.users.find()
[
  {
    _id: ObjectId('659be6460093e6bdc0b0ad0e'),
    name: 'Peter Pan',
    email: 'peter@pan.com',
    password: '123123123'
  },
  {
    _id: ObjectId('659be8ac0093e6bdc0b0ad0f'),
    name: 'Wendy Darling',
    email: 'wendy@darling.com',
    password: '123123123'
  }
]

test> db.users.updateOne({ _id: ObjectId('659be6460093e6bdc0b0ad0e')}, {$set:{ password: '456456456'}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

test> db.users.findOne({ _id:ObjectId('659be6460093e6bdc0b0ad0e')})
{
  _id: ObjectId('659be6460093e6bdc0b0ad0e'),
  name: 'Peter Pan',
  email: 'peter@pan.com',
  password: '456456456'
}

test> db.users.deleteOne({ _id: ObjectId('659be6460093e6bdc0b0ad0e')})
{ acknowledged: true, deletedCount: 1 }

test> db.users.deleteMany({})
{ acknowledged: true, deletedCount: 1 }

test> db.users.renameCollection('NewName')
{ ok: 1}

test> db.posts.insertOne({ author: ObjectId('659be6460093e6bdc0b0ad0e'), image: 'https://www.rollingstone.com/wp-content/uploads/2023/08/ken-song.jpg', text: 'Just Ken', likes: []})
{
  acknowledged: true,
  insertedId: ObjectId('659beed30093e6bdc0b0ad10')
}
```
