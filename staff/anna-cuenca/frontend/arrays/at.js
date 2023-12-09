function at(array, index) {
  if (index >= 0) {
    return array[index];
  }
  var position = array[array.length + index];

  return position;
}

// esta función recibe dos parámetros: un array y un número, devuelve el elemento del array en esa posición
