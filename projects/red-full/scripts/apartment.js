
//  NAV color-change on scroll 
window.addEventListener('scroll', ()=> {

    const navRect = document.querySelector('nav').getBoundingClientRect();
    const apartmentInfoBox = document.querySelector('#apartment-info').getBoundingClientRect();
    let inIt = (navRect.bottom > apartmentInfoBox.bottom);
    
    if( !inIt ) {
        makeNavWhite()   
    }
    if (inIt) {
        makeNavBlack();
    }
});

//  section 1 -- hero --   scroll

const heroBg = document.getElementById('hero-bg');
const apartmentHero = document.getElementById('apartment-hero');

window.addEventListener('scroll', function() {
    let scrolled = window.scrollY;
    if(scrolled  < 20 ) {
        heroBg.style.transform = "translateY(0%)";
        heroBg.style.transition = "all 0s";
    }
    if(apartmentHero.getBoundingClientRect().bottom > 0) {
        heroBg.style.transform = "translateY("+ scrolled/50+"%)";
        heroBg.style.transition = "all "+ scrolled/500 +"s";
    }
});


//  section 3 -- offers  --  Bounce on scroll

const offersImg = document.querySelector('.offers-image');
const offersText = document.querySelector('.offers-text');

window.addEventListener('scroll', function() {
    bounceElOnScroll(offersImg.getBoundingClientRect(), 35, offersImg);
    bounceElOnScroll(offersText.getBoundingClientRect(), 30, offersText);
});


//  section 4 -- selection --  > bounce on scroll &&& slidershow on drag & scroll

const header = document.querySelector('.header-selection');

window.addEventListener('scroll', function() {
    bounceElOnScroll(header.getBoundingClientRect(), 100, header);
    bounceElOnScroll(slider.getBoundingClientRect(), 30, slider);
});

const slider = document.querySelector('.slideshow');

const scrollSpeed = 2;
let isDown = false;
let startX;
let scrollLeft = 0;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseup', () => {
    isDown = false;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return; 
    e.preventDefault();
    const newX = e.pageX - slider.offsetLeft;
    const walk = (newX - startX) * scrollSpeed;
    slider.scrollLeft = scrollLeft - walk;
});

const mq = window.matchMedia("(min-width: 980px)");

slider.addEventListener('mousewheel', (e) => {
    if (mq.matches) { 
        const delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)))
        slider.scrollLeft -= ( delta * 60 );
        e.preventDefault();
    }
});



//  section 5 -- text-picture  --  Bounce on scroll

const yellowChair = document.querySelector('.picture');

window.addEventListener('scroll', function() {
    bounceElOnScroll(yellowChair.getBoundingClientRect(), 20, yellowChair);
});


//  section 6 --  slidershow  block  ---

const slideshowSection = document.getElementById('slideshow');

window.addEventListener('scroll', function() {
    bounceElOnScroll(slideshowSection.getBoundingClientRect(), 20, slideshowSection);
});

const sliderBox = document.querySelector('.slider');
const buttons = document.querySelectorAll('.slide-index');

for(let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function(){
        sliderBox.style.transform = "translatex(-"+ i* 100+"%)";
        for(let i=0; i<buttons.length;i++) {
            buttons[i].classList.remove("on")
        }
        buttons[i].classList.add("on");
    } 
};

//  section  7 --  collection apartment  --- bounce

const collectionElement = document.querySelectorAll('.collection-set');

window.addEventListener('scroll', function() {
    bounceElOnScroll(collectionElement[0].getBoundingClientRect(),  30, collectionElement[0]);
    bounceElOnScroll(collectionElement[1].getBoundingClientRect(),  30, collectionElement[1]);
});
