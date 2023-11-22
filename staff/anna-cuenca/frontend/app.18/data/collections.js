class Collection {
  constructor(clazz, documents) { // definimos el constructor de la clase. El constructor
    // es un método especial que se ejecuta automáticamente
    // cuando se crea una nueva instancia de la clase. Este
    // constructor toma 2 parámetros: clazz y collection
    this.__clazz__ = clazz // se asigna el valor del parámetro clazz al atributo clazz
    this.__documents__ = documents; //se asigna el valor del parámetro collection al atributo documents
  }

  __clone__(document) {  // es un método dentro de la clase collecction
    //toma el parámetro "document", que es lo que se quiere clonar
    var copy = new this.__clazz__  // se crea una nueva isntancia de la clase almacenada en clazz
    // por que se quitan los paréntesis?? ///
    for (var key in document) { //se inicia un bucle for ... in, que itera sobre toddas las propiedades
      // del objeto document
      var value = document[key];  // se extrae el valor de la propiedad actual del objeto document para
      // la clave key en cada iteración
      //dentro del bucle, se realizan las siguientes comprobaciones para
      // determinar el tipo de value

      if (value instanceof Array) copy[key] = [...value];
      // si el valor es un array, se crea una copia de ese array utilizanod el operador spread
      // y se asigna a la propiedad correspondiente en la copia (copy)

      else if (value instanceof Date) copy[key] = new Date(document[key]);
      else if (value instanceof Object) copy[key] = { ...value };
      else copy[key] = document[key];
    }

    return copy;
  }

  __generateId__() {
    return Math.floor(Math.random() * 1000000000000000000).toString(36);
  }

  insert(document, callback) {
    asyncDelay(() => {

      const documentCopy = this.__clone__(document);
      documentCopy.id = this.__generateId__()

      this.__documents__.push(documentCopy)
      callback(null) // llamamos al callback para indicar a la función que lo ha llamado, que ya ha acabado
    }, 0.3) //el delay que tendrá
  }



  __findIndexById__(id, callback) {

    try {
      validateText(id, `${this.__clazz__.name} id`);

      asyncDelay(() => {
        const index = this.__documents__.findIndex(document => document.id === id);
        callback(null, index)
      }, 0.4)

    } catch (error) {
      callback(error)
    }
  }

  // findIndex recibe una callback, que se ejecuta para cada elemento
  // del array. Devolverá el índice del primer elemento que devuelva 
  // true a document.id === idd

  findById(id, callback) {

    try {

      validateText(id, `${this.__clazz__.name} id`);


      asyncDelay(() => {
        const document = this.__documents__.find(document => document.id === id)

        if (!document) {
          callback(null, null)
          return
        }
        callback(null, this.__clone__(document))

      }, 0.6)
    } catch (error) {
      callback(error)
    }
  }




  update(document, callback) {

    try {
      if (!(document instanceof this.__clazz__))
        throw new TypeError(`document is not a ${this.__clazz__.name}`);

      asyncDelay(() => {
        this.__findIndexById__(document.id, (error, index) => {
          if (error) {
            callback(error)
            return
          }
          if (index < 0) {
            callback(new Error(`${this.clazz.name} not found`))
            return
          }
          this.__documents__[index] = this.__clone__(document);
          callback(null)

        })
      }, 0.5)


    } catch (error) {
      callback(error)
    }
  }

  deleteById(id, callback) {

    validateText(id, `${this.__clazz__.name} id`)
    asyncDelay(() => {
      this.__findIndexById__(id, (error, index) => {
        if (error) {
          callback(error)
          return
        }
        if (index < 0) {
          callback(new Error(`${this.__clazz__.name} not found`))
          return
        }
        this.__documents__.splice(index, 1)
        callback(null)
      })
    }, 0.9)
  }
}






class Users extends Collection {
  constructor() { // se inicia el constructor de la clase Users
    super(User, []); //super es una palabra reservada, se utiliza
    // para llamar al constructor de la clase padre (collection)
    // se pasa como argumentos user y un array vacio
  }

  findByEmail(email, callback) {

    try {
      validateText(email, 'email')
      asyncDelay(() => {
        const user = this.__documents__.find(document => document.email === email)

        if (!user) {
          cancelIdleCallback(null, null)
          return
        }
        callback(null, this.__clone__(user))
      }, 0.7)
    } catch (error) {
      callback(error)
    }
  }
}

class Posts extends Collection {
  constructor() {
    super(Post, []);
  }

  getAll(callback) {
    asyncDelay(() => {
      callback(null, this.__documents__.map(this.__clone__.bind(this)))
    }, 0.8)

    // this.documents apunta a posts en este caso
    // this.clone.bind(this) se utiliza para asegurar 
    //que, dentro de la función clone 
    //(que se pasa como argumento a map), this apunte a 
    // la instancia de la clase Posts
  }
}

class CreditCards extends Collection {
  constructor() {
    super(CreditCard, []);
  }
}
