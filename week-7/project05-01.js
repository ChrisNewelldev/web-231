"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Chris Newell
      Date: 05/03/2025

      Filename: project05-01.js
*/

// Constant for the time limit in seconds
const timeLimit = 20;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuizBtn = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = timeLimit;
let timeLeft = timeLimit;

// Timer ID for setInterval
let timeID;

// Node list of the quiz input fields
let questionList = document.querySelectorAll("div#quiz input");

/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
  let correctCount = 0;

  for (let i = 0; i < questionList.length; i++) {
    if (questionList[i].value === correctAnswers[i]) {
      correctCount++;
      questionList[i].className = "";
    } else {
      questionList[i].className = "wronganswer";
    }
  }

  return correctCount;
}

/*------------- Function to update the quiz clock ----------------*/
function countdown() {
  timeLeft--;
  quizClock.value = timeLeft;

  if (timeLeft === 0) {
    clearInterval(timeID);

    let totalCorrect = checkAnswers();

    if (totalCorrect === correctAnswers.length) {
      alert("Congratulations! You got all the answers correct!");
    } else {
      alert(
        "You got " +
          totalCorrect +
          " out of " +
          correctAnswers.length +
          " correct."
      );
    }

    // Reset for next run
    timeLeft = timeLimit;
    quizClock.value = timeLimit;
    overlay.className = "hidequiz";
  }
}

/*------------- Start Quiz Button Handler ----------------*/
startQuizBtn.onclick = function () {
  overlay.className = "showquiz";
  timeLeft = timeLimit;
  quizClock.value = timeLeft;

  for (let i = 0; i < questionList.length; i++) {
    questionList[i].value = "";
    questionList[i].className = "";
  }

  clearInterval(timeID);
  timeID = setInterval(countdown, 1000);
};
