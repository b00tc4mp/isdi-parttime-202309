class Collection {
  constructor(clazz, collection) { // definimos el constructor de la clase. El constructor
                                  // es un método especial que se ejecuta automáticamente
                                  // cuando se crea una nueva instancia de la clase. Este
                                  // constructor toma 2 parámetros: clazz y collection
    this.clazz = clazz; // se asigna el valor del parámetro clazz al atributo clazz
    this.documents = collection; //se asigna el valor del parámetro collection al atributo documents
  }

  clone(document) {  // es un método dentro de la clase collecction
                                    //toma el parámetro "document", que es lo que se quiere clonar
    var copy = new this.clazz();  // se crea una nueva isntancia de la clase almacenada en clazz

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

  generateId() {
    return Math.floor(Math.random() * 1000000000000000000).toString(36);
  }

  insert(document) {
    const documentCopy = this.clone(document);

    documentCopy.id = this.generateId();

    this.documents.push(documentCopy);
  }

  findIndexById(id) {
    validateText(id, `${this.clazz.name} id`);

    return this.documents.findIndex((document) => document.id === id);
    // findIndex recibe una callback, que se ejecuta para cada elemento
    // del array. Devolverá el índice del primer elemento que devuelva 
    // true a document.id === idd
  }

  findById(id) {
    validateText(id, `${this.clazz.name} id`);

    const document = this.documents.find(document => document.id === id)

        if (!document) return null

        return this.clone(document)
  }

  update(document) {
    if (!(document instanceof this.clazz))
      throw new TypeError(`document is not a ${this.clazz.name}`);

    const index = this.findIndexById(document.id);

    if (index < 0) throw new Error(`${this.clazz.name} not found`);

    this.documents[index] = this.clone(document);
  }

  deleteById(document) {
    const index = this.findIndexById(document); //tenemos el id de lo que queremos eliminar
    this.documents.splice(index, 1);
  }
}

class Users extends Collection {
  constructor() { // se inicia el constructor de la clase Users
    super(User, []); //super es una palabra reservada, se utiliza
                      // para llamar al constructor de la clase padre (collection)
                      // se pasa como argumentos user y un array vacio
  }

  findByEmail(email) {
    validateText(email, `${this.clazz.name} email`);

    const user = this.documents.find(document => document.email === email)

    if (!user) return null

    return this.clone(user)
  }
}

class Posts extends Collection {
  constructor() { 
    super(Post, []);
  }

  getAll() {
    return this.documents.map(this.clone.bind(this));
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
