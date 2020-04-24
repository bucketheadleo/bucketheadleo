// remove transition aniamtions on resize 
let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 300);
});

//  menu on small
const menuBtn = document.querySelector('.menu-icon');
const menu = document.querySelector('.navigation');

function toggleMenu() {
    menu.classList.toggle('show');
    menu.style.transition = "0.5s ease-in-out"
    menuBtn.classList.toggle('switch');
    
    document.body.classList.toggle('prevent-body-scroll');
};


