
// double click 
document.addEventListener("dblclick", function() {
    var currentTime = new Date();
    alert("The current time is: " + currentTime);
  });
  

//checkbox js

// Wait for the page to load
document.addEventListener("DOMContentLoaded", function() {

    // Get the checkbox and email input elements
    const checkbox = document.getElementById("toggle");
    const emailBox = document.getElementById("emailBox");
  
    // Add event listener for checkbox changes
    checkbox.addEventListener("change", function() {
  
      // If the checkbox is checked, show the email input box
      if (checkbox.checked) {
        emailBox.classList.remove("hidden");
      }
      // If the checkbox is unchecked, hide the email input box
      else {
        emailBox.classList.add("hidden");
      }
  
    });
  });
  