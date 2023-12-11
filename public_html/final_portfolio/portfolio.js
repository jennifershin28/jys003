function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

const phrases = ["Keep scrolling to find out more. . . :)"];
let currentPhrase = 0;
let currentLetter = 0;
const typingElement = document.getElementById('typing-effect');

function type() {
  // Current phrase to type out
  const phrase = phrases[currentPhrase];

  typingElement.textContent = phrase.slice(0, currentLetter);

  if (currentLetter < phrase.length) {
    currentLetter++;
  } else {
    setTimeout(() => {
      currentLetter = 0;
      currentPhrase = (currentPhrase + 1) % phrases.length;
    }, 2000); 
    return;
  }

  setTimeout(type, 250);
}

type();

var modal = document.getElementById("myModal");

var btn = document.getElementById("openModal");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function(event) {
  event.preventDefault(); // Prevent default link behavior
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
