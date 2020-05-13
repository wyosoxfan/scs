// JavaScript Document

// Code By Webdevtrick ( https://webdevtrick.com )
const items = document.querySelectorAll(".accordion a");

function toggleAccordion() {
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));







// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openSurvey");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/* FIND A WAY TO MAKE UNINITIALIZED PROPERTIES??? */
var Survey = {
  questions: [
    'HOW OFTEN DO YOU FEEL HOPELESS?',
    'QUESTION 2',
    'QUESTION 3',
    'QUESTION 4',
    'QUESTION 5',
    'QUESTION 6',
    'QUESTION 7',
    'QUESTION 8',
    'QUESTION 9',
    'QUESTION 10'
  ],
  questionSelections: [

  ],
  currentQuestion: 0,
};

var nextQuestionBtn = document.getElementById("next");
var backQuestionBtn = document.getElementById("back");
var questions = [
  'HOW OFTEN DO YOU FEEL HOPELESS?',
  'QUESTION 2',
  'QUESTION 3',
  'QUESTION 4',
  'QUESTION 5',
  'QUESTION 6',
  'QUESTION 7',
  'QUESTION 8',
  'QUESTION 9',
  'QUESTION 10'
];
var currentQuestion = 0;

nextQuestionBtn.onclick = function(event) {
  // Create an alert!
  //alert("Entering next question!");

  // Get necessary elements.
  var questionText = document.getElementById('questionText');
  var questionNumber = document.getElementById('question-number');

  // Update the currentQuestion index.
  currentQuestion++;

  // Update the question.
  questionText.innerText = questions[currentQuestion];

  // Update the question number.
  questionNumber.innerText = "Question " + (currentQuestion + 1) + " of 10";

  // Update the bullet points (if necessary).
}

backQuestionBtn.onclick = function(event) {
  // Create an alert!
  //alert("Entering previous question!");

  // Get necessary elements.
  var questionText = document.getElementById("questionText");
  var questionNumber = document.getElementById("question-number");

  // Update the currentQuestion index.
  currentQuestion--;

  // Update the question.
  questionText.innerText = questions[currentQuestion];

  // Update the question number.
  questionNumber.innerText = "Question " + (currentQuestion + 1) + " of 10";

  // Update the bullet points (if necessary).
}