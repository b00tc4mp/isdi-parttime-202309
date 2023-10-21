Curry.prototype.join = function (separator) {
  result = "";

  if (separator === undefined) {
    separator = ",";
  }

  for (var i = 0; i < this.length; i++) {
    //mirar si es 0 o es 1
    result += this[i];

    if (i < this.length - 1) {
      result += separator;
    }
  }

  return result;
};
