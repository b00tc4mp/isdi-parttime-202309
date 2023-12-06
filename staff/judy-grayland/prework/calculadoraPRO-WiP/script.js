/*
Un único programa al que le pasarás dos argumentos que recogerás mediante el método prompt(); el usuario podrá visualizar por consola la suma, resta, multiplicación y división entre ambos números. El resultado debería ser mostrado con 3 decimales como mucho (en caso de que hubieran). El programa debe gestionar y actuar correctamente (gestión de errores) en el caso de que el usuario introduzca cualquier cosa que no sean números.

Si el usuario introduce un solo numero, deberá mostrar SOLO su raíz cuadrada, si vuelve a introducir los dos, volverá a mostrar las 4 operaciones de siempre.
Si el usuario introduce una letra, deberá mostrarle un aviso de que lo que ha introducido no es un número.
Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario
*/

// regex to test if number: /^\d+$/.test(input)
// if number -> parseInt(number)

// array to store user inputs
const userOperands = []

// operations with two numbers:
console.log(userOperands)
console.log(`${userOperands[0]} + ${userOperands[1]} = ${userOperands[0]+userOperands[1]}`)
console.log(`${userOperands[0]} - ${userOperands[1]} = ${userOperands[0]-userOperands[1]}`)
console.log(`${userOperands[0]} * ${userOperands[1]} = ${userOperands[0]*userOperands[1]}`)
console.log(`${userOperands[0]} / ${userOperands[1]} = ${userOperands[0]/userOperands[1]}`)


const doOperation = () => {
  let firstNumber = prompt("What\'s your first number?");
  if(firstNumber === null) {
    alert('Sorry to see you go!');
    return
  }
  if(firstNumber === "") {
    console.log(`The square root of ${secondNumber} is ${Math.sqrt(secondNumber)}`)
    return
  }
  if(secondNumber === "") {
    console.log(`The square root of ${firstNumber} is ${Math.sqrt(firstNumber)}`)
    return
  }

}

const useCalculator = () => {
  const greeting = alert('Hi! Let\'s do some basic operations between two numbers');
  doOperation()
}
useCalculator()
