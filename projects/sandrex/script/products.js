

// image preview modal
const imgModal =  document.getElementById("catalog-modal");

// display chosen
function onClick(element) {
    document.getElementById("img-view").src = element.src;
    imgModal.classList.add('visible');
}
// close 
imgModal.addEventListener('click', (e)=> {
    imgModal.classList.remove('visible');
})


// catalog tabs 

const tabBtns =  document.querySelectorAll(".catalogue__tab");
const catalogGrids =  document.querySelectorAll(".catalogue__grid");


tabBtns.forEach( (el,i) => {
    el.addEventListener('click', (e)=> {
        
        //clear all
        tabBtns.forEach( e=> {
            e.classList.remove('active');
        });
        catalogGrids.forEach( e=> {
            e.classList.remove('shown');
        });

        // show one
        el.classList.add('active');
        catalogGrids[i].classList.add('shown');
    })

});