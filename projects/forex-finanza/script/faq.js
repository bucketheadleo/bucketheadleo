
// accordions 

const accordionTbs = document.querySelectorAll('.faq__accordion-btn');
const accordions = document.querySelectorAll('.faq__accordion-content');

accordionTbs.forEach( (el, i) => {
    el.addEventListener('click', ()=> {
        //clear all
        accordionTbs.forEach( e => {
            e.classList.remove('active');
        });
        accordions.forEach( e => {
            e.classList.remove('open');
        });

        //select one
        el.classList.add('active');
        accordions[i].classList.add('open');
    })
});