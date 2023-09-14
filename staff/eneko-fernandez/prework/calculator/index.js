let numbers = [];
let results = [];

const calculate = () => {
  numbers = [];

  const howMany = parseInt(prompt("Cuantos numeros quieres calcular?"));
  if (isNaN(howMany)) return alert("Debes ingresar al menos 1 número");

  let tries = true;

  while (tries) {
    let number = prompt("Introduce un número", "");

    if (number !== "") {
      if (isNaN(parseFloat(number))) {
        alert("Solo se permiten numeros");
        data = [];
        return calculate();
      } else {
        numbers.push(parseFloat(number));
      }
    } else if (number === "") {
      return alert("No se permiten caracteres vacios");
    }

    if (numbers.length === howMany) {
      tries = false;
      showResults();
    }
  }
};

const showResults = () => {
  if (numbers.length === 1) {
    square(numbers[0]);
  } else {
    operations();
  }
};

const operations = () => {
  results = [...results, numbers];

  let sum;
  let subtraction;
  let division;
  let multiply;
  let check0;

  results.forEach((currentResult, i) => {
    check0 = false;

    if (currentResult.length === 1) {
      return (
        console.log(`La raiz es ${currentResult[0]}`) +
        console.log("**********************************")
      );
    }

    currentResult?.forEach((currentNumber, j) => {
      if (+currentNumber !== 0) {
        if (j === 0) {
          sum = +currentNumber;
          subtraction = +currentNumber;
          division = +currentNumber;
          multiply = +currentNumber;
        } else {
          sum += +currentNumber;
          subtraction -= +currentNumber;
          division /= +currentNumber;
          multiply *= +currentNumber;
        }
      } else {
        check0 = true;
      }
    });

    console.log(`La suma del ${i + 1} calculo es ${hasDec(sum)}`);
    console.log(`La resta del ${i + 1} calculo es ${hasDec(subtraction)}`);
    check0
      ? console.log("No se puede dividir entre 0")
      : console.log(`La division del ${i + 1} calculo es ${hasDec(division)}`);
    console.log(
      `La multiplicación del ${i + 1} calculo es ${hasDec(multiply)}`
    );
    console.log("**********************************");
  });

  let newNumbers = confirm("mas numeros?");
  newNumbers ? calculate() : console.log("Hasta pronto!!");
};

const square = (num) => {
  const squareRoot = Math.sqrt(num);
  results = [...results, [+hasDec(squareRoot)]];
  console.log(`La raiz  es ${+hasDec(squareRoot)}`);
  console.log("**********************************");
  let newNumbers = confirm("mas numeros?");
  newNumbers ? calculate() : console.log("Hasta pronto!!");
};

const hasDec = (number) => {
  if (number % 1 !== 0) {
    return number.toFixed(3);
  } else {
    return number;
  }
};

calculate();
