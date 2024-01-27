// Importa las colecciones y modelos necesarios desde archivos locales
import { Users, Posts, CreditCards } from './collections';
import { User, Post, CreditCard } from './models';

// Crea un objeto llamado db que contendrá instancias de las colecciones
const db = {
    // Instancia de la colección de usuarios
    users: new Users(),
    // Instancia de la colección de publicaciones
    posts: new Posts(),
    // Instancia de la colección de tarjetas de crédito
    cards: new CreditCards(),
};

// Exporta el objeto db como un módulo para ser utilizado en otros archivos
export default db;


// Explicaciones:

// Importaciones:

// Se importan las clases Users, Posts, CreditCards desde el archivo './collections'.
// Se importan las clases User, Post, CreditCard desde el archivo './models'.


// Creación de Objeto db:

// Se crea un objeto llamado db.
// En este objeto, se crean instancias de las colecciones (Users, Posts, CreditCards) que están diseñadas para gestionar los datos específicos (usuarios, publicaciones, tarjetas de crédito).


// Exportación:

// El objeto db se exporta como un módulo. Esto significa que puede ser importado y utilizado en otros archivos de la aplicación.
// Este código establece una instancia de la "base de datos" simulada que contiene colecciones para usuarios, publicaciones y tarjetas de crédito, y se exporta para su uso en otras partes del código.