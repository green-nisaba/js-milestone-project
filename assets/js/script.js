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
      answers1: "Uruguay",
      answer2: "Paraguay",
      answer3: "Guatemala",
      answer4: "Fiji",
      correctA: 1
    }
  ];

  let ongoingQuiz = 0;

const opt1 = document.getElementById("option1");
const opt2 = document.getElementById("option2");
const opt3 = document.getElementById("option3");
const opt4 = document.getElementById("option4");



function showQuiz() {
  let quest = questionsRange[ongoingQuiz];
  document.getElementById("question-image").innerHTML =
    "<img src=" + quest.questionImage + ">";
  opt1.innerHTML = quest.answer1;
  opt2.innerHTML = quest.answer2;
  opt3.innerHTML = quest.answer3;
  opt4.innerHTML = quest.answer4;
}



showQuiz();


let scoreDisplay = document.getElementById("score");
let score = 0;

option1.addEventListener("click", verifyAnswer);
option2.addEventListener("click", verifyAnswer);
option3.addEventListener("click", verifyAnswer);
option4.addEventListener("click", verifyAnswer);

function verifyAnswer() {
  let idCorrect = this.getAttribute("data-id");
  if (idCorrect == questionsRange[ongoingQuiz].correctA) {
   scoreDisplay.innerHTML = score++;
  }
  else {
    alert("incorrect");
  }
}
