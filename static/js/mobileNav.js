/* jshint esversion: 6 */

(function showMobileNav() {

let navReveal = document.querySelector('.nav_mobile-placeholder');
const mobileNav = document.querySelector('.header_nav');

let menuVisible = false;

navReveal.onclick = (() => {
    if (!menuVisible) {
        mobileNav.style.display = "block";
        mobileNav.style.opacity = "1";
        navReveal.style.background = '#ea4';
        navReveal.style.textShadow = '1px 1px 5px #fff';
        menuVisible = true;
    }
    else {
        mobileNav.style.display = "none";
        navReveal.style.background = '#eee';
        navReveal.style.color = '#222';
        navReveal.style.textShadow = 'none';
        menuVisible = false;
    }

});

})();