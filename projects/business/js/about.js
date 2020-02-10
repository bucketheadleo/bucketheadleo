
//             -----------           Tabs    -----------
const tabBtn = document.querySelectorAll(".tab-btn");
const tabs = document.querySelectorAll(".tab");

for(let i = 0; i <tabBtn.length; i++){
    
    tabBtn[i].onclick = function() {
        for( let i = 0; i < tabBtn.length; i++){
            tabBtn[i].classList.remove('activebtn');
            tabs[i].classList.remove('visible');
        }
        this.classList.add('activebtn');
        tabs[i].classList.add('visible');
    }
};

//             -----------           Accordion     p  -----------

const accordionBtns = document.getElementsByClassName("accordion");
const accordionContent = document.querySelectorAll(".accordion-content");
const plusMinus = document.querySelectorAll(".Index");

for ( let i = 0; i < accordionBtns.length; i++) {

    accordionBtns[i].onclick = function() {
        for( let i = 0; i < accordionBtns.length; i++){
            accordionBtns[i].classList.remove('is-open');
            accordionContent[i].classList.remove('open');
            plusMinus[i].textContent = '+';
        }
        this.classList.add('is-open');
        accordionContent[i].classList.add('open');
        plusMinus[i].textContent = '-';
  }
};

//             -----------          progress bar cyrcle     -----------

const circle = document.querySelectorAll('.circle-ring');
const radius = circle[0].r.baseVal.value;           
const circlePi = 2 * Math.PI * radius;     // also equals to dashharray in css | stroke-dasharray: 628; anu 100%progresi

            // circles progress
for (let i = 0; i < circle.length; i++ ) {
    circle[i].style.strokeDasharray = circlePi;  // მთლიან სიგრძეს ვაძლევთ
    circle[i].style.strokeDashoffset = circlePi; // მთლიან სიგრძეს ვაჭრით
}

function setProgress(percent, num) {
    const offset = circlePi - percent / 100 * circlePi;
    circle[num].style.strokeDashoffset = offset;
}

            // circles number count Up
const circleNumbs = document.querySelectorAll('.numb');

let once = 0, once2 = 0, once3 = 0, once4 = 0;
let repeatCount;

function countUp(el, count, speed){
    let a = 0;
    counter();
    function counter(){
        el.innerHTML = a + "%";
        if(a < count){
            a++;
            repeatCount = setTimeout(counter, speed)
        }
    }
};

window.addEventListener('scroll', function() {
    let windowH = window.innerHeight;
    if (circleNumbs[0].getBoundingClientRect().top + 20 < windowH && once < 1) {
        countUp(circleNumbs[0], 87, 30);
        setProgress(87, 0); 
        once++;
    }
    if (circleNumbs[1].getBoundingClientRect().top + 20 < windowH && once2 < 1) {
        countUp(circleNumbs[1], 75, 35);
        setProgress(75, 1); 
        once2++;
    }
    if (circleNumbs[2].getBoundingClientRect().top + 20 < windowH && once3 < 1) {
        countUp(circleNumbs[2], 63, 40);
        setProgress(63, 2); 
        once3++;
    }
    if (circleNumbs[3].getBoundingClientRect().top + 20 < windowH && once4 < 1) {
        countUp(circleNumbs[3], 42, 60);
        setProgress(42, 3); 
        once4++;
    }
});

