Curry.prototype.at = function (index) {
    return this[index >= 0 ? index : this.length + index]
}


/*
function at(array, index) {
    return array[index >= 0 ? index : array.length + index]
}

Cambio array por this, porque ya no le voy a pasar un array como argumento.
this se utiliza dentro del método at para acceder y actualizar las propiedades en las instancias que se haga de Curry.
*/