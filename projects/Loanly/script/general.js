// -------   general js for all pages -----------


// ----------  header on scroll
window.addEventListener('scroll', function() {

    if (window.pageYOffset > 80) {

        $('.header').addClass('bg-dark');
        $('.header-top').addClass('bg-dark');

        $('.nav').addClass('short');

    } else {
        $('.header').removeClass('bg-dark');
        $('.header-top').removeClass('bg-dark');

        $('.nav').removeClass('short');
    }
});

//  -- hide  navigation on scrolling down // show on scrolling up ----

let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    
    let currentScrollPos = window.pageYOffset;
    
    // show nav if we scroll up
    if (prevScrollpos > currentScrollPos) {   // so we scrolling to up
        //  show navigation
        $('.header').css("top", "55px")
    } else {
        //  hide navigation
        $('.header').css("top", "-100px");
        $('.navigation').removeClass('shown');
    }
    
    prevScrollpos = currentScrollPos;   // apply change

};


// ---------- navigation open/hide on sm screen  ----
$('.nav-menu').on('click', function() {
    $('.navigation').toggleClass('shown');
});

// close navigation on outside click
$(document).click(function(e) {
    if ($(e.target).closest('.navigation').length === 0 
    && $(e.target).closest('.nav-menu').length === 0) {
        $('.navigation').removeClass('shown');
    }
});




//  ---------   index.html  --------

// -- section 4 -- tabs
$('.trade-features__tab').on('click', function() {
    let index =  $('.trade-features__tab').index(this);

    // clear all
    $('.trade-features__tab').removeClass('active');
    $('.trade-features__cards').removeClass('shown');

    // show ones
    $('.trade-features__tab').eq(index).addClass('active');
    $('.trade-features__cards').eq(index).addClass('shown')

});

// -- section 5 -- tabs -- change pics
// $('.browse__btn').on('click', function() {
//     let index =  $('.browse__btn').index(this);

//     // clear all
//     $('.browse__btn').removeClass('active');
//     $('.browse__pictures-img').removeClass('shown');

//     // show ones
//     $('.browse__btn').eq(index).addClass('active');
//     $('.browse__pictures-img').eq(index).addClass('shown')

// });



// ----------  faq.html ----------
 
// accordions
$('.faq__accordion-btn').on('click', function() {
    let index = $('.faq__accordion-btn').index(this);

    // clear all
    $('.faq__accordion-btn').removeClass('active');
    $('.faq__accordion-content').removeClass('open');

    // show clicked one
    $('.faq__accordion-btn').eq(index).addClass('active');
    $('.faq__accordion-content').eq(index).addClass('open');

});


// ----------- login.html ----------

// register Modal - show / hide password

$('.toggle-password').click(function(){
   
    let passwordInput =  $(this).parent('.auth-form__input-box').find("input");

    if( $(this).hasClass('password') ) {
        // make visible = text
        passwordInput.attr('type','text');
    } else {
        // make it type of password
        passwordInput.attr('type','password');
    }

    // toggle class to validate it after...
    $(this).toggleClass('password')
  });


  // ----------------         register.html  -------------
   
// check if passwords match before submit (on typing)
$('.pass-match').on('input', function() {
    let passOne = $('.pass-match').eq(0).val();
    let passTwo = $('.pass-match').eq(1).val();
    if(passOne === passTwo) {
        $('.auth-form__error').addClass('hidden');
    }else {
        $('.auth-form__error').removeClass('hidden');
    }
});