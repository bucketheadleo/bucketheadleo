
// -------------- our project - navigation  ----|||||

const projectNav = document.querySelectorAll('.header-element');
const projContainer = document.querySelector('.project-boxes');
const projects = document.querySelectorAll('.project-element');

        // on navigation click
for(let i = 0; i < projectNav.length; i++) {
    projectNav[i].onclick = function() {

        for(let i = 0; i < projectNav.length; i++){
            projectNav[i].classList.remove('on');
        }
        projectNav[i].classList.add('on');
        
        if( i === 1 || i === 3 || i === 5 || i === 7) {
            projectView1()
        }else if (i === 2 || i === 4 || i === 6){              
            projectView2()
        } else {
            for(let i = 0; i < projects.length; i++) {
                projects[i].style.display = 'block';
            }
            projContainer.classList.toggle('animate');
        }
    }
};
function projectView1() {
    for(let i = 0; i < projects.length; i++) {
        projects[i].style.display = 'block';
    }
    projects[0].style.display = 'none';
    projects[2].style.display = 'none';
    projContainer.classList.toggle('animate');
};
function projectView2() {
    for(let i = 0; i < projects.length; i++) {
        projects[i].style.display = 'block';
    }
    projects[1].style.display = 'none';
    projects[3].style.display = 'none';
    projects[5].style.display = 'none';
    projContainer.classList.toggle('animate');
};