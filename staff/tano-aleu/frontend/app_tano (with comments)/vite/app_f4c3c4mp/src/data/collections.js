// Importar las clases de modelos y funciones de utilidad
import { User, Post, CreditCard } from './models'
import randomDelay from '../utils/randomDelay'
import { validateText } from '../utils/validators'

// Clase genérica para gestionar colecciones de documentos
class Collection {
    constructor(clazz, documents) {
        this.__clazz__ = clazz
        this.__documents__ = documents
    }

    // Método privado para clonar un documento y evitar referencias compartidas
    __clone__(document) {
        var copy = new this.__clazz__

        for (var key in document) {
            var value = document[key]

            // Clonar arrays, fechas y objetos
            if (value instanceof Array)
                copy[key] = [...value]
            else if (value instanceof Date)
                copy[key] = new Date(document[key])
            else if (value instanceof Object)
                copy[key] = { ...value }
            else
                copy[key] = document[key]
        }

        return copy
    }

    // Método privado para generar un ID aleatorio
    __generateId__() {
        return Math.floor(Math.random() * 1000000000000000000).toString(36)
    }

    // Método para insertar un nuevo documento en la colección
    insert(document, callback) {
        randomDelay(() => {
            const documentCopy = this.__clone__(document)

            // Asignar un ID aleatorio al documento
            documentCopy.id = this.__generateId__()

            // Agregar el documento clonado a la colección
            this.__documents__.push(documentCopy)

            // Llamar al callback sin errores
            callback(null)
        })
    }

    // Método privado para encontrar el índice de un documento por ID
    __findIndexById__(id, callback) {
        try {
            validateText(id, `${this.__clazz__.name} id`)

            randomDelay(() => {
                // Encontrar el índice del documento por su ID
                const index = this.__documents__.findIndex(document => document.id === id)

                // Llamar al callback con el índice encontrado
                callback(null, index)
            })
        } catch (error) {
            // Llamar al callback con el error si ocurre una excepción
            callback(error)
        }
    }

    // Método para encontrar un documento por ID
    findById(id, callback) {
        try {
            validateText(id, `${this.__clazz__.name} id`)

            randomDelay(() => {
                // Encontrar el documento por su ID
                const document = this.__documents__.find(document => document.id === id)

                // Llamar al callback con el documento encontrado (clonado)
                if (!document) {
                    callback(null, null)
                    return
                }

                callback(null, this.__clone__(document))
            })
        } catch (error) {
            // Llamar al callback con el error si ocurre una excepción
            callback(error)
        }
    }

    // Método para actualizar un documento en la colección
    update(document, callback) {
        try {
            // Verificar si el documento es una instancia válida de la clase
            if (!(document instanceof this.__clazz__)) throw new TypeError(`document is not a ${this.__clazz__.name}`)

            randomDelay(() => {
                // Encontrar el índice del documento por su ID
                this.__findIndexById__(document.id, (error, index) => {
                    if (error) {
                        // Llamar al callback con el error si ocurre una excepción
                        callback(error)
                        return
                    }

                    // Verificar si el documento fue encontrado
                    if (index < 0) {
                        // Llamar al callback con un error si el documento no fue encontrado
                        callback(new Error(`${this.__clazz__.name} not found`))
                        return
                    }

                    // Reemplazar el documento en la colección con su clon
                    this.__documents__[index] = this.__clone__(document)

                    // Llamar al callback sin errores
                    callback(null)
                })
            })
        } catch (error) {
            // Llamar al callback con el error si ocurre una excepción
            callback(error)
        }
    }
}

// Clase especializada para gestionar la colección de usuarios
class Users extends Collection {
    constructor() {
        super(User, [])
    }

    // Método para encontrar un usuario por dirección de correo electrónico
    findByEmail(email, callback) {
        try {
            // Validar la dirección de correo electrónico
            validateText(email, 'email')

            randomDelay(() => {
                // Encontrar un usuario por su dirección de correo electrónico
                const user = this.__documents__.find(document => document.email === email)

                // Llamar al callback con el usuario encontrado (clonado)
                if (!user) {
                    callback(null, null)
                    return
                }

                callback(null, this.__clone__(user))
            })
        } catch (error) {
            // Llamar al callback con el error si ocurre una excepción
            callback(error)
        }
    }
}

// Clase especializada para gestionar la colección de publicaciones
class Posts extends Collection {
    constructor() {
        super(Post, [])
    }

    // Método para obtener todas las publicaciones
    getAll(callback) {
        randomDelay(() => {
            // Llamar al callback con todas las publicaciones en la colección (clonadas)
            callback(null, this.__documents__.map(this.__clone__.bind(this)))
        })
    }
}

// Clase especializada para gestionar la colección de tarjetas de crédito
class CreditCards extends Collection {
    constructor() {
        super(CreditCard, [])
    }
}

// Se exportan las clases para su uso en otros archivos
export {
    Users,
    Posts,
    CreditCards
}

// Este código es una implementación de un sistema de gestión de colecciones de datos en JavaScript. Aquí tienes un breve resumen de las partes clave:

// Clase Collection:

// Gestiona la inserción, búsqueda por ID y actualización de documentos genéricos en una colección.
// Utiliza un método privado para clonar documentos y evitar referencias compartidas.
// Genera IDs aleatorios para nuevos documentos.

// Clases Especializadas (Users, Posts, CreditCards):

// Heredan de la clase Collection y están diseñadas para gestionar colecciones específicas (usuarios, publicaciones, tarjetas de crédito).
// Integran métodos especializados como findByEmail para Users y getAll para Posts.

// Uso de Promesas y Callbacks:

// La lógica asincrónica está gestionada mediante el uso de funciones de retardo aleatorio (simulando operaciones asíncronas).
// Se utiliza validación de texto y manejo de excepciones para garantizar la integridad de los datos.
// Modelos de Datos (User, Post, CreditCard):

// Definen las estructuras de los documentos para usuarios, publicaciones y tarjetas de crédito.

// Funciones de Utilidad (randomDelay, validateText):

// randomDelay simula retrasos aleatorios en operaciones asíncronas.
// validateText verifica la validez de los textos.
// Este código proporciona una estructura flexible para gestionar datos en diferentes contextos, como un sistema de usuarios, publicaciones y tarjetas de crédito.