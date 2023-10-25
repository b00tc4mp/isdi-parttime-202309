class Curry {
  constructor(...args) {
    if (args.length === 1)
      if (Number.isInteger(args[0]) && args[0] >= 0) {
        this.length = args[0];

        return;
      } else if (
        (Number.isInteger(args[0]) && args[0] < 0) ||
        (typeof args[0] === "number" && !Number.isInteger(args[0]))
      )
        throw new RangeError("Invalid curry length");

    for (var i = 0; i < args.length; i++) {
      //aqui hay más de 1 parámetro
      var argument = args[i];

      this[i] = argument;
    }

    this.length = args.length;
  }

  push(...items) {
    if (items.length) {
      //estoo es 1, se pasa un elemento
      this[this.length] = items; // meto el item en la última posición del array
      this.length++; //incremento la posición del array

      if (items.length > 1)
        //se pasan más elementos
        for (let i = 1; i < items.length; i++) {
          //empieza en 1, porque tenemos item en 0
          this[this.length] = items[i];
          this.length++;
        }
    }

    return this.length;
  }

  pop() {
    if (this.length === 0) {
      const popped = undefined; // no sé si tendría que ser const o let
    }
    popped = this[this.length - 1]; //guardo el último elemento

    this.length--; //decremento la lenght, pero no elimino la última posición

    delete this[this.length];

    return popped;
  }

  splice(start, removeCount, item, ...args) {
    if (removeCount === 0) {
      // no hay que eliminar nada
      let displacement = args.length - 2; // ahora args.lenght es 3 ; 3-2 = 1 (0, 1) ocupadas por star /remove

      if (displacement > 0)
        //si hay desplazamiento, hay inserción
        this.length = this.length + displacement; // actualizo la longitud (creo elementos vacios)

      for (let i = this.length - 1; i >= start; i--) {
        // empiezo por el final del array para ganar tantos espacios como elementos quiero añadir
        let element = this[i]; // por eso el final es start; copio en element el elemento actual del array

        this[i + displacement] = element; //lo añado en la posición que le toca (lo desplazo)
      }

      this[start] = item; // copio el elemento nuevo donde le toca

      for (let i = 3; i < args.length; i++) {
        // aqui es por si hay más items que añadir
        var element = args[i];

        this[start + i - 3] = element;
      }

      return [];
    } else if (removeCount === 1 && args.length === 3) {
      let elementToRemove = this[start];

      this[start] = item;

      return [elementToRemove];
    } else if (removeCount >= 1) {
      var removed = [];

      for (let i = start; i < this.length - 1; i++) {
        var elementToRemove = this[i];

        removed[removed.length] = elementToRemove;

        let next = this[i + removeCount];

        this[i] = next;
      }

      for (let i = this.length - removeCount; i < this.length; i++)
        delete this[i];

      this.length -= removeCount;

      return removed;
    }
  }
}
