Curry.prototype.push = function (item) {
  if (arguments.length) {
    //estoo es 1, se pasa un elemento
    this[this.length] = item; // meto el item en la última posición del array
    this.length++; //incremento la posición del array

    if (arguments.length > 1)
      //se pasan más elementos
      for (var i = 1; i < arguments.length; i++) {
        //empieza en 1, porque tenemos item en 0
        this[this.length] = arguments[i];
        this.length++;
      }
  }

  return this.length;
};
