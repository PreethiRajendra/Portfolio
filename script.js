function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}




document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector(".section__text__p2");
  const texts = ["CSE undergrad at VVCE", "Aspiring Software Engineer"]; // Array of texts to type
  let textIndex = 0;  // To keep track of the current text
  let charIndex = 0;  // To track the position of each character
  let isDeleting = false;  // To track whether text is being deleted
  
  function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      textElement.innerHTML = currentText.substring(0, charIndex--);
    } else {
      textElement.innerHTML = currentText.substring(0, charIndex++);
    }

    // When the typing or deleting effect is complete
    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => {
        isDeleting = true;  // Start deleting the text
        setTimeout(type, 500);  // Wait before starting to delete
      }, 1500);  // Delay after typing
    } else if (isDeleting && charIndex === 0) {
      textIndex = (textIndex + 1) % texts.length;  // Change to the next text
      isDeleting = false;  // Start typing again
    }
    
    // Set the speed of typing/deleting
    setTimeout(type, isDeleting ? 50 : 100);  // Adjust speed (100ms for typing, 50ms for deleting)
  }

  type();
});

// Function to toggle the flip effect on individual cards
function toggleCard(cardId) {
  const card = document.getElementById(cardId);
  card.classList.toggle('flip'); // Toggle the "flip" class to flip the card
}

//this is for experiences
let position = {};

function moveCarousel(id, direction) {
  const carousel = document.getElementById(id);
  if (!position[id]) position[id] = 0;
  const itemWidth = carousel.querySelector('.carousel-item').clientWidth;

  position[id] += direction;
  const maxPosition = carousel.childElementCount - 4;

  if (position[id] < 0) {
    position[id] = maxPosition;
  } else if (position[id] > maxPosition) {
    position[id] = 0;
  }

  carousel.style.transform = `translateX(-${position[id] * itemWidth}px)`;
}


