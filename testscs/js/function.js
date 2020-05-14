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

/* MODAL FUNCTIONALITY-----------------------------------------------------------------------*/
var survey = {
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
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  currentQuestion: 0,
};

var nextQuestionBtn = document.getElementById("next");
var backQuestionBtn = document.getElementById("back");
var depressionQuestion1 = document.getElementById("depression-question1_0");
var depressionQuestion2 = document.getElementById("depression-question1_1");
var depressionQuestion3 = document.getElementById("depression-question1_2");
var depressionQuestion4 = document.getElementById("depression-question1_3");
var depressionQuestion5 = document.getElementById("depression-question1_4");

depressionQuestion1.onclick = function(event) {
  // Set the selected option.
  survey.questionSelections[survey.currentQuestion] = "Never";

  // Unselect all other checkboxes.
  depressionQuestion2.checked = false;
  depressionQuestion3.checked = false;
  depressionQuestion4.checked = false;
  depressionQuestion5.checked = false;
}

depressionQuestion2.onclick = function(event) {
  // Set the selected option.
  survey.questionSelections[survey.currentQuestion] = "Rarely";

  // Unselect all other checkboxes.
  depressionQuestion1.checked = false;
  depressionQuestion3.checked = false;
  depressionQuestion4.checked = false;
  depressionQuestion5.checked = false;
}

depressionQuestion3.onclick = function(event) {
  // Set the selected option.
  survey.questionSelections[survey.currentQuestion] = "Sometimes";

  // Unselect all other checkboxes.
  depressionQuestion1.checked = false;
  depressionQuestion2.checked = false;
  depressionQuestion4.checked = false;
  depressionQuestion5.checked = false;
}

depressionQuestion4.onclick = function(event) {
  // Set the selected option.
  survey.questionSelections[survey.currentQuestion] = "Often";

  // Unselect all other checkboxes.
  depressionQuestion1.checked = false;
  depressionQuestion2.checked = false;
  depressionQuestion3.checked = false;
  depressionQuestion5.checked = false;
}

depressionQuestion5.onclick = function(event) {
  // Set the selected option.
  survey.questionSelections[survey.currentQuestion] = "Always";

  // Unselect all other checkboxes.
  depressionQuestion1.checked = false;
  depressionQuestion2.checked = false;
  depressionQuestion3.checked = false;
  depressionQuestion4.checked = false;
}

nextQuestionBtn.onclick = function(event) {
  if (survey.currentQuestion + 1 < survey.questions.length){
    // Create an alert!
    //alert("Entering next question!");

    // Get the selected item.
    //alert(survey.questionSelections[survey.currentQuestion]);

    // Get necessary elements.
    var questionText = document.getElementById('questionText');
    var questionNumber = document.getElementById('question-number');

    // Update the currentQuestion index.
    survey.currentQuestion++;

    // Update the question.
    questionText.innerText = survey.questions[survey.currentQuestion];

    // Update the question number.
    questionNumber.innerText = "Question " + (survey.currentQuestion + 1) + " of 10";

    // Reset the checkboxes.
    depressionQuestion1.checked = false;
    depressionQuestion2.checked = false;
    depressionQuestion3.checked = false;
    depressionQuestion4.checked = false;
    depressionQuestion5.checked = false;

    if (survey.questionSelections[survey.currentQuestion] != null){
      // Restore the selected checkbox if possible.
      if (survey.questionSelections[survey.currentQuestion] == "Never"){
        depressionQuestion1.checked = true;
      } else if (survey.questionSelections[survey.currentQuestion] == "Rarely"){
        depressionQuestion2.checked = true;
      } else if (survey.questionSelections[survey.currentQuestion] == "Sometimes"){
        depressionQuestion3.checked = true;
      } else if (survey.questionSelections[survey.currentQuestion] == "Often"){
        depressionQuestion4.checked = true;
      } else if (survey.questionSelections[survey.currentQuestion] == "Always"){
        depressionQuestion5.checked = true;
      }
    }
  } else {
    // END OF SURVEY FUNCTIONALITY
  }
}

backQuestionBtn.onclick = function(event) {
  if (survey.currentQuestion > 0){
    // Create an alert!
    //alert("Entering previous question!");

    // Get necessary elements.
    var questionText = document.getElementById("questionText");
    var questionNumber = document.getElementById("question-number");

    // Update the currentQuestion index.
    survey.currentQuestion--;

    // Check the current item.
    //alert(survey.questionSelections[survey.currentQuestion]);

    // Update the question.
    questionText.innerText = survey.questions[survey.currentQuestion];

    // Update the question number.
    questionNumber.innerText = "Question " + (survey.currentQuestion + 1) + " of 10";

    // Reset the checkboxes.
    depressionQuestion1.checked = false;
    depressionQuestion2.checked = false;
    depressionQuestion3.checked = false;
    depressionQuestion4.checked = false;
    depressionQuestion5.checked = false;

    if (survey.questionSelections[survey.currentQuestion] != null){
      // Restore the selected checkbox if possible.
      if (survey.questionSelections[survey.currentQuestion] == "Never"){
        depressionQuestion1.checked = true;
      } else if (survey.questionSelections[survey.currentQuestion] == "Rarely"){
        depressionQuestion2.checked = true;
      } else if (survey.questionSelections[survey.currentQuestion] == "Sometimes"){
        depressionQuestion3.checked = true;
      } else if (survey.questionSelections[survey.currentQuestion] == "Often"){
        depressionQuestion4.checked = true;
      } else if (survey.questionSelections[survey.currentQuestion] == "Always"){
        depressionQuestion5.checked = true;
      }
    }
  }
}