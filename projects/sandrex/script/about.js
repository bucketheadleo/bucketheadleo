
//  section 2  show all/
const showHideBtn = document.querySelector('.partners__btn');
const partnerGrid = document.querySelector('.partners__grid');

showHideBtn.addEventListener('click', ()=> {
    partnerGrid.classList.toggle('half')
});