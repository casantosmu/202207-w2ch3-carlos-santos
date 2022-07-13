const generateRandomIntegerInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const userRanking = [
  { username: "Manel", correctAnswers: 15 },
  { username: "Julia", correctAnswers: 23 },
  { username: "Martí", correctAnswers: 7 },
  { username: "Joan", correctAnswers: 19 },
  { username: "Lluna", correctAnswers: 5 },
  { username: "Carlos", correctAnswers: 14 },
];

const getRandomQuestionsForEachLetter = () => {
  const questionsByInitialLetter = [
    {
      letter: "A",
      questions: [
        {
          word: "anhelo",
          definition: "Deseo vehemente de conseguir alguna cosa",
        },
        { word: "asequible", definition: "Que puede conseguirse o alcanzarse" },
        { word: "aéreo", definition: "Del aire o relativo a él" },
      ],
    },
    {
      letter: "B",
      questions: [
        { word: "bebé", definition: "Niño muy pequeño o recién nacido" },
        {
          word: "bailar",
          definition: "Mover el cuerpo al compás de la música",
        },
        {
          word: "bien",
          definition:
            "Lo que en sí mismo tiene el complemento de la perfección, o lo que es objeto de la voluntad",
        },
      ],
    },
    {
      letter: "C",
      questions: [
        { word: "crear", definition: "Producir algo de la nada" },
        {
          word: "caer",
          definition:
            "Desplazarse un cuerpo de arriba abajo por la acción de su propio peso",
        },
        {
          word: "cita",
          definition: "Día, hora y lugar para encontrarse dos o más personas",
        },
      ],
    },
    {
      letter: "D",
      questions: [
        { word: "dar", definition: "Traspasar, donar" },
        {
          word: "diccionario",
          definition:
            "Libro en el que, por orden generalmente alfabético, se contienen y definen todas las palabras de uno o más idiomas o las de una materia o disciplina determinada",
        },
        {
          word: "decir",
          definition: "Dicho, refrán, frase ingeniosa o sentenciosa",
        },
      ],
    },
    {
      letter: "E",
      questions: [
        {
          word: "estereotipo",
          definition:
            "Idea o imagen aceptada por la mayoría como patrón o modelo de cualidades o de conducta",
        },
        {
          word: "ejemplo",
          definition:
            "Aquello que sirve de modelo imitable o eludible, según se considere positivo o negativo",
        },
        {
          word: "epílogo",
          definition:
            "Recapitulación, resumen o conclusión de lo dicho en un discurso o en otra composición literaria",
        },
      ],
    },
    {
      letter: "F",
      questions: [
        { word: "falacia", definition: "Engaño, mentira" },
        {
          word: "fin",
          definition: "Término, remate, extremo o consumación de una cosa",
        },
        {
          word: "frenesí",
          definition: "Exaltación violenta de una pasión o sentimiento",
        },
      ],
    },
    {
      letter: "G",
      questions: [
        { word: "ganar", definition: "Obtener un beneficio" },
        { word: "girar", definition: "Dar vueltas alrededor de sí o de algo" },
        {
          word: "gracia",
          definition: "Cualidad de alguien de divertir o de hacer reír",
        },
      ],
    },
    {
      letter: "H",
      questions: [
        { word: "hacer", definition: "Producir, causar" },
        {
          word: "historia",
          definition: "Ciencia que estudia el pasado de las sociedades humanas",
        },
        {
          word: "hegemonía",
          definition: "Supremacía que un estado o pueblo ejerce sobre otro",
        },
      ],
    },
    {
      letter: "I",
      questions: [
        {
          word: "idea",
          definition:
            "Cualquier representación mental que se relaciona con algo real",
        },
        {
          word: "isla",
          definition: "Porción de tierra rodeada de agua por todas partes",
        },
        {
          word: "ilusión",
          definition:
            "Imagen sugerida por los sentidos que carece de verdadera realidad",
        },
      ],
    },
    {
      letter: "J",
      questions: [
        {
          word: "jerga",
          definition:
            "Conjunto de expresiones especiales y particulares de una profesión o clase social",
        },
        {
          word: "justicia",
          definition:
            "Virtud que inclina a dar a cada uno lo que le pertenece o lo que le corresponde",
        },
        { word: "jaleo", definition: "Alboroto, tumulto" },
      ],
    },
    {
      letter: "L",
      questions: [
        {
          word: "lastre",
          definition:
            "Peso que se pone en el fondo de la embarcación, a fin de que esta entre en el agua hasta donde convenga",
        },
        {
          word: "leer",
          definition:
            "Pasar la vista por lo escrito o impreso entendiendo los signos",
        },
        {
          word: "lugar",
          definition:
            "spacio ocupado o que puede ser ocupado por un cuerpo cualquiera",
        },
      ],
    },
    {
      letter: "M",
      questions: [
        {
          word: "mantener",
          definition: "Proveer a uno del alimento o de los bienes necesarios",
        },
        {
          word: "mitigar",
          definition: "Moderar, aplacar o suavizar la dureza de algo",
        },
        {
          word: "mejorar",
          definition:
            "Perfeccionar algo, haciéndolo pasar de un estado bueno a otro mejor",
        },
      ],
    },
    {
      letter: "N",
      questions: [
        { word: "noble", definition: "De ilustre linaje" },
        {
          word: "nada",
          definition:
            "Inexistencia, la ausencia absoluta de cualquier ser o cosa",
        },
        {
          word: "necesidad",
          definition:
            "Lo que hace que las cosas sucedan infaliblemente de cierta manera",
        },
      ],
    },
    {
      letter: "Ñ",
      questions: [
        {
          word: "ñoqui",
          definition:
            "Masa hecha con patatas mezcladas con harina de trigo, mantequilla, leche, huevo y queso rallado, dividida en trocitos, que se cuecen en agua hirviente con sal",
        },
        {
          word: "ñu",
          definition:
            "Nombre común de diversos mamíferos artiodáctilos bóvidos de África, especie de antílopes de cabeza grande y cuernos curvos",
        },
        { word: "ñuto", definition: "[Carne] blanda o ablandada a golpes" },
      ],
    },
    {
      letter: "O",
      questions: [
        { word: "osar", definition: "Atreverse" },
        { word: "oeste", definition: "Occidente, punto cardinal" },
        {
          word: "opción",
          definition: "Elección, posibilidad de elegir entre varias cosas",
        },
      ],
    },
    {
      letter: "P",
      questions: [
        {
          word: "peculiar",
          definition: "Propio o característico de cada persona o cosa",
        },
        {
          word: "pieza",
          definition:
            "Pedazo de algo o elemento que forma parte de una cosa y tiene una función determinada",
        },
        {
          word: "palabra",
          definition:
            "Sonido o conjunto de sonidos articulados que expresan una idea",
        },
      ],
    },
    {
      letter: "Q",
      questions: [
        { word: "querer", definition: "Amor, cariño" },
        {
          word: "quimera",
          definition:
            "Monstruo imaginario con cabeza de león, cuerpo de cabra y cola de dragón",
        },
        {
          word: "queso",
          definition: "Producto que se obtiene de la leche cuajada",
        },
      ],
    },
    {
      letter: "R",
      questions: [
        {
          word: "rincón",
          definition:
            "Ángulo entrante que se forma en el encuentro de dos paredes o de dos superficies",
        },
        { word: "radical", definition: "De la raíz o relativo a ella" },
        {
          word: "romper",
          definition:
            "Separar con violencia las partes de un todo, deshaciendo su unión",
        },
      ],
    },
    {
      letter: "S",
      questions: [
        {
          word: "significado",
          definition:
            "Sentido o concepto que representa una cosa, una palabra, un signo, etc.",
        },
        { word: "salir", definition: "Pasar de dentro afuera" },
        { word: "surrealista", definition: "Absurdo, sin sentido" },
      ],
    },
    {
      letter: "T",
      questions: [
        {
          word: "también",
          definition:
            "Se usa para afirmar la igualdad, semejanza, conformidad o relación de una cosa con otra",
        },
        { word: "tener", definition: "Poseer una cosa o disfrutar de ella" },
        {
          word: "tiempo",
          definition:
            "Duración de las cosas sujetas a cambio o de los seres que tienen una existencia finita",
        },
      ],
    },
    {
      letter: "U",
      questions: [
        {
          word: "unir",
          definition:
            "Juntar dos o más cosas entre sí, haciendo de ellas un todo",
        },
        { word: "usar", definition: "Hacer que un objeto sirva para algo" },
        {
          word: "urna",
          definition:
            "Arca, caja cerrada, con una ranura, donde se depositan las papeletas en sorteos o votaciones",
        },
      ],
    },
    {
      letter: "V",
      questions: [
        {
          word: "vino",
          definition:
            "Bebida alcohólica que se obtiene del zumo de las uvas exprimidas, y cocido naturalmente por fermentación",
        },
        { word: "vasto", definition: "Amplio, extenso o muy grande" },
        { word: "ver", definition: "Sentido de la vista" },
      ],
    },
    {
      letter: "X",
      questions: [
        {
          word: "xilofón",
          definition:
            "Instrumento de percusión formado por una serie de listones de madera o metal",
        },
        { word: "xocoatole", definition: "Atole amargo" },
        {
          word: "xi",
          definition:
            "Decimocuarta letra del alfabeto griego, que se corresponde con nuestra equis",
        },
      ],
    },
    {
      letter: "Y",
      questions: [
        { word: "yacer", definition: "Estar echada o tendida una persona" },
        {
          word: "yugular",
          definition:
            "[Vena] de las que hay a uno y otro lado del cuello y que recogen la mayor parte de la sangre del cerebro",
        },
        {
          word: "yogur",
          definition:
            "Producto de consistencia cremosa que se obtiene por fermentación de la leche",
        },
      ],
    },
    {
      letter: "Z",
      questions: [
        {
          word: "zona",
          definition:
            "Cualquier parte de un terreno o superficie encuadrada entre ciertos límites",
        },
        {
          word: "zanahoria",
          definition:
            "Planta herbácea umbelífera con flores blancas y púrpuras en el centro, de fruto seco y comprimido, y raíz gruesa de color naranja que se utiliza como alimento",
        },
        {
          word: "zumo",
          definition: "Líquido que se extrae de las frutas, vegetales, etc.",
        },
      ],
    },
  ];

  // randomQuestionsWithInitialLetter
  const randomQuestions = questionsByInitialLetter.map((letter) => {
    const randomQuestion =
      letter.questions[
        generateRandomIntegerInRange(0, letter.questions.length - 1)
      ];
    return { letter: letter.letter, question: randomQuestion };
  });

  return randomQuestions;
};

const getGameDataObj = () => {
  const questions = getRandomQuestionsForEachLetter().map((question) => {
    return {
      letter: question.letter,
      word: question.question.word,
      definition: question.question.definition,
      // status 0 is for unanswered questions
      // status 1 is for answered questions
      status: 0,
    };
  });

  return {
    username: prompt("Bienvenido/a. ¿Cuál es tu nombre?") || "Anon",
    questions,
    correctAnswers: 0,
  };
};

const showGameInstructions = () => {
  console.log("=============== CÓMO JUGAR ===============");
  console.log(
    "* El juego procede a través de las letras del alfabeto español."
  );
  console.log(
    "* Para cada letra, el juego lee una definición de una palabra que comienza con esa letra."
  );
  console.log('* Debes ingresar una palabra, o "pasapalabra" para pasar.');
  console.log('* Introduce "END" si quieres salir del juego.');
  console.log("******************************************");
};

const gameplay = () => {
  const gameData = getGameDataObj();
  const questions = gameData.questions;

  let answer;

  while (
    answer !== "END" &&
    questions.find((question) => question.status === 0)
  ) {
    const unansweredQuestions = questions.filter(
      (question) => question.status === 0
    );
    for (const question of unansweredQuestions) {
      do {
        answer = prompt(
          `>>> Con la ${question.letter}. ${question.definition}:`
        );
      } while (answer === null || answer === "");

      if (answer === "END") break;
      if (answer.toLowerCase() === question.word) {
        question.status = 1;
        gameData.correctAnswers++;
        alert(`¡Perfecto! Has acertado ${gameData.correctAnswers}.`);
      } else if (answer !== "pasapalabra") {
        question.status = 1;
        alert(`Has fallado. La respuesta correcta era: ${question.word}`);
      }
    }
  }

  const correctAnswers = gameData.correctAnswers;
  const incorrectAnswers = questions.length - correctAnswers;

  if (answer === "END") {
    console.log(`Usted ha acertado ${correctAnswers}`);
    console.log(`>> SALIR`);
  } else {
    console.log("El juego ha terminado.");
    console.log(
      `Has acertado ${correctAnswers} y fallado ${incorrectAnswers}.`
    );
    userRanking.push({ username: gameData.username, correctAnswers });
    console.log("================= RANKING =================");
    userRanking
      .sort((a, b) => b.correctAnswers - a.correctAnswers)
      .forEach((user) =>
        console.log(`>> ${user.username} ha acertado ${user.correctAnswers}`)
      );
  }
};

showGameInstructions();
gameplay();
