// Sample questions obtained from: https://www.guru99.com/javascript-interview-questions-answers.html and https://www.linkedin.com/pulse/sharpen-your-javascript-skills-multiple-choice-laurence-svekis--iulyc/?trk=article-ssr-frontend-pulse_more-articles_related-content-card and Xpert learning Assistant on Bootcamp dashboard

const questions = [
  {
    questionText: "What is 1 + '1'?",
    choices: [ 
      "2", 
      "11", 
      "NaN", 
      "Undefined" 
    ],
    correctAnswer: "11",
  },

  {
    questionText: "Which of these ISN'T a JavaScript datatype?",
    choices: [
      "Boolean", 
      "Number", 
      "String", 
      "Modulus"
    ],
    correctAnswer: "Modulus",
  },

  {
    questionText: "Which of the following is a invalid way to declare a variable in JavaScript?",
    choices: [
      "variable = 10;", 
      "var = 10;", 
      "let variable = 10;", 
      "const variable = 10;"
    ],
    correctAnswer: "const variable = 10;",
  },

  {
    questionText: "What is the correct syntax to add an event listener to a button element in JavaScript?",
    choices: [ 
      'button.addEventListener("click", myFunction());', 
      'button.on("click", myFunction());', 
      'button.onclick = myFunction();', 
      'button.click(myFunction());' 
    ],
    correctAnswer: 'button.addEventListener("click", myFunction());',
  },

  {
    questionText: "What is the difference between null and undefined in JavaScript?",
    choices: [ 
      "They are the same and can be used interchangeably", 
      "null represents an empty or non-existent value, while undefined indicates a variable that has been declared but not assigned a value", 
      "null indicates a variable that has been declared but not assigned a value, while undefined represents an empty or non-existent value", 
      "null is a number, while undefined is a boolean value"
    ],
    correctAnswer: "null represents an empty or non-existent value, while undefined indicates a variable that has been declared but not assigned a value",
  },
];

export { questions };