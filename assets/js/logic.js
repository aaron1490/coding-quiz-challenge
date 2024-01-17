import { questions } from "./questions.js";

// Pseudocode for declarations/selectors:
// All required query/id/class selectors
var questionsScreenEl = document.getElementById('questions');
var startScreenEl = document.getElementById('start-screen');
var questionTitleEl = document.getElementById('question-title')


// Declare variables
var questionIndex = 0;

// Declare constants



// Pseudocode for quiz:

// Function for moving off landing page when start is clicked
function startQuiz() {
  console.log("Event Triggered: Start Quiz");
  questionsScreenEl.classList.remove("hide"); // show the questions screen
  startScreenEl.classList.add("hide"); // hide the start screen
  questionTitleEl.innerText = questionIndex + 1 + ".) " + questions[0].questionText;
  
}
// Function for starting the timer countdown from 60 seconds when the above is clicked

// Function for adding title of the question to the top
// Function for replacing the button text with the questions from the array

// Function for removing time if a wrong answer selected AND moving to next question
// Function for moving to next question if right answer is selected

// End screen gets unhidden and it gets displayed asking for user to input initials to log high score




const startBtn = document.getElementById('start');
startBtn.addEventListener('click', startQuiz); // event listener for start button on quiz




















// // Element selectors
// var startBtnEl = document.getElementById("start");
// var questionTitleEl = document.getElementById("question-title");
// var questionsScreenEl = document.getElementById("questions");
// var startScrenEl = document.getElementById("start-screen");
// var choicesEl = document.getElementById("choices");
// var answerBtn = document.getElementById("answer-buttons");
// var timerEl = document.getElementById("time");
// var scoreEl = document.getElementsByClassName("scores");
// var endScreenEl = document.getElementById("end-screen");
// var submitEl = document.getElementById("submit");


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

// function timeStart() {
//   timerEl.textContent = timeLeft;
//   var timerInterval = setInterval(function() {
//     timeLeft--;
//     timerEl.textContent = timeLeft;
//     // add timer that moves at intervial of -1000ms
//   }, 1000);
// };

// function timePenalty() {
//   // remove 10 secs of time when wrong answer event listener is selected
//   timeLeft -= 10;
// };

// function nextQuestion() {
//   // if any button is clicked, progress to the next question
//   currentQuestion += 1;
// };

// function currentQuestion() {

// }

// function wrongAnswer() {
//   // if wrong answer selected, remove 10 secs of time
//   timePenalty();
//   // display wrong answer message at the bottom
//   // move onto the next question
//   nextQuestion();
// };

// function rightAnswer() {
//   // if right answer selected, add points to score
//   // display right answer message at the bottom
//   // move onto the next question
//   nextQuestion();
// };

// // Display quiz title

// // Display quiz choices

// // Display timer with countdown

// // Timer penalty

// // set what happens when timer reaches 0

// // Submit hi-score to highscore screen