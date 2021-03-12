
// section 4  - our services about page- 

const textsArr = document.querySelectorAll('.about-services__content-item');
const tabBtns = document.querySelectorAll('.our-services__btn');


tabBtns.forEach( (el, i) => {
    el.addEventListener('click', ()=> {
        //clear all
        textsArr.forEach( e=> {
            e.classList.remove('shown');
        });
        tabBtns.forEach( e=> {
            e.classList.remove('active');
        });
       
        // select one
        el.classList.add('active');
        textsArr[i].classList.add('shown');
    })
});