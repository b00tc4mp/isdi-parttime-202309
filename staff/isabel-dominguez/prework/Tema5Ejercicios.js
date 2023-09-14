// 1 - Escribe una función que declare un array con los números del 1 al 9 y muestre por pantalla los números unidos por parejas(1 - 2, 2 - 3, 3 - 4, ...) multiplicados por 2. Puedes utilizar los métodos push(), join(), y map().Además, la función debería aceptar como argumentos el array a tratar, el número a multiplicar, y el número de parejas a mostrar.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const multiplicatorNumber = 2;
const numberOfPairsToShow = 8; // El número de parejas que me va a mostrar.

const showNumbers = (numbers, multiplicatorNumber, numberOfPairsToShow) => {
    for (let numberPosition = 0; numberPosition < numberOfPairsToShow; numberPosition++){
        const pair = numbers
            .slice(numberPosition, numberPosition + 2)
            .map((number) => number * multiplicatorNumber)
            .join(" - ");
        console.log(`${numberPosition + 1}ª pareja ${pair}`);
    }
}

showNumbers(numbers, multiplicatorNumber, numberOfPairsToShow);

// Primero creo las variables que voy a utilizar en la función. Declaro la función y pongo los parámetros que voy a utilizar. Lo primero es recorrer el array con un for, empiezo desde 0 hasta 8 (porque son las parejas de numeros que voy a formar). Después las quiero presentar en parejas, creo una variable dentro de la función que se llama parejas (para luego invocarla en el console.log) donde aplico los métodos necesarios para obtener mi resultados; slice que rompe el array en el fragmento que quiero mostrar, map me crea el nuevo array (sin modificar el verdadero) con los números multiplicados por 2, y join me los mostrará separados por un guión. Realizo mi console.log mostrando las 8 posiciones que recorro con el for (+1 para que vaya cambiando 1ª, 2ª etc) y la variable pair donde he aplicado todos los métodos. Después llamo a la función y me devuelve todo lo que hay dentro.
// Las funciones sirven para guardar una instrucción, dejarla bien definida, para que la puedas ir usando cuando quieras con diferentes variables. Cambia el multiplicator number a 3 y llama a la función, te hará lo mismo pero multiplicado por 3. Lo mismo con number of pairs to show.


// 2. ¿Podrias hacer una función que mostrara por pantalla la serie Fibonacci? Crear una función llamada fibonacciSeries que tome un número como parámetro (ejemplo: fibonacciSequenceLength) y devuelva un array con la serie de números de Fibonacci hasta el número máximo de la serie recibido por parámetros. La serie de Fibonacci comienza con 0 y 1, y cada término subsiguiente se calcula sumando los dos términos anteriores.

const fibonacciSeries = (fibonacciSequenceLength) => {
    let result = [0, 1];
    for (
        let fibonacciPosition = 2;
        fibonacciPosition < fibonacciSequenceLength;
        fibonacciPosition++
    ) {
        result[fibonacciPosition] =
            result[fibonacciPosition - 1] + result[fibonacciPosition - 2];
    }
    return result;
};

console.log(fibonacciSeries(16));

// La secuencia fibonacci te va sumando 2 numeros continuamente. El último con el anterior. Creo la función y pongo el parámetro que después cuando llame a la función voy a colocar (10, 20 etc la longitud que to quiera). Después declaro una variable con el principio de la secuencia para despues continuar sobre ella. El resultado empezará alli y terminará donde yo indique en mi parámetro. El bucle for en este caso me empieza a contar desde la posición 2 que no existe hasta la longitud del array result que es infinita hasta que yo no le indique un numero. Después aplico el calculo que quiero hacer, que en la secuencia fibonacci se trata de sumar el ultimo valor por el anterior. Por lo que le digo que el resultado de la posición fibonacci va a ser posición - 1 + posición -2, es decir la primera posición que va a recorrer el for es la 2 (porque le he dicho que inicie) por lo que cogerá 2-1 = 1 y 2-2 = 0, cogerá el 1 + 0, después seguirá recorriendo el for con la posición 3 que será 1 + 1 = 2, despues 2+1 = 3, 3+2 = 5 y asi hasta la longitud que yo he marcado.


// 2.1 Puedes añadir además, la posición de cada resultado?

const fibonacciSeries1 = (fibonacciSequenceLength1) => {
    let result1 = [
        { position: 0, value: 0 },
        { position: 1, value: 1 },
    ];
    for (
        let fibonacciPosition1 = 2;
        fibonacciPosition1 < fibonacciSequenceLength1;
        fibonacciPosition1++
    ) {
        result1[fibonacciPosition1] = {
            position: fibonacciPosition1,
            value:
                result1[fibonacciPosition1 - 1].value +
                result1[fibonacciPosition1 - 2].value,
        };
    }
    return result1;
};

console.log(fibonacciSeries1(16));

// Para dar 2 valores por consola en vez del array he tenido que crear un objeto. El for sigue siendo el mismo. Y el cálculo cambia porque le añado que el resultado que quiero que me imprima es primero la posición y después el valor de cada una de ellas.


// 2.2-Ahora, el usuario debería ser capaz de especificar la posición de la serie hasta donde queremos llegar.

const fibonacciSeries2 = (maxPosition) => {
    let result2 = [
        { position2: 0, value2: 0 },
        { position2: 1, value2: 1 },
    ];
    let currentPosition = 2;
    while (currentPosition <= maxPosition) {
        result2[currentPosition] = {
            position2: currentPosition,
            value2:
                result2[currentPosition - 1].value2 +
                result2[currentPosition - 2].value2,
        };
        currentPosition++;
    }
    return result2;
};

console.log(fibonacciSeries2(16));

// Es lo mismo pero usando un bucle while, para darle un final (Cuando no cumpla la condición).


// 2.3- Ahora, muestra los resultados en forma piramidal:

const fibonacciSeries3 = (fibonacciSequenceLength3) => {
    let result3 = [
        { position3: 0, value3: 0 },
        { position3: 1, value3: 1 },
    ];
    for (
        let fibonacciPosition3 = 2;
        fibonacciPosition3 < fibonacciSequenceLength3;
        fibonacciPosition3++
    ) {
        result3[fibonacciPosition3] = {
            position3: fibonacciPosition3,
            value3:
                result3[fibonacciPosition3 - 1].value3 +
                result3[fibonacciPosition3 - 2].value3,
        };
    }
    return result3;
};

// Creamos un objeto con las 2 primeras posiciones y sus dos primeros valores. Será nuestro punto de partida. Después creamos un bucle for donde le indicamos que inicie la iteración a partir de la posición 2 y vaya incrementando hasta que llegue a la longitud del objeto que en este caso todavía no está definido. Seguidamente le indico el calculo que tiene que hacer para seguir la secuencia. 

const getPyramidalFibonacci = (number3) => {
    const fibonacciSequence4 = fibonacciSeries3(number3);
    const sequenceLength4 = fibonacciSequence4.length;

    for (let row = 0; row < sequenceLength4; row++) {   // Esta condición siempre se da porque 0 es menor que la longitud siempre por lo que me hace 
        let line = ""; // esto es un salto de línea      // todas las filas, y mientras me hace la fila me incrementa la columna con el nuevo número.
        for (let column = 0; column <= row; column++) {
            line += fibonacciSequence4[column].value3 + " ";  // Esto es la sequencia 0 1 1 2 3 5 (cada vez se va incrementando)
        }
        console.log(line);
    }
    for (let row = sequenceLength4 - 2; row >= 0; row--) {   // Aqui hago lo contrario, empiezo en la longitud -2 , por que siempre parto de 2 valores.
        let line = "";                                        // y en este caso le digo que me los descremente. y lo demás es todo igual.
        for (let column = 0; column <= row; column++) {
            line += fibonacciSequence4[column].value3 + " ";
        }
        console.log(line);
    }
};

getPyramidalFibonacci(16);

// Ahora una vez tengo definida la función que me ejecuta la sequencia fibonacci hago otra función la cual le voy a decir que me de la secuencia fibonacci de forma piramidal. Creo la función, mi parámetro es el límite donde quiero que llegue la secuencia (ya que si no le doy un fin es una secuencia infinita). Creo dos variables que voy a utilizar mas tarde, una de ellas me da la secuencia (Que es la función que he creado anteriormente) unida a mi parámetro(para decirle donde parar). La otra me dará la longitud de la secuencia. Y ahora vienen los dos bucles for anidados que harán que los números se coloquen en cierta posición para que quede de manera piramidal.
// Al primer bucle for le indico que cuente la fila desde 0 a la longitud de la sequencia y me lo vaya incrementando siempre que se cumpla esa condición (Hay que tener en cuenta que la longitud de la secuencia va aumentando a medida que se realiza el calculo y se van añadiendo numeros, hasta llegar al límite que yo he puesto). Añado la veriable line que me da un espacio por cada iteración(vuelta) que da el bucle for. y por cada vuelta de row hace una de columna.



// 2- Simple Scripting program.
// Crea un programa que transforme un número de 4 dígitos en otro diferente con las posiciones de los dígitos cambiadas, creando un nuevo código.
// Los números se van moviendo en la misma dirección que las agujas del reloj.

const codeScript = (code) => {
    const codeString = code.toString(); // Con el método toString me devuelve el valor como string. Ej 1234
    const digitsArray = codeString.split(""); // Me convierte el string en array y me lo divide por índices. Si el codigo tiene 4 dígitos pues 4 índices. Ej ["1","2","3","4"]. .split("") por lo tanto, es la única forma de producir un array vacío cuando se pasa una cadena como separator.
    let result = ""; // Como resultado que me de el número que aun no esta definido (mi parámetro).

    for (
        let currentPosition = 0;
        currentPosition < digitsArray.length;   // En el bucle for parto desde 0, si 0 es menor a 4 sigue contando.
        currentPosition++
    ) {
        const firstDigit = digitsArray.shift(); // Shift() elimina el primer elemento del array.
        digitsArray.push(firstDigit);           // Push() añade uno o más elementos al final de un array.
        result += digitsArray.join("") + "\n"; //  Join()  join() une todos los elementos de una matriz y hace que me de los dígitos juntos 123 sino lo daría 1,2,3. El += significa que result es igual a result + digitsArray bla bla bla.. (el result el declarado mas arriba)  
    }

    return result;
};

console.log(codeScript(123));

// He creado una función que me devuelve el código que pongo en todas sus posibilidades. El juego está en eliminar el primer digito y ponerlo al final y asi succesibamente.


// 2- Ahora, el usuario debería poder introducir como parámetro dos códigos a la vez y devolver los dos códigos encriptados (Los dos códigos se deberían encriptar en la misma función):

const codeScript2 = (code1, code2) => {
    const code1String = code1.toString();
    const code2String = code2.toString();
    const code1Array = code1String.split("");
    const code2Array = code2String.split("");
    let result1 = "";
    let result2 = "";

    for (
        let currentPosition2 = 0;
        currentPosition2 < code1Array.length;    // Solo pongo un for porque los dos códigos tendrán la misma longitud y el contaje será el mismo.
        currentPosition2++
    ) {
        const firstDigit1 = code1Array.shift();
        const firstDigit2 = code2Array.shift();
        code1Array.push(firstDigit1);
        code2Array.push(firstDigit2);
        result1 += code1Array.join("") + ", ";
        result2 += code2Array.join("") + ", ";
    }

    return { encryptedCode1: result1, encryptedCode2: result2 };
};

console.log(codeScript2(3712, 9485));


// 3. Ahora, vamos a añadir un nivel más de seguridad. Despues de cambiar la posición de los dígitos, multiplicaremos a cada número por otro número cuyo resultado no sea superior a 10. (Si el resultado és superior a 10, conseguiremos una multplicación de dos digitos y el código ya no sería de 4 valores).

const getCodeToString = (code5) => {      //Lo primero es crear una función que me devuelva el código a string y el split me convierte el string en array y me lo divide por índices. Se pueden poner dos métodos a la vez separados por punto. 
    return code5.toString().split("");
};

const changeDigitsPosition = (code5) => {          //Luego creamos otra función que será la que me mueva los dígitos con tal de obtener códigos diferentes. Creo una variable que me devuelva lo que he dicho en la función anterior y otra que me elimine el ultimo elemento del array con el método pop, y con el método unshift agrego uno o más elementos al inicio del array. Por lo tanto lo que pasa es que elimino el ultimo digito del array y lo agrego al inicio. Y por ultimo le pido que me devuelva el código junto sin separaciones usando el método join.
    const codeToString = getCodeToString(code5);
    const lastDigit = codeToString.pop();
    codeToString.unshift(lastDigit);
    return codeToString.join("");
};

const multiplyDigits = (code5, multiplicator) => {    //Después creo la función que me va a multiplicar los dígitos. Añado el parámetro del multiplicador (para indicarle mas adelante por que número quiero que me multiplique). Creo una variable recogiendo lo de la primera función como antes, y creo otra para hacer la multiplicación, con el método map creo un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos, es decir, el array con los dígitos multiplicados. parseInt() Convierte un argumento de tipo cadena y devuelve un entero de la base especificada.
    const codeToString = getCodeToString(code5);
    const multipliedCode = codeToString.map(
        (digit) => parseInt(digit) * multiplicator
    );
    return multipliedCode.join("");
};

const codeScript5 = (firstCode, secondCode, multiplicator) => {    //Por último creo la función que me va a dar el código encriptado. Donde tengo 3 parámetros, 2 códigos y el multiplicador. Creo las dos variables para después llamarlas en el return, donde doy la orden de el calculo de la segunda función y también le indico que multiplique llamando a la tercera función y entre paréntesis los parámetros que tiene que usar. 
    let encryptedFirstCode = changeDigitsPosition(firstCode);
    encryptedFirstCode = multiplyDigits(encryptedFirstCode, multiplicator);

    let encryptedSecondCode = changeDigitsPosition(secondCode);
    encryptedSecondCode = multiplyDigits(encryptedSecondCode, multiplicator);

    return [encryptedFirstCode, encryptedSecondCode];
};

console.log(codeScript5(2434, 2011, 3));


// 4- Ahora, implementa en otra funcion aparte el decrypt(), que recibirá como argumento un código encriptado (haciendo referencia al apartado 3.2) y nos devuelva el código desencriptado.

const decrypt = (codeToDecrypt, dividend) => {                  //Después de la función que multiplica los dígitos, creo la de desencriptar. Creo la variable de desencriptar y de la función que me creaba el código añado un nuevo parámetro donde irá el código desencriptado junto con el método map donde esta vez me devolvera un array con los códigos divididos no multiplicados. 
    const decryptedCode = getCodeToString(codeToDecrypt).map(
        (digit) => parseInt(digit) / dividend
    );
    return decryptedCode.join("");
};

const codeScript6 = (firstCode2, secondCode2, multiplicator2) => {         // Como en el ejercicio anterior con las 3 variables 
    let encryptedFirstCode2 = changeDigitsPosition(firstCode2);
    encryptedFirstCode2 = multiplyDigits(encryptedFirstCode2, multiplicator2);

    let encryptedSecondCode2 = changeDigitsPosition(secondCode2);
    encryptedSecondCode2 = multiplyDigits(encryptedSecondCode2, multiplicator2);

    const result9 = [encryptedFirstCode2, encryptedSecondCode2];
    console.log(`Encrypted Codes: ${result9}`);

    const resultDecrypt = decrypt(result9, multiplicator2);
    console.log(`Decrypt code ${resultDecrypt}`);
};

codeScript6(1111, 2222, 2);


// 5- Añade las dos funciones a la misma función padre, de forma que encripte y desencripte a la vez cuando termine de ejecutarse.

const encrypt2 = (code5, multiplicator) => {
    let encryptedCode8 = changeDigitsPosition(code5);
    encryptedCode8 = multiplyDigits(encryptedCode8, multiplicator);
    return encryptedCode8;
};

const decrypt2 = (codeToDecrypt2, divisor) => {
    const decryptedCode5 = getCodeToString(codeToDecrypt2).map(
        (digit) => parseInt(digit) / divisor
    );
    return decryptedCode5.join("");
};

const codeScript11 = (code21, code22, multiplicator) => {
    const encryptedFirstCode11 = encrypt2(code21, multiplicator);
    const encryptedSecondCode11 = encrypt2(code22, multiplicator);

    console.log("Encrypted Codes:", [encryptedFirstCode11, encryptedSecondCode11]);

    const decryptedFirstCode2 = decrypt2(encryptedFirstCode11, multiplicator);
    const decryptedSecondCode2 = decrypt2(encryptedSecondCode11, multiplicator);

    console.log("Decrypted Codes:", [decryptedFirstCode2, decryptedSecondCode2]);
};

codeScript11(1111, 2222, 2);



// 4- Crea un programa que use la encriptación Romana
// ¿Cómo es la encriptación Romana ? Si tenemos la palabra CODERS, la palabra encriptada será CEORDS.Si divides la palabra original en 2 grupos obtienes:

//     COD
//     |-|-|
//     ERS      Entonces, uniendo las primeras letras de cada grupo, las segundas y las terceras obtienes CEORDS.
//              Entonces, el programa deberá recibir CODERS y retornar CEORDS

// 1 - Programa el desencriptador, pasa como parámetro CEORDS y que devuelva CODERS.

const decryptRomanEncryption = (encryptedWord) => {    // Los números pares van a dar un resto de 0 al dividirlos por 2. 0/2 , 2/2, 4/2 porque 0x2 es 0 (no hay resto), 1x2 es 2 y 2x2 es 4 por lo que el resto sale 0. En cambio con números impares 1/2, 3/2 y 5/2 sale un resto de 1, porque 0x2 es 0 hasta llegar a 1 me sobra 1, 1x2 es 2 hasta llegar a 3 me sobra 1 y 2x2 es cuatro y hasta llegar a 5 me sobra 1. Por eso al poner CEORDS me coloca las letras mientras recorre los array si van o no cumpliendo las condiciones. Le estamos diciendo si el resto del índice 0 x 2 es = a 0 ponme la letra ( con el método push) si se cumple la otra condición pone la letra siguiente y como en CEORDS una cumple y la otra no te coge la primera del índice par y la primera del índice impar formando CODERS.
    const length = encryptedWord.length;
    const evenLetters = [null];  //Se puede poner vacío o poner null
    const oddLetters = [];   

    for (let index = 0; index < length; index++) {          // Me está cogiendo las 3 primeras (COD) en índices pares
        if (index % 2 === 0) {
            evenLetters.push(encryptedWord[index]);
        }

        if (index % 2 !== 0) {                               // Me está cogiendo las 3 últimas (ERS) en índices impares
            oddLetters.push(encryptedWord[index]);
        }
    }

    return `${evenLetters.join("")}${oddLetters.join("")}`;
};

console.log(decryptRomanEncryption("CEORDS"));


// HINT: para descifrar, sólo debeis coger las letras pares como: C E O R D S El siguiente paso es capturar las letras impares, C E O R D S, agrupar los dos grupos y obtener la palabra original.

// 2 - ¿Lo tienes ? Prueba ahora con ISDICODERS.Cambia la función para que pueda aceptar palabras más largas.

console.log(decryptRomanEncryption("IOSDDEIRCS"));



// 1 - Crea un programa al que le introduces un número como parámetro del 0 al 100 y devuelve el número transformado a alfabeto normal, es decir:

const sayItWithWords = (number) => {
    const units = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const teens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    if (number < 0 || number > 100) {   // Me está diciendo que si el número es menor a 0 o (|| = OR) mayor a 100 con la sentencia throw le digo que lance una excepcion definida por mi, en este caso diciendo que el número debería estar entre 0 y 100.
        throw new Error("Number must be between 0 and 100");
    }

    if (number === 0) {
        return "zero";
    }

    if (number < 10) {                 // Aqui me da las unidades (1 al 9)
        return units[number];
    }

    if (number < 20) {                  //  Aqui me da las decenas, Si digo 11 (11-10 = 1, posición 1 del array teens).
        return teens[number - 10];
    }

    const tensDigit = Math.floor(number / 10); // Al dividir por 10 me sale como resultado el primer dígito que pongo y de resto el segundo. Ej 35, 
    const unitsDigit = number % 10;            // el resultado es 3 y el resto es 5.

    if (unitsDigit === 0) {                     // Si el resto es 0 (en el caso de 30/10) te da un valor de tens. En este caso como el resultado es 3 
        return tens[tensDigit];                  // te busca la 3 posición de tens, que es thirty.
    }

    if (unitsDigit !== 0) return `${tens[tensDigit]}-${units[unitsDigit]}`;  // y si es diferente a 0 me da tens guión unidades. Ej 35 = thirty-five
};

console.log(sayItWithWords(9));
console.log(sayItWithWords(14)); 
console.log(sayItWithWords(67)); 



// 6 - Modificando un texto
// Recibiendo el siguiente texto por parámetro a tu función... :
// Prepara dicha función para que modifique y devuelva el texto bajo estas reglas: Signos de puntuación: - "." => "," - "," => "" Palabras: - "dolor" => "potato" - "lorem" => "tomato" - "labor" => "cucumber" - "consequatur" => "garlic" - "ipsum" => "onion"

// Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
// Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.

const modifyText = (text) => {
    const replacements = [
        { word: "dolor", replacement: "profesionalmente" },
        { word: "lorem", replacement: "Isabel" },
        { word: "labor", replacement: "estudiando" },
        { word: "consequatur", replacement: "trabajo" },
        { word: "ipsum", replacement: "sandía" },
        { word: "turu", replacement: "encanta" },
        { word: ".", replacement: "," },
    ];

    let modifiedText = text;

    replacements.forEach((rule) => {    // El forEach me esta recorriendo el array y ejecuta la función indicada una vez por cada elemento del array.
        modifiedText = modifiedText.split(rule.word).join(rule.replacement); // Le estoy diciendo que me divida el objeto replacements por word de tal modo que desaparecen del array y me ponga con el método join el replacement?
    });

    return modifiedText;
};


console.log(modifyText(`Hola. soy lorem y me turu la ipsum. Estoy labor programación web y espero encontrar un buen consequatur con tal de crecer dolor`));

// En este caso el método split nos dice que saca un array desde donde le dices y el método join vuelve a juntar este array en un texto y si le pasas un valor sustituye esa palabra.


//Ejercicio para hacer la mediana :

const flights = [
    { id: 00, to: "New York", from: "Barcelona", cost: 700, layover: false },
    { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, layover: true },
    { id: 02, to: "Paris", from: "Barcelona", cost: 210, layover: false },
    { id: 03, to: "Roma", from: "Barcelona", cost: 150, layover: false },
    { id: 04, to: "London", from: "Madrid", cost: 200, layover: false },
    { id: 05, to: "Madrid", from: "Barcelona", cost: 90, layover: false },
    { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, layover: true },
    { id: 07, to: "Shangai", from: "Barcelona", cost: 800, layover: true },
    { id: 08, to: "Sydney", from: "Barcelona", cost: 150, layover: true },
    { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, layover: false },
];

const averageFlightsCost = () => {
    let total = 0;

    flights.map(({ cost }) => total += cost)

    const result = total / flights.length;

    console.log(result);
}

averageFlightsCost();

// La funcion array.map() sirve para que se recorran todos los elementos de un array de forma que puedan ser alterados en su contenido o capturar los valores de los mismos, en este caso lo que hice fue capturar el valor de cost y acumularlo en la variable de total de forma que cuando el map recorre todos los elementos en la suma me devolveria el valor de 5050 que dividido entre 10 que es el tamaño del array deberia de dar 505.