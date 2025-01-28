const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

//When you click the menu, the function will run.
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

//typing animation
const text = document.querySelector(".description");
const messages = [
    "an Software Engineering student.",
    "an artist.",
    "장수영."
];
let index = 0;

const textLoad = () => {
    text.textContent = messages[index];
    index = (index + 1) % messages.length; // Cycle through messages
};

setInterval(textLoad, 4000); // Change text every 4 seconds
textLoad(); // Initial load


// Unhide the content and jump to the right place on the page at the same time
function skipContent(className) {
    const skipSection = document.getElementsByClassName(className)[0];
    
    if (skipSection) {
      // Unhide the section if it is hidden
      skipSection.style.display = 'block';  // Or 'flex' if you are using flexbox layout, depending on your CSS.

      // Scroll to the section
    window.scrollTo({
    top: skipSection.offsetTop,  // Adjust to scroll to the top of the section
    behavior: 'smooth',
    });
    } else {
    console.error(`No element found with class name: ${className}`);
    }
}

  // Event listeners for each button
document.getElementById('skip-to-projects-in-About').addEventListener('click', () => {
    skipContent('skip-me'); // Skip the first section
});

document.getElementById('skip-to-contacts-in-About').addEventListener('click', () => {
    skipContent('skip-me-2'); // Skip the second section
});


