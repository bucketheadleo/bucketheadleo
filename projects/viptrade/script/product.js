
// section 2 products collapse : accordions
const collapseBtn = document.querySelectorAll('.collapse-btn');
const collapsable = document.querySelectorAll('.product-body');
const pWraper = document.querySelector('#products');


collapseBtn.forEach( (e, i) => {
    e.addEventListener('click', () => {

        //clear all
        collapseBtn.forEach( e => {
           e.classList.remove('active');
        });
        collapsable.forEach( e => {
            e.classList.remove('shown');
        });

        // open one
        collapsable[i].classList.toggle('shown');
        e.classList.toggle('active');

        if(window.innerWidth > 1024) {
            pWraper.scrollIntoView({block: 'start', } );   //  { behavior: 'smooth' }
        }
       
    })
})

