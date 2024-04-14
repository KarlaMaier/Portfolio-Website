/* enlarge text on hover */

document.addEventListener('DOMContentLoaded', function() {
    
    function increaseTextSize(className) {
      var textElements = document.querySelectorAll(className);
      textElements.forEach(function(textElement) {
        if (textElement) {
          textElement.addEventListener('mouseover', function() {
            textElement.style.fontSize = 'larger';
          });
          textElement.addEventListener('mouseout', function() {
            textElement.style.fontSize = ''; 
          });
        }
      });
    }
 
    increaseTextSize('.text1');
    increaseTextSize('.text2');
    increaseTextSize('.text3');
    increaseTextSize('.abouttext');
  });
  
  /*enlarge images on hover */
function toggleHoverClass() {
    var imageElements = document.querySelectorAll('.project-image');
    imageElements.forEach(function(imageElement) {
      imageElement.addEventListener('mouseover', function() {
        imageElement.classList.add('hovered');
      });
  
      imageElement.addEventListener('mouseout', function() {
        imageElement.classList.remove('hovered');
      });
    });
  }
 
  toggleHoverClass();
  