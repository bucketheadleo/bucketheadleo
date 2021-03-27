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
    menuBtn.classList.toggle('switch');
    
    document.body.classList.toggle('prevent-body-scroll');
};


window.addEventListener('click', function(e) {
    if(e.target === menu) {
        menu.classList.remove('show');
        menuBtn.classList.remove('switch');
        document.body.classList.remove('prevent-body-scroll');
       
    }
})