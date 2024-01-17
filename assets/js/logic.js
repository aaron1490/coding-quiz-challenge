import { questions } from "./questions.js";

// Element selectors
var startBtnEl = document.getElementById("start");
var questionTitleEl = document.getElementById("question-title");
var questionsScreenEl = document.getElementById("questions");
var startScrenEl = document.getElementById("start-screen");
var choicesEl = document.getElementById("choices");
var answerBtn = document.getElementById("answer-buttons");
var timerEl = document.getElementById("time");
var scoreEl = document.getElementsByClassName("scores");
var endScreenEl = document.getElementById("end-screen");
var submitEl = document.getElementById("submit");


// Declaring variables
var questionIndex = 0;
var score = 0;
var timeLeft = 60;
var currentQuestionIndex = 0;

// Declaring Constants
const penalty = 10


// Display quiz screen hiding landing page
startBtnEl.addEventListener("click", function () {
  var question = questions[0];
  questionIndex = 0;
  score = 0;
  questionTitleEl.innerText = questionIndex + 1 + ".) " + question.questionText;
  questionsScreenEl.classList.remove("hide"); // show the questions screen
  startScrenEl.classList.add("hide"); // hide the start screen
  nextQuestion();
  currentQuestion();
  // start timer function
  timeStart();
  wrongAnswer();
  rightAnswer();
});

function timeStart() {
  timerEl.textContent = timeLeft;
  var timerInterval = setInterval(function() {
    timeLeft--;
    timerEl.textContent = timeLeft;
    // add timer that moves at intervial of -1000ms
  }, 1000);
};

function timePenalty() {
  // remove 10 secs of time when wrong answer event listener is selected
  timeLeft -= 10;
};

function nextQuestion() {
  // if any button is clicked, progress to the next question
  currentQuestion += 1;
};

function currentQuestion() {

}

function wrongAnswer() {
  // if wrong answer selected, remove 10 secs of time
  timePenalty();
  // display wrong answer message at the bottom
  // move onto the next question
  nextQuestion();
};

function rightAnswer() {
  // if right answer selected, add points to score
  // display right answer message at the bottom
  // move onto the next question
  nextQuestion();
};

// Display quiz title

// Display quiz choices

// Display timer with countdown

// Timer penalty

// set what happens when timer reaches 0

// Submit hi-score to highscore screen