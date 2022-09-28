

window.addEventListener('scroll', function(){
    const nav = document.getElementById('nav');
    const windowPosition = window.scrollY > 1;
    
    nav.classList.toggle('scrolling-active', windowPosition); 
    
});

// const templatePhotos = document.getElementById('template-photos');
// const expandButton = document.getElementById('expand');

// expandButton.addEventListener('click', function(){
//     templatePhotos.classList.add('expand');
// });

// NAV SCROLLING //

const homeBtn = document.getElementById('home-btn');
const aboutBtn = document.getElementById('about-btn');
const projectsBtn = document.getElementById('projects-btn');
const contactBtn = document.getElementById('contact-btn');

homeBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

aboutBtn.onclick = function() {
    window.scrollTo({
        top: 700,
        behavior: 'smooth'
    });
}

projectsBtn.onclick = function() {
    window.scrollTo({
        top: 1400,
        behavior: 'smooth'
    });
}

contactBtn.onclick = function() {
    document.querySelector('#contact-section').scrollIntoView({
        behavior: 'smooth'
      });
}

//email template dropdown

const emailBtn = document.getElementById('email-template-title');
const emailSection = document.getElementById('template-grouping');
const emailHideBtn = document.getElementById('expand-less');

emailBtn.onclick = function() {
    emailSection.style.display = 'flex';
    emailBtn.style.display = 'none';
    emailHideBtn.style.display = 'inline-block';
    slideLeft.style.display = 'inline-block';
    slideRight.style.display = 'inline-block';
    window.scrollTo({
        top: 1540,
        behavior: 'smooth'
    });
}

emailHideBtn.onclick = function() {
    emailSection.style.display = 'none';
    emailHideBtn.style.display = 'none';
    emailBtn.style.display = 'inline-block';
    slideLeft.style.display = 'none';
    slideRight.style.display = 'none';
}

const slideRight = document.getElementById('slide-right');
const slideLeft = document.getElementById('slide-left');

slideRight.onclick = function() {
    emailSection.scrollBy({
        top: 0,
        left: 400,
        behavior: 'smooth'
    });
}

slideLeft.onclick = function() {
    emailSection.scrollBy({
        top: 0,
        left: -400,
        behavior: 'smooth'
    });
}

//landing page dropdown

const landingBtn = document.getElementById('landing-title');
const landingSection = document.getElementById('landing-grouping');
const landingHideBtn = document.getElementById('expand-less-landing');

landingBtn.onclick = function() {
    landingSection.style.display = 'flex';
    landingBtn.style.display = 'none';
    landingHideBtn.style.display = 'inline-block';
    slideLeft2.style.display = 'inline-block';
    slideRight2.style.display = 'inline-block';
    window.scrollTo({
        top: 1670,
        behavior: 'smooth'
    });
}

landingHideBtn.onclick = function() {
    landingSection.style.display = 'none';
    landingHideBtn.style.display = 'none';
    landingBtn.style.display = 'inline-block';
    slideLeft2.style.display = 'none';
    slideRight2.style.display = 'none';
    window.scrollTo({
        top: 1400,
        behavior: 'smooth'
    });
}

const slideRight2 = document.getElementById('slide-right-2');
const slideLeft2 = document.getElementById('slide-left-2');

slideRight2.onclick = function() {
    landingSection.scrollBy({
        top: 0,
        left: 400,
        behavior: 'smooth'
    });
}

slideLeft2.onclick = function() {
    landingSection.scrollBy({
        top: 0,
        left: -400,
        behavior: 'smooth'
    });
}


//email clone dropdown

const cloneBtn = document.getElementById('clone-title');
const cloneSection = document.getElementById('clone-grouping');
const cloneHideBtn = document.getElementById('expand-less-clone');

cloneBtn.onclick = function() {
    cloneSection.style.display = 'flex';
    cloneBtn.style.display = 'none';
    cloneHideBtn.style.display = 'inline-block';
    slideLeft3.style.display = 'inline-block';
    slideRight3.style.display = 'inline-block';
    window.scrollTo({
        top: 1870,
        behavior: 'smooth'
    });
}

cloneHideBtn.onclick = function() {
    cloneSection.style.display = 'none';
    cloneHideBtn.style.display = 'none';
    cloneBtn.style.display = 'inline-block';
    slideLeft3.style.display = 'none';
    slideRight3.style.display = 'none';
    window.scrollTo({
        top: 1400,
        behavior: 'smooth'
    });
}

const slideRight3 = document.getElementById('slide-right-3');
const slideLeft3 = document.getElementById('slide-left-3');
const cloneContainer = document.getElementById('clone-container');

slideRight3.onclick = function() {
    cloneContainer.scrollBy({
        top: 0,
        left: 400,
        behavior: 'smooth'
    });
}

slideLeft3.onclick = function() {
    cloneContainer.scrollBy({
        top: 0,
        left: -400,
        behavior: 'smooth'
    });
}

