const btnHamburger = document.querySelector('#btnHamburger');
const nav = document.querySelector('.navigation')
const email = document.querySelector('#email')


// Dropdown functionality
btnHamburger.addEventListener('click', function(){
    this.classList.toggle('header_menu--active');
    nav.classList.toggle('navigation--active');
})