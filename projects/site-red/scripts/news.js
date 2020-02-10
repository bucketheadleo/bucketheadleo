//  NAV color-change on scroll 
window.addEventListener('scroll', ()=> {

    const navRect = document.querySelector('nav').getBoundingClientRect();
    const heroBoxRect = document.getElementById('magazine-hero').getBoundingClientRect();
    let inIt = (navRect.bottom > heroBoxRect.bottom);
    
    if( !inIt ) {
        makeNavWhite()      
    }
    if (inIt) {
        makeNavBlack();
    }
});

// news --- hero  carousel-slider

const carouselSlider = document.querySelector('.carousel-slider');
const animateText = document.querySelectorAll('.text');
const prevbtn = document.querySelector('#prevbtn');
const nextbtn = document.querySelector('#nextbtn');
let counter = 1;

const buttons = document.querySelectorAll('.slide-index');
let indexCounter = 0;

function slide(index, transitionTime) {
    carouselSlider.style.transition = transitionTime;
    carouselSlider.style.transform = 'translateX(' + (-100 * index) + '%)';
}

function calcIndexOnNext() {
    if(indexCounter == 2) {
        indexCounter = -1;
    }
    indexCounter++;
    buttons[indexCounter].classList.add("on");
};
function calcIndexOnPrev() {
    indexCounter--;
    if(indexCounter == -1) {
        indexCounter = 2;
    }
    buttons[indexCounter].classList.add("on");
};


function animateTexts(indx) {
    for(let i=0; i< animateText.length; i++){
        animateText[i].classList.remove('animate-text');
    }
    animateText[indx].classList.add('animate-text');
};


nextbtn.addEventListener('click', ()=> {
    animateTexts(counter+1)
    resetIndex();
    calcIndexOnNext()

    if(counter == 4) {  
        animateTexts(2)
        slide(1,  "none")
        setTimeout(function(){  
            slide(2, "0.6s ease-out");
            counter = 2; 
        }, 10);
    }else { 
        counter++;
        slide(counter, "0.6s ease-out");
    }
});

prevbtn.addEventListener('click', ()=> {
    animateTexts(counter-1)
    resetIndex();
    calcIndexOnPrev()

    if(counter == 1) {  
        animateTexts(3)
        slide(4, "none");
        setTimeout(function(){ 
            slide(3, "0.6s ease-out");
            counter = 3; 
        }, 10);
    }else {  
        counter--;
        slide(counter, "0.6s ease-out");
    }
});
                // click on indexs --   carousel-slider

function resetIndex(){
    for(let i=0; i<buttons.length;i++) {
        buttons[i].classList.remove("on")
    }
};
for(let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function(){
        resetIndex()
        buttons[i].classList.add("on");
        
        switch (i) {
            case 0:
                animateTexts(1)
                slide(1, "0.6s ease-out");
                counter = 1;
                indexCounter = 0;
              break;
            case 1:
                animateTexts(2)
                slide(2, "0.6s ease-out");
                counter = 2;
                indexCounter = 1;
              break;
            case 2:
                animateTexts(3)
                slide(3, "0.6s ease-out");
                counter = 3;
                indexCounter = 2;
              break;
          }
    } 
};

//  element bounces 
const heroBox = document.getElementById('magazine-hero');
const productItems = document.querySelectorAll('.item');
const sectionCreations = document.getElementById('our-creations');


window.addEventListener('scroll', function() {
    bounceElOnScroll(heroBox.getBoundingClientRect(), 20, heroBox);

    for(let i=0; i<productItems.length; i++) {
        bounceElOnScroll(productItems[i].getBoundingClientRect(), 50, productItems[i]);
    }

    bounceElOnScroll(sectionCreations.getBoundingClientRect(), 15, sectionCreations);
});


