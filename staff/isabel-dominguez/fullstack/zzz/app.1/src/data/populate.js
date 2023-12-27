import db from "./db"
import { User, Post, CreditCard } from "./models"

// Registra el tiempo antes de comenzar las inserciones
const before = Date.now()

db.users.insert(new User(null, "Wendy Darling", "wendy@darling.com", "123123123", []), () => {
    db.users.insert(new User(null, "Peter Pan", "peter@pan.com", "123123123", []), () => {
        db.posts.insert(new Post(
            null,
            db.users.__documents__[1].id,
            "https://m.media-amazon.com/images/M/MV5BMzIwMzUyYTUtMjQ3My00NDc3LWIyZjQtOGUzNDJmNTFlNWUxXkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_FMjpg_UX1000_.jpg",
            "my granpa!",
            []
        ), () => {
            db.posts.insert(new Post(
                null,
                db.users.__documents__[0].id,
                "https://ih1.redbubble.net/image.2230349250.8377/pp,840x830-pad,1000x1000,f8f8f8.jpg",
                "my sweety!",
                [db.users.__documents__[1].id]
            ), () => {
                db.posts.insert(new Post(
                    null,
                    db.users.__documents__[1].id,
                    "https://m.media-amazon.com/images/I/71JZegDmwbL.jpg",
                    "i love ü baby",
                    [db.users.__documents__[0].id]
                ), () => {
                    db.posts.insert(new Post(
                        null,
                        db.users.__documents__[0].id,
                        "https://www.disneyanimation.com/img/uploads/films/alice-in-wonderland/wbi-r2-aliceinwonderland-tiff032-0.jpg",
                        "She is Alice",
                        [db.users.__documents__[0].id]
                    ), () => {
                        db.posts.insert(new Post(
                            null,
                            db.users.__documents__[1].id,
                            "https://akns-images.eonline.com/eol_images/Entire_Site/2017314/rs_1024x759-170414134148-1024.Alice-In-Wonderland-White-Rabbit.kg.041417.jpg",
                            "he's the white rabbit ",
                            [db.users.__documents__[1].id]
                        ), () => {
                            db.posts.insert(new Post(
                                null,
                                db.users.__documents__[0].id,
                                "https://th.bing.com/th/id/OIP.Yl7w4VHw0m64fQBBEwCiVAAAAA?rs=1&pid=ImgDetMain",
                                "He's the March hare",
                                [db.users.__documents__[1].id]
                            ), () => {
                                db.posts.insert(new Post(
                                    null,
                                    db.users.__documents__[0].id,
                                    "https://s-media-cache-ak0.pinimg.com/736x/e6/65/f4/e665f44e7f3b0c07b6faf507120f5466--disney-movies-teapots.jpg",
                                    "He's the mad hatter",
                                    [db.users.__documents__[1].id]
                                ), () => {
                                    db.cards.insert(new CreditCard(null, db.users.__documents__[1]._id, "Peter Pan Integral", "1234 5678 9101 1121", new Date("2024-01-01")), () => {
                                        console.log("database luckily populated 😰", (Date.now() - before) / 1000 + "s")
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
