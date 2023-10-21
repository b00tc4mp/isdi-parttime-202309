/*

Curry.prototype.splice = function (start, removeCount, item) {
  if (removeCount === 0) {
    var displacement = arguments.length - 2; //no elimino nada,

    for (var i = this.length - 1; i >= start; i--) {
      var element = this[i];

      this[i + displacement] = element;
    }

    this[start] = item;

    for (var i = 3; i < arguments.length; i++) {
      var element = arguments[i];

      this[start + i - 2] = element;
    }

    return [];
  } else if (removeCount === 1 && arguments.length === 2) {
    var elementToRemove = this[start];

    //this[start] = item; // pero en este caso es undefined porque no hay nada que meter, habría que hacer delete
    // ahora me lo deja vacio, pero no corre.
    delete this[start];

    return [elementToRemove];
  } else if (removeCount >= 1) {
    // removeCount = los elementos que quiero eliminar

    var removed = [];

    for (var i = start; i < this.length - 1; i++) {
      var elementToRemove = this[i];

      removed[removed.length] = elementToRemove;

      var next = this[i + removeCount];

      this[i] = next;
    }

    this.length -= removeCount;

    return removed;
  }
};
*/

Curry.prototype.splice = function (start, removeCount) {
  // start donde empiezo, remove si elimino, arguments son si hay que añadir
  //caso de que no haya que eliminar

  var pos = 2;
  var curryLength = arguments.length;

  if (removeCount === 0) {
    if (curryLength >= 2) {
      //eso indica que hay que añadir ; el start lo tengo en 1 y hay 3 elementos
      var displacement = curryLength - 2; // porque start y removeCount no los toco

      if (displacement > 0) this.length = this.length + displacement;

      for (var i = this.length - 1; i >= start; i--) {
        // recorro el array pero por atrás
        //tengo que hacer el deplazamiento
        var element = this[i];

        this[i + displacement] = element; // aqui los tengo todos desplazados

        // aumentar la length
      }

      for (var i = start; i < this.length; i++) {
        this[start] = arguments[pos]; //aqui añado elementos
        start = start + 1;
        pos = pos + 1;
      }
    }
  } else {
    // si hay que eliminar
  }
};

/////////////////////

Curry.prototype.splice = function (start, removeCount, item) {
  if (removeCount === 0) {
    // no hay que eliminar nada
    var displacement = arguments.length - 2; // ahora arguments.lenght es 3 ; 3-2 = 1 (0, 1) ocupadas por star /remove

    if (displacement > 0)
      //si hay desplazamiento, hay inserción
      this.length = this.length + displacement; // actualizo la longitud (creo elementos vacios)

    for (var i = this.length - 1; i >= start; i--) {
      // empiezo por el final del array para ganar tantos espacios como elementos quiero añadir
      var element = this[i]; // por eso el final es start; copio en element el elemento actual del array

      this[i + displacement] = element; //lo añado en la posición que le toca (lo desplazo)
    }

    this[start] = item; // copio el elemento nuevo donde le toca

    for (var i = 3; i < arguments.length; i++) {
      // aqui es por si hay más items que añadir
      var element = arguments[i];

      this[start + i - 3] = element;
    }

    return [];
  } else if (removeCount === 1 && arguments.length === 3) {
    var elementToRemove = this[start];

    this[start] = item;

    return [elementToRemove];
  } else if (removeCount >= 1) {
    var removed = [];

    for (var i = start; i < this.length - 1; i++) {
      var elementToRemove = this[i];

      removed[removed.length] = elementToRemove;

      var next = this[i + removeCount];

      this[i] = next;
    }

    for (var i = this.length - removeCount; i < this.length; i++)
      delete this[i];

    this.length -= removeCount;

    return removed;
  }
};
