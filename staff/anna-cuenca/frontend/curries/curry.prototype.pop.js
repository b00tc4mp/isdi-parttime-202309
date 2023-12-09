Curry.prototype.pop = function () {
  if (this.length === 0) {
    popped = undefined;
  }
  var popped = this[this.length - 1]; //guardo el último elemento

  this.length--; //decremento la lenght, pero no elimino la última posición

  delete this[this.length];

  return popped;
};
