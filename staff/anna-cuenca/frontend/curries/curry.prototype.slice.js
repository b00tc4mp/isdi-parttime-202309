Curry.prototype.slice = function (index, end) {
  var newCurry = new Curry();

  if (index === undefined) {
    newCurry = this;
    return newCurry;
  }

  if (index < 0) {
    index = this.length + index;
  }

  if (end < 0) {
    end = this.length + end;
  }

  if (index >= 0 && index < this.length) {
    if (end === undefined) {
      for (var i = index; i < this.length; i++) {
        newCurry[newCurry.length] = this[i];
        newCurry.length++;
      }

      return newCurry;
    } else {
      for (var i = index; i < end; i++) {
        newCurry[newCurry.length] = this[i];
        newCurry.length++;
      }
      return newCurry;
    }
  }
};
