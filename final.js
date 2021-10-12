// Design By (Metehan Kaya)
// Figma: https://www.figma.com/community/file/876455506114947378

// Select Body Element (Both Is Good)
// const body = document.querySelector('.body');
const body = document.body;

// Select Header
const header = document.querySelector('.header');

// Select Toggle-Menu Element
const toggleMenu = document.querySelector('.toggle-menu');

// When Click On Toggle-Menu Element Call Function [OpenMenu]
toggleMenu.addEventListener('click', openMenu);

// Open-Menu Function
function openMenu() {
  // If The Header Contains Class (header--active)
  if(header.classList.contains('header--active')) {
    // Remove Class (header--active) From Header
    header.classList.remove('header--active');
    // Remove Class (body--noscroll) From Body
    body.classList.remove('body--noscroll');
  } else { // Else
    // Add Class (header--active) On Header
    header.classList.add('header--active');
    // Add Class (body--noscroll) On Body
    body.classList.add('body--noscroll');
  };
};

// (:



