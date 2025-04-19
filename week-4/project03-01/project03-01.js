// Filename: project03-01.js
// Application to calculate total order cost
// Author: Chris Newell
// Date: 19/04/2025

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
  return '$' + value.toFixed(2);
}

// Declare menuItems BEFORE trying to use it
let menuItems = document.getElementsByClassName('menuItem');

// Add click event listeners to each checkbox
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', calcTotal);
}

// Function to calculate the total cost
function calcTotal() {
  let orderTotal = 0;

  // Loop through checkboxes and sum checked values
  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].checked) {
      orderTotal += Number(menuItems[i].value);
    }
  }

  // Display the total
  document.getElementById('billTotal').innerHTML = formatCurrency(orderTotal);
}
