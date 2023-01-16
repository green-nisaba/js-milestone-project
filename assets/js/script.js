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
    }
  ];


  let questionImage = document.getElementById("question-image");
let endOfQuiz = 5;
let ongoingQuiz = [];
let score = 0;
let recieveAnswers = false;
let currentQuestion = {};
let questionCount = 0;
const options = Array.from(document.getElementsByClassName("optionRange"));
let scoreDisplay = document.getElementById("score");

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
  if (ongoingQuiz.length === 0 || questionCount >= endOfQuiz) {
    alert("Quiz is over");
}
  questionCount++;
  const questionIndex = Math.floor(Math.random() * ongoingQuiz.length);
  currentQuestion = ongoingQuiz[questionIndex];
  questionImage.innerHTML = "<img src=" + currentQuestion.questionImage + ">";
  opt1.innerHTML = currentQuestion.answer1;
  opt2.innerHTML = currentQuestion.answer2;
  opt3.innerHTML = currentQuestion.answer3;
  opt4.innerHTML = currentQuestion.answer4;
ongoingQuiz.splice[questionIndex, 1];
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



