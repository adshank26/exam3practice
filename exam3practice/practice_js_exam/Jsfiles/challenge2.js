

// print the default value to the console
console.log("123 Main Street Ann Arbor, MI 48109");
// get the billing and home address textareas by their ids
const billingTextarea = document.getElementById("billing");
const homeTextarea = document.getElementById("home");

// get the checkbox element by its name
const checkbox = document.getElementsByName("useBilling")[0];

// add an event listener to the checkbox for when it is clicked
checkbox.addEventListener("click", function() {
  if (checkbox.checked) {
    // if the checkbox is checked, copy the billing address to the home address
    homeTextarea.value = billingTextarea.value;
    // disable the home address field
    homeTextarea.disabled = true;
  } else {
    // if the checkbox is unchecked, clear the home address and enable the field
    homeTextarea.value = "";
    homeTextarea.disabled = false;
  }
});
