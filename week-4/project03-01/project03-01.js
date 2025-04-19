/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Chris Newell
      Date: 19/04/2025

      Filename: project03-01.js
*/

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
  return '$' + value.toFixed(2);
}

// Get all the elements with the class "menuItem"
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', calcTotal);
}

// Function to calculate the total cost
function calcTotal() {
  let orderTotal = 0;

  // loop through all the menu items and add their values if checked
  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].checked) {
      orderTotal += Number(menuItems[i].value);
    }
  }
  console.log('checkbox clicked');
  // Update the page with the formatted total
  document.getElementById('billTotal').innerHTML = formatCurrency(orderTotal);
}

let menuItems = document.getElementsByClassName('menuItem');

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', calcTotal);
}
