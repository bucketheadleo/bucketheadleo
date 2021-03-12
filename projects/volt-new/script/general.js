
// ------------- header  shadow on scroll 
let navbar = document.querySelector(".header");

window.onscroll = function() {

  if (window.pageYOffset > 100) {
    navbar.classList.add("shadowed");
  } else {
    navbar.classList.remove("shadowed");
  }
};




// -----------  header big menu toggle show /hide 

$('.big-menu-btn').on('click', ()=> {
    $('.navigation-wrapper').toggleClass('closed');
});


// -------------- header big Sub navs ---------------

$(".navigation__link").hover(
  function () {
      // save value of  link attr data- 
      var subClass = $(this).attr("data-sub-nav");

      // hide all target items 
      $('.sub-menu').addClass("closed");

      // show hovered links related target item
      $(".sub-" + subClass).removeClass("closed");
  },

  // on mouse out hide all submenus
  function () {
    $('.sub-menu').addClass("closed");
  },
);

// on content wrapper hover - show it 
$(".sub-menu").hover(
  function () {
    // show sub which was visible before
    $(this).removeClass("closed");

    // show related nav link for this sub menu 
    let thisElClass = $(this).attr("class").split(' ')[1].split('-')[1];
    $('[data-sub-nav='+thisElClass+']').addClass('active');
    
  },
  // on hover out  close all
  function () {
    $('.sub-menu').addClass("closed");

    // hide active class on related link
    $(".navigation__link").removeClass('active')
  }
);



// --------------------   header Search toggle on small screen ---------------

const formBox = document.querySelector('.navbar-search');
const formToggler = document.querySelector('.toggle-search-form');

$('.toggle-search-form').on('click', function(){

    $('.navbar-search').toggleClass('shown');
    // close big menu 
    $('.navigation-wrapper').addClass('closed');
});

// close search form on outside click
window.addEventListener('click', function(e){

  if (!formBox.contains(e.target) && (!formToggler.contains(e.target))){
    formBox.classList.remove('shown');
  } 
});


/// --------------- switch tab function  --------
// on cproduct cards
function switchTab(el) {
    // find surounding btns
    var allBtns = $(el).parent('.cards-block__tabs').find("button");

    // clear all btns
    allBtns.each( (i, item) => {
        $(item).removeClass('active')
    });

    // give active to selected
    $(el).addClass('active');
};


// ----------------- add to cart aniamtion  -------------
$('.card-add-btn').on('click', function cartAnimate() {
    $(".nav-cart-img").addClass('shake');
    setTimeout( function () {
        $(".nav-cart-img").removeClass('shake');
    }, 1000)
});



//  --------- Step Down/ Up --------  purchase steps  1 2 3 4

// increase qty
function QuantityPlus(el) {
  var qtyInput = $(el).parent('.plus-minus-box').find("input");

  // increase by 1
  let newVal = parseInt($(qtyInput).val() ) + 1;
  qtyInput.val(newVal);

};

// decrease qty
function QuantityMinus(el) {
  var qtyInput = $(el).parent('.plus-minus-box').find("input");

  // decrease if its > 1
  if( $(qtyInput).val() == 1) return;

  let newVal = parseInt($(qtyInput).val() ) - 1;
  qtyInput.val(newVal);
};


///--------- check all chekcboxes (cart ) purchase step 1 ---------------
$('#check-all').on('click', function() {
 
  if ($('#check-all').is(':checked')) {
    $('.cart__card .checkbox input').prop( "checked", true );
  }else {
    $('.cart__card .checkbox input').prop( "checked", false );
  }
})

//-------------  payment-infos accordions -------------------------------

$('.bank-acc-accordion__btn').on('click', function() {
  let index = $('.bank-acc-accordion__btn').index(this);

  //clear all
  $('.bank-acc-accordion__btn').removeClass('open');
  $('.bank-acc-accordion__content').removeClass('open');

  // show one
  $('.bank-acc-accordion__btn').eq(index).addClass('open');
  $('.bank-acc-accordion__content').eq(index).addClass('open');
})



// -------- search results ----

// show result  on focus
$('.navbar-search').find('input').on('focus', function(){
    $('.navbar-search__results').addClass('shown');
    $('.navbar-search').addClass('active');
})

// close on outside click
$(document).click(function(e) {
  if ($(e.target).closest('.navbar-search').length === 0 
  && $(e.target).closest('.navbar-search__results').length === 0) {
    $('.navbar-search__results').removeClass('shown');
    $('.navbar-search').removeClass('active');
  }
})



// make columns - header nav

$('.sub-menu__list').each( function(index,el) {

  if(el.children.length > 11) {
    $(el).addClass('columns')
  }
})