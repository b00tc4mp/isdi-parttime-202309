const db = {
    users: new Users,
    posts: new Posts,
    cards: new CreditCards
}

// populate db
const before = Date.now()

db.users.insert(new User(null, 'Simone Biles', 'simone@biles.com', 'aaa', []), () => {     
    db.users.insert(new User(null, 'Marge Simpson', 'marge@simpson.com','bbb', []), () => {
        db.users.insert(new User(null, 'Jamie-Lee Curtis', 'jamielee@curtis.com', 'ccc', []), () => {
            db.posts.insert(new Post(
            null,
            db.users.documents[0].id,
            'https://phantom-elmundo.unidadeditorial.es/14e29406d919ab966f9145a3bf12e8f3/crop/0x258/3072x2306/resize/746/f/webp/assets/multimedia/imagenes/2023/08/28/16932101527358.jpg',
            'I am back',
            []
        ), () => {
            db.posts.insert(new Post(
                null,
                db.users.documents[1].id,
                'https://i.pinimg.com/564x/13/63/37/13633734d116fe188af57fe9da7d095e.jpg',
                'my sweety!',
                [db.users.documents[0].id]
            ), () => {
                db.posts.insert(new Post(
                    null,
                    db.users.documents[0].id,
                    'https://e3.365dm.com/23/08/1600x900/skynews-simone-biles-us-gymnastic_6265542.jpg',
                    "I've done it again",
                    [db.users.documents[1].id]
                    ), () => { 
                        db.cards.insert(new CreditCard(null, db.users.documents[1].id, 'Peter Pan Integral', '1234 5678 9101 1121', new Date('2024-01-01')), () => {
                        console.log('database luckily populated 😰', (Date.now() - before) / 1000 + 's')
                        })
                    })
                })
             })
        })        
    })
})
