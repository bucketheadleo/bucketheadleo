
// hero slider
$('.hero__slider').slick({
  
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      speed: 1200,
    
      arrows: false,
      dots: true,
    
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });


// section 2 - switch content - 

const contentArr = document.querySelectorAll('.display-t');
const imgArr = document.querySelectorAll('.img-wrapper .img');

const navBtns = document.querySelectorAll('.btn-nav');


navBtns.forEach( (el, i) => {
    el.addEventListener('click', ()=> {
        //clear all
        contentArr.forEach( e=> {
            e.classList.remove('show');
        });
        navBtns.forEach( e=> {
            e.classList.remove('active');
        });
        imgArr.forEach( e=> {
            e.classList.remove('visible');
        });

        // select one
        el.classList.add('active');

        contentArr[i].classList.add('show');
        imgArr[i].classList.add('visible');
    })
});


// section 4 - switch content - our services - 

const textsArr = document.querySelectorAll('.our-services__content-text');
const bgArr = document.querySelectorAll('.our-services__img-box');

const tabBtns = document.querySelectorAll('.our-services__btn');


tabBtns.forEach( (el, i) => {
    el.addEventListener('click', ()=> {
        //clear all
        textsArr.forEach( e=> {
            e.classList.remove('visible');
        });
        tabBtns.forEach( e=> {
            e.classList.remove('active');
        });
        bgArr.forEach( e=> {
            e.classList.remove('show');
        });

        // select one
        el.classList.add('active');

        textsArr[i].classList.add('visible');
        bgArr[i].classList.add('show');
    })
});

// section 5 -- platform  tabs --

const platformTabs = document.querySelectorAll('.platforms__tab-btn');
const platformContents = document.querySelectorAll('.platforms__content');

platformTabs.forEach( (el, i) => {
    el.addEventListener('click', e => {

        // clear all
        platformTabs.forEach(e =>{
            e.classList.remove('active');
        });
        platformContents.forEach(e =>{
            e.classList.remove('visible');
        });

        //show one
        el.classList.add('active');
        platformContents[i].classList.add('visible');
    })
});