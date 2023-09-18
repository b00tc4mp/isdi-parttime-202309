const calculateNumber = () => {
  while (true) {
    alert("¡Welcome to the CalculatorPro by Tanitox!");

    let firstNumber;
    let secondNumber;

    const getValidNumber = (message) => {
      while (true) {
        const input = prompt(message);

        if (input === null) {
          alert("You have canceled. Goodbye!");
          return null;
        }

        const parsedNumber = parseFloat(input.replace(",", "."));

        if (!isNaN(parsedNumber)) {
          return parsedNumber;
        } else {
          alert("Please, enter a valid number.");
        }
      }
    };

    firstNumber = getValidNumber("Enter the first number:");

    if (firstNumber === null) {
      return; 
    }

    const secondInput = prompt(
      "Enter the second number (or press Enter to calculate the square root of the first number):"
    );

    if (secondInput === null) {
      alert("You have canceled. Goodbye!");
      return;
    } else if (secondInput === "") {
      
      secondNumber = undefined;
    } else {
      const parsedSecondInput = parseFloat(secondInput.replace(",", "."));
      if (!isNaN(parsedSecondInput)) {
        secondNumber = parsedSecondInput;
      } else {
        alert("Please, enter a valid number.");
        return; 
      }
    }

    let getResult = [];

    getResult.push(`Square root of ${firstNumber} = ${Math.sqrt(firstNumber).toFixed(3)}`);

    if (secondNumber !== undefined) {
      getResult.push(`Sum: ${firstNumber + secondNumber}`);
      getResult.push(`Subtraction: ${firstNumber - secondNumber}`);
      getResult.push(`Multiplication: ${firstNumber * secondNumber}`);

      if (secondNumber !== 0) {
        const divisionResult = (firstNumber / secondNumber).toFixed(3);
        getResult.push(`Division (3 decimal places): ${divisionResult}`);
      } else {
        getResult.push("Division: It's not possible to divide by 0.");
      }
    }

    alert("Results:\n\n" + getResult.join("\n"));

    const restart = confirm("Do you want to calculate again?");
    if (!restart) {
      alert("Goodbye!");
      return;
    }
  }
}

calculateNumber();

/*

// Explicación detallada de los métodos utilizados en el código, cómo funcionan y para qué se utilizan:

1. **`calculateNumber`**:
   - Este es el punto de entrada principal del programa. Se inicia al llamar a `calculateNumber()`.
   - Utiliza un bucle `while (true)` que crea un ciclo infinito para permitir que el usuario realice cálculos repetidamente hasta que decida salir.

2. **`getValidNumber(message)`**:
   - Esta función se utiliza para obtener un número válido del usuario. Toma un mensaje como argumento que se muestra al usuario en una ventana emergente de prompt.
   - Utiliza un bucle infinito para esperar a que el usuario introduzca un valor.
   - Si el usuario hace clic en "Cancelar" en la ventana emergente, muestra un mensaje de despedida y retorna `null` para salir del programa.
   - Intenta convertir la entrada del usuario en un número decimal y la almacena en `parsedNumber`.
   - Si la conversión tiene éxito (es decir, no es NaN), retorna ese número.
   - Si la entrada no es un número válido, muestra un mensaje de error y vuelve a solicitar al usuario que introduzca un número válido.

3. **Obtención del Primer Número**:
   - Se llama a `getValidNumber("Enter the first number:")` para obtener el primer número del usuario.
   - Si el usuario hace clic en "Cancelar" en esta etapa, el programa se cierra y muestra un mensaje de despedida.

4. **Obtención del Segundo Número o Cálculo de la Raíz Cuadrada**:
   - El programa muestra una ventana emergente de prompt para que el usuario introduzca el segundo número. Si el usuario hace clic en "Cancelar," muestra un mensaje de despedida y cierra el programa.
   - Si el usuario presiona Enter sin ingresar un segundo número, el programa asume que quiere calcular la raíz cuadrada del primer número.

5. **Cálculos**:
   - Los cálculos se realizan utilizando los números obtenidos. Se realizan las siguientes operaciones:
     - Si se ingresó un segundo número, se realiza la suma, resta, multiplicación y división (con validación para evitar dividir por cero).
     - Si no se ingresó un segundo número (o se calculó la raíz cuadrada), solo se muestra el cálculo de la raíz cuadrada.

6. **Visualización de Resultados**:
   - Los resultados se almacenan en el arreglo `getResult`. Los resultados se formatean como cadenas de texto y se agregan al arreglo.
   - Se muestra una ventana emergente de alerta que muestra todos los resultados en una lista.

7. **Pregunta de Reinicio**:
   - Después de mostrar los resultados, el programa pregunta al usuario si desea realizar otro cálculo.
   - Si el usuario responde "No," muestra un mensaje de despedida y sale del bucle, finalizando el programa.
   - Si el usuario responde "Sí," el bucle continúa, y el usuario puede realizar otro cálculo.

Este ciclo se repite hasta que el usuario decida salir de la calculadora. El código se asegura de manejar las entradas del usuario, validarlas y proporcionar mensajes amigables en caso de errores o cancelaciones.


/// Aquí tienes una explicación detallada del funcionamiento de cada parte del código:

1. **Bienvenida al Usuario**:
   - Al iniciar, se muestra una ventana emergente de alerta para dar la bienvenida al usuario a la calculadora.

2. **Bucle Principal** (`while (true) { ... }`):
   - El programa utiliza un bucle `while` infinito para permitir al usuario realizar cálculos repetidamente hasta que decida salir.

3. **Función `getValidNumber`**:
   - Esta función se utiliza para obtener un número válido del usuario. Recibe un mensaje como argumento que se muestra al usuario en una ventana emergente de prompt.
   - En un bucle infinito, espera a que el usuario introduzca un valor en la ventana emergente.
   - Si el usuario hace clic en "Cancelar," muestra un mensaje de despedida y retorna `null` para salir del programa.
   - Intenta convertir la entrada del usuario a un número decimal y la almacena en `parsedNumber`.
   - Si la conversión es exitosa (es decir, no es NaN), retorna ese número.
   - Si la entrada no es un número válido, muestra un mensaje de error y vuelve a solicitar al usuario que introduzca un número válido.

4. **Obtención del Primer Número**:
   - Se llama a `getValidNumber` para obtener el primer número. Si el usuario hace clic en "Cancelar," el programa se cierra y muestra un mensaje de despedida.

5. **Obtención del Segundo Número o Cálculo de la Raíz Cuadrada**:
   - El programa muestra una ventana emergente de prompt para que el usuario introduzca el segundo número. Si el usuario hace clic en "Cancelar," muestra un mensaje de despedida y cierra el programa.
   - Si el usuario presiona Enter sin ingresar un segundo número, el programa asume que quiere calcular la raíz cuadrada del primer número.

6. **Cálculos**:
   - Los cálculos se realizan utilizando los números obtenidos. Se realizan las siguientes operaciones:
     - Si se ingresó un segundo número, se realiza la suma, resta, multiplicación y división (con validación para evitar dividir por cero).
     - Si no se ingresó un segundo número (o se calculó la raíz cuadrada), solo se muestra el cálculo de la raíz cuadrada.

7. **Visualización de Resultados**:
   - Los resultados se almacenan en el arreglo `getResult`. Los resultados se formatean como cadenas de texto y se agregan al arreglo.
   - Se muestra una ventana emergente de alerta que muestra todos los resultados en una lista.
  
8. **Pregunta de Reinicio**:
   - Después de mostrar los resultados, el programa pregunta al usuario si desea realizar otro cálculo.
   - Si el usuario responde "No," muestra un mensaje de despedida y sale del bucle, finalizando el programa.
   - Si el usuario responde "Sí," el bucle continúa, y el usuario puede realizar otro cálculo.

Este ciclo se repite hasta que el usuario decida salir de la calculadora. El código se asegura de manejar las entradas del usuario, validarlas y proporcionar mensajes amigables en caso de errores o cancelaciones.*/
