/*
Un único programa al que le pasarás dos argumentos que recogerás mediante el método prompt(); el usuario podrá visualizar por consola la suma, resta, multiplicación y división entre ambos números. El resultado debería ser mostrado con 3 decimales como mucho (en caso de que hubieran). El programa debe gestionar y actuar correctamente (gestión de errores) en el caso de que el usuario introduzca cualquier cosa que no sean números.

Si el usuario introduce un solo numero, deberá mostrar SOLO su raíz cuadrada, si vuelve a introducir los dos, volverá a mostrar las 4 operaciones de siempre.
Si el usuario introduce una letra, deberá mostrarle un aviso de que lo que ha introducido no es un número.
Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario
*/

const userOperands = []
const doOperation = () => {
  let firstNumber = prompt("What\'s your first number?");
  if(firstNumber === null) {
    alert('Sorry to see you go!');
    return
  }
  if(!/^\d+$/.test(firstNumber)) {
    alert('You must put in a number');
    userOperands.pop()
    doOperation()
  }
  if(/^\d+$/.test(firstNumber)) {
    firstNumber = parseInt(firstNumber);
    userOperands.push(firstNumber)
  }  
  
  let secondNumber = prompt("What\'s your second number?");
  if(secondNumber === null) {
    alert('Sorry to see you go!')
  }
  if(/^\d+$/.test(secondNumber)) {
    secondNumber = parseInt(secondNumber);
    userOperands.push(secondNumber)
  }
  if(!/^\d+$/.test(secondNumber)) {
    alert('You must put in a number')
    userOperands.pop()
    doOperation()
  }

  if(firstNumber === "") {
    console.log(`The square root of ${secondNumber} is ${Math.sqrt(secondNumber)}`)
    return
  }
  if(secondNumber === "") {
    console.log(`The square root of ${firstNumber} is ${Math.sqrt(firstNumber)}`)
    return
  }
  console.log(userOperands)
  console.log(`${userOperands[0]} + ${userOperands[1]} = ${userOperands[0]+userOperands[1]}`)
  console.log(`${userOperands[0]} - ${userOperands[1]} = ${userOperands[0]-userOperands[1]}`)
  console.log(`${userOperands[0]} * ${userOperands[1]} = ${userOperands[0]*userOperands[1]}`)
  console.log(`${userOperands[0]} / ${userOperands[1]} = ${userOperands[0]/userOperands[1]}`)
}
const useCalculator = () => {
  const greeting = alert('Hi! Let\'s do some basic operations between two numbers');
  doOperation()
}
useCalculator()
