// nav

// nav search form
const navForm = document.querySelector('.nav__search-box');
const searchBtn = document.querySelector('.nav__search-btn');

let searchField = document.getElementById('search-field_id');


searchBtn.addEventListener('click', (e)=> {
    
    if(searchField.value.length == 0) {
        console.log(searchField);

        searchField.classList.toggle('show');
    }else {
        navForm.submit();
    }
});

window.addEventListener('click', (e)=> {
    if (!navForm.contains(e.target) ) searchField.classList.remove('show');
})


// nav  sticky
let navbar = document.querySelector(".header");

window.onscroll = function() {

  if (window.pageYOffset > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};


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
