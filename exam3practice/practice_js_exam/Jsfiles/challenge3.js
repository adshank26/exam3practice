window.onload = function() {
    // Select the second figure element
    var figure = document.querySelectorAll('#thumbs figure')[1];
    
    // Get the caption text
    var caption = figure.querySelector('figcaption').textContent;
    
    // Show the alert box with the caption text
    alert(caption);
  }
  // Select the display and thumbnail elements
var display = document.querySelector('#display');
var thumbnails = document.querySelectorAll('.thumbnail');

// Loop through each thumbnail element
for (var i = 0; i < thumbnails.length; i++) {
  // Add a mouseover event listener
  thumbnails[i].addEventListener('mouseover', updateDisplay);
  
  // Add a mouseout event listener
  thumbnails[i].addEventListener('mouseout', resetDisplay);
}

// Update the display element
function updateDisplay(event) {
  // Get the image source and alt text
  var src = event.target.getAttribute('src');
  var alt = event.target.getAttribute('alt');

  // Update the display background and text content
  display.style.backgroundImage = 'url(' + src + ')';
  display.textContent = alt;

  // Hide the thumbnail image element
  event.target.style.opacity = 0;
}

// Reset the display element
function resetDisplay(event) {
  // Get the original background image and text content
  var originalSrc = thumbnails[0].getAttribute('src');
  var originalAlt = display.textContent;

  // Update the display background and text content
  display.style.backgroundImage = 'url(' + originalSrc + ')';
  display.textContent = originalAlt;

  // Show the thumbnail image element
  event.target.style.opacity = 1;
}
