//  NAV color-change on scroll 


window.addEventListener('scroll', ()=> {

    const navRect = document.querySelector('nav').getBoundingClientRect();
    const footer = document.querySelector('#footer').getBoundingClientRect();
    let inIt = (navRect.bottom > footer.top );
    
    if( !inIt ) {
        makeNavWhite()    
    }
    if (inIt) {
        makeNavBlack();
    }
});

// SECTION 2 --- carousel-slider

const carouselSlider = document.querySelector('.carousel-slider');
const prevbtn = document.querySelector('#prevbtn');
const nextbtn = document.querySelector('#nextbtn');
let counter = 1;

const buttons = document.querySelectorAll('.slide-index');
let indexCounter = 0;

function slide(index, transitionTime) {
    carouselSlider.style.transition = transitionTime;
    carouselSlider.style.transform = 'translateX(' + (-100 * index) + '%)';
};

function calcIndexOnNext() {
    if(indexCounter == 3) {
        indexCounter = -1;
    }
    indexCounter++;
    buttons[indexCounter].classList.add("on");
};
function calcIndexOnPrev() {
    indexCounter--;
    if(indexCounter == -1) {
        indexCounter = 3;
    }
    buttons[indexCounter].classList.add("on");
};

nextbtn.addEventListener('click', ()=> {
    resetIndex();
    calcIndexOnNext()

    if(counter == 6) {  
        slide(2,  "none")
        setTimeout(function(){  
            slide(3, "0.6s ease-out");
            counter = 3; 
        }, 10);
    }else { 
        counter++;
        slide(counter, "0.6s ease-out");
    }
});
prevbtn.addEventListener('click', ()=> {
    resetIndex();
    calcIndexOnPrev()

    if(counter == 1) {  
        slide(5, "none");
        setTimeout(function(){ 
            slide(4, "0.6s ease-out");
            counter = 4; 
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
                slide(1, "0.6s ease-out");
                counter = 1;
                indexCounter = 0;
              break;
            case 1:
                slide(2, "0.6s ease-out");
                counter = 2;
                indexCounter = 1;
              break;
            case 2:
                slide(3, "0.6s ease-out");
                counter = 3;
                indexCounter = 2;
              break;
            case 3:
                slide(4, "0.6s ease-out");
                counter = 4;
                indexCounter = 3;
              break;
          }
    } 
};