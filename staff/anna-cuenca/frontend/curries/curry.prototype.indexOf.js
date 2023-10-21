Curry.prototype.indexOf = function (element, index) {
  if (index < 0) {
    // primero compruebro si el índice es menor que el array

    index = this.length + index;
  }
  if (index >= 0 && index < this.length) {
    for (var i = index; i < array.length; i++) {
      //empieza a contar por el elemento que le paso como 3r parametro
      if (this[i] === element) return i;
    }

    return -1;
  }
};
