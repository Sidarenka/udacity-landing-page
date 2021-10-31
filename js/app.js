// Define Global Variables

const allSections = document.querySelectorAll('section');
const navbarList = document.getElementById('navbar__list');
const navbarItems = document.getElementById('nav__item');
let navbarHeight = document.getElementsByClassName('page__header');
const mobileMenu = document.querySelector('#mobile__menu');

// Build navigation

const dynamicMenu = (section) => {
    for (section of allSections) {
        const navLinks = document.createElement('a');
        const list = document.createElement('li');
        navLinks.className = "menu__link";
        list.className = "nav__item";
        navLinks.textContent = section.getAttribute('data-nav');
        navLinks.setAttribute('href', `#${section.getAttribute('id')}`);
        list.appendChild(navLinks);
        navbarList.appendChild(list);
    }
    return;
}
dynamicMenu();

// Add class 'active' to mobile menu 

mobileMenu.addEventListener('click', function() {
    mobileMenu.classList.toggle('is__active');
    navbarList.classList.toggle('active');
})

// Scroll to the header section on logo click
const scrollToHeader = () => {
    const logo = document.getElementById('navbar__logo');
    logo.addEventListener('click', () => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    });
  }
  scrollToHeader();
  
// Scroll to section on link click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Define the section of the page that's currently in view 
function isInViewport(e) {
    let bounding = e.getBoundingClientRect();
    return (
        bounding.top >= -250
        &&
        bounding.left >= 0 &&
        bounding.bottom <= 130 + (window.innerHeight || document.documentElement.clientHeight) 
        &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// Highlight corresponding section of navigation if section is in viewport
const navHighlight = document.querySelectorAll('li');

function highlightNav(){
    for (let i=0; i<allSections.length; i++) {
        if (isInViewport(allSections[i]) === true) {
            navHighlight[i].classList.add('section-highlight')
        } else navHighlight[i].classList.remove('section-highlight');
    }
}
document.addEventListener('scroll', function(){
    highlightNav();
}
);

// Highlight corresponding section if section is in viewport
function sectionActive(){
    for (let i=0; i<allSections.length; i++) {
        if (isInViewport(allSections[i]) === true) {
            allSections[i].classList.add('active__class')
        } else allSections[i].classList.remove('active__class');
    }
}
document.addEventListener('scroll', function(){
    sectionActive();
}
);

