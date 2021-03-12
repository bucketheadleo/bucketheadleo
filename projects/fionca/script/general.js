const log = console.log;
/*  ____________________ General  _________________  */

// nav on scroll
let navPosY = $('.nav').offset().top;  // on classadd it ll change so its we dont measure it in scroll.evt

window.onscroll = function() {

  if (window.pageYOffset >= navPosY) {
    $('.nav').addClass('fixed-nav')

  } else {
    $('.nav').removeClass('fixed-nav')
  }
};

// navigation on sm screens  open/close
$('.menu-icon').on('click', function() {
  $('.navigation-sm').addClass('shown');
});
window.addEventListener('click', function(e) {
  if($(e.target).is( $('.navigation-sm'))) {
    $('.navigation-sm').removeClass('shown');
  }

});


// open video modal (multypage) ----
$('.video-section__play-btn').on('click', ()=> {
  $('.about-video-modal').addClass('shown');
});

// close by btn
$('.about-video-modal__close').on('click', ()=> {
  $('.about-video-modal').removeClass('shown');
});
// close modal  outside click
window.addEventListener('click', function(e){
  if ($(e.target).is($('.about-video-modal')) ){
      $('.about-video-modal').removeClass('shown')
  } 
})


/* ___________________   index.html  ____________________*/

// platforms - section 3
$('.platforms__nav-tabs--tab').on('click', function() {
  let index = $('.platforms__nav-tabs--tab').index(this);

  // clear all
  $('.platforms__nav-tabs--tab').removeClass('active')
  $('.platforms__main-contentbox').removeClass('shown')

  // show one
  $('.platforms__nav-tabs--tab').eq(index).addClass('active')
  $('.platforms__main-contentbox').eq(index).addClass('shown')

})



/* ___________________   faq.html  ____________________*/

$('.faq__accordion-btn').on('click', function() {
  let index = $('.faq__accordion-btn').index(this);
 
  // clear all
  $('.faq__accordion').removeClass('open')

  // show one
  $('.faq__accordion').eq(index).addClass('open')
});



/* ___________________   login.html  ____________________*/

// check email
function validateEmail(email) {
  const patern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return patern.test(email);
};

// validate login -----
$('#login').on('click', function() {
  let mail = false;
  let password = false;

  // validate mail
  let emailVal = $('#email').val()
   if(validateEmail(emailVal) ) {
    mail = true 
    $('#email').parent().parent().removeClass('incorrect')
   } else {
    mail = false 
    $('#email').parent().parent().addClass('incorrect');
   }
  
  // validate password
  if($('#password').val().length > 4) {
    password = true
    $('#password').parent().parent().removeClass('incorrect')
  }else {
    $('#password').parent().parent().addClass('incorrect')
    password = false
  }

  // submit if both true
  mail && password && $('.auth-section__form').submit();

});



/* ___________________   registration.html  ____________________*/

// validate registration ----
$('#register').on('click', function() {

  let filledInputs = false;
  let mail = false;
  let password = false;
  let passwordMatch = false;
  let age = false;

  // [filledInputs] validate inputs for (val === false ) UI only
  $('.empty-check').each( (i, el) => {
    if($(el).val() ) {
      $(el).parent().parent().removeClass('incorrect');
    }else {
      $(el).parent().parent().addClass('incorrect');
    }
  });

  // [filledInputs] check if even one field is empty (return false)
  let inputArr = document.querySelectorAll('.empty-check');
  for(let i of inputArr) {
    if(i.value === "") {
      filledInputs = false;
      break
    }else {
    filledInputs = true;
    }
  }

  // validate mail
  let emailVal = $('#email').val()
  if(validateEmail(emailVal) ) {
    mail = true 
    $('#email').parent().parent().removeClass('incorrect')
  } else {
    mail = false 
    $('#email').parent().parent().addClass('incorrect');
  }
  
   // validate password
   if($('#password').val().length > 4) {
    password = true
    $('#password').parent().parent().removeClass('incorrect')
  }else {
    $('#password').parent().parent().addClass('incorrect')
    password = false
  }

  // validate password match
  if($('#password-match').val() === $('#password').val() ) {
    passwordMatch = true;
    $('#password-match').parent().parent().removeClass('incorrect')
  }else {
      $('#password-match').parent().parent().addClass('incorrect')
      passwordMatch = false
  }
  
  // validate age checked
  if($('#age').is(':checked')) {
    age = true
    $('.age-msg').removeClass('shown')
  }else {
    age = false
    $('.age-msg').addClass('shown')
  }
 
  // ______ submit if all is valid 
  filledInputs && mail && password && passwordMatch && age && $('.auth-section__form').submit();
    
});


/* ___________________   contact-us.html  ____________________*/

// validate message form  ----
$('#submit-message').on('click', function() {

  let mail = false;
  let filledInputs = false;

    // validate mail
  let emailVal = $('#email').val()
  if(validateEmail(emailVal) ) {
     mail = true 
     $('#email').parent().removeClass('incorrect')
  } else {
     mail = false 
     $('#email').parent().addClass('incorrect');
  }

  // [filledInputs] validate inputs for (val === false ) UI only
  $('.empty-check').each( (i, el) => {
      if($(el).val().length > 1 ) {
        $(el).parent().removeClass('incorrect');
      }else {
        $(el).parent().addClass('incorrect');
      }
  });
  
  // [filledInputs] check if even one field is empty (return false)
  let inputArr = document.querySelectorAll('.empty-check');
  for(let i of inputArr) {
      if(i.value.length < 2) {
        filledInputs = false;
        break
      }else {
      filledInputs = true;
      }
  }
  // ______ submit if all is valid 
  filledInputs && mail && $('.contact__form').submit();
  
});

/* ___________________   legal-docs.html  ____________________*/

// hover animation on card --
$(function() {  
  $('.legal-docs__card').on('mouseenter', function(e) {
			let parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
			$(this).find('.overlay').css({top:relY, left:relX})
    }).on('mouseout', function(e) {
			let parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
    	$(this).find('.overlay').css({top:relY, left:relX})
    });
  
});