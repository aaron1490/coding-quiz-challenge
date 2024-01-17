// Sample questions obtained from: https://www.guru99.com/javascript-interview-questions-answers.html and https://www.linkedin.com/pulse/sharpen-your-javascript-skills-multiple-choice-laurence-svekis--iulyc/?trk=article-ssr-frontend-pulse_more-articles_related-content-card and Xpert learning Assistant on Bootcamp dashboard

const questions = [
  {
    questionText: "What is 1 + '1'?",
    choices: [
      { text: "2", correct: false },
      { text: "11", correct: true },
      { text: "NaN", correct: false },
      { text: "Undefined", correct: false },
    ],
  },

  {
    questionText: "Which of these ISN'T a JavaScript datatype?",
    choices: [
      { text: "Boolean", correct: false },
      { text: "Number", correct: false },
      { text: "String", correct: false },
      { text: "Modulus", correct: true },
    ],
  },

  {
    questionText: "Which of the following is a valid way to declare a variable in JavaScript?",
    choices: [
      { text: "variable = 10;", correct: false },
      { text: "var = 10;", correct: true },
      { text: "let variable = 10;", correct: false },
      { text: "const variable = 10;", correct: false },
    ],
  },

  {
    questionText: "What is the correct syntax to add an event listener to a button element in JavaScript?",
    choices: [
      { text: 'button.addEventListener("click", myFunction());', correct: true },
      { text: 'button.on("click", myFunction());', correct: false },
      { text: 'button.onclick = myFunction();', correct: false },
      { text: 'button.click(myFunction());', correct: false },
    ],
  },

  {
    questionText: "What is the difference between null and undefined in JavaScript?",
    choices: [
      { text: "They are the same and can be used interchangeably", correct: false },
      { text: "null represents an empty or non-existent value, while undefined indicates a variable that has been declared but not assigned a value", correct: false },
      { text: "null indicates a variable that has been declared but not assigned a value, while undefined represents an empty or non-existent value", correct: true },
      { text: "null is a number, while undefined is a boolean value", correct: false },
    ],
  },
];

export { questions };