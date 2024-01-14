import { questions } from "./questions.js";

var startButtonEl = document.getElementById("start");
var questionTitleEl = document.getElementById("question-title");
var questionsScreenEl = document.getElementById("questions");
var startScrenEl = document.getElementById("start-screen");
var choicesEl = document.getElementById("choices");
var endScreenEl = document.getElementById("end-screen");
var submitEl = document.getElementById("submit");

startButtonEl.addEventListener("click", function () {
  var question = questions[0];
  questionTitleEl.innerText = question.questionText;
  questionsScreenEl.classList.remove("hide");
  startScrenEl.classList.add("hide");
});
