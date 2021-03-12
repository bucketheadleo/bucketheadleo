
// accordions  open / close
const accordionBtn = document.querySelectorAll('.white-label__accordion-btn');
const accordionText = document.querySelectorAll('.white-label__accordion-body');

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


// select phone index
const indexSelected = document.querySelector(".pi-selected");
const indexOptionsContainer = document.querySelector(".p-index-container");

const indexOptionsList = document.querySelectorAll(".pi-option");
const phoneIndex = document.querySelector('#phone-i-v');

indexSelected.addEventListener("click", () => {
    indexOptionsContainer.classList.toggle("active");
});

indexOptionsList.forEach( ( o, i) => {
 
  o.addEventListener("click", () => {
    // show selected in selection box
    indexSelected.querySelector('label').innerHTML = o.querySelector('label').innerHTML;
    
    // close option box
    indexOptionsContainer.classList.remove("active");

    //output result
        //phoneIndex.value = parseInt( o.querySelector('input').value) ;
    phoneIndex.value = o.querySelector('input').value ;
    
    //console.log( o.querySelector('input').value );

  });

});