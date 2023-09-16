/*
Utilizando JavaScript:

Se deberá programar la funcionalidad de los botones para que incrementen, decrementen o reinicien el contador correctamente.

Se deberá actualizar el elemento de texto que muestra el valor actual del contador cada vez que se presiona un botón.

Se deberá validar que el usuario no pueda decrementar cuando el valor es 0 y que no pueda incrementar más de un valor determinado.
*/

const counterDisplay = document.querySelector('.counter');
const decrease = document.querySelector('.decrease');
const increase = document.querySelector('.increase');
const restart = document.querySelector('.restart');

let count = 0;


const updateCounterDisplay = () => {
  counterDisplay.textContent = count;
}

increase.addEventListener('click', () => {
  if(count===10){
    return
  }
  count++;
  

  updateCounterDisplay()
})

decrease.addEventListener('click',() => {
  if(count===0){
    return
  }
  count--;
  updateCounterDisplay()
})

restart.addEventListener('click',() =>{
  count = 0;
  updateCounterDisplay()
})

