// form inputs 

// show label when input is typed

const inputs = document.querySelectorAll('.demo-input');
const inputsLabels = document.querySelectorAll('.input-l');

inputs.forEach( (el , i) => {
    el.addEventListener('input', (e)=> {
    
        inputsLabels[i].classList.add('shown');

        if(e.target.value == "") {
            inputsLabels[i].classList.remove('shown')
        }
    })
 
});

// select qountry phone index

const phoneInput = document.querySelector('.demo-phone-i');
const phoneIndexOptions = document.querySelectorAll('.index-options');

phoneIndexOptions.forEach( (el , i) => {
    el.addEventListener('click', (e)=> {

        // show choosen index in input
        phoneInput.value = e.target.value;

        //show selected option in top
        phoneIndexOptions.forEach( el => {
            el.style.order = "2";
        })
        // set chosen at top
        el.style.order = "1";
    })
 
});



const showRegistrationBtn = document.querySelectorAll('.send-btn-anim');
const loaderBox = document.querySelectorAll('.loader-box');



showRegistrationBtn.forEach( (el) => {
    el.addEventListener('click', ()=> {
        loaderBox.classList.add('active');
        setTimeout(function(){ 
            loaderBox.classList.remove('active')
        }, 2000);
    })
   
})