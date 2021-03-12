
// scroll down

const scrollBtn = document.querySelector('.scroll-from-docs');
const destination = document.querySelector('#documents');


scrollBtn.addEventListener('click', ()=> {
    destination.scrollIntoView({behavior: "smooth", block: "start", });
});