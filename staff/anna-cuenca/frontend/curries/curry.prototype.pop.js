Curry.prototype.pop = function (item) {
  var popped = this[this.length - 1]; //guardo el último elemento

  this.length--; //decremento la lenght, pero no elimino la última posición

  delete this[this.length];

  return popped;
};

// pop es que quita
