
// navigation for all pages

const navLinks = document.querySelectorAll('.has-drop');

const dropdownMenu = document.querySelectorAll('.nav-dropdown');
const dropdownBG = document.querySelector('.dropdown-bg');


//  nav link on hover desctop
navLinks.forEach( (el, i)=> {
    if(window.innerWidth < 980) {
        return;
    }
    el.addEventListener('mouseenter', (e)=> {  
        e.preventDefault();

            //hide all
            navLinks.forEach( el => {
                el.classList.remove('active');
            });
            dropdownMenu.forEach( el => {
                el.classList.remove('open');
            })
            // show all
            dropdownBG.classList.remove('none');
            dropdownMenu[i].classList.add('open');
            navLinks[i].classList.add('active');
        
    })
});

//  nav link on click - mobile
navLinks.forEach( (el, i)=> {
    if(window.innerWidth < 980) {
        
        el.addEventListener('click', (e)=> {  
            e.preventDefault();
            
            if(dropdownMenu[i].classList.contains('open') ) {

                // hide all
                navLinks.forEach( el => {
                    el.classList.remove('active');
                });
                dropdownMenu.forEach( el => {
                    el.classList.remove('open');
                });
    
                dropdownBG.classList.add('none');
                return;

            }else {
                navLinks.forEach( el => {
                    el.classList.remove('active');
                });
                dropdownMenu.forEach( el => {
                    el.classList.remove('open');
                })
                // show all
                dropdownBG.classList.remove('none');
                dropdownMenu[i].classList.add('open');
                navLinks[i].classList.add('active');
            }
        })
    }
});



// nav dropdown close/hide 
const menuIcon = document.querySelector('.menu-icon');
const mainNavigation = document.querySelector('.navigation');

menuIcon.addEventListener('click', ()=> {
    menuIcon.classList.toggle('close-i');
    mainNavigation.classList.toggle('show-nav');
})


// nav on scroll - show nav if we scroll up / hide on scroll down

const navbar = document.querySelector('.header');
let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    // prevent on phone
    if(window.innerWidth < 980) {
        return;
    }   
    
    let currentScrollPos = window.pageYOffset;
    
    // show nav if we scroll up
    if (prevScrollpos > currentScrollPos) {   // so we scrolling to up
        navbar.style.top = "0";

    } else {
        navbar.style.top = "-74px";

        // hide main nav
        menuIcon.classList.remove('close-i');
        mainNavigation.classList.remove('show-nav');

        // hide our dropdown from nav
        navLinks.forEach( el => {
            el.classList.remove('active');
        });
        dropdownMenu.forEach( el => {
            el.classList.remove('open');
        });
        dropdownBG.classList.add('none');
    }
    
    prevScrollpos = currentScrollPos;   // apply change


}

// show Navbar on small if it was hidden (on scroll)
window.addEventListener('resize', ()=> {
    if(window.innerWidth < 980) {
        navbar.style.top = "0";
    } 
   
})


//  Modal call  _____
const closeCallForm = document.querySelector('.close-call-form');
const phoneModal = document.querySelector('.phone-modal');
const openCallModal = document.querySelector('.phone-a');

const asSoonAsPossible = document.querySelectorAll('[name="time"]');
const selectTime = document.getElementById('select-time');

// choose call time
asSoonAsPossible.forEach( (e, i) => {
    e.addEventListener('click', ()=> {

        if(e.value === "fast" ) {
            selectTime.style.display = "none"
        }else {
            selectTime.style.display = "block"
        }
    })
});

// close modal by x
closeCallForm.addEventListener('click', (e)=> {
    e.preventDefault();  // cuz its in form
    phoneModal.classList.remove('shown')
})
openCallModal.addEventListener('click', ()=> {
    phoneModal.classList.add('shown')
})

// close by clicking outside of about-m
window.addEventListener('click', (e)=> {
    if(e.target == phoneModal) {
        phoneModal.classList.remove('shown');
    }
});





// baner run above footer - partners

// partners ---- section 3 in index and above footer in other pages

$(".partners-slider").slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1400,
    dots: false,
    arrows:false,
    responsive: [
        {
            breakpoint: 1224,
            settings: {
                slidesToShow: 4,
                infinite: true,
            },
        },
        {
            breakpoint: 924,
            settings: {
                slidesToShow: 3,
                infinite: true,
            },
        },
        {
            breakpoint: 744,
            settings: {
                slidesToShow: 2,
                infinite: true,
            },
        },
        {
            breakpoint: 610,
            settings: {
                slidesToShow: 1,
                infinite: true,
            },
        }
    ],
});



// video slider +  thumb  

$(".footer-video-slider").on("beforeChange", function (
    event,
    slick,
    currentSlide,
    nextSlide
    ) {
    $(".v-thumb").removeClass("active");
    $(".v-thumb:eq(" + nextSlide + ")").addClass("active");
});

$(".footer-video-slider").slick({
    infinite: true,
    asNavFor: ".video-thumbs",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2200,
    arrows: false,
    dots: false,
    // rtl: false,

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

$(".video-thumbs").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".footer-video-slider",
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    variableWidth: false,
    infinite: true,
    responsive: [
        {
        breakpoint: 624,
        settings: {
            slidesToShow: 3,
            infinite: true,
        },
        }
    ],
});

$(".v-thumb").click(function () {
    
    $(".v-thumb").removeClass("active");
    $(this).addClass("active");
});



// read more warning 
const warningMoreText = document.querySelector('.warning-read-more');
const showMoreWarning = document.querySelector('.warning-btn');

showMoreWarning.addEventListener('click', ()=> {  
    warningMoreText.classList.toggle('shown')
});


// // read more license
// const licenseMoreText = document.querySelector('.license-read-more');
// const showMoreLicense = document.querySelector('.license-btn ');

// showMoreLicense.addEventListener('click', ()=> {  
//     licenseMoreText.classList.toggle('shown')
// });


// Footer bottom -- select qountry + jurisdiction

// country
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach( ( o, i) => {
 
  o.addEventListener("click", () => {
    // show selected in selection box
    selected.querySelector('label').innerHTML = o.querySelector('label').innerHTML;
    
    // close option box
    optionsContainer.classList.remove("active");

    //output result
    console.log( o.querySelector('input').value );

  });

});

// jurisdiction
const jSelected = document.querySelector(".j-selected");
const JoptionsContainer = document.querySelector(".j-options-container");
const jOptionsList = document.querySelectorAll(".j-option");

jSelected.addEventListener("click", () => {
    JoptionsContainer.classList.toggle("active");
});

jOptionsList.forEach( ( o, i) => {
 
  o.addEventListener("click", () => {
    // show selected in selection box
    jSelected.querySelector('label').innerHTML = o.querySelector('label').innerHTML;
    
    // close option box
    JoptionsContainer.classList.remove("active");

    //output result
    console.log( o.querySelector('input').value );

  });

});