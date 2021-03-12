
$('.education-cards__wrap').slick({
  prevArrow: `<button class="edu-slick-btn edu-prev">Prev Card</button>`,
  nextArrow: `<button class="edu-slick-btn edu-next">Next Card</button>`,
  
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    adaptiveHeight: true,
    speed: 400,

    fade: true,
    swipe: false,
    
    arrows: true,
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