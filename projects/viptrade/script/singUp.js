

// show label when input is typed

const inputs = document.querySelectorAll('.g-input');
const inputsLabels = document.querySelectorAll('.g-input-l');

inputs.forEach( (el , i) => {
    el.addEventListener('input', (e)=> {
    
        inputsLabels[i].classList.add('shown');

        if(e.target.value == "") {
            inputsLabels[i].classList.remove('shown')
        }
    })
 
});

// select qountry phone index

const phoneInput = document.querySelector('.g-phone-i');
const phoneIndexOptions = document.querySelectorAll('.g-index-options');

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
