/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Chris Newell
      Date: 19/04/2025

      Filename: project02-02.js
 */

function verifyForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  if (name && email && phone) {
    window.alert("Thank You!");
  } else {
    window.alert("Please fill in all fields.")
  }
};

document.getElementById("submit").addEventListener("click", verifyForm);
