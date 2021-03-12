
// index hero switcher

const switchSlides = document.querySelector('.category-link');

const sliderOne = document.querySelector('#hero__slider-one');
const sliderTwo = document.querySelector('#hero__slider-two');

// counters
const sliderOneCount = document.querySelector('.count-wrap-one');
const sliderTwoCount = document.querySelector('.count-wrap-two');

switchSlides.addEventListener('click', () => {
  switchSlides.classList.toggle('active');

  sliderOne.classList.toggle('shown');
  sliderTwo.classList.toggle('shown');

  // counts
  sliderOneCount.classList.toggle('shown');
  sliderTwoCount.classList.toggle('shown');
  // scroll up 
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
})



// index hero sliders

// initiate this first to display count
var $status1 = $('#count-1');
var $status2 = $('#count-2');
  
// ('init reInit afterChange')
$('#hero__slider-one').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {

  let i = (currentSlide ? currentSlide : 0) + 1;

  $status1.text(i );
  $status2.text(slick.slideCount);
});

// hero slider
$('#hero__slider-one').slick({
    prevArrow: `<button class="s-btn tbn-left">
    <svg xmlns="http://www.w3.org/2000/svg" width="11.929" height="20.866" viewBox="0 0 11.929 20.866">
    <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back" d="M14.847,16.624l7.895-7.889A1.491,1.491,0,0,0,20.63,6.629l-8.945,8.939a1.488,1.488,0,0,0-.043,2.056l8.982,9a1.491,1.491,0,1,0,2.112-2.106Z" transform="translate(-11.251 -6.194)"  />
  </svg>
  </button>`,
  nextArrow: `<button class="s-btn tbn-right"><svg xmlns="http://www.w3.org/2000/svg" width="11.929" height="20.866" viewBox="0 0 11.929 20.866">
    <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back" d="M19.583,16.624,11.689,8.735A1.491,1.491,0,0,1,13.8,6.629l8.945,8.939a1.488,1.488,0,0,1,.043,2.056l-8.982,9a1.491,1.491,0,1,1-2.112-2.106Z" transform="translate(-11.251 -6.194)"/>
  </svg>
  </button>`,
  
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1800,
      slidesToShow: 2,
      slidesToScroll: 1,
      swipeToSlide: true,
      speed: 900,
    
      // fade: !0,
      arrows: true,
      dots: true,
    
      responsive: [
       
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
    

// slider two


// initiate this first to display count
var $secondstatus1 = $('#second-count-1');
var $secondstatus2 = $('#second-count-2');
  
// ('init reInit afterChange')
$('#hero__slider-two').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {

  let i = (currentSlide ? currentSlide : 0) + 1;

  $secondstatus1.text(i );
  $secondstatus2.text(slick.slideCount);
});

// hero slider
$('#hero__slider-two').slick({
    prevArrow: `<button class="s-btn tbn-left">
    <svg xmlns="http://www.w3.org/2000/svg" width="11.929" height="20.866" viewBox="0 0 11.929 20.866">
    <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back" d="M14.847,16.624l7.895-7.889A1.491,1.491,0,0,0,20.63,6.629l-8.945,8.939a1.488,1.488,0,0,0-.043,2.056l8.982,9a1.491,1.491,0,1,0,2.112-2.106Z" transform="translate(-11.251 -6.194)"  />
  </svg>
  </button>`,
  nextArrow: `<button class="s-btn tbn-right"><svg xmlns="http://www.w3.org/2000/svg" width="11.929" height="20.866" viewBox="0 0 11.929 20.866">
    <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back" d="M19.583,16.624,11.689,8.735A1.491,1.491,0,0,1,13.8,6.629l8.945,8.939a1.488,1.488,0,0,1,.043,2.056l-8.982,9a1.491,1.491,0,1,1-2.112-2.106Z" transform="translate(-11.251 -6.194)"/>
  </svg>
  </button>`,
  
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1800,
      slidesToShow: 2,
      slidesToScroll: 1,
      swipeToSlide: true,
      speed: 900,
    
      // fade: !0,
      arrows: true,
      dots: true,
    
      responsive: [
       
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });






// scroll to section 2 

const scrollBtn = document.querySelector('.hero__bottom button');
const partnersSection = document.querySelector('#partners');

scrollBtn.addEventListener('click', ()=> {
    partnersSection.scrollIntoView({behavior: "smooth", block: "start", });
});


//  section 2  show all/
const showHideBtn = document.querySelector('.partners__btn');
const partnerGrid = document.querySelector('.partners__grid');

showHideBtn.addEventListener('click', ()=> {
    partnerGrid.classList.toggle('half')
});




// section 3 ---  card slider 1 
$('#card__slider-one').slick({
    prevArrow: `<button class="s-btn tbn-left">
    <svg xmlns="http://www.w3.org/2000/svg" width="11.929" height="20.866" viewBox="0 0 11.929 20.866">
    <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back" d="M14.847,16.624l7.895-7.889A1.491,1.491,0,0,0,20.63,6.629l-8.945,8.939a1.488,1.488,0,0,0-.043,2.056l8.982,9a1.491,1.491,0,1,0,2.112-2.106Z" transform="translate(-11.251 -6.194)"  />
  </svg>
  </button>`,
  nextArrow: `<button class="s-btn tbn-right"><svg xmlns="http://www.w3.org/2000/svg" width="11.929" height="20.866" viewBox="0 0 11.929 20.866">
    <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back" d="M19.583,16.624,11.689,8.735A1.491,1.491,0,0,1,13.8,6.629l8.945,8.939a1.488,1.488,0,0,1,.043,2.056l-8.982,9a1.491,1.491,0,1,1-2.112-2.106Z" transform="translate(-11.251 -6.194)"/>
  </svg>
  </button>`,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1800,
      slidesToShow: 4,
      slidesToScroll: 1,
      swipeToSlide: true,
      speed: 1100,
      arrows: true,
      dots: false,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
          }
        },{
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
            }
          },{
            breakpoint: 740,
            settings: {
              slidesToShow: 1,
            }
          }
      ]
    });


//  section 4 -- card slider 2 
$('#card__slider-two').slick({
    prevArrow: `<button class="s-btn tbn-left">
    <svg xmlns="http://www.w3.org/2000/svg" width="11.929" height="20.866" viewBox="0 0 11.929 20.866">
    <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back" d="M14.847,16.624l7.895-7.889A1.491,1.491,0,0,0,20.63,6.629l-8.945,8.939a1.488,1.488,0,0,0-.043,2.056l8.982,9a1.491,1.491,0,1,0,2.112-2.106Z" transform="translate(-11.251 -6.194)"  />
  </svg>
  </button>`,
  nextArrow: `<button class="s-btn tbn-right"><svg xmlns="http://www.w3.org/2000/svg" width="11.929" height="20.866" viewBox="0 0 11.929 20.866">
    <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back" d="M19.583,16.624,11.689,8.735A1.491,1.491,0,0,1,13.8,6.629l8.945,8.939a1.488,1.488,0,0,1,.043,2.056l-8.982,9a1.491,1.491,0,1,1-2.112-2.106Z" transform="translate(-11.251 -6.194)"/>
  </svg>
  </button>`,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1800,
      slidesToShow: 4,
      slidesToScroll: 1,
      swipeToSlide: true,
      speed: 1100,
      arrows: true,
      dots: false,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
          }
        },{
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
            }
          },{
            breakpoint: 740,
            settings: {
              slidesToShow: 1,
            }
          }
      ]
    });


//  section 6 -- shower slider

// initiate this first to display count
var $statusShawer = $('#count-shower');
  
// ('init reInit afterChange')
$('.showers__slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {

  let sliderLength = slick.slideCount;

  let i = (currentSlide ? currentSlide : 0) + 1;

  $statusShawer.text( i + "/"+ slick.slideCount);
});

$('.showers__slider').slick({
  prevArrow: `<button class="s-btn tbn-left">
  <svg xmlns="http://www.w3.org/2000/svg" width="13.953" height="13.599" viewBox="0 0 13.953 13.599">
  <path id="Icon_awesome-arrow-left" data-name="Icon awesome-arrow-left" d="M8.017,15.336l-.691.691a.744.744,0,0,1-1.056,0L.216,9.976a.744.744,0,0,1,0-1.056L6.27,2.867a.744.744,0,0,1,1.056,0l.691.691A.748.748,0,0,1,8,4.626L4.252,8.2H13.2a.746.746,0,0,1,.747.747v1a.746.746,0,0,1-.747.747H4.252L8,14.268A.743.743,0,0,1,8.017,15.336Z" transform="translate(0.004 -2.647)" fill="#8b8a8a"/>
</svg>
</button>`,
nextArrow: `<button class="s-btn tbn-right"><svg xmlns="http://www.w3.org/2000/svg" width="13.953" height="13.599" viewBox="0 0 13.953 13.599">
<path id="Icon_awesome-arrow-left" data-name="Icon awesome-arrow-left" d="M5.929,15.336l.691.691a.744.744,0,0,0,1.056,0L13.73,9.976a.744.744,0,0,0,0-1.056L7.676,2.867a.744.744,0,0,0-1.056,0l-.691.691a.748.748,0,0,0,.012,1.068L9.694,8.2H.744A.746.746,0,0,0,0,8.949v1a.746.746,0,0,0,.747.747h8.95L5.941,14.268A.743.743,0,0,0,5.929,15.336Z" transform="translate(0.004 -2.647)" fill="#8b8a8a"/>
</svg>

</button>`,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1800,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    speed: 1100,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
        }
      },{
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }
    ]
  });



  //  section 7 -- mirrors slider  - card slider 3
  $('#card__slider-three').slick({
    prevArrow: `<button class="s-btn tbn-left">
    <svg xmlns="http://www.w3.org/2000/svg" width="11.929" height="20.866" viewBox="0 0 11.929 20.866">
    <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back" d="M14.847,16.624l7.895-7.889A1.491,1.491,0,0,0,20.63,6.629l-8.945,8.939a1.488,1.488,0,0,0-.043,2.056l8.982,9a1.491,1.491,0,1,0,2.112-2.106Z" transform="translate(-11.251 -6.194)"  />
  </svg>
  </button>`,
  nextArrow: `<button class="s-btn tbn-right"><svg xmlns="http://www.w3.org/2000/svg" width="11.929" height="20.866" viewBox="0 0 11.929 20.866">
    <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back" d="M19.583,16.624,11.689,8.735A1.491,1.491,0,0,1,13.8,6.629l8.945,8.939a1.488,1.488,0,0,1,.043,2.056l-8.982,9a1.491,1.491,0,1,1-2.112-2.106Z" transform="translate(-11.251 -6.194)"/>
  </svg>
  </button>`,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1800,
      slidesToShow: 4,
      slidesToScroll: 1,
      swipeToSlide: true,
      speed: 1100,
      arrows: true,
      dots: false,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
          }
        },{
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
            }
          },{
            breakpoint: 740,
            settings: {
              slidesToShow: 1,
            }
          },
      ]
    });


//  section 8 -- video modal
const videoBtnOne = document.querySelector('.choose-video__btn-one');
const videoBtnTwo = document.querySelector('.choose-video__btn-two');

const videoModal = document.querySelector('#video-modal');
const closeVideoBtn = document.querySelector('.video-modal-close');
const videos = document.querySelectorAll('iframe');

videoBtnOne.addEventListener('click', ()=> {
  videoModal.classList.add('visible');
})
videoBtnTwo.addEventListener('click', ()=> {
  videoModal.classList.add('visible');
})

// close
closeVideoBtn.addEventListener('click', ()=> {
  videoModal.classList.remove('visible')

  videos.forEach(i => {
    let source = i.src;
    i.src = '';
    i.src = source;
 });
})

// close by clicking outside of vid
window.addEventListener('click', (e)=> {

  if(e.target == videoModal) {
    videoModal.classList.remove("visible");
      videos.forEach(i => {
          let source = i.src;
          i.src = '';
          i.src = source;
      });
  }
});




//  section --- 9 - naves -- card slider 4
  $('#card__slider-four').slick({
    prevArrow: `<button class="s-btn tbn-left">
    <svg xmlns="http://www.w3.org/2000/svg" width="11.929" height="20.866" viewBox="0 0 11.929 20.866">
    <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back" d="M14.847,16.624l7.895-7.889A1.491,1.491,0,0,0,20.63,6.629l-8.945,8.939a1.488,1.488,0,0,0-.043,2.056l8.982,9a1.491,1.491,0,1,0,2.112-2.106Z" transform="translate(-11.251 -6.194)"  />
  </svg>
  </button>`,
  nextArrow: `<button class="s-btn tbn-right"><svg xmlns="http://www.w3.org/2000/svg" width="11.929" height="20.866" viewBox="0 0 11.929 20.866">
    <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back" d="M19.583,16.624,11.689,8.735A1.491,1.491,0,0,1,13.8,6.629l8.945,8.939a1.488,1.488,0,0,1,.043,2.056l-8.982,9a1.491,1.491,0,1,1-2.112-2.106Z" transform="translate(-11.251 -6.194)"/>
  </svg>
  </button>`,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1800,
      slidesToShow: 4,
      slidesToScroll: 1,
      swipeToSlide: true,
      speed: 1100,
      arrows: true,
      dots: false,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
          }
        },{
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
            }
          },{
            breakpoint: 740,
            settings: {
              slidesToShow: 1,
            }
          }
      ]
    });


// --  image proeview modal function for all page  -----------

// image preview modal
const imgModal =  document.getElementById("catalog-modal");

// display chosen
function showImg(element) {
    let findImg = element.closest('.card__slide').children[0];

    document.getElementById("img-view").src = findImg.src;
    imgModal.classList.add('visible');
}
// close modal
imgModal.addEventListener('click', (e)=> {
    imgModal.classList.remove('visible');
})


// image preview modal for section 6 (showers)
// display chosen
function showImgShower(element) {
  let findImg = element.closest('.showers__slide').children[0];

  document.getElementById("img-view").src = findImg.src;
  imgModal.classList.add('visible');
}



//  --------------------------  modal-sliders ------------------

// close all slider modals with close btn
const closeSliderModals =  document.querySelectorAll(".slider-modal-close");
const modalSliders =  document.querySelectorAll(".modal-slider");

closeSliderModals.forEach( el => {
  el.addEventListener('click', ()=> {
    modalSliders.forEach(e => {
      e.classList.remove('visible')
    })
  })
});
// close all slider modals with outside
$('.modal-slider').on('click', function(e) {
    if(e.target == this) {
      $(this).removeClass('visible');
    }
})


// tained slider modal  SLIDER MODAL 1
const tainedModalBox =  document.getElementById("tained-m");
const tainedArrleft =  document.getElementById("tained-left");
const tainedArrRight =  document.getElementById("tained-right");

const tainedImgs =  document.querySelectorAll(".tained-img");  

let tainedIndex;

// open tained 
function tainedModal(i) {
   // open modal
    tainedModalBox.classList.add('visible');

    // show selected slide
    tainedImgs.forEach( (el,i) => {
        el.classList.remove('shown');
    })
    tainedImgs[i].classList.add('shown');

    // apply index
    tainedIndex = i;
}

// move tained to left 
tainedArrleft.addEventListener('click', ()=> {
    if(tainedIndex == 0) {
      tainedIndex = tainedImgs.length;
    }
    tainedIndex--;

    // slide
    tainedImgs.forEach( (el,i) => {
        el.classList.remove('shown');
    })
    tainedImgs[tainedIndex].classList.add('shown');

});

// move tained to right 
tainedArrRight.addEventListener('click', ()=> {
    if(tainedIndex == tainedImgs.length - 1) {
      tainedIndex = -1;
    }
    tainedIndex++;

    // slide
    tainedImgs.forEach( (el,i) => {
        el.classList.remove('shown');
    })
    tainedImgs[tainedIndex].classList.add('shown');

});



// railing slider modal  SLIDER MODAL 2 

const railingModalBox =  document.getElementById("railing-m");
const railingArrleft =  document.getElementById("railing-left");
const railingArrRight =  document.getElementById("railing-right");

const railingImgs =  document.querySelectorAll(".railing-img");  

let railingIndex;

// open railing 
function railingModal(i) {
   // open modal
    railingModalBox.classList.add('visible');

    // show selected slide
    railingImgs.forEach( (el,i) => {
        el.classList.remove('shown');
    })
    railingImgs[i].classList.add('shown');

    // apply index
    railingIndex = i;
}

// move railing to left 
railingArrleft.addEventListener('click', ()=> {
    if(railingIndex == 0) {
      railingIndex = railingImgs.length;
    }
    railingIndex--;

    // slide
    railingImgs.forEach( (el,i) => {
        el.classList.remove('shown');
    })
    railingImgs[railingIndex].classList.add('shown');

});

// move railing to right 
railingArrRight.addEventListener('click', ()=> {
    if(railingIndex == railingImgs.length - 1) {
      railingIndex = -1;
    }
    railingIndex++;

    // slide
    railingImgs.forEach( (el,i) => {
        el.classList.remove('shown');
    })
    railingImgs[railingIndex].classList.add('shown');

});


// showers slider modal  SLIDER MODAL 3 

const showersModalBox =  document.getElementById("showers-m");
const showersArrleft =  document.getElementById("showers-left");
const showersArrRight =  document.getElementById("showers-right");

const showersImgs =  document.querySelectorAll(".showers-img");  

let showersIndex;

// open showers 
function showersModal(i) {
   // open modal
    showersModalBox.classList.add('visible');

    // show selected slide
    showersImgs.forEach( (el,i) => {
        el.classList.remove('shown');
    })
    showersImgs[i].classList.add('shown');

    // apply index
    showersIndex = i;
}

// move showers to left 
showersArrleft.addEventListener('click', ()=> {
    if(showersIndex == 0) {
      showersIndex = showersImgs.length;
    }
    showersIndex--;

    // slide
    showersImgs.forEach( (el,i) => {
        el.classList.remove('shown');
    })
    showersImgs[showersIndex].classList.add('shown');

});

// move showers to right 
showersArrRight.addEventListener('click', ()=> {
    if(showersIndex == showersImgs.length - 1) {
      showersIndex = -1;
    }
    showersIndex++;

    // slide
    showersImgs.forEach( (el,i) => {
        el.classList.remove('shown');
    })
    showersImgs[showersIndex].classList.add('shown');

});


// mirrors slider modal  SLIDER MODAL 4 

const mirrorsModalBox =  document.getElementById("mirrors-m");
const mirrorsArrleft =  document.getElementById("mirrors-left");
const mirrorsArrRight =  document.getElementById("mirrors-right");

const mirrorsImgs =  document.querySelectorAll(".mirrors-img");  

let mirrorsIndex;

// open mirrors 
function mirrorsModal(i) {
   // open modal
    mirrorsModalBox.classList.add('visible');

    // show selected slide
    mirrorsImgs.forEach( (el,i) => {
        el.classList.remove('shown');
    })
    mirrorsImgs[i].classList.add('shown');

    // apply index
    mirrorsIndex = i;
}

// move mirrors to left 
mirrorsArrleft.addEventListener('click', ()=> {
    if(mirrorsIndex == 0) {
      mirrorsIndex = mirrorsImgs.length;
    }
    mirrorsIndex--;

    // slide
    mirrorsImgs.forEach( (el,i) => {
        el.classList.remove('shown');
    })
    mirrorsImgs[mirrorsIndex].classList.add('shown');

});

// move mirrors to right 
mirrorsArrRight.addEventListener('click', ()=> {
    if(mirrorsIndex == mirrorsImgs.length- 1) {
      mirrorsIndex = -1;
    }
    mirrorsIndex++;

    // slide
    mirrorsImgs.forEach( (el,i) => {
        el.classList.remove('shown');
    })
    mirrorsImgs[mirrorsIndex].classList.add('shown');

});



// naves slider modal  SLIDER MODAL 5 

const navesModalBox =  document.getElementById("naves-m");
const navesArrleft =  document.getElementById("naves-left");
const navesArrRight =  document.getElementById("naves-right");

const navesImgs =  document.querySelectorAll(".naves-img");  

let navesIndex;

// open naves 
function navesModal(i) {
   // open modal
    navesModalBox.classList.add('visible');

    // show selected slide
    navesImgs.forEach( (el,i) => {
        el.classList.remove('shown');
    })
    navesImgs[i].classList.add('shown');

    // apply index
    navesIndex = i;
}

// move naves to left 
navesArrleft.addEventListener('click', ()=> {
    if(navesIndex == 0) {
      navesIndex = navesImgs.length;
    }
    navesIndex--;

    // slide
    navesImgs.forEach( (el,i) => {
        el.classList.remove('shown');
    })
    navesImgs[navesIndex].classList.add('shown');

});

// move naves to right 
navesArrRight.addEventListener('click', ()=> {
    if(navesIndex == navesImgs.length- 1) {
      navesIndex = -1;
    }
    navesIndex++;

    // slide
    navesImgs.forEach( (el,i) => {
        el.classList.remove('shown');
    })
    navesImgs[navesIndex].classList.add('shown');

});