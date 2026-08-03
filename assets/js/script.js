window.addEventListener('scroll', function () {
  const navbar = document.getElementsByClassName('nav-container')[0];
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


// Typing Animation with Multiple Words
const typedTextElement = document.getElementById('typed-text');

const words = [
    'Product Architect',
    'Product Designer',
    'Product Strategist',
    'UX Researcher',
    'UX Writer',
    'LX Designer',
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        // Remove characters
        typedTextElement.textContent = currentWord.substring(0, charIndex--);
    } else {
        // Add characters
        typedTextElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    // Determine typing speed
    let typingSpeed = isDeleting ? 80 : 150;

    // When word is complete, wait before deleting
    if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 2000; // Pause at end of word
        isDeleting = true;
    }
    // When word is fully deleted, move to next word
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Loop to next word
        typingSpeed = 500; // Pause before typing next word
    }

    setTimeout(typeEffect, typingSpeed);
}

// Start the typing effect when page loads
document.addEventListener('DOMContentLoaded', function() {
    if (typedTextElement) typeEffect();
});
