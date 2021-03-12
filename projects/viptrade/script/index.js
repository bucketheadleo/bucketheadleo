
// hero slider - section 1

$(".hero-slider").on("beforeChange", function (
    event,
    slick,
    currentSlide,
    nextSlide
    ) {
    $(".slider-thumb").removeClass("active");
    $(".slider-thumb:eq(" + nextSlide + ")").addClass("active");
});

$(".hero-slider").slick({
    infinite: true,
    asNavFor: ".slider-nav",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
    asNavFor: ".hero-slider",
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



// platforms ---- section 2

const platformType = document.querySelectorAll('.platform-type');

const platformTypeContent = document.querySelectorAll('.platforms__content');
const platformTypeImg = document.querySelectorAll('.platforms__content-img');

platformType.forEach( (el, i)  => {
    el.addEventListener('click', () => {

        //clear all
        platformType.forEach( el => {
            el.classList.remove('active');
        });
        platformTypeContent.forEach( el => {
            el.classList.remove('shown');
        });
        platformTypeImg.forEach( el => {
            el.classList.remove('shown');
        });

        // show one 
        platformType[i].classList.add('active');
        platformTypeContent[i].classList.add('shown');
        platformTypeImg[i].classList.add('shown');
    })
})



// news  ---- section 4

//make acc
const liveAccBtn = document.querySelector('.create-live-acc');
const demoAccBtn = document.querySelector('.create-demo-acc');

const liveForm = document.querySelector('.acc-form-live');
const demoForm = document.querySelector('.acc-form-demo');

const closeLiveForm = document.querySelector('.close-live-form');
const closeDemoForm = document.querySelector('.close-demo-form');

// open forms
liveAccBtn.addEventListener('click', ()=> {
    liveForm.classList.add('show');
});
demoAccBtn.addEventListener('click', ()=> {
    demoForm.classList.add('show');
});
// close forms
closeLiveForm.addEventListener('click', (e)=> {
    e.preventDefault()
    liveForm.classList.remove('show');
});
closeDemoForm.addEventListener('click', (e)=> {
    e.preventDefault()
    demoForm.classList.remove('show');
});



// gadgets 
const gadgetBtns = document.querySelectorAll('.gadget-btn');
const gadgets = document.querySelectorAll('.gadget');

gadgetBtns.forEach( (el, i)  => {
    el.addEventListener('click', () => {

        //clear all
        gadgetBtns.forEach( el => {
            el.classList.remove('active');
        });
        gadgets.forEach( el => {
            el.classList.remove('shown');
        });

        // show one 
        gadgetBtns[i].classList.add('active');
        gadgets[i].classList.add('shown');
    });
});