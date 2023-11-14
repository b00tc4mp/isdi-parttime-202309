// creamos un objeto, con 3 propiedades
// cada uno recibe una nueva instancia de una clase que tenemos en collections

const db = {
    users: new Users,
    posts: new Posts,
    cards: new CreditCards
}

// aquí estamos insertando (aprovechando el insert de collection) 2 registros de usuarios en la colección de USERS

db.users.insert(new User(null, 'Wendy Darling', 'wendy@darling.com', '123123123'))
db.users.insert(new User(null, 'Peter Pan', 'peter@pan.com', '123123123'))


// aquí estamos insertando 3 registros de post en la colección de post 

db.posts.insert(new Post(
    null,
    db.users.collection[1].id,
    'https://m.media-amazon.com/images/M/MV5BMzIwMzUyYTUtMjQ3My00NDc3LWIyZjQtOGUzNDJmNTFlNWUxXkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_FMjpg_UX1000_.jpg',
    'my granpa!',
    []
))
db.posts.insert(new Post(
    null,
    db.users.collection[0].id,
    'https://ih1.redbubble.net/image.2230349250.8377/pp,840x830-pad,1000x1000,f8f8f8.jpg',
    'my sweety!',
    [db.users.collection[1].id]
))
db.posts.insert(new Post(
    null,
    db.users.collection[1].id,
    'https://m.media-amazon.com/images/I/71JZegDmwbL.jpg',
    'i love ü baby',
    [db.users.collection[0].id]
))

// en esta línea inseertamos un registro de tarjeta en la colección de cards

db.cards.insert(new CreditCard(null, db.users.collection[1].id, 'Peter Pan Integral', '1234 5678 9101 1121', new Date('2024-01-01')))