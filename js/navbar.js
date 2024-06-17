/*!
 * Navbar.js
 * For handling the navbar behavior of the site
 */

(function($) {
    "use strict";

    // Scrollspy initialization
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Page scrolling feature
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Close the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Navbar resize on scroll
    var cbpAnimatedHeader = (function() {
        var docElem = document.documentElement,
            header = document.querySelector('.navbar-default'),
            didScroll = false,
            changeHeaderOn = 300;

        function init() {
            window.addEventListener('scroll', function(event) {
                if (!didScroll) {
                    didScroll = true;
                    setTimeout(scrollPage, 250);
                }
            }, false);
        }

        function scrollPage() {
            var sy = scrollY();
            if (sy >= changeHeaderOn) {
                header.classList.add('navbar-shrink');
            } else {
                header.classList.remove('navbar-shrink');
            }
            didScroll = false;
        }

        function scrollY() {
            return window.pageYOffset || docElem.scrollTop;
        }

        init();
    })();

    // Update active navbar item on scroll
    $(document).ready(function() {
        $('body').on('activate.bs.scrollspy', function() {
            var activeElement = $('.navbar-nav li.active > a');
            $('.navbar-nav li').removeClass('active');
            activeElement.closest('li').addClass('active');
        });
    });

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery);