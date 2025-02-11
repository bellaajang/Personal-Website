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
        window.scrollTo({
        top: skipSection.offsetTop + skipSection.offsetHeight -80,
        behavior: 'smooth',
        });
    } else {
        console.error(`No element found with class name: ${className}`);
    }
    }

  // Event listeners for each button
document.getElementById('skip-to-About').addEventListener('click', () => {
skipContent('skip-me'); // Skip the first section
});

document.getElementById('skip-to-Projects').addEventListener('click', () => {
skipContent('skip-me-2'); // Skip the second section
});

// Event listeners for each button
document.getElementById('skip-to-Contacts').addEventListener('click', () => {
skipContent('skip-me-3'); // Skip the first section
});

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".skip-me-2");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, { threshold: 0.3 }); // Trigger when 30% of element is visible
    
    observer.observe(container);
})