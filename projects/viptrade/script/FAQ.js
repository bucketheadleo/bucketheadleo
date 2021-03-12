
// faq accordions  open / close
const accordionBtn = document.querySelectorAll('.accordion-btn');
const accordionText = document.querySelectorAll('.faq-accordion-body');

accordionBtn.forEach( (el, i)  => {
    el.addEventListener('click', () => {

        //clear all
        accordionBtn.forEach( el => {
            el.classList.remove('active');
        });
        accordionText.forEach( el => {
            el.classList.remove('open');
        });

        // show one 
        accordionBtn[i].classList.toggle('active');
        accordionText[i].classList.toggle('open');
    });
});