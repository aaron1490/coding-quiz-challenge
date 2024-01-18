// all required query/id/class selectors
var highScoreList = document.getElementById("highscores");
var clearBtn = document.getElementById("clear");


// event listeners required
clearBtn.addEventListener("click", clearScores);

// function to clear scores
function clearScores() {
    window.localStorage.clear();
    highScoreList.innerHTML = "";
};

// function to display high scores
function displayHighScores() {
    var highScores = JSON.parse(window.localStorage.getItem("highScores")) || []; // get high scores from local storage
    highScores.sort(function(a, b) { // sort high scores in descending order
        return b.score - a.score;
    });
    highScores.forEach(function(score) { // display high scores
        var li = document.createElement("li"); // create list item
        li.textContent = score.initials + " - " + score.score; // display initials and score
        highScoreList.appendChild(li); // append list item to high score list
    });
};

displayHighScores();