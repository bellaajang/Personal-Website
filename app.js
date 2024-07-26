const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

//When you click the menu, the function will run.
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

//typing animation
const text = document.querySelector(".description");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "an Engineering student.";
    }, 0);
    setTimeout(() => {
        text.textContent = "an artist.";
    }, 4000);
    setTimeout(() => {
        text.textContent = "장수영.";
    }, 8000);
}
textLoad();
setInterval(textLoad, 12000);