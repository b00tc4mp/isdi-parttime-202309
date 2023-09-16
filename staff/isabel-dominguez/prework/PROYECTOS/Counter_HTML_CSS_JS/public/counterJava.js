const maxNumber = 50;

let number = document.querySelector(".output");
let btnIncrement = document.querySelector(".increment");
let btnDecrement = document.querySelector(".decrement");
let btnRestart = document.querySelector(".reset");

const increment = () => {
  if (number.textContent < maxNumber) {
    number.textContent++;
  } else if (number.textContent >= maxNumber) {
    number.textContent = "Has alcanzado el máximo permitido";
  }
};

const decrement = () => {
  if (number.textContent > 0) {
    number.textContent--;
  } else if (number.textContent = maxNumber) {
    number.textContent = 0;
  }
};

const reset = () => {
  number.textContent = "0";
};

btnIncrement.addEventListener("click", increment);
btnDecrement.addEventListener("click", decrement);
btnRestart.addEventListener("click", reset);



// Vamos a desglosar cada parte:

// Declaración de variables:

// let number = document.querySelector(".output");: Esta línea selecciona un elemento HTML con la clase "output" utilizando document.querySelector().El elemento seleccionado se almacena en la variable number.Este elemento se utilizará para mostrar y manipular el número en la página.

// let btnIncrement = document.querySelector("#increment");: Similar al anterior, esta línea selecciona un elemento HTML con el ID "increment" y lo almacena en la variable btnIncrement.Este elemento corresponde al botón de incremento.

// let btnDecrement = document.querySelector("#decrement");: Al igual que la línea anterior, esta línea selecciona el botón de decremento con el ID "decrement" y lo almacena en la variable btnDecrement.

// let btnRestart = document.querySelector("#reset");: De manera similar, esta línea selecciona el botón de reinicio con el ID "reset" y lo almacena en la variable btnRestart.

// Declaración de funciones:

// const increment = () => {... }: Aquí se define una función llamada increment.Esta función se ejecutará cuando se haga clic en el botón de incremento (btnIncrement).En su interior, verifica si el contenido de number es "99"(el límite) y, si no lo es, incrementa el contenido de number en uno.

// const decrement = () => {... }: De manera similar, se define la función decrement.Esta función se ejecutará cuando se haga clic en el botón de decremento (btnDecrement).Verifica si el contenido de number es "0"(el límite inferior) y, si no lo es, decrementa el contenido de number en uno.

// const reset = () => {... }: Aquí se define la función reset, que se ejecuta cuando se hace clic en el botón de reinicio (btnRestart).Esta función establece el contenido de number en "0", reiniciando el valor.

// Añadir event listeners:

// btnIncrement.addEventListener("click", increment);: Este código añade un "event listener" al botón de incremento(btnIncrement) para que cuando se haga clic en él, se ejecute la función increment.

//     btnDecrement.addEventListener("click", decrement);: Similar al anterior, se añade un event listener al botón de decremento(btnDecrement) para que ejecute la función decrement cuando se haga clic en él.

//         btnRestart.addEventListener("click", reset);: Este código añade un event listener al botón de reinicio(btnRestart) para que ejecute la función reset cuando se haga clic en él.

// En resumen, este código JavaScript se encarga de manejar la interacción con los botones de incremento, decremento y reinicio, y actualiza el contenido de un elemento en la página web en consecuencia.Las funciones increment, decrement y reset definen cómo se debe cambiar el valor en respuesta a los clics en los botones.

// Que son los "event listener"?
// Los "event listeners" (escuchadores de eventos) son funciones en JavaScript que se utilizan para escuchar y responder a eventos que ocurren en elementos HTML, como clics del ratón, pulsaciones de teclas, cambios de estado, entre otros. Los eventos son acciones o sucesos que ocurren en la página web, y los "event listeners" te permiten definir cómo debe responder tu código cuando se desencadena un evento específico en un elemento HTML.

// Los "event listeners" funcionan siguiendo este patrón general:

// Seleccionas un elemento HTML al que deseas agregar un "event listener". Esto se hace típicamente utilizando el método document.querySelector() o métodos similares.

// Luego, llamas al método.addEventListener() en el elemento seleccionado, pasando como argumentos el tipo de evento que deseas escuchar(por ejemplo, "click", "keydown", "change", etc.) y una función que se ejecutará cuando ocurra ese evento.

// Cuando el evento ocurre en el elemento especificado, la función del "event listener" se ejecuta automáticamente.

// Los "event listeners" son esenciales para crear interactividad en las páginas web. Te permiten responder dinámicamente a las acciones del usuario y realizar acciones específicas cuando ocurren eventos específicos. Puedes usarlos para habilitar características como la validación de formularios, la navegación de páginas, la manipulación del DOM y muchas otras interacciones en la web.

// Para que se usa el metodo document.querySelector();?

// El método document.querySelector() se utiliza en JavaScript para seleccionar y acceder a un elemento específico en un documento HTML utilizando un selector CSS. Este método busca el primer elemento que coincida con el selector proporcionado y lo devuelve como un objeto JavaScript que representa el elemento HTML. Aquí hay algunos usos comunes del método document.querySelector():

// Seleccionar por etiqueta: Puedes seleccionar un elemento por su etiqueta. Por ejemplo, para seleccionar el primer párrafo en el documento:
// const primerParrafo = document.querySelector("p");

// Seleccionar por clase: Puedes seleccionar elementos por su clase CSS. Por ejemplo, para seleccionar el primer elemento con la clase "mi-clase":
//const elementoConClase = document.querySelector(".mi-clase");

//Seleccionar por ID: Puedes seleccionar elementos por su ID único. Por ejemplo, para seleccionar un elemento con el ID "mi-elemento":
//const elementoPorId = document.querySelector("#mi-elemento");

//Combinar selectores: También puedes combinar selectores para seleccionar elementos más específicos. Por ejemplo, para seleccionar el primer párrafo con la clase "mi-clase":
//const parrafoConClase = document.querySelector("p.mi-clase");

//Seleccionar elementos anidados: Puedes usar selectores para seleccionar elementos anidados dentro de otros elementos. Por ejemplo, para seleccionar el primer elemento <a> dentro de un elemento <div> con la clase "contenedor":
//const primerEnlaceEnContenedor = document.querySelector("div.contenedor a");

//El método document.querySelector() es versátil y útil para acceder y manipular elementos en el DOM (Modelo de Objetos del Documento) de una página web. Si deseas seleccionar múltiples elementos que coincidan con un selector, puedes usar document.querySelectorAll(), que devuelve una lista de nodos de todos los elementos coincidentes en lugar de solo el primero.

