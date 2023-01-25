/* Declare variables for DOM elements 
* and quiz questions 
*/
let questionsRange = [
    {
      questionImage:
        "assets/images/Flag_of_Luxembourg.svg",
      answer1: "Luxembourg",
      answer2: "Greece",
      answer3: "Italy",
      answer4: "Latvia",
      correctA: 1
    },
    {
      questionImage:
        "assets/images/Flag_of_India.svg",
      answer1: "Spain",
      answer2: "India",
      answer3: "Monaco",
      answer4: "Niger",
      correctA: 2
    },
    {
      questionImage:
        "assets/images/Flag_of_the_Netherlands.svg",
      answer1: "Luxembourg",
      answer2: "Ireland",
      answer3: "Netherlands",
      answer4: "Hungury",
      correctA: 3
    },
    {
      questionImage:
        "assets/images/Flag_of_Singapore.svg",
      answer1: "Singapore",
      answer2: "Turkey",
      answer3: "Tunisia",
      answer4: "Pakistan",
      correctA: 1
    },
    {
      questionImage:
        "assets/images/Flag_of_Uruguay.svg",
      answer1: "Uruguay",
      answer2: "Paraguay",
      answer3: "Guatemala",
      answer4: "Fiji",
      correctA: 1
    },
  {
    questionImage:
      "assets/images/Flag_of_Monaco.svg.png",
    answer1: "Singapore",
    answer2: "Turkey",
    answer3: "Monaco",
    answer4: "Poland",
    correctA: 3
  },
  {
    questionImage:
      "assets/images/Flag_of_Azerbaijan.svg",
    answer1: "Bulgaria",
    answer2: "Turkey",
    answer3: "Azerbaijan",
    answer4: "Libya",
    correctA: 3
  },
  {
    questionImage:
      "assets/images/Flag_of_Norway.svg",
    answer1: "Norway",
    answer2: "Denmark",
    answer3: "Sweden",
    answer4: "Czech Republic",
    correctA: 1
  },

  {
    questionImage:
      "assets/images/Belgium1.png",
    answer1: "Belgium",
    answer2: "Denmark",
    answer3: "Austria",
    answer4: "Chad",
    correctA: 1
  },
  {
    questionImage:
      "assets/images/Flag_of_France.svg",
    answer1: "Belgium",
    answer2: "Poland",
    answer3: "Austria",
    answer4: "France",
    correctA: 4
  },
  {
    questionImage:
      "assets/images/Flag_of_Brazil.svg",
    answer1: "Belgium",
    answer2: "Uruguay",
    answer3: "Portugal",
    answer4: "Brazil",
    correctA: 4
  },
  {
    questionImage:
      "assets/images/Flag_of_Mexico.svg",
    answer1: "Mexico",
    answer2: "Ireland",
    answer3: "Portugal",
    answer4: "Italy",
    correctA: 1
  },
  {
    questionImage:
      "assets/images/Flag_of_Vietnam.svg",
    answer1: "Vietnam",
    answer2: "Turkey",
    answer3: "Malaysia",
    answer4: "China",
    correctA: 1
  },
  {
    questionImage:
      "assets/images/Flag_of_Montenegro.svg",
    answer1: "Vietnam",
    answer2: "Montenegro",
    answer3: "Niger",
    answer4: "Slovenia",
    correctA: 2
  },
  {
    questionImage:
      "assets/images/Flag_of_Poland.svg",
    answer1: "Austria",
    answer2: "Poland",
    answer3: "Peru",
    answer4: "Slovenia",
    correctA: 2
  },
  {
    questionImage:
      "assets/images/Flag_of_Latvia.svg",
    answer1: "Austria",
    answer2: "Latvia",
    answer3: "Lithuania",
    answer4: "Slovakia",
    correctA: 2
  },
  {
    questionImage:
      "assets/images/Flag_of_Liechtenstein.svg",
    answer1: "Liechtenstein",
    answer2: "Latvia",
    answer3: "Poland",
    answer4: "Slovakia",
    correctA: 1
  },
  {
    questionImage:
      "assets/images/Flag_of_Moldova.svg",
    answer1: "Montenegro",
    answer2: "Italy",
    answer3: "Romania",
    answer4: "Moldova",
    correctA: 4
  },
  {
    questionImage:
      "assets/images/Bandera_de_España.svg",
    answer1: "Spain",
    answer2: "Italy",
    answer3: "Bolivia",
    answer4: "Peru",
    correctA: 1
  },
  {
    questionImage:
      "assets/images/Flag_of_the_Philippines.svg",
    answer1: "Spain",
    answer2: "Tajikistan",
    answer3: "Philippines",
    answer4: "Paraguay",
    correctA: 3
  },
  {
    questionImage:
      "assets/images/Flag_of_South_Africa.svg",
    answer1: "South Africa",
    answer2: "Malta",
    answer3: "Libya",
    answer4: "Madagascar",
    correctA: 1
  },
  {
    questionImage:
      "assets/images/Flag_of_Lithuania.svg",
    answer1: "Latvia",
    answer2: "Malta",
    answer3: "Slovakia",
    answer4: "Lithuania",
    correctA: 4
  },
  {
    questionImage:
      "assets/images/Flag_of_Peru.svg",
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

/* Add event listeners 
* and show user actual quiz 
* instead of starting screen
*/

startScreen.addEventListener("click", startQuiz);

function startQuiz() {
  startScreenHide.classList.add("hidden");
  quizScreen.classList.remove("hidden");
}

/*Setting starting point for the quiz
*/

function showQuiz() {
  score = 0;
  questionCount = 0;
  ongoingQuiz = [...questionsRange];
  showNextQuestion();
}

const opt1 = document.getElementById("option1");
const opt2 = document.getElementById("option2");
const opt3 = document.getElementById("option3");
const opt4 = document.getElementById("option4");

/* Main functionaluty of the quiz: updating question content 
* by pulling random question 
* and setting condition for the end of the quiz
*/

function showNextQuestion() {
  if (ongoingQuiz.length === 0 || questionCount > endOfQuiz) {
    localStorage.setItem("recentScore", score);

    return window.location.assign("finish.html");
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

/* Verifying results 
* and updating the score
*/

options.forEach((option) => {
  option.addEventListener("click", (e) => {
    if (!recieveAnswers) return;
    recieveAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset['id'];
    if (selectedAnswer == currentQuestion.correctA) {
      score++
      scoreDisplay.innerHTML = score;
    }


    showNextQuestion();
  });
});


showQuiz();



