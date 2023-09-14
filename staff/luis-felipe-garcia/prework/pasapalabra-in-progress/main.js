let lettersToGuess = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let currentLetter = '';
let numberOfLettersGuessed = 0;
let answersUsed =[];
const maxLettersToGuess = 3; 
let players = [];

const getName = () => {
  let userName = '';
  userName = prompt('¡ Hola !. Bienvenid@ a Pasapalabra de Isdi Coders !!\nPor favor introduce tu nombre:');

  while (userName === '') {
      userName = prompt ('No has introducido nada. Por favor escribe tu nombre.')
  };

  alert(`¡ Bienvenid@ ${userName} !`);
  return userName;
} ;

const showRanking = () => {
  alert (`En la consola puedes ver el ranking de jugadores`);

  for (i = 0; i < players.length; i++){
      console.log (`${i+1}.- ${players[i].player} - ${players[i].points} puntos.`);
  };
};

const getQuestionsForCurrentLetter = () => {
    return questions.filter((question) => question.letter === currentLetter)
};

const getRandomIndex = (questionsForCurrentLetter) => {
    return Math.floor(Math.random() * questionsForCurrentLetter[0].answer.length)
};



const checkAnswer = (currentCorrectAnswer, currentPlayerAnswer) => {
  answersUsed.push(currentCorrectAnswer);
  
  switch (currentPlayerAnswer) {
    case "pasapalabra":
      return;
    case "end":
      i = lettersToGuess.length;
      break;
    default:
      if (currentPlayerAnswer === currentCorrectAnswer) {
        numberOfLettersGuessed++;
        questions[i].status = 1;
        console.log(`Good`);
        console.log(questions);
      } else {
        console.log("bad");
      };
  };
  return numberOfLettersGuessed;
  
};

const selectQuestionNotUsed = (questionsForCurrentLetter) => {
  const randomIndex = getRandomIndex(questionsForCurrentLetter);
  console.log(randomIndex);
  const currentCorrectAnswer = questionsForCurrentLetter[0].answer[randomIndex];
  console.log(currentCorrectAnswer);
    if (answersUsed.includes(currentCorrectAnswer)) {
    return selectQuestionNotUsed(questionsForCurrentLetter);
  }
  let currentQuestion = questionsForCurrentLetter[0].question[randomIndex];
  return {currentQuestion, currentCorrectAnswer}
}
/*
const selectCurrentLetter = (i) => {
  if (questions[i].status = 1) {
    return;
  }
  return questions[i].letter;

}*/

const playPasapalabra = () => {
  i = 0;
  userName = getName();
  while (numberOfLettersGuessed < maxLettersToGuess && i < questions.length) {
    if (questions[i].status === 0) {
      currentLetter = questions[i].letter;

      const questionsForCurrentLetter = getQuestionsForCurrentLetter();
      const currentQuestionAndAnswer = selectQuestionNotUsed(questionsForCurrentLetter);
      console.log(currentQuestionAndAnswer);
      const currentPlayerAnswer = prompt(currentQuestionAndAnswer.currentQuestion).toLowerCase();
      const currentCorrectAnswer = currentQuestionAndAnswer.currentCorrectAnswer;
      checkAnswer(currentCorrectAnswer, currentPlayerAnswer);
      console.log(`Palabras acer: ${numberOfLettersGuessed}  maxLetters: ${maxLettersToGuess}`);
      i++;
      if (currentPlayerAnswer === "end"){
        i=questions.length;
      }
    } else {
      i++
    };
  };

  players.push({player: userName, points: numberOfLettersGuessed});
            players.sort((a,b) => b.points - a.points);
            showRanking();
} ;


const questions = [
    {
      letter: "a",
      answer: ["abducir", "alegría", "azar"],
      status: 0,
      question: [
        "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
        "CON LA A. Estado de felicidad",
        "CON LA A. Suceso que ocurre sin causa aparente o explicación conocida",
      ],
    },
    {
      letter: "b",
      answer: ["bingo", "buitre", "baúl"],
      status: 1,
      question: [
        "CON LA B. Juego que ha sacado de quicio a todos los 'Coders' en las sesiones de precurso",
        "CON LA B. Ave rapaz que se alimenta principalmente de carrona",
        "CON LA B. Objeto utilizado para guardar y transportar objetos personales",
      ],
    },
    {
      letter: "c",
      answer: ["churumbel", "caracol", "caverna"],
      status: 0,
      question: [
        "CON LA C. Niño, crío, bebé",
        "CON LA C. Molusco gasterópodo provisto de una concha en espiral",
        "CON LA C. Cavidad natural subterránea, generalmente de gran tamaño",
      ],
    },
    {
      letter: "d",
      answer: ["diarrea", "diamante", "duna"],
      status: 0,
      question: [
        "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
        "CON LA D. Piedra preciosa extremadamente dura y valiosa",
        "CON LA D. Elevación de arena producida por el viento o el agua",
      ],
    },
    {
      letter: "e",
      answer: ["ectoplasma", "escafandra", "equinoccio"],
      status: 0,
      question: [
        "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
        "CON LA E. Traje especial utilizado en el espacio o bajo el agua para proteger al portador",
        "CON LA E. Momento del año en que la duración del día y la noche son iguales",
      ],
    },
    {
      letter: "f",
      answer: ["fácil", "fantasma", "faro"],
      status: 0,
      question: [
        "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
        "CON LA F. Supuesta aparición o visión de una persona fallecida",
        "CON LA F. Torre alta con una luz en la parte superior utilizada para guiar a los barcos en el mar",
      ],
    },
    {
      letter: "g",
      answer: ["galaxia", "gorrión", "guitarra"],
      status: 0,
      question: [
        "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
        "CON LA G. Pequeña ave paseriforme de plumaje pardo",
        "CON LA G. Instrumento musical de cuerda, generalmente de seis cuerdas",
      ],
    },
    {
      letter: "h",
      answer: ["harakiri", "hibernar", "horizonte"],
      status: 0,
      question: [
        "CON LA H. Suicidio ritual japonés por desentrañamiento",
        "CON LA H. Entrar en un estado de inactividad durante el invierno",
        "CON LA H. Línea imaginaria que separa el cielo de la Tierra",
      ],
    },
    {
      letter: "i",
      answer: ["iglesia", "isla", "invierno"],
      status: 0,
      question: [
        "CON LA I. Templo cristiano",
        "CON LA I. Extensión de tierra rodeada de agua por todas partes",
        "CON LA I. Estación del año caracterizada por temperaturas frías",
      ],
    },
    {
      letter: "j",
      answer: ["jabalí", "jirafa", "jazz"],
      status: 0,
      question: [
        "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
        "CON LA J. Mamífero africano de cuello largo y patas largas",
        "CON LA J. Género musical originado en Estados Unidos con influencias africanas",
      ],
    },
    {
      letter: "k",
      answer: ["kamikaze", "karaoke", "koala"],
      status: 0,
      question: [
        "CON LA K. Persona que se juega la vida realizando una acción temeraria",
        "CON LA K. Actividad de canto con música pregrabada y letras en pantalla",
        "CON LA K. Mamífero marsupial arbóreo de Australia",
      ],
    },
    {
      letter: "l",
      answer: ["licantropo", "luz", "león"],
      status: 0,
      question: [
        "CON LA L. Hombre lobo",
        "CON LA L. Radiación electromagnética que permite la visión",
        "CON LA L. Gran felino conocido como el 'rey de la selva'",
      ],
    },
    {
      letter: "m",
      answer: ["misantropo", "máquina", "montaña"],
      status: 0,
      question: [
        "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
        "CON LA M. Dispositivo mecánico que realiza una tarea",
        "CON LA M. Elevación natural de terreno de considerable altura",
      ],
    },
    {
      letter: "n",
      answer: ["necedad", "nublado", "nieve"],
      status: 0,
      question: [
        "CON LA N. Demostración de poca inteligencia",
        "CON LA N. Cielo cubierto de nubes",
        "CON LA N. Agua congelada en forma de cristales que cae de las nubes",
      ],
    },
    {
      letter: "ñ",
      answer: ["señal", "baño", "pañuelo"],
      status: 0,
      question: [
        "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
        "CONTIENE LA Ñ. Lugar destinado al aseo corporal",
        "CONTIENE LA Ñ. Trozo de tela usado para limpiar o secar algo",
      ],
    },
    {
      letter: "o",
      answer: ["orco", "otorrinolaringólogo", "otoño"],
      status: 0,
      question: [
        "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
        "CON LA O. Especialista médico que trata enfermedades del oído, nariz y garganta",
        "CON LA O. Estación del año caracterizada por la caída de las hojas de los árboles",
      ],
    },
    {
      letter: "p",
      answer: ["protoss", "plaza", "piedra"],
      status: 0,
      question: [
        "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
        "CON LA P. Espacio público generalmente rodeado de edificios",
        "CON LA P. Sólido natural compuesto por minerales y otras sustancias",
      ],
    },
    {
      letter: "q",
      answer: ["queso", "quemadura", "química"],
      status: 0,
      question: [
        "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
        "CON LA Q. Lesión en la piel causada por el calor o sustancias corrosivas",
        "CON LA Q. Ciencia que estudia la composición de la materia y las propiedades de las sustancias",
      ],
    },
    {
      letter: "r",
      answer: ["ratón", "radiografía", "relámpago"],
      status: 0,
      question: [
        "CON LA R. Roedor",
        "CON LA R. Imagen de la estructura interna del cuerpo obtenida mediante radiación",
        "CON LA R. Destello de luz producido durante una tormenta",
      ],
    },
    {
      letter: "s",
      answer: ["stackoverflow", "saxofón", "sirena"],
      status: 0,
      question: [
        "CON LA S. Comunidad salvadora de todo desarrollador informático",
        "CON LA S. Instrumento musical de viento-metal inventado por Adolphe Sax",
        "CON LA S. Ser mitológico marino con cuerpo de mujer y cola de pez",
      ],
    },
    {
      letter: "t",
      answer: ["terminator", "televisión", "tornado"],
      status: 0,
      question: [
        "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
        "CON LA T. Sistema de transmisión de imágenes y sonido a distancia",
        "CON LA T. Tormenta giratoria de gran intensidad",
      ],
    },
    {
      letter: "u",
      answer: ["unamuno", "unicornio", "urano"],
      status: 0,
      question: [
        "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
        "CON LA U. Criatura mitológica representada como un caballo con un cuerno en la frente",
        "CON LA U. Séptimo planeta del sistema solar",
      ],
    },
    {
      letter: "v",
      answer: ["vikingos", "viento", "volcán"],
      status: 0,
      question: [
        "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
        "CON LA V. Movimiento del aire",
        "CON LA V. Abertura en la Tierra por donde salen materiales incandescentes",
      ],
    },
    {
      letter: "w",
      answer: ["sandwich", "waterpolo", "whisky"],
      status: 0,
      question: [
        "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
        "CONTIENE LA W. Deporte acuático que se juega en una piscina",
        "CONTIENE LA W. Bebida alcohólica destilada",
      ],
    },
    {
      letter: "x",
      answer: ["botox", "xilófono", "xenofobia"],
      status: 0,
      question: [
        "CONTIENE LA X. Toxina bacteriana utilizada en cirugía estética",
        "CONTIENE LA X. Instrumento musical de percusión que consta de láminas afinadas que se golpean con baquetas",
        "CONTIENE LA X. Aversión o rechazo hacia personas extranjeras",
      ],
    },
    {
      letter: "y",
      answer: ["peyote", "yogur", "yegua"],
      status: 0,
      question: [
        "CONTIENE LA Y. Pequeño cactus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
        "CONTIENE LA Y. Producto lácteo obtenido por fermentación bacteriana de la leche",
        "CONTIENE LA Y. Hembra del caballo",
      ],
    },
    {
      letter: "z",
      answer: ["zen", "zarigüeya", "zafiro"],
      status: 0,
      question: [
        "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
        "CON LA Z. Pequeño marsupial de América conocido por su bolsa",
        "CON LA Z. Piedra preciosa de color azul transparente",
      ],
    },
  ];
  

playPasapalabra()




