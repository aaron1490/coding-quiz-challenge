// Sample questions obtained from: https://www.interviewbit.com/javascript-mcq/

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
    questionText: "Javascript is an _______ language?",
    choices: [
      "Object-Oriented", 
      "Object-Based", 
      "Procedural", 
      "None of the Above"
    ],
    correctAnswer: "Object-Oriented",
  },

  {
    questionText: "Which of the following keywords is used to define a variable in Javascript?",
    choices: [ 
      'var', 
      'let', 
      'Both A and B', 
      'None of the above' 
    ],
    correctAnswer: 'Both A and B',
  },

  {
    questionText: "Which of the following methods can be used to display data in some form using Javascript?",
    choices: [ 
      "document.write()", 
      "console.log()", 
      "window.alert()", 
      "All of the above"
    ],
    correctAnswer: "All of the above",
  },

  {
    questionText: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
    choices: [ 
      "Boolean", 
      "Undefined", 
      "Object", 
      "Integer"
    ],
    correctAnswer: "Object",
  },

  {
    questionText: "Which function is used to serialize an object into a JSON string in Javascript?:",
    choices: [ 
      "stringify()", 
      "parse()", 
      "convert()", 
      "None of the above"
    ],
    correctAnswer: "stringify()",
  },

  {
    questionText: "Which of the following is NOT a Javascript framework?",
    choices: [ 
      "Node", 
      "Vue", 
      "React", 
      "Cassandra"
    ],
    correctAnswer: "Cassandra",
  },

  {
    questionText: "How to stop an interval timer in Javascript?",
    choices: [ 
      "clearInterval", 
      "clearTimer", 
      "intervalOver", 
      "None of the above"
    ],
    correctAnswer: "clearInterval",
  },

  {
    questionText: "How do we write a comment in javascript?",
    choices: [ 
      "/* */", 
      "//", 
      "#", 
      "<!--  -->"
    ],
    correctAnswer: "//",
  },
];

export { questions };