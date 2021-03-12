
/*_________________________   General    _____________________*/


// nav on scroll

window.onscroll = function() {

  if (window.pageYOffset > 300) {
    $('.header').addClass('fixed')

  } else {
    $('.header').removeClass('fixed')
  }
};


// header on small
// menu on small screen
$('.menu-icon').on('click', () => {
  $('.navigation-sm').toggleClass('shown');
});


// close menu on sm on outside click
window.addEventListener('click', function(e){
  if ($(e.target).is($('.navigation-sm')) ){
      $('.navigation-sm').removeClass('shown')
  } 
})


/*_________________________   index.html    _____________________*/

// hero slider - section 1

if( $('body.home').length > 0) {
  $(".hero__slider").on("beforeChange", function (
    event,
    slick,
    currentSlide,
    nextSlide
    ) {
    $(".slider-thumb").removeClass("active");
    $(".slider-thumb:eq(" + nextSlide + ")").addClass("active");
  });
  
  $(".hero__slider").slick({
    infinite: true,
    asNavFor: ".slider-nav",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    arrows: false,
    dots: false,
    rtl: false,
  
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            infinite: true,
        },
        }
    ],
  });
  
  $(".slider-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".hero__slider",
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    variableWidth: true,
    
  });
  
  $(".slider-thumb").click(function (e) {
    e.preventDefault();
    $(".slider-thumb").removeClass("active");
    $(this).addClass("active");
  });
}

// section 3 - tabs -----

$('.platforms__tabs-btn').on('click', function(){
  let index = $('.platforms__tabs-btn').index(this);
  
  // clear all
  $('.platforms__tabs-btn').removeClass('active');
  $('.platforms__texts').removeClass('shown');
  $('.platforms-ui').removeClass('shown');

  // select one
  $('.platforms__tabs-btn').eq(index).addClass('active');
  $('.platforms__texts').eq(index).addClass('shown');
  $('.platforms-ui').eq(index).addClass('shown');
});

// section fixed

// fixed at bottom - statistic bars -------------
$('.resize-fixed').on('click', function() {
  $('.resize-fixed').toggleClass('sm');

  $('.rate-bars').toggleClass('sm');
});



// section 6 - services slider + slider-nav ---------------
if( $('body.home').length > 0) {
  $(".services__slider").on("beforeChange", function (
    event,
    slick,
    currentSlide,
    nextSlide
    ) {
    $(".slider-thumb-s").removeClass("active");
    $(".slider-thumb-s:eq(" + nextSlide + ")").addClass("active");
  });
  
  $(".services__slider").slick({
    prevArrow: `<button class="s-btn btn-left">
        <svg xmlns="http://www.w3.org/2000/svg" width="24.725" height="46.449" viewBox="0 0 24.725 46.449">
        <path id="Icon_feather-chevron-right" data-name="Icon feather-chevron-right" d="M34.6,51.207,13.5,30.1,34.6,9" transform="translate(-12 -6.879)" fill="none" stroke="#61bd4f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      </svg>
    </button>`,
    nextArrow: `<button class="s-btn btn-right">
    <svg xmlns="http://www.w3.org/2000/svg" width="24.725" height="46.449" viewBox="0 0 24.725 46.449">
    <path id="Icon_feather-chevron-right" data-name="Icon feather-chevron-right" d="M13.5,51.207,34.6,30.1,13.5,9" transform="translate(-11.379 -6.879)" fill="none" stroke="#61bd4f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
    </svg>
    </button>`,
    infinite: true,
    asNavFor: ".services__slider-nav",
    slidesToScroll: 1,
    // slidesToShow: 4,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 800,
    arrows: true,
    dots: false,
    rtl: false,
    draggable: true,
    swipeToSlide: true,
    variableWidth: true,
    
  
    responsive: [

        {
          breakpoint: 824,
          settings: {
              slidesToShow: 2,
              arrows: false,
          },
        }
          ,
        {
          breakpoint:550,
          settings: {
              slidesToShow: 1,
              arrows: false,
            },
          }
    ],
  });
  
  $(".services__slider-nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".services__slider",
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    variableWidth: true,
    responsive: [
      {
      breakpoint: 700,
      settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },

  ],
    
  });
  
  $(".slider-thumb-s").click(function (e) {
    e.preventDefault();
    $(".slider-thumb-s").removeClass("active");
    $(this).addClass("active");
  });
}





/*_________________________   forex-trading.html    _____________________*/

// section 3 -- brand  Accordions
$('.brand-accordion__btn').on('click', function(){
  let index = $('.brand-accordion__btn').index(this);

  // if its open close all
  if( $('.brand-accordion__btn').eq(index).hasClass('active')) {
    $('.brand-accordion__btn').removeClass('active');
    $('.brand-accordion__content').removeClass('shown');

    return;
  }
  // clear all
  $('.brand-accordion__btn').removeClass('active');
  $('.brand-accordion__content').removeClass('shown');

  // activate one
  $('.brand-accordion__btn').eq(index).addClass('active');
  $('.brand-accordion__content').eq(index).addClass('shown');


})


/*_________________________   faq.html    _____________________*/

// section 2 -- faq  Accordions
$('.faq-accordion__btn').on('click', function(){
  let index = $('.faq-accordion__btn').index(this);

  // if its open close all
  if( $('.faq-accordion__btn').eq(index).hasClass('active')) {
    $('.faq-accordion__btn').removeClass('active');
    $('.faq-accordion__content').removeClass('shown');

    return;
  }
  // clear all
  $('.faq-accordion__btn').removeClass('active');
  $('.faq-accordion__content').removeClass('shown');

  // activate one
  $('.faq-accordion__btn').eq(index).addClass('active');
  $('.faq-accordion__content').eq(index).addClass('shown');


})


/*_________________________   register.html    _____________________*/

// check if passwords match before submit (on typing)
$('.pass-match').on('input', function() {
  let passOne = $('.pass-match').eq(0).val();
  let passTwo = $('.pass-match').eq(1).val();
  if(passOne === passTwo) {
      $('.auth-error').addClass('hidden');
  }else {
      $('.auth-error').removeClass('hidden');
  }
});



/*_________________________   .html    _____________________*/





// BP  -- cln c
function numberToAccountingString(num) {
    if(num == null) return;
    if(num < 0) return `(${Math.abs(num)})`;
    return num.toString();
}