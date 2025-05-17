"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Chris Newell
      Date:   05/17/2025

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function (e) {
  let pwd = document.getElementById("pwd").value;
  let feedback = document.getElementById("feedback");

  // Regular expression checks
  let lengthCheck = pwd.length >= 6;
  let upperCheck = /[A-Z]/.test(pwd);
  let numberCheck = /\d/.test(pwd);

  if (!lengthCheck || !upperCheck || !numberCheck) {
    feedback.textContent =
      "Password must be at least 6 characters long and contain at least one uppercase letter and one number.";
    e.preventDefault(); // Stop the form from submitting
  } else {
    feedback.textContent = ""; // Clear feedback if valid
  }
});
