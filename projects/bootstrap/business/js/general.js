
//  -----------          modals      -----------
const modals = [document.querySelector('#myModal'), document.querySelector('#myModal-second')];
const logInLink = document.querySelector('#login-shift');
const singupLink = document.querySelector('#signup-shift');

function openModal(i, e){
    e.preventDefault();
    modals[i].style.display = 'block';
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
};
function closeModal(i, e){
    e.preventDefault();
    modals[i].style.display = 'none';
    document.body.style.position = "";
};

window.addEventListener("click", function(e) {
	if (e.target == modals[0] || e.target == modals[1] ) {
        modals[0].style.display = 'none';
        modals[1].style.display = 'none';
        document.body.style.position = "";
	}
});

function switchModals(one, two){
    modals[one].style.display = 'none';
    modals[two].style.display = 'block';
};


//             -----------           NAV        -----------
const navbarBtn = document.querySelector('.navbar-menu');
const navbarNav = document.querySelector('.navbar-nav');

navbarBtn.addEventListener('click', function() {
    navbarNav.classList.toggle('navbar-collapse');
    navbarBtn.classList.toggle('change'); 
});
