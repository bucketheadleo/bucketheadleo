
// add shadow on scroll - sticky 
let navbar = document.querySelector(".nav");

let sticky = navbar.offsetTop;

window.onscroll = function() {

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");

  } else {
    navbar.classList.remove("sticky");
  }

};


// ------  Nav Sub - Dropdown
const emptynNavLinks = document.querySelectorAll('.hasnt');
const navLinks = document.querySelectorAll('.has-sub');

const dropdownMenu = document.querySelectorAll('.sub-nav');

// close dropdowns on Sign in hover !
const signLinks = document.querySelector('.nav__sign');
signLinks.addEventListener('mouseenter', ()=> {
  // close dropdowns
  dropdownMenu.forEach( el => {
    el.classList.remove('open');
  })
  navLinks.forEach( el => {
    el.classList.remove('stayhovered');
  });
});

// hovering on empty link = close others with dropdown
emptynNavLinks.forEach( li => {
    li.addEventListener('mouseenter', (e)=> {

      // close dropdowns
      dropdownMenu.forEach( el => {
          el.classList.remove('open');
      })
      navLinks.forEach( el => {
        el.classList.remove('stayhovered');
      });
      

    })
})

//  show dropdown - nav link on hover desctop
navLinks.forEach( (el, i)=> {

    el.addEventListener('mouseenter', (e)=> {  
        e.preventDefault();
       
        //hide all
        dropdownMenu.forEach( el => {
            el.classList.remove('open');
        })
        navLinks.forEach( el => {
          el.classList.remove('stayhovered')
        });
        

        // show one
        dropdownMenu[i].classList.add('open');
        el.classList.add('stayhovered')
        
    })
});

// close dropdown menu on outside mouseover
window.addEventListener('mouseover', function(e){

  if (!navbar.contains(e.target)){
      //hide all
      dropdownMenu.forEach( el => {
          el.classList.remove('open');
      })
      navLinks.forEach( el => {
        el.classList.remove('stayhovered');
      });
     
  } 
});



// --- nav on small - menu dropdown 
const menuIcon = document.querySelector('.menu-icon');
const navigation = document.querySelector('.navigation');

menuIcon.addEventListener('click', ()=> {
    menuIcon.classList.toggle('close-i');
    navigation.classList.toggle('shown');
})

// --- Close navmenu on outside click
window.addEventListener('click', function(e){

    if (!navigation.contains(e.target) && (!menuIcon.contains(e.target))){
        menuIcon.classList.remove('close-i');
        navigation.classList.remove('shown');
    } 
});


