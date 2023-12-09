Curry.prototype.concat = function () {
  var newArray = [];

  for (var i = 0; i < this.length; i++) {
    // para acceder a los elementos que ya hay en curry

    newArray[i] = this[i]; //copio los elementos en el muevo array
  }
  // vale ahora en new arr, tengo que saber los argumentos que se pasan

  for (var i = 0; i < arguments.length; i++) {
    // arguments.lenght te indica el número de parámetros que se pasan
    var firstArray = arguments[i]; //guardo el num aqui

    for (var j = 0; j < firstArray.length; j++) {
      //recorro todos los elementos
      newArray[newArray.length] = firstArray[j]; //en el nuevo array que he creado (que ya tiene el array original de curry, le añado los parametros que me han entrado)
    }
  }

  var newCurry = new Curry(); // creo un elemento de curry

  for (var i = 0; i < newArray.length; i++) {
    newCurry[i] = newArray[i]; //paso lo que hay en el newArray al nuevo curry
  }

  newCurry.length = newArray.length;

  return newCurry;
};
