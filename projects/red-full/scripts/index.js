
// index.html

//  NAV color-change on scroll 
            
window.addEventListener('scroll', ()=> {

    const navRect = document.querySelector('nav').getBoundingClientRect();

    const newsRect = document.getElementById('news').getBoundingClientRect();
    const collectionS = document.getElementById('section-collection').getBoundingClientRect();

    let beWhite = (navRect.bottom > newsRect.top && navRect.bottom < newsRect.bottom);
    let beBlack =  (navRect.top > collectionS.top );

    if( !beBlack || beWhite ) {
        makeNavWhite()       
    }
    if (beBlack && !beWhite) {
        makeNavBlack();
    }
});


// SECTION 1 --  hero --  SLIDER
const slides = document.querySelectorAll('.figure-slide');
const buttons = document.querySelectorAll('.slide-index');
const animateText = document.querySelectorAll('.text');

for(let i = 0; i < buttons.length; i++) {

    buttons[i].onclick = function(){
        let index = i;
        for(let i=0; i<slides.length; i++){
            slides[i].style.transform = "translatex("+ index * -100 +"%)";
            buttons[i].classList.remove("on")
            animateText[i].classList.remove('animate-text');
        }
        buttons[i].classList.add("on");
        animateText[i].classList.add('animate-text');
    } 
};
            // scrolls - translate
const hero = document.getElementById('hero');
const figureImg = document.querySelectorAll('.figure-bg');

window.addEventListener('scroll', function() {
    let scrolled = window.scrollY;
    if(scrolled  < 10 ) {
        for(i=0; i< slides.length; i++){
            figureImg[i].style.transform = "translateY(0%)";
            figureImg[i].style.transition = "all 0s";
        }
    }
    if(hero.getBoundingClientRect().bottom > 0) {
        for(i=0; i< slides.length; i++){
            figureImg[i].style.transform = "translateY(" + scrolled/60 +"%)";
            figureImg[i].style.transition = "all "+ scrolled/550 +"s";
        }
    }
});

//  section 2 --  collection  --- bounce

const collectionElement = document.querySelectorAll('.collection-set');

window.addEventListener('scroll', function() {
    bounceElOnScroll(collectionElement[0].getBoundingClientRect(),  25, collectionElement[0]);
    bounceElOnScroll(collectionElement[1].getBoundingClientRect(),  25, collectionElement[1]);
});

// SECTION 3 --- carousel-slider

const carouselSlider = document.querySelector('.carousel-slider');
const prevbtn = document.querySelector('#prevbtn');
const nextbtn = document.querySelector('#nextbtn');
let counter = 1;

function slide(index, transitionTime) {
    carouselSlider.style.transition = transitionTime;
    carouselSlider.style.transform = 'translateX(' + (-100 * index) + '%)';
};

nextbtn.addEventListener('click', ()=> {
    if(counter == 4) {  
        slide(1, "none" );                   // go back to original second from fake second
        setTimeout(function(){              // than slide to original third 
            slide(2, "0.6s ease-in-out");
            counter = 2; 
        }, 10);
    }else {  
        counter++;
        slide(counter, "0.6s ease-in-out");
    }
});
prevbtn.addEventListener('click', ()=> {
    if(counter == 1) {  
        slide(4, "none" );                  // go back to fake second from original second
        setTimeout(function(){              // than slide to fake first 
            slide(3, "0.6s ease-in-out");
            counter = 3; 
        }, 10);
    }else {  
        counter--;
        slide(counter, "0.6s ease-in-out");
    }
});

            // scrolls      
const blockquoteSpans = document.querySelector('#quote-spans');  
const discoverLink = document.querySelector('.discover-link');
const carouselSliderContainer = document.querySelector('.carousel-container');

window.addEventListener('scroll', function() {
    bounceElOnScroll(blockquoteSpans.getBoundingClientRect(), 40, blockquoteSpans);
    bounceElOnScroll(discoverLink.getBoundingClientRect(), 100, discoverLink);
    bounceElOnScroll(carouselSliderContainer.getBoundingClientRect(), 45, carouselSliderContainer);
   
});

// SECTION 4 -- our-must haves  -- scrolls 

const sectionHeader = document.querySelector('.must-haves-h2'); 
const productItems = document.querySelectorAll('.product-item');
const allOurProductLink = document.querySelector('.all-product-link'); 

window.addEventListener('scroll', function() {

    for(let i=0; i<productItems.length; i++) { 
        bounceElOnScroll(productItems[i].getBoundingClientRect(), 100, productItems[i]);
    };
    bounceElOnScroll(sectionHeader.getBoundingClientRect(), 400, sectionHeader);
    bounceElOnScroll(allOurProductLink.getBoundingClientRect(), 600, allOurProductLink);
   
});


// SECTION 6 && Footer.top-bar --- scrolls 

const newsInfo = document.querySelector('.information'); 
const newsPicture1 = document.querySelector('.first-p'); 
const newsPicture2 = document.querySelector('.second-p'); 

window.addEventListener('scroll', function() {
    
    bounceElOnScroll(newsInfo.getBoundingClientRect(), 40, newsInfo);
    bounceElOnScroll(newsPicture1.getBoundingClientRect(), 40, newsPicture1);
    bounceElOnScroll(newsPicture2.getBoundingClientRect(), 40, newsPicture2);  
});