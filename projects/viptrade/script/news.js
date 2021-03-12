// news item read more 

const readmoreText = document.querySelectorAll('.news-more-text');
const readmoreBtn = document.querySelectorAll('.news-item__continue-reading');

readmoreBtn.forEach( (el, i) => {
    el.addEventListener( 'click', ()=> {
        readmoreText[i].classList.toggle('shown');
    });
});



// section 2 news - Aside -- demo / live

//make acc
const liveAccBtn = document.querySelector('.create-live-acc');
const demoAccBtn = document.querySelector('.create-demo-acc');

const liveForm = document.querySelector('.acc-form-live');
const demoForm = document.querySelector('.acc-form-demo');

const closeLiveForm = document.querySelector('.close-live-form');
const closeDemoForm = document.querySelector('.close-demo-form');

// open forms
liveAccBtn.addEventListener('click', ()=> {
    liveForm.classList.add('show');
});
demoAccBtn.addEventListener('click', ()=> {
    demoForm.classList.add('show');
});
// close forms
closeLiveForm.addEventListener('click', (e)=> {
    e.preventDefault()
    liveForm.classList.remove('show');
});
closeDemoForm.addEventListener('click', (e)=> {
    e.preventDefault()
    demoForm.classList.remove('show');
});

// gadgets 
const gadgetBtns = document.querySelectorAll('.gadget-btn');
const gadgets = document.querySelectorAll('.gadget');

gadgetBtns.forEach( (el, i)  => {
    el.addEventListener('click', () => {

        //clear all
        gadgetBtns.forEach( el => {
            el.classList.remove('active');
        });
        gadgets.forEach( el => {
            el.classList.remove('shown');
        });

        // show one 
        gadgetBtns[i].classList.add('active');
        gadgets[i].classList.add('shown');
    });
});