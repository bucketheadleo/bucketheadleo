
// scroll down

const scrollBtn = document.querySelector('.scroll-from-pamm');
const destination = document.querySelector('#pamm-work');


scrollBtn.addEventListener('click', ()=> {
    destination.scrollIntoView({behavior: "smooth", block: "start", });
});