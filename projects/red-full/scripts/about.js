//  NAV color-change on scroll 

makeNavBlack(); // start as black black

window.addEventListener('scroll', ()=> {

    const navRect = document.querySelector('nav').getBoundingClientRect();
    const greenSection = document.querySelector('.img-text').getBoundingClientRect();
    const yellowSection = document.querySelector('.press').getBoundingClientRect();
    let inIt = (navRect.bottom > greenSection.top && navRect.bottom < yellowSection.bottom);
    
    if( inIt ) {
        makeNavWhite()    
    }
    if (!inIt) {
        makeNavBlack();
    }
});


//  -- hero --   scroll

const heroBg = document.getElementById('hero');
const aboutUsHero = document.querySelector('.aboutus-hero');

window.addEventListener('scroll', function() {
    let scrolled = window.scrollY;
    if(scrolled  < 20 ) {
        heroBg.style.transform = "translateY(0%)";
        heroBg.style.transition = "all 0s";
    }
    if(aboutUsHero.getBoundingClientRect().bottom > 0) {
        heroBg.style.transform = "translateY("+ scrolled/50+"%)";
        heroBg.style.transition = "all "+ scrolled/500 +"s";
    }
});


//   accordions  - last section

const accordionH2 = document.querySelectorAll('.accordion-h2');
const accordionItem = document.querySelectorAll('.accordion-item');

for(let i = 0; i < accordionH2.length; i++) {
    accordionH2[i].onclick = function() {
        accordionItem[i].classList.toggle('active');
    }
};

