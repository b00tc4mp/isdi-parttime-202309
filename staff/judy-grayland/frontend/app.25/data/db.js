var db = {}

// populate db

db.users = [
    new User(generateId(), 'Simone Biles', 'simone@biles.com', 'aaa'),
    new User(generateId(), 'Marge Simpson', 'marge@simpson.com','bbb'),
    new User(generateId(), 'Jamie-Lee Curtis', 'jamielee@curtis.com', 'ccc')
] 

db.posts = [
    new Post(
        generateId(),
        db.users[0].id,
        'https://phantom-elmundo.unidadeditorial.es/14e29406d919ab966f9145a3bf12e8f3/crop/0x258/3072x2306/resize/746/f/webp/assets/multimedia/imagenes/2023/08/28/16932101527358.jpg',
        'I am back',
        []
    ),
    new Post(
        generateId(),
        db.users[1].id,
        'https://i.pinimg.com/564x/13/63/37/13633734d116fe188af57fe9da7d095e.jpg',
        'my sweety!',
        [db.users[0]]
    ),
    new Post(
        generateId(),
        db.users[0].id,
        'https://e3.365dm.com/23/08/1600x900/skynews-simone-biles-us-gymnastic_6265542.jpg',
        "I've done it again",
        [db.users[1]]
    )                        
]

function generateId() {
    return Math.floor(Math.random() * 1000000000000000000).toString(36)
}


