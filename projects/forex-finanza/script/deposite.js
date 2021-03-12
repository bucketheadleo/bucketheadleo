
const switchTableBtns = document.querySelectorAll('.depo-drawal__nav-btn');
const tables = document.querySelectorAll('.depo-drawal__table');

switchTableBtns.forEach( (el, i)  => {
    el.addEventListener('click', ()=> {
        //clear all
        switchTableBtns.forEach( e=> {
            e.classList.remove('active');
        })
        tables.forEach( e=> {
            e.classList.remove('show');
        })
        // show one
        el.classList.add('active');
        tables[i].classList.add('show');
    })
})