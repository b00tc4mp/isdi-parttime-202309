console.log('%c pepe%ctest %c v0.0', 'background-color: white; color: tomato; font-weight: bold;', 'background-color:white; color: black; font-weight: bold;', 'color: dodgerblue; font-size: .5rem;')
// Estas son las reglas CSS que se aplican al texto "pepe".
// background-color: white; establece el fondo del texto en blanco
// color: tomato; establece el color del texto en rojo (tomate)
// font-weight: bold; hace que el texto sea negrita

// Estas son las reglas CSS que se aplican al texto "at"
// background-color: white; establece el fondo del texto en blanco
// color: black; establece el color del texto en negro
// font-weight: bold; hace que el texto sea negrita

// Estas son las reglas CSS que se aplican al texto "v0.0"
// color: dodgerblue; establece el color del texto en azul (dodgerblue)
// font-size: .5rem; reduce el tamaño de la fuente a 0.5 veces el tamaño de fuente actual, lo que lo hace más pequeño

// %c  se utiliza para aplicar estilos CSS específicos a la cadena de texto que sigue a %c


function TEST(what) {
    console.log(`%cTEST ${what}`, 'color: magenta; font-weight: bold; font-size: .75rem;')
}

// function TEST: Esto define una función llamada TEST que toma un parámetro llamado what
// El parámetro what es una cadena que se utiliza para describir el propósito o el contenido de la prueba que se va a registrar en la consola
// %cTEST ${what}: Esta es una plantilla de cadena que combina el texto "TEST" con el valor del parámetro what
// color: magenta;: Establece el color del texto en magenta.
// font-weight: bold;: Hace que el texto sea negrita.
// font-size: .75rem;: Define el tamaño de la fuente en 0.75 veces el tamaño de fuente actual, lo que lo hace más pequeño


function CASE(what) {
    console.log(`%cCASE ${what}`, 'color: cyan; font-weight: bold;')
}