// JavaScript Document

// Code By Webdevtrick ( https://webdevtrick.com )
const items = document.querySelectorAll(".accordion a");

function toggleAccordion() {
  toggleAccordion.toggledButton;
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
	
  if (toggleAccordion.toggledButton == null) {
	  toggleAccordion.toggledButton = this;
  } else {
	  if (toggleAccordion.toggledButton != this) {
	  // Close the accordion.
	  toggleAccordion.toggledButton.classList.toggle('active');
	  toggleAccordion.toggledButton.nextElementSibling.classList.toggle('active');
	  
	  // Set new toggle button.
	  toggleAccordion.toggledButton = this;
	  } else {
		  toggleAccordion.toggledButton = null;
	  }
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));







// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openSurvey");
var btn2 = document.getElementById("openSurvey-depression");
var btn3 = document.getElementById("openSurvey-sexOffenders");
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
var offenderAnswer = document.getElementById("depression-answer1");
var offenderAnswerText = document.getElementById("depression-answer-text1");

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
var sexOffenderQuestions = [
  'Most men who commit sexual offenses do not know their victim.',
  'Most sexual assults are committed by someone of the same race as the victim.',
  'Most child sexual abusers use physical force or threat to gain compliance from their victims.',
  'Most child sexual abusers find their victims by frequenting such places as schoolyards and playgrounds.',
  'Only men commit sexual assult.',
  'Child sexual abusers are only attracted to children and are not capable of appropriate sexual relationships.',
  'Victims of sexual assault are harmed only when offenders use force.',
  'If a child does not tell anyone about the abuse, it is because he or she must have consented to it.',
  'It is common for both child and adult victims of sexual assault to wait some time before telling someone about the abuse.',
  'If someone sexually assaults an adult, he will not target children as victims, and if someone sexually assaults a child, he will not target adults.',
  'It helps the victim to talk about the abuse.',
  'Sexual gratification is often not a primary motivation for a rape offender.',
  'Offenders could stop their sexually violent behavior on their own if they wanted to.',
  'Men who rape do so because they cannot find a consenting sexual partner.',
  'Drugs and alcohol cause sexual offenses to occur.',
  'Victims of sexual assault often share some blame for the assault.',
  'If a victim does not say "no" or does not "fight back," it is not sexual assault.'
];
var sexOffenderAnswers = [
  'False.',
  'True.',
  'False.',
  'False.',
  'False.',
  'False.',
  'False.',
  'False.',
  'True.',
  'False.',
  'True.',
  'True.',
  'False.',
  'False.',
  'False.',
  'False.',
  'False.'
];
var sexOffenderText = [
  '90% of child victims know their offender, with almost half of the offenders being a family member. Of sexual assaults against people age 12 and up, approximately 80% of the victims know the offender.',
  'Most sexual assaults are committed by someone of the same race as the victim. An exception to this is that people who commit sexual assault against Native Americans are usually not Native American (American Indians and Crime, 1999).',
  'In the majority of cases, abusers gain access to their victims through deception and enticement, seldom using force. Abuse typically occurs within a long-term, ongoing relationship between the offender and victim and escalates over time.',
  'Most child sexual abusers offend against children whom they know and with whom they have established a relationship. Many sexual assaults of adult women are considered "confidence rapes," in that the offender knows the victim and has used that familiarity to gain access to her.',
  'While most sex offenders are male, sometimes sex offenses are committed by female offenders.',
  'While there is a small subset of child sexual abusers who are exclusively attracted to children, the majority of the individuals who sexually abuse children are (or have previously been) attracted to adults.',
  'More than any physical injuries the victim sustains, the violation of trust that accompanies most sexual assaults has been shown to dramatically increase the level of trauma the victim suffers. Emotional and psychological injuries cause harm that can last much longer than physical wounds.',
  'Children often do not tell for a variety of reasons including the offender\'s threats to hurt or kill someone the victim loves, as well as shame, embarrassment, wanting to protect the offender, feelings for the offender, fear of being held responsible or being punished, fear of being disbelieved, and fear of losing the offender who may be very important to the child or the child\'s family.',
  'It is common for victims of sexual assault to wait some time before telling someone. When the person was assaulted as a child, he or she may wait years or decades. The reasons for this are numerous: victims may want to deny the fact that someone they trusted could do this to them; they may want to just put it behind them; they may believe the myth that they caused the assault by their behavior; or they may fear how other people will react to the truth.',
  'Research and anecdotal evidence indicate that while some sex offenders choose only one type of victim (e.g., prepubescent girls, post-pubescent boys, adult women, etc.), others prey on different types of victims. Therefore, no assumptions should be made about an offender\'s victim preference and precautions should be taken regardless of his crime of conviction.',
  'The victim\'s recovery will be enhanced if she or he feels believed, supported, protected, and receives counseling following the disclosure that s/he was assaulted. However, sexual assault victims should always have the choice about when, with whom, and under what conditions they wish to discuss their experiences.',
  'While some offenders do seek sexual gratification from the act, sexual gratification is often not a primary motivation for a rape offender. Power, control, and anger are more likely to be the primary motivators.',
  'Wanting to change is usually not enough to be able to change the patterns that lead to sexual offenses. To create the motivation to change, some offenders need a variety of treatment and corrective interventions, and for others learning how to make the change in their own behavioral cycle of abuse is more effective.',
  'Studies suggest that most rape offenders are married or in consenting relationships.',
  'While drugs and alcohol are often involved in sexual assaults, drugs and alcohol do not cause sexual offenses to occur. Rather, drug and alcohol use may be a disinhibitor for the offender, while being under the influence may increase a potential victim\'s vulnerability.',
  'Adult and child victims of sexual abuse are never to blame for the assault, regardless of their behavior. Because of the age difference, children are unable to legally consent to sexual acts. They are often made to feel like willing participants, which further contributes to their shame and guilt.',
  'Sexual assault victims may not say "no" or not fight back for a variety of reasons including fear and confusion. Rape victims often report being "frozen" by fear during the assault, making them unable to fight back; other victims may not actively resist for fear of angering the assailant and causing him to use more force in the assault. Pressure to be liked and not be talked about negatively by a peer will sometimes cause adolescents or children to avoid fighting back or actively resisting.'
];
var survey = {
  questions: [],
  questionSelections: [],
  questionPoints: [],
  currentQuestion: 0,
};

// When the user clicks on the button, open the modal
btn.onclick = function() {
  // Make sure everything is emptied.
  survey.questions = [];
  survey.questionSelections = [];
  survey.questionPoints = [];
  survey.currentQuestion = 0;

  // Initialize the survey object.
  survey.questions = alcoholismQuestions;

  // Create the question selections array.
  for (i = 0; i < survey.questions.length; i++) {
    survey.questionSelections.push(null);
    survey.questionPoints.push(0);
  }

  // Hide the answers.
  offenderAnswer.style.display = "none";
  offenderAnswerText.style.display = "none";

  // Display the modal.
  modal.style.display = "block";

  // Set the first question.
  questionText.innerHTML = survey.questions[0];

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
  depressionQuestion3 = document.getElementById("depression-question1_2");
  depressionQuestion4 = document.getElementById("depression-question1_3");
  depressionQuestion5 = document.getElementById("depression-question1_4");
  depressionQuestion1.onclick = function(event) {
    // Set the selected option.
    survey.questionSelections[survey.currentQuestion] = "Yes";
    survey.questionPoints[survey.currentQuestion] = 1;
  
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
    survey.questionPoints[survey.currentQuestion] = 0;
  
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
  survey.questionPoints = [];
  survey.currentQuestion = 0;

  // Initialize the survey object.
  survey.questions = mentalHealthQuestions;

  // Create the question selections array.
  for (i = 0; i < survey.questions.length; i++) {
    survey.questionSelections.push(null);
    survey.questionPoints.push(0);
  }

  // Hide the offender answers.
  offenderAnswer.style.display = "none";
  offenderAnswerText.style.display = "none";

  // Display the modal.
  modal.style.display = "block";

  // Set the first question.
  questionText.innerHTML = survey.questions[0];

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
    survey.questionPoints[survey.currentQuestion] = 0;
  
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
    survey.questionPoints[survey.currentQuestion] = 1;
  
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
    survey.questionPoints[survey.currentQuestion] = 2;
  
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
    survey.questionPoints[survey.currentQuestion] = 3;
  
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
    survey.questionPoints[survey.currentQuestion] = 4;
  
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

btn3.onclick = function () {
  // Make sure everything is emptied.
  survey.questions = [];
  survey.questionSelections = [];
  survey.questionPoints = [];
  survey.currentQuestion = 0;

  // Initialize the survey object.
  survey.questions = sexOffenderQuestions;

  // Create the question selections array.
  for (i = 0; i < survey.questions.length; i++) {
    survey.questionSelections.push(null);
    survey.questionPoints.push(0);
  }

  // Hide the answers.
  offenderAnswer.style.display = "none";
  offenderAnswerText.style.display = "none";

  // Set the answers.
  offenderAnswer.innerText = sexOffenderAnswers[survey.currentQuestion];
  offenderAnswerText.innerText = sexOffenderText[survey.currentQuestion];

  // Display the modal.
  modal.style.display = "block";

  // Set the first question.
  questionText.innerHTML = survey.questions[0];

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
  depressionQuestion1Lbl.innerHTML = "<input type=\"checkbox\" name=\"depression-question1\" value=\"checkbox\" id=\"depression-question1_0\">True";
  depressionQuestion2Lbl.innerHTML = "<input type=\"checkbox\" name=\"depression-question2\" value=\"checkbox\" id=\"depression-question1_1\">False";
  depressionQuestion1 = document.getElementById("depression-question1_0");
  depressionQuestion2 = document.getElementById("depression-question1_1");
  depressionQuestion3 = document.getElementById("depression-question1_2");
  depressionQuestion4 = document.getElementById("depression-question1_3");
  depressionQuestion5 = document.getElementById("depression-question1_4");
  depressionQuestion1.onclick = function(event) {
    // Set the selected option.
    survey.questionSelections[survey.currentQuestion] = "True";
    survey.questionPoints[survey.currentQuestion] = 1;
  
    // Unselect all other checkboxes.
    depressionQuestion1.checked = true;
    depressionQuestion2.checked = false;
    depressionQuestion3.checked = false;
    depressionQuestion4.checked = false;
    depressionQuestion5.checked = false;

    // Show the answer.
    offenderAnswer.style.display = "";
    offenderAnswerText.style.display = "";
  
    // Enable the next button.
    nextQuestionBtn.disabled = false;
  };
  depressionQuestion2.onclick = function(event) {
    // Set the selected option.
    survey.questionSelections[survey.currentQuestion] = "False";
    survey.questionPoints[survey.currentQuestion] = 0;
  
    // Unselect all other checkboxes.
    depressionQuestion1.checked = false;
    depressionQuestion2.checked = true;
    depressionQuestion3.checked = false;
    depressionQuestion4.checked = false;
    depressionQuestion5.checked = false;

    // Show the answer.
    offenderAnswer.style.display = "";
    offenderAnswerText.style.display = "";
  
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

// Window loaded event.

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

    // Hide the answers.
    offenderAnswer.style.display = "none";
    offenderAnswerText.style.display = "none";

    // Update the answers.
    offenderAnswer.innerText = sexOffenderAnswers[survey.currentQuestion];
    offenderAnswerText.innerText = sexOffenderText[survey.currentQuestion];

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
      survey.questionSelections[survey.currentQuestion] == "Yes" ||
      survey.questionSelections[survey.currentQuestion] == "True") {
        depressionQuestion1.checked = true;
      } else if (survey.questionSelections[survey.currentQuestion] == "Rarely" ||
      survey.questionSelections[survey.currentQuestion] == "No" ||
      survey.questionSelections[survey.currentQuestion] == "False") {
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
    //alert("END OF SURVEY!");
    var totalPoints = 0;
    for (var i = 0; i < survey.questionSelections.length; i++) {               // Count up the points.
      totalPoints += survey.questionPoints[i];
    }
    if (survey.questionSelections[survey.currentQuestion-1] == "Yes" ||
    survey.questionSelections[survey.currentQuestion-1] == "No") {             // Send the user to the correct results page.
      var newWindow = window.open("http://www.swcounseling.org/test/survey-results-substance-abuse.html"); // Open the page.

      newWindow.onload = function() {
        var scoreHTML = newWindow.document.getElementById("survey-result");        // Update the score in the html.
        var contentHTML = newWindow.document.getElementById("survey-text");
      
        if (totalPoints <= 1) {                                                  // If <= 1...
          scoreHTML.innerHTML = "Total score of: " + totalPoints + "<br>(2 or More, Clinically Significant)"; // Update the content in the html.
          contentHTML.innerText = "If your total score is 2 or more, this alcohol screening test suggests that you are at risk of problem drinking or alcoholism. The authors of this test would recommend that you contact your doctor about your drinking.";
        }
        else if (totalPoints == 2 || totalPoints == 3) {                         // If is 2 or 3...
          scoreHTML.innerHTML = "Total score of: " + totalPoints + "<br>(2 or More, Clinically Significant)"; // Update the content in the html.
          contentHTML.innerText = "Your answers to this alcohol screening test suggest that you are at risk of problem drinking or alcoholism. The authors of this test would recommend that you contact your doctor about your drinking.";
        }
        else {                                                                   // If 4...
          scoreHTML.innerHTML = "Total score of: " + totalPoints + "<br>(2 or More, Clinically Significant)"; // Update the content in the html.
          contentHTML.innerText = "Your answers to this alcohol screening test suggest that you are at risk of problem drinking or alcoholism. The authors of this test would recommend that you contact your doctor about your drinking.";
        }
      };

      modal.style.display = "none";
    }
    else if (survey.questionSelections[survey.currentQuestion-1] == "Never" ||
    survey.questionSelections[survey.currentQuestion-1] == "Rarely" ||
    survey.questionSelections[survey.currentQuestion-1] == "Sometimes" ||
    survey.questionSelections[survey.currentQuestion-1] == "Often" ||
    survey.questionSelections[survey.currentQuestion-1] == "Always") {
      var newWindow = window.open("http://www.swcounseling.org/test/survey-results-mental-health.html"); // Open the page.

      newWindow.onload = function() {
        var scoreHTML = newWindow.document.getElementById("survey-result");        // Update the score in the html.
        var contentHTML = newWindow.document.getElementById("survey-text");
    
        if (totalPoints <= 30) { // If <= 30...
          scoreHTML.innerText = "Low Depression"; // Update the content in the html.
          contentHTML.innerText = "Your results indicate that you have none, or very few symptoms of Depression. If you notice that your symptoms aren't improving, you may want to bring them up with someone you trust. This screen is not meant to be a diagnosis. If you feel that you need someone to talk to, call our trained crisis workers at 307-352-6680.";
        }
        else if (totalPoints > 30) { // If > 30...
          scoreHTML.innerText = "High/Severe Depression"; // Update the content in the html.
          contentHTML.innerText = "Your results indicate that you are experiencing symptoms of severe Depression. Based on your answers, these symptoms could be greatly interfering with your relationships and the tasks of everyday life. It may be helpful to speak to a psychologist, or psychiatrist and explore further treatment options. This screen is not meant to be a diagnosis. If you feel that you need someone to talk to, our trained crisis workers are available 307-352-6680.";
        }
      };

      modal.style.display = "none";
    }
    else if (survey.questionSelections[survey.currentQuestion-1] == "True" ||
    survey.questionSelections[survey.currentQuestion-1] == "False") {
      // Open the page.
      // Update the score in the html.
      // Update the content in the html.
    }
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
      survey.questionSelections[survey.currentQuestion] == "Yes" ||
      survey.questionSelections[survey.currentQuestion] == "True") {
        depressionQuestion1.checked = true;
      } else if (survey.questionSelections[survey.currentQuestion] == "Rarely" ||
      survey.questionSelections[survey.currentQuestion] == "No" ||
      survey.questionSelections[survey.currentQuestion] == "False") {
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