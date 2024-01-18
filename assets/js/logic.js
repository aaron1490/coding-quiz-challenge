import { questions } from "./questions.js";

// Pseudocode for declarations/selectors:
// All required query/id/class selectors
var questionsScreenEl = document.getElementById('questions');
var startScreenEl = document.getElementById('start-screen');
var questionTitleEl = document.getElementById('question-title')
var choicesEl = document.getElementById("choices");
var timerEl = document.getElementById("time");
var feedbackEl = document.getElementById("feedback");
var endScreenEl = document.getElementById("end-screen");
var scoreEl = document.getElementById("final-score");
var startBtn = document.getElementById('start');
var submitEl = document.getElementById("submit");
var currentQuestionNumber;

// Declare variables
var questionIndex = 0;
var score = 0;
var timeLeft = 60;
var currentQuestionIndex = 0;

// Pseudocode for quiz:

// Function for moving off landing page when start is clicked
function startQuiz() {
  // function to switch off current landing page and move to questions page
  showQuestionPage();
  // start timer function
  timeStart();
}

function showQuestionPage() {
  // hide landing page and display first question
  startScreenEl.classList.add("hide"); // hide the start screen
  questionsScreenEl.classList.remove("hide"); // show the questions screen
  currentQuestion();
}

function currentQuestion() {
  // Clear existing choices
  console.log(currentQuestionIndex);
  choicesEl.innerHTML = "";

  // display current question
  var question = questions[currentQuestionIndex];
  var choices = questions[currentQuestionIndex].choices;

  // Display the question text
  currentQuestionNumber = currentQuestionIndex + 1;
  questionTitleEl.innerText = `${currentQuestionNumber}.) ${question.questionText}`;

  // Display the choices
  choices.forEach(function(choice) {
    const choiceBtn = document.createElement("button");
    choiceBtn.textContent = choice;  // display the choices
    choiceBtn.classList.add("btn");
    choicesEl.appendChild(choiceBtn);

  })
  
}



function checkAnswer(event) {
  var selectedChoice = event.target.textContent; // Use event.target.textContent to get the selected choice
  var correctAnswer = questions[currentQuestionIndex].correctAnswer; // declaring correctAnswer variable to the correct answer for the quiz

  if (selectedChoice === correctAnswer) {
    rightAnswer();
  } else {
    wrongAnswer();
  }
}


function timeStart() {
  timerEl.textContent = timeLeft;
  var interval = setInterval(function () {
    if (timeLeft > 0) {
      timeLeft--;
      timerEl.textContent = timeLeft;
    } else {
      clearInterval(interval);
      endQuiz();
    }
  }, 1000);
}


function nextQuestion() {
  // console.log(nextQuestion);
  currentQuestionIndex += 1;
  if (currentQuestionIndex < questions.length) {
    currentQuestion();
  } else {
    endQuiz();
  }
}

function wrongAnswer() { 
  // if wrong answer selected, remove 10 secs of time
  timePenalty();
  // display feedback message with a delay of 1000ms
  delayWrong();
  // move onto the next question
  nextQuestion();
};

function timePenalty() {
  // remove 10 secs of time when wrong answer event listener is selected
  timeLeft -= 10;
};
function rightAnswer() {
  // if right answer selected, add points to score
  score += 10;
  // display feedback message with a delay of 1000ms
  delayRight();
  // move onto the next question
  nextQuestion();
};

// created a function to display feedback for wrong answers, but also add a delay of 1 second when the feedback is displayed
function delayWrong() {
  feedbackEl.classList.remove("hide");
  feedbackEl.innerText = "Wrong!";
  setTimeout(function () {
    feedbackEl.classList.add("hide");
  }, 1000);
};
// created a function to display feedback for right answers, but also add a delay of 1 second when the feedback is displayed
function delayRight() {
  feedbackEl.classList.remove("hide");
  feedbackEl.innerText = "Correct!";
  setTimeout(function () {
    feedbackEl.classList.add("hide");
  }, 1000);
};


function endQuiz() {
  // stop timer
  clearInterval(timerEl);
  // hide questions screen and display end screen
  questionsScreenEl.classList.add("hide");
  endScreenEl.classList.remove("hide");
  // display score at the end screen
  scoreEl.innerText = score;
}

// Adding event listeners
startBtn.addEventListener('click', startQuiz); // event listener for start button on quiz
// add event listener to each choice
choicesEl.addEventListener("click", function (event) {
  checkAnswer(event);
});
// submitEl.addEventListener('click', submitScore); // event listener for submit button