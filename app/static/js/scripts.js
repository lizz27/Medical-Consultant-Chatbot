/*!
* Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Reverse Color Elements When Websites Scrolls //
var body = document.getElementsByTagName('body')[0];
        body.style.backgroundColor = 'white';
var bg_changes1 = document.getElementsByClassName('bg-black')[0];
var bg_changes2 = document.getElementsByClassName('bg-black')[1];
var bg_changes3 = document.getElementsByClassName('bg-black')[2];
var bg_changes4 = document.getElementsByClassName('bg-black')[3];
var bg_changes5 = document.getElementsByClassName('bg-black')[4];
var bg_changes6 = document.getElementsByClassName('bg-black')[5];
var bg_changes7 = document.getElementsByClassName('bg-black')[6];
        bg_changes1.style.backgroundColor = 'black';
        bg_changes2.style.backgroundColor = 'black';
        bg_changes3.style.backgroundColor = 'black';
        bg_changes4.style.backgroundColor = 'black';
        bg_changes5.style.backgroundColor = 'black';
        bg_changes6.style.backgroundColor = 'black';
        bg_changes7.style.backgroundColor = 'black';

        // trigger this function every time the user scrolls
        window.onscroll = function (event) {
            var scroll = window.pageYOffset;
            if (scroll < 1250) {
                body.style.backgroundColor = 'white';
                bg_changes1.style.backgroundColor='black';
                bg_changes2.style.backgroundColor='black';
                bg_changes3.style.backgroundColor='black';
                bg_changes4.style.backgroundColor='black';
                bg_changes5.style.backgroundColor='black';
                bg_changes6.style.backgroundColor='black';
                bg_changes7.style.backgroundColor='black';
                document.getElementById('whitefont_transition_h4').style.color = 'black';
                document.getElementById('whitefont_transition_p').style.color = 'black';
                document.getElementById('whitefont_transition_h1').style.color = 'black';
                document.getElementById('whitefont_transition_h2').style.color = 'black';
            } else {
                body.style.backgroundColor = 'black';
                bg_changes1.style.backgroundColor='white';
                bg_changes2.style.backgroundColor='white';
                bg_changes3.style.backgroundColor='white';
                bg_changes4.style.backgroundColor='white';
                bg_changes5.style.backgroundColor='white';
                bg_changes6.style.backgroundColor='white';
                bg_changes7.style.backgroundColor='white';

                document.getElementById('whitefont_transition_h4').style.color = 'white';
                document.getElementById('whitefont_transition_p').style.color = 'white';
                document.getElementById('whitefont_transition_h1').style.color = 'white';
                document.getElementById('whitefont_transition_h2').style.color = 'white';

            } }
