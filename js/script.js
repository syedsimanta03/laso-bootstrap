//Show and Hide Navbar

$(document).ready(function () { // .ready() After loading page 
    'use strict';
    $(window).scroll(function () { // .scroll() While scrolling
        'use strict';
        if ($(window).scrollTop() < 80) // Before reaching the top
        {
            // Hide Navbar
            $('.header').css({
                'margin-top': '-100px',
                'opacity': '0'
            });
        } else {
            // Show Navbar
            $('.header').css({
                'margin-top': '0px',
                'opacity': '1'
            });
        }
    });
});

// Initalization of Wow from Animate

$(document).ready(function(){
    'use strict';
    
    new WOW().init();
});