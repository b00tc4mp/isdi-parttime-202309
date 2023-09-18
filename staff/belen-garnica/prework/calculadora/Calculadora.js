const operaciones = (...numbers) => {
  if (numbers.length === 0) {
    console.log("Introduce un numero válido");
    return;
  }

  const results = [];

  for (const number of numbers) {
    if (isNaN(number)) {
      console.log(`"${number}" Introduce un número válido.`);
      continue;
    }

    const squareRoot = Math.sqrt(number);
    
    if (number !== 0) {
      const division = numbers.reduce((total, num) => total / num);
      results.push(`Raíz cuadrada de ${number}: ${squareRoot.toFixed(3)}`);
    } else {
      results.push(`Raíz cuadrada de ${number}: ${squareRoot.toFixed(3)}`);
    }
  }

  return results;
};

const main = () => {
  let resultsArray = [];

  while (true) {
    const input = prompt("Introduce números separados por comas (ejemplo: 2, 3, 4):");
    const numbers = input.split(",").map((num) => parseFloat(num.trim()));

    const results = operaciones(...numbers);
    resultsArray = resultsArray.concat(results);

    const continuar = prompt("¿Deseas realizar más cálculos? (si/no)").toLowerCase();

    if (continuar === "no") {
      console.log("Resultados acumulados:");
      resultsArray.forEach((result) => console.log(result));
      console.log("¡Hasta luego!");
      break;
    } else if (continuar !== "siyes") {
      console.log("Respuesta no válida. Por favor, ingresa 'si' o 'no'.");
    }
  }
};

main();
