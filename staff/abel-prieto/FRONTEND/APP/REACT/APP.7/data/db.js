// DATABASE

var db = {}

// USERS
db.users = [
    new User (generateId(), 'Wendy Darling', 'wendy@darling.com', '123123123'),
    new User (generateId(), 'Peter Pan', 'peter@pan.com', '123123123'),
    new User (generateId(), 'NanoPucela', 'abelpriem94@hotmail.com', '1234'),
]

// POSTS
db.posts = [
    new Post (
        generateId(),
        db.users[1].id,
        'https://www.semana.com/resizer/U2dYNVlzGiHK5T-EV_jhACYU-Ow=/1920x1080/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/JO53UT7DKVGVBNXQ5F37YJJZ3A.jpg',
        'my granpa!',
        [db.users[2].id],
    ),
    new Post (
        generateId(),
        db.users[0].id,
        'https://i.etsystatic.com/27087751/r/il/45a140/3041590242/il_fullxfull.3041590242_o4qq.jpg',
        'my sweety!',
        [],
    ),
    new Post (
        generateId(),
        db.users[2].id,
        'https://hips.hearstapps.com/hmg-prod/images/campanilla-peter-pan-1601227192.jpg?crop=0.500xw:1.00xh;0.502xw,0&resize=1200:*',
        'Campanilla!',
        [],
    )
]

// GENERATE RANDOM & UNIQUE ID
function generateId() {
    return Math.floor(Math.random() * 1000000000000000000).toString(36)
}