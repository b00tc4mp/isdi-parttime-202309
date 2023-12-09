Curry.prototype.at = function (index) {
  if (index >= 0) {
    return this[index];
  }
  var position = this[this.length + index];

  return position;
};

// esta función recibe dos parámetros: un array y un número, devuelve el elemento del array en esa posición
