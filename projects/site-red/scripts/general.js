
//  NAV color-change on scroll 
const navigationLinks = document.querySelectorAll('.ch-color');
const navigationImgs = document.querySelectorAll('.ch-src');
const logoSrcs1 = ["pictures/nav-svgs/search.svg", "pictures/nav-svgs/heart.svg", "pictures/nav-svgs/shop.svg",
"pictures/nav-svgs/menu.svg"  ]
const logoSrcs2 = ["pictures/nav-svgs/search-blc.svg", "pictures/nav-svgs/heart-blc.svg", 
"pictures/nav-svgs/shop-blc.svg", "pictures/nav-svgs/menu-blc.svg"]
const underlined = document.querySelectorAll('.underlined');


function makeNavBlack() {
    for(x=0; x < navigationLinks.length; x++) {
        navigationLinks[x].style.color = "#111";
        navigationLinks[x].style.transition = "all 0.5s";
    }
    for(x=0; x < navigationImgs.length; x++) {
        navigationImgs[x].src = logoSrcs2[x];
    }
    for(s=0; s < underlined.length; s++) { 
        underlined[s].classList.add('ch-ud');
        underlined[s].classList.remove('underlined');  
    } 
};
function makeNavWhite() {
    for(x=0; x < navigationLinks.length; x++) {
        navigationLinks[x].style.color = "#fff";
        navigationLinks[x].style.transition = "all 0.5s";
    }
    for(x=0; x < navigationImgs.length; x++) {
        navigationImgs[x].src = logoSrcs1[x];
    }
    for(s=0; s < underlined.length; s++) {
        underlined[s].classList.remove('ch-ud');
        underlined[s].classList.add('underlined');  
    } 
};

        
//   Manu - on small screen 
const manu = document.querySelector('.manu');
const manuAside = document.querySelector('.navbar-nav-aside');
const closeAside = document.querySelector('.close-nav-aside');

function showMenuAside(e) {
    e.preventDefault();
    manu.style.opacity = "0";
    manuAside.style.transition = "1s ease";
    manuAside.style.transform = "translatex(0)";
    setTimeout(function(){
        manuAside.style.transition = "1s ease";
        manuAside.style.background = "rgba(0, 0, 0, 0.44)";
        closeAside.style.opacity = "1";
        
    }, 1000)
}
function hideMenuAside() {
    manu.style.opacity = "1";
    closeAside.style.opacity = "0";
    setTimeout(function(){
        manuAside.style.transition = ".1s ease";
        manuAside.style.background = "transparent";
    }, 10)
    manuAside.style.transform = "translatex(-100%)";
}


//   COLLECTION aside S
const collectionPanel = document.querySelector('.collection-panel');

function showCollection(e) {
    e.preventDefault();
    hideMenuAside();
    collectionPanel.classList.add('show'); 
    
};
function hideCollection(e) {
    e.preventDefault();
    collectionPanel.classList.remove('show'); 
};


// header-search  | show /hide 
const searchFormCloseBtn = document.querySelector('.close-btn');
const searchForm = document.querySelector('.header-search');

function toggleSearchPanel(e){
    e.preventDefault();
    searchForm.classList.toggle('show');
    resetSearchAnimation();
}
searchFormCloseBtn.onclick = function() {
    searchForm.classList.toggle('show');
    resetSearchAnimation();
};

function resetSearchAnimation() {
    searchUnderline.style.opacity = 0;
    for(let i=0; i<searchBg.length; i++){
        searchBg[i].style.opacity = 1;
    }
    searchInput.value = "";
    notFound.style.opacity = "0";
};

    // typing animation
const searchBg = document.querySelectorAll(".search-bg");
const searchInput = document.querySelector(".search-input");
const searchUnderline = document.querySelector(".search-underline");
const notFound = document.querySelector('.not-found');

searchInput.onkeydown = function(){
    searchUnderline.style.opacity = 1;
    for(let i=0; i<searchBg.length; i++){
            searchBg[i].style.opacity = 0;
    }
}
searchUnderline.onclick = function(){
    notFound.style.opacity = "1";
}

// ACCOUNT hover  show / hide
const accountLink = document.getElementById('account-link');
const accountForm = document.querySelector('.account');

accountLink.onmouseover = function(){
    accountForm.style.transform = "translatex(0)";
};
accountLink.onmouseleave = function(){
    accountForm.style.transform = "translatex(100%)";
};
accountForm.onmouseover = function(){
    accountForm.style.transform = "translatex(0)";
};
accountForm.onmouseleave = function(){
    accountForm.style.transform = "translatex(100%)";
};


// ---- Bounce function for all  page elements

function bounceElOnScroll(itemRect, perc, item) {  
    let windowH = window.innerHeight;
    
    if(itemRect.top < windowH ) {
        item.style.transform = "translatey(0%)";
        item.style.transition = "all .8s";
    }
    if(itemRect.top > windowH ) {
        item.style.transform= 'translatey(' + (perc) + '%)';
    }
    if(itemRect.bottom < 0){
        item.style.transform = 'translatey(' + (-perc) + '%)'; 
    }
    if(itemRect.bottom > 0 && itemRect.top < 0){  
        item.style.transform = "translatey(0%)";
        item.style.transition = "all .8s";
    }
};


//  footer top bar  -- bounce  ---
const footerTop = document.querySelector('.footer-top'); 

window.addEventListener('scroll', function() {
    bounceElOnScroll(footerTop.getBoundingClientRect(), 50, footerTop); 
});





