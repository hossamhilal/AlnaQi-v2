/*global $ */
(function ($) {
    "use strict";

    // Header OWL 
    $('.owl-header').owlCarousel({
        rtl: true ,
        margin: 0,
        autoplay: true,
        loop: true,
        nav: true,
        dots: true,
        center : true ,
        autoplaySpeed : 2000,
        autoplayTimeout : 2000,
        navText: ["<i class='icofont-long-arrow-right'></i>", "<i class='icofont-long-arrow-left'></i>"],
        responsive: {
            0: {
                items: 1,
                dotsEach: 1
            },
            600: {
                items: 1,
                dotsEach: 1
            },
            1000: {
                items: 1,
                dotsEach: 1
            }
        }
    });

    // Cats OWL 
    $('.owl-cats').owlCarousel({
        rtl: true ,
        margin: 20,
        autoplay: true,
        loop: true,
        nav: true,
        dots: true,
        center : true ,
        autoplaySpeed : 2000,
        autoplayTimeout : 2000,
        navText: ["<i class='icofont-long-arrow-right'></i>", "<i class='icofont-long-arrow-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // RELATED POSTS OWL 
    $('.owl-clients').owlCarousel({
        rtl: true ,
        margin: 20,
        autoplay: false,
        loop: true,
        nav: true,
        dots: false,
        center : true ,
        autoplaySpeed : 4000,
        autoplayTimeout : 4000,
        navText: ["<i class='icofont-long-arrow-right'></i>", "<i class='icofont-long-arrow-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });

    $('.client-info h3').text($('.owl-clients .owl-item.active.center h3').text());
    $('.client-info p').text($('.owl-clients .owl-item.active.center p').text()); 

    $(document).on('click','.owl-clients .owl-prev , .owl-clients .owl-next',function(){
        var oldTit = $('.owl-clients .owl-item.active.center h3').text(),
            oldTxt = $('.owl-clients .owl-item.active.center p').text() ;
        $('.client-info h3').text(oldTit);
        $('.client-info p').text(oldTxt);
    });

})(jQuery);

