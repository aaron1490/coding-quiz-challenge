import { questions } from "./questions.js";

// Element selectors
var startBtnEl = document.getElementById("start");
var questionTitleEl = document.getElementById("question-title");
var questionsScreenEl = document.getElementById("questions");
var startScrenEl = document.getElementById("start-screen");
var choicesEl = document.getElementById("choices");
var answerBtn = document.getElementById("answer-buttons")
var timerEl = document.getElementById("time");
var scoreEl = document.getElementsByClassName("scores");
var endScreenEl = document.getElementById("end-screen");
var submitEl = document.getElementById("submit");
var numberOfQuestions = questions.length;
var questionIndex = 0;
var score = 0;

startBtnEl.addEventListener("click", function () {
  var question = questions[0];
  questionIndex = 0;
  score = 0;
  questionTitleEl.innerText = question.questionText;
  questionsScreenEl.classList.remove("hide"); // show the questions screen
  startScrenEl.classList.add("hide"); // hide the start screen
  
});

function showQuestion() {
  let 
};