function indexOf(string, searchString) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === searchString) {
            return i
        }
        else {
            return -1
        }
    }
}

console.log(indexOf('hola mundo', 'm'))

/* utilizo el blucle for porq es necesario recorrer el string al mismo tiempo que compara el elemento que quiero buscar con los que hay en el string, 
ya que el indexOf busca recorriendo el string,*/