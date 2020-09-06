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
var btn2 = document.getElementById("openSurvey-depression");
var nextQuestionBtn = document.getElementById("next");
var backQuestionBtn = document.getElementById("back");
var depressionQuestion1 = document.getElementById("depression-question1_0");
var depressionQuestion2 = document.getElementById("depression-question1_1");
var depressionQuestion3 = document.getElementById("depression-question1_2");
var depressionQuestion4 = document.getElementById("depression-question1_3");
var depressionQuestion5 = document.getElementById("depression-question1_4");
var depressionQuestion1Lbl = document.getElementById("depression-question1_0-txt");
var depressionQuestion2Lbl = document.getElementById("depression-question1_1-txt");
var depressionQuestion3Lbl = document.getElementById("depression-question1_2-txt");
var depressionQuestion4Lbl = document.getElementById("depression-question1_3-txt");
var depressionQuestion5Lbl = document.getElementById("depression-question1_4-txt");

// Get the question number.
var questionNumber = document.getElementById("question-number");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var mentalHealthQuestions = [
  'HOW OFTEN DO YOU FEEL HOPELESS?',
  'HOW OFTEN DO YOU FEEL YOU\'VE LOST INTEREST IN MOST (OR ALL) OF THE THINGS AND ACTIVITIES THAT YOU USED TO FIND ENJOYABLE OR INTERESTING?',
  'HOW OFTEN DO YOU FEEL HELPLESS?',
  'HOW OFTEN DO YOU FEEL DOWN, BLUE, AND/OR DEJECTED?',
  'HOW OFTEN DO YOU FEEL YOU HAVE A LOT TO LOOK FORWARD TO?',
  'HOW OFTEN DO YOU FEEL TRAPPED WITH NO OPTIONS?',
  'HOW OFTEN DO YOU FEEL YOU\'VE LOST CONTROL OF YOUR LIFE AND FUTURE?',
  'HOW OFTEN DO YOU FEEL OVERWHELMED?',
  'HOW OFTEN DO YOU FEEL OPTIMISTIC?',
  'ARE YOU GENERALLY A PESSIMIST?'
];
var alcoholismQuestions = [
  'HAVE YOU EVER FELT YOU SHOULD CUT DOWN ON YOUR DRINKING?',
  'HAVE PEOPLE ANNOYED YOU BY CRITICIZING YOUR DRINKING?',
  'HAVE YOU EVER FELT GUILTY ABOUT YOUR DRINKING?',
  'HAVE YOU EVER HAD A DRINK FIRST THING IN THE MORNING (EYE OPENER)?'
];
var survey = {
  questions: [],
  questionSelections: [],
  currentQuestion: 0,
};

// When the user clicks on the button, open the modal
btn.onclick = function() {
  // Make sure everything is emptied.
  survey.questions = [];
  survey.questionSelections = [];
  survey.currentQuestion = 0;

  // Initialize the survey object.
  survey.questions = alcoholismQuestions;

  // Create the question selections array.
  for (i = 0; i < survey.questions.length; i++) {
    survey.questionSelections.push(null);
  }

  // Display the modal.
  modal.style.display = "block";

  // Update the question number.
  questionNumber.innerText = "Question " + (survey.currentQuestion + 1) + " of " + (survey.questions.length);

  // Set the checkboxes and text.
  depressionQuestion1.style.display = "";
  depressionQuestion2.style.display = "";
  depressionQuestion3.style.display = "none";
  depressionQuestion4.style.display = "none";
  depressionQuestion5.style.display = "none";
  depressionQuestion1Lbl.style.display = "";
  depressionQuestion2Lbl.style.display = "";
  depressionQuestion3Lbl.style.display = "none";
  depressionQuestion4Lbl.style.display = "none";
  depressionQuestion5Lbl.style.display = "none";
  depressionQuestion1Lbl.innerHTML = "<input type=\"checkbox\" name=\"depression-question1\" value=\"checkbox\" id=\"depression-question1_0\">Yes";
  depressionQuestion2Lbl.innerHTML = "<input type=\"checkbox\" name=\"depression-question2\" value=\"checkbox\" id=\"depression-question1_1\">No";
  depressionQuestion1 = document.getElementById("depression-question1_0");
  depressionQuestion2 = document.getElementById("depression-question1_1");
  depressionQuestion1.onclick = function(event) {
    // Set the selected option.
    survey.questionSelections[survey.currentQuestion] = "Yes";
  
    // Unselect all other checkboxes.
    depressionQuestion1.checked = true;
    depressionQuestion2.checked = false;
    depressionQuestion3.checked = false;
    depressionQuestion4.checked = false;
    depressionQuestion5.checked = false;
  
    // Enable the next button.
    nextQuestionBtn.disabled = false;
  };
  depressionQuestion2.onclick = function(event) {
    // Set the selected option.
    survey.questionSelections[survey.currentQuestion] = "No";
  
    // Unselect all other checkboxes.
    depressionQuestion1.checked = false;
    depressionQuestion2.checked = true;
    depressionQuestion3.checked = false;
    depressionQuestion4.checked = false;
    depressionQuestion5.checked = false;
  
    // Enable the next button.
    nextQuestionBtn.disabled = false;
  };
}

btn2.onclick = function() {
  // Make sure everything is emptied.
  survey.questions = [];
  survey.questionSelections = [];
  survey.currentQuestion = 0;

  // Initialize the survey object.
  survey.questions = mentalHealthQuestions;

  // Create the question selections array.
  for (i = 0; i < survey.questions.length; i++) {
    survey.questionSelections.push(null);
  }

  // Display the modal.
  modal.style.display = "block";

  // Update the question number.
  questionNumber.innerText = "Question " + (survey.currentQuestion + 1) + " of " + (survey.questions.length);

  // Set the checkboxes and text.
  depressionQuestion1.style.display = "";
  depressionQuestion2.style.display = "";
  depressionQuestion3.style.display = "";
  depressionQuestion4.style.display = "";
  depressionQuestion5.style.display = "";
  depressionQuestion1Lbl.style.display = "";
  depressionQuestion2Lbl.style.display = "";
  depressionQuestion3Lbl.style.display = "";
  depressionQuestion4Lbl.style.display = "";
  depressionQuestion5Lbl.style.display = "";
  depressionQuestion1Lbl.innerHTML = "<input type=\"checkbox\" name=\"depression-question1\" value=\"checkbox\" id=\"depression-question1_0\">Never";
  depressionQuestion2Lbl.innerHTML = "<input type=\"checkbox\" name=\"depression-question2\" value=\"checkbox\" id=\"depression-question1_1\">Rarely";
  depressionQuestion3Lbl.innerHTML = "<input type=\"checkbox\" name=\"depression-question3\" value=\"checkbox\" id=\"depression-question1_2\">Sometimes";
  depressionQuestion4Lbl.innerHTML = "<input type=\"checkbox\" name=\"depression-question4\" value=\"checkbox\" id=\"depression-question1_3\">Often";
  depressionQuestion5Lbl.innerHTML = "<input type=\"checkbox\" name=\"depression-question5\" value=\"checkbox\" id=\"depression-question1_4\">Always";
  depressionQuestion1 = document.getElementById("depression-question1_0");
  depressionQuestion2 = document.getElementById("depression-question1_1");
  depressionQuestion3 = document.getElementById("depression-question1_2");
  depressionQuestion4 = document.getElementById("depression-question1_3");
  depressionQuestion5 = document.getElementById("depression-question1_4");
  depressionQuestion1.onclick = function(event) {
    // Set the selected option.
    survey.questionSelections[survey.currentQuestion] = "Never";
  
    // Unselect all other checkboxes.
    depressionQuestion1.checked = true;
    depressionQuestion2.checked = false;
    depressionQuestion3.checked = false;
    depressionQuestion4.checked = false;
    depressionQuestion5.checked = false;
  
    // Enable the next button.
    nextQuestionBtn.disabled = false;
  };
  depressionQuestion2.onclick = function(event) {
    // Set the selected option.
    survey.questionSelections[survey.currentQuestion] = "Rarely";
  
    // Unselect all other checkboxes.
    depressionQuestion1.checked = false;
    depressionQuestion2.checked = true;
    depressionQuestion3.checked = false;
    depressionQuestion4.checked = false;
    depressionQuestion5.checked = false;
  
    // Enable the next button.
    nextQuestionBtn.disabled = false;
  };
  depressionQuestion3.onclick = function(event) {
    // Set the selected option.
    survey.questionSelections[survey.currentQuestion] = "Sometimes";
  
    // Unselect all other checkboxes.
    depressionQuestion1.checked = false;
    depressionQuestion2.checked = false;
    depressionQuestion3.checked = true;
    depressionQuestion4.checked = false;
    depressionQuestion5.checked = false;
  
    // Enable the next button.
    nextQuestionBtn.disabled = false;
  };
  depressionQuestion4.onclick = function(event) {
    // Set the selected option.
    survey.questionSelections[survey.currentQuestion] = "Often";
  
    // Unselect all other checkboxes.
    depressionQuestion1.checked = false;
    depressionQuestion2.checked = false;
    depressionQuestion3.checked = false;
    depressionQuestion4.checked = true;
    depressionQuestion5.checked = false;
  
    // Enable the next button.
    nextQuestionBtn.disabled = false;
  };
  depressionQuestion5.onclick = function(event) {
    // Set the selected option.
    survey.questionSelections[survey.currentQuestion] = "Always";
  
    // Unselect all other checkboxes.
    depressionQuestion1.checked = false;
    depressionQuestion2.checked = false;
    depressionQuestion3.checked = false;
    depressionQuestion4.checked = false;
    depressionQuestion5.checked = true;
  
    // Enable the next button.
    nextQuestionBtn.disabled = false;
  };
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

// Hide the back button.
backQuestionBtn.style.visibility = "hidden";

// Disable the next button.
nextQuestionBtn.disabled = true;

nextQuestionBtn.onclick = function(event) {
  // Show the previous button.
  backQuestionBtn.style.visibility = "";

  // Disable the next button.
  nextQuestionBtn.disabled = true;

  if (survey.currentQuestion + 1 < survey.questions.length){
    // Create an alert!
    //alert("Entering next question!");

    // Get the selected item.
    //alert(survey.questionSelections[survey.currentQuestion]);

    // Get necessary elements.
    var questionText = document.getElementById('questionText');
    questionNumber = document.getElementById('question-number');

    // Update the currentQuestion index.
    survey.currentQuestion++;

    // Check the current position to see if the next button label needs changing.
    if (survey.currentQuestion == survey.questions.length - 1){
      nextQuestionBtn.value = "SUBMIT";
    } else {
      nextQuestionBtn.value = "NEXT";
    }

    // Update the question.
    questionText.innerText = survey.questions[survey.currentQuestion];

    // Update the question number.
    questionNumber.innerText = "Question " + (survey.currentQuestion + 1) + " of " + (survey.questions.length);

    // Reset the checkboxes.
    depressionQuestion1.checked = false;
    depressionQuestion2.checked = false;
    depressionQuestion3.checked = false;
    depressionQuestion4.checked = false;
    depressionQuestion5.checked = false;

    if (survey.questionSelections[survey.currentQuestion] != null){
      // Restore the selected checkbox if possible.
      if (survey.questionSelections[survey.currentQuestion] == "Never" ||
      survey.questionSelections[survey.currentQuestion] == "Yes"){
        depressionQuestion1.checked = true;
      } else if (survey.questionSelections[survey.currentQuestion] == "Rarely" ||
      survey.questionSelections[survey.currentQuestion] == "No"){
        depressionQuestion2.checked = true;
      } else if (survey.questionSelections[survey.currentQuestion] == "Sometimes"){
        depressionQuestion3.checked = true;
      } else if (survey.questionSelections[survey.currentQuestion] == "Often"){
        depressionQuestion4.checked = true;
      } else if (survey.questionSelections[survey.currentQuestion] == "Always"){
        depressionQuestion5.checked = true;
      }

      // Enable the next button.
      nextQuestionBtn.disabled = false;
    }
  } else {
    // END OF SURVEY FUNCTIONALITY
  }
}

backQuestionBtn.onclick = function(event) {
  if (survey.currentQuestion > 0){
    // Create an alert!
    //alert("Entering previous question!");

    // Change the next button.
    nextQuestionBtn.value = "NEXT";

    // Get necessary elements.
    var questionText = document.getElementById("questionText");
    questionNumber = document.getElementById("question-number");

    // Update the currentQuestion index.
    survey.currentQuestion--;

    // Check the current item.
    //alert(survey.questionSelections[survey.currentQuestion]);

    // Update the question.
    questionText.innerText = survey.questions[survey.currentQuestion];

    // Update the question number.
    questionNumber.innerText = "Question " + (survey.currentQuestion + 1) + " of " + (survey.questions.length);

    // Reset the checkboxes.
    depressionQuestion1.checked = false;
    depressionQuestion2.checked = false;
    depressionQuestion3.checked = false;
    depressionQuestion4.checked = false;
    depressionQuestion5.checked = false;

    if (survey.questionSelections[survey.currentQuestion] != null){
      // Restore the selected checkbox if possible.
      if (survey.questionSelections[survey.currentQuestion] == "Never" ||
      survey.questionSelections[survey.currentQuestion] == "Yes"){
        depressionQuestion1.checked = true;
      } else if (survey.questionSelections[survey.currentQuestion] == "Rarely" ||
      survey.questionSelections[survey.currentQuestion] == "No"){
        depressionQuestion2.checked = true;
      } else if (survey.questionSelections[survey.currentQuestion] == "Sometimes"){
        depressionQuestion3.checked = true;
      } else if (survey.questionSelections[survey.currentQuestion] == "Often"){
        depressionQuestion4.checked = true;
      } else if (survey.questionSelections[survey.currentQuestion] == "Always"){
        depressionQuestion5.checked = true;
      }

      // Enable the next button.
      nextQuestionBtn.disabled = false;
    }

    if (survey.currentQuestion == 0){
      // Hide the previous button.
      backQuestionBtn.style.visibility = "hidden";
    }
  }
}