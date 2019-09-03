const $header = document.querySelector('header');
const $logo = document.querySelectorAll('.logo')[0];
const $navBar = document.querySelectorAll('.nav-bar')[0];
const $menu = document.querySelectorAll('.menu')[0];

window.addEventListener('scroll', toggleHeader, false);
$menu.addEventListener('click', toggleMenu, false);

function toggleHeader() {
    if (window.pageYOffset > 60 && $header.classList.contains('max-header')) {
        $header.classList.remove('max-header');
        $header.classList.add('min-header');
        $logo.firstElementChild.setAttribute('src', 'imgs/logo1.png');
        $logo.classList.remove('max-logo');
        $logo.classList.add('min-logo');
        $navBar.classList.remove('max-nav');
        $navBar.classList.add('min-nav');
        $menu.firstElementChild.classList.remove('max-hamburger')
        $menu.firstElementChild.classList.add('min-hamburger')
    } else if (window.pageYOffset <= 60 && $header.classList.contains('min-header')) {
        $header.classList.remove('min-header');
        $header.classList.add('max-header');
        $logo.firstElementChild.setAttribute('src', 'imgs/logo1.png');
        $logo.classList.remove('min-logo');
        $logo.classList.add('max-logo');
        $navBar.classList.remove('min-nav');
        $navBar.classList.add('max-nav');
        $menu.firstElementChild.classList.add('max-hamburger')
        $menu.firstElementChild.classList.remove('min-hamburger')
    }
}

var isOpen = false;
function toggleMenu() {
    if(!isOpen) {
        $navBar.classList.add('menu-opened');
        $menu.firstElementChild.classList.add('close-btn')
        isOpen = true; 
    } else {
        $navBar.classList.remove('menu-opened');
        $menu.firstElementChild.classList.remove('close-btn')
        isOpen = false;
    }
}

$navBar.addEventListener('click', navClick, false);
function navClick(evt) {
    if (evt.target.tagName == 'A') {
        toggleMenu();
    }
}