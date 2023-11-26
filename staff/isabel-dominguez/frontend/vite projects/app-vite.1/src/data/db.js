import { Users, Posts, CreditCards } from "./Collections"
import { User, Post, CreditCard } from "./models"

// DATABASE
//Cuando hablamos de documentos (instancias de clases como User y Post), nos estamos refiriendo a entidades que pueden ser almacenadas en una base de datos o utilizadas en la lógica de la aplicación. Cada entidad representa un objeto específico en el dominio de tu aplicación. Un "documento" es una unidad básica de almacenamiento de datos. Un documento puede representar un objeto en el mundo real y contiene información relacionada con ese objeto.

// Creación de un objeto "db" que contiene instancias de las clases Users, Posts y CreditCards
const db = {
    users: new Users(),
    posts: new Posts(),
    cards: new CreditCards(),
}

// Registra el tiempo antes de comenzar las inserciones
const before = Date.now()

// Inserta usuarios y posts en la colección "users" y "posts"
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
                db.users.__documents__[0].id, // ID del primer usuario en la colección "users"
                "https://ih1.redbubble.net/image.2230349250.8377/pp,840x830-pad,1000x1000,f8f8f8.jpg",
                "my sweety!",
                [db.users.__documents__[1].id] // Lista de IDs de usuarios a los que les gusta el post
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
                        "https://imgs.search.brave.com/lht2lHdWqFh4SRLHFuX7xHL1EVbzzb79pnDqYuui8dM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzVkL2Y3/LzY1LzVkZjc2NTUz/N2IzMTQ1MGZhOTY5/YWUzYjk1ZTFhYmY4/LmpwZw",
                        "😊💕",
                        [db.users.__documents__[1].id]
                    ), () => {
                        db.cards.insert(new CreditCard(null, db.users.__documents__[1].id, "Peter Pan Integral", "1234 5678 9101 1121", new Date("2024-01-01")), () => {
                            console.log("database luckily populated 😰", (Date.now() - before) / 1000 + "s")
                        })
                    })
                })
            })
        })
    })
})

export default db