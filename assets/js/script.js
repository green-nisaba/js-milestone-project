let questionsRange = [
    {
      questionImage:
        "https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg.svg",
      answer1: "Luxembourg",
      answer2: "Greece",
      answer3: "Italy",
      answer4: "Latvia",
      correctA: 1
    },
    {
      questionImage:
        "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
      answer1: "Spain",
      answer2: "India",
      answer3: "Monaco",
      answer4: "Niger",
      correctA: 2
    },
    {
      questionImage:
        "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg",
      answer1: "Luxembourg",
      answer2: "Ireland",
      answer3: "Netherlands",
      answer4: "Hungury",
      correctA: 3
    },
    {
      questionImage:
        "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg",
      answer1: "Singapore",
      answer2: "Turkey",
      answer3: "Tunisia",
      answer4: "Pakistan",
      correctA: 1
    },
    {
      questionImage:
        "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg",
      answer1: "Uruguay",
      answer2: "Paraguay",
      answer3: "Guatemala",
      answer4: "Fiji",
      correctA: 1
    },
  {
    questionImage:
      "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg",
    answer1: "Singapore",
    answer2: "Turkey",
    answer3: "Tunisia",
    answer4: "Pakistan",
    correctA: 1
  },
  {
    questionImage:
      "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg",
    answer1: "Bulgaria",
    answer2: "Turkey",
    answer3: "Azerbaijan",
    answer4: "Libya",
    correctA: 3
  },
  {
    questionImage:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg",
    answer1: "Norway",
    answer2: "Denmark",
    answer3: "Sweden",
    answer4: "Czech Republic",
    correctA: 1
  },

  {
    questionImage:
      " https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg",
    answer1: "Belgium",
    answer2: "Denmark",
    answer3: "Austria",
    answer4: "Chad",
    correctA: 1
  },
  {
    questionImage:
      "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg",
    answer1: "Belgium",
    answer2: "Poland",
    answer3: "Austria",
    answer4: "France",
    correctA: 4
  },
  {
    questionImage:
      "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
    answer1: "Belgium",
    answer2: "Uruguay",
    answer3: "Portugal",
    answer4: "Brazil",
    correctA: 4
  },
  {
    questionImage:
      "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
    answer1: "Mexico",
    answer2: "Ireland",
    answer3: "Portugal",
    answer4: "Italy",
    correctA: 1
  },
  {
    questionImage:
      "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg",
    answer1: "Vietnam",
    answer2: "Turkey",
    answer3: "Malaysia",
    answer4: "China",
    correctA: 1
  },
  {
    questionImage:
      "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Montenegro.svg",
    answer1: "Vietnam",
    answer2: "Montenegro",
    answer3: "Niger",
    answer4: "Slovenia",
    correctA: 2
  },
  {
    questionImage:
      "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg",
    answer1: "Austria",
    answer2: "Poland",
    answer3: "Peru",
    answer4: "Slovenia",
    correctA: 2
  },
  {
    questionImage:
      "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg",
    answer1: "Austria",
    answer2: "Latvia",
    answer3: "Lithuania",
    answer4: "Slovakia",
    correctA: 2
  },
  {
    questionImage:
      "https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Liechtenstein.svg",
    answer1: "Liechtenstein",
    answer2: "Latvia",
    answer3: "Poland",
    answer4: "Slovakia",
    correctA: 1
  },
  {
    questionImage:
      "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Moldova.svg",
    answer1: "Montenegro",
    answer2: "Italy",
    answer3: "Romania",
    answer4: "Moldova",
    correctA: 4
  },
  {
    questionImage:
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg",
    answer1: "Spain",
    answer2: "Italy",
    answer3: "Bolivia",
    answer4: "Peru",
    correctA: 1
  },
  {
    questionImage:
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg",
    answer1: "Spain",
    answer2: "Tajikistan",
    answer3: "Philippines",
    answer4: "Paraguay",
    correctA: 3
  },
  {
    questionImage:
      "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg",
    answer1: "South Africa",
    answer2: "Malta",
    answer3: "Libya",
    answer4: "Madagascar",
    correctA: 1
  },
  {
    questionImage:
      "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg",
    answer1: "Latvia",
    answer2: "Malta",
    answer3: "Slovakia",
    answer4: "Lithuania",
    correctA: 4
  },
  {
    questionImage:
      "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg",
    answer1: "Poland",
    answer2: "Malta",
    answer3: "Peru",
    answer4: "Indonesia",
    correctA: 3
  }
  ];


  let questionImage = document.getElementById("question-image");
let endOfQuiz = 23;
let ongoingQuiz = [];
let score = 0;
let recieveAnswers = false;
let currentQuestion = {};
let questionCount = 0;
const options = Array.from(document.getElementsByClassName("optionRange"));
let scoreDisplay = document.getElementById("score");
const startScreen = document.getElementById("start");
const startScreenHide = document.getElementById("introduction");
const quizScreen = document.getElementById("quiz");
let progress = document.getElementById("progress");

startScreen.addEventListener("click", startQuiz);

function startQuiz() {
  startScreenHide.classList.add("hidden");
  quizScreen.classList.remove("hidden");
}


function showQuiz() {
  score = 0;
  questionCount = 0;
  ongoingQuiz = [...questionsRange];
  console.log(ongoingQuiz);
  showNextQuestion();
}

const opt1 = document.getElementById("option1");
const opt2 = document.getElementById("option2");
const opt3 = document.getElementById("option3");
const opt4 = document.getElementById("option4");


function showNextQuestion() {
  if (ongoingQuiz.length === 0 || questionCount > endOfQuiz) {
    localStorage.setItem("recentScore", score);

    return window.location.assign("/finish.html");
}
  questionCount++;
  const questionIndex = Math.floor(Math.random() * ongoingQuiz.length);
  currentQuestion = ongoingQuiz[questionIndex];
  questionImage.innerHTML = "<img src=" + currentQuestion.questionImage + ">";
  opt1.innerHTML = currentQuestion.answer1;
  opt2.innerHTML = currentQuestion.answer2;
  opt3.innerHTML = currentQuestion.answer3;
  opt4.innerHTML = currentQuestion.answer4;
  progress.innerText = `Question ${questionCount} out of 23`;
ongoingQuiz.splice(questionIndex, 1);
recieveAnswers = true;

}
options.forEach((option) => {
  option.addEventListener("click", (e) => {
    if (!recieveAnswers) return;
    recieveAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["id"];
    if (selectedAnswer == currentQuestion.correctA) {
      scoreDisplay.innerHTML = score++;
    }


    showNextQuestion();
  });
});


showQuiz();



