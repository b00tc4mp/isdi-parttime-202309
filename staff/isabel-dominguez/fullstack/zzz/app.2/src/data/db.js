import { Users, Posts, CreditCards } from "./Collections"

// DATABASE
//Cuando hablamos de documentos (instancias de clases como User y Post), nos estamos refiriendo a entidades que pueden ser almacenadas en una base de datos o utilizadas en la lógica de la aplicación. Cada entidad representa un objeto específico en el dominio de tu aplicación. Un "documento" es una unidad básica de almacenamiento de datos. Un documento puede representar un objeto en el mundo real y contiene información relacionada con ese objeto.

// Creación de un objeto "db" que contiene instancias de las clases Users, Posts y CreditCards
const db = {
    users: new Users(),
    posts: new Posts(),
    cards: new CreditCards(),
}

export default db