
//  -----------   hero  slider   -----------
const headerBG = document.getElementById('hero');
const heading = document.querySelector('.heading');
const bullets = document.getElementsByClassName('bullet');

let bgImgs = [`url('img/header-1.jpg') center/cover no-repeat`,`url('img/header-2.jpg') center/cover no-repeat`,`url('img/header-3.jpg') center/cover no-repeat`];
let  headings = ['think in motion', 'explore with passion', 'follow your dreams'];

let index = 0;
let timer;

//  auto-slide 
function autoSlide(){
    if(index == bgImgs.length){           
        index = 0; 
     } 
    moveslide(index);
    index++;            
    timer = setTimeout(autoSlide, 3500);  
};
autoSlide();

// on click
for(let s = 0; s < bullets.length; s++) {
    bullets[s].onclick = function() {
        moveslide(s);
        index = s + 1;
        clearTimeout(timer);
        timer = setTimeout(autoSlide,3500);
    }
};
// moving function
function moveslide(index) {
    headerBG.style.background = bgImgs[index];
    heading.classList.toggle('Sanimation'); 
    heading.textContent = headings[index];
    for(let i=0; i < bullets.length; i++) {
        bullets[i].classList.remove("on");
    }
    bullets[index].classList.add("on")
};

///         -----------      Section 2 >   countUp - s       -----------

const countUpItem = document.querySelectorAll(".countUp-item");
let once = 0, once2 = 0, once3 = 0, once4 = 0;
let repeatCount;

function countUp(el, count, speed){
    let a = 0;
    counter();
    function counter(){ 
        el.innerHTML = a;
        if(a < count){
            a += 3;
            repeatCount = setTimeout(counter, speed)
        }
    }
};
window.addEventListener('scroll', function() {
    let windowH = window.innerHeight;
    if (countUpItem[0].getBoundingClientRect().top + 30 < windowH && once < 1) {
        countUp(countUpItem[0], 2011, 0);
        once++;
    }
    if (countUpItem[1].getBoundingClientRect().top + 30 < windowH && once2 < 1) {
        countUp(countUpItem[1], 537, 18);
        once2++;
    }
    if (countUpItem[2].getBoundingClientRect().top + 30 < windowH && once3 < 1) {
        countUp(countUpItem[2], 145, 70);
        once3++;
    }
    if (countUpItem[3].getBoundingClientRect().top + 30 < windowH && once4 < 1) {
        countUp(countUpItem[3], 1810, 1);
        once4++;
    }
});

///             -----------       works section 4 >  SLIDER           -----------

const slider = document.querySelector('.people-slider');
const allIndex = document.querySelectorAll('.indexs');

let slideon = 0;
let timerslide;

// auto sliding
function autoSlider() {
    if(slideon == allIndex.length){
        slideon = 0;
    }
    moveslides(slideon);
    slideon++;
    timerslide = setTimeout(autoSlider, 1500)
};
autoSlider();

// on click
for(let s = 0; s < bullets.length; s++) {
    allIndex[s].onclick = function() {
        moveslides(s)
        slideon = s + 1;
        clearTimeout(timerslide);
        timerslide = setTimeout(autoSlider, 1500);
    }
};
// move function
function moveslides(index) {
    slider.style.transform = "translate(" + ( index * -100) + "%)";
    for( let i=0; i < allIndex.length; i++){
        allIndex[i].classList.remove("indexOn");
    }
    allIndex[index].classList.add("indexOn");
};

