// all required query/id/class selectors
var highScoreList = document.getElementById("highscores");
var clearBtn = document.getElementById("clear");

// event listeners required
clearBtn.addEventListener("click", clearScores);

// function to clear scores that are saved locally
function clearScores() {
  window.localStorage.clear();
  highScoreList.innerHTML = "";
}

// function to display high scores
function displayHighScores() {
  var highScores = JSON.parse(window.localStorage.getItem("highScores")) || []; // get high scores from local storage
  highScores.sort(function (a, b) {
    // sort high scores in descending order
    return b.score + b.timeLeft - (a.score + a.timeLeft); //
  });
  highScores.forEach(function (score) {
    // display high scores
    var li = document.createElement("li"); // create list item
    var scoreSum = score.score + score.timeLeft;
    li.textContent = score.initials + " - " + scoreSum; // display initials and score
    highScoreList.appendChild(li); // append list item to high score list
  });
}

// call function to display high scores
displayHighScores();
