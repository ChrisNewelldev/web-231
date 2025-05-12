"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Chris Newell
      Date:  05/11/2025 

      Filename: project06-03.js
*/
"use strict";

window.addEventListener("load", function () {
  const useShip = document.getElementById("useShip");

  useShip.addEventListener("click", function () {
    const fields = [
      "firstname",
      "lastname",
      "address1",
      "address2",
      "city",
      "state",
      "country",
      "code",
    ];

    if (useShip.checked) {
      fields.forEach((field) => {
        document.getElementById(field + "Bill").value = document.getElementById(
          field + "Ship"
        ).value;
      });
    } else {
      fields.forEach((field) => {
        document.getElementById(field + "Bill").value = "";
      });
    }
  });
});
