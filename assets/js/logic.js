import { questions } from "./questions.js";

// Pseudocode for declarations/selectors:
// All required query/id/class selectors
var questionsScreenEl = document.getElementById('questions');
var startScreenEl = document.getElementById('start-screen');
var questionTitleEl = document.getElementById('question-title')
var choicesEl = document.getElementById("choices");
var timerEl = document.getElementById("time");
var feedbackEl = document.getElementById("feedback");

var startBtn = document.getElementById('start');
var submitEl = document.getElementById("submit");



// Declare variables
var questionIndex = 0;
var score = 0;
var timeLeft = 60;
var currentQuestionIndex = 0;

// Declare constants






// Pseudocode for quiz:

// Function for moving off landing page when start is clicked
function startQuiz() {
  // function to switch off current landing page and move to questions page
  showQuestionPage();
  // start timer function
  timeStart();
  wrongAnswer();
  rightAnswer();
  nextQuestion();

}

function showQuestionPage() {
  // hide landing page and display first question
  startScreenEl.classList.add("hide"); // hide the start screen
  questionsScreenEl.classList.remove("hide"); // show the questions screen
  currentQuestion();
  
}

function currentQuestion() {
  // Clear existing choices
  choicesEl.innerHTML = "";

  // display current question
  var question = questions[currentQuestionIndex];
  var choices = questions[currentQuestionIndex].choices;

  // Display the question text
  currentQuestion = questionIndex + 1;
  questionTitleEl.innerText = `${currentQuestion}.) ${question.questionText}`;

  // Display the choices
  choices.forEach(function(choice) {
    const choiceBtn = document.createElement("button");
    choiceBtn.textContent = choice;  // display the choices
    choiceBtn.classList.add("btn");
    choicesEl.appendChild(choiceBtn);

    // add event listener to each choice
    choiceBtn.addEventListener("click", function(event) {
      // check if the correct answer is selected
    checkAnswer();
    })
  })
}

function checkAnswer(event) {
  // get selected choice
  const selectedChoice = event.target.textContent;

  // check if the correct answer is selected
  if (selectedChoice === questions.correctAnswer) {
    rightAnswer();
    } else {
    wrongAnswer();         
  }
}



function timeStart() {
  timerEl.textContent = timeLeft;
  setInterval(function() {
    timeLeft--;
    timerEl.textContent = timeLeft;
    // add timer that moves at intervial of -1000ms
  }, 1000);
};


function nextQuestion() {
  // if any button is clicked, progress to the next question
  currentQuestionIndex += 1;
};

function wrongAnswer() { 
  feedbackEl.classList.remove("hide");
  feedbackEl.innerText = "Wrong!";
  // if wrong answer selected, remove 10 secs of time
  timePenalty();
  // display wrong answer message at the bottom
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
  // display right answer message at the bottom
  feedbackEl.innerText = "Correct!";
  // move onto the next question
  nextQuestion();
};




// Adding event listeners
startBtn.addEventListener('click', startQuiz); // event listener for start button on quiz
choicesEl.addEventListener('click', rightAnswer, wrongAnswer); // event listener for answer buttons
// submitEl.addEventListener('click', submitScore); // event listener for submit button









// Function for starting the timer countdown from 60 seconds when the above is clicked

// Function for adding title of the question to the top
// Function for replacing the button text with the questions from the array

// Function for removing time if a wrong answer selected AND moving to next question
// Function for moving to next question if right answer is selected

// End screen gets unhidden and it gets displayed asking for user to input initials to log high score


























// // Element selectors

// var questionsScreenEl = document.getElementById("questions");
// var startScrenEl = document.getElementById("start-screen");
// var choicesEl = document.getElementById("choices");

// var timerEl = document.getElementById("time");
// var scoreEl = document.getElementsByClassName("scores");
// var endScreenEl = document.getElementById("end-screen");



// // Declaring variables
// var questionIndex = 0;
// var score = 0;
// var timeLeft = 60;
// var currentQuestionIndex = 0;

// // Declaring Constants
// const penalty = 10


// // Display quiz screen hiding landing page
// startBtnEl.addEventListener("click", function () {
//   var question = questions[0];
//   questionIndex = 0;
//   score = 0;
//   questionTitleEl.innerText = questionIndex + 1 + ".) " + question.questionText;
//   questionsScreenEl.classList.remove("hide"); // show the questions screen
//   startScreenEl.classList.add("hide"); // hide the start screen
//   nextQuestion();
//   currentQuestion();
//   // start timer function
//   timeStart();
//   wrongAnswer();
//   rightAnswer();
// });





// function currentQuestion() {

// }



// // Display quiz title

// // Display quiz choices

// // Display timer with countdown

// // Timer penalty

// // set what happens when timer reaches 0

// // Submit hi-score to highscore screen