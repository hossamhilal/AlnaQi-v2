/*global $ */
(function($) {
    "use strict";

    // OPEN SIDE  MENU 
    $('.menu-btn').on('click', function(){
        let logo = $('.logo');
        logo.clone().insertBefore($('.nav-menu ul'));
        $('.nav-menu ').toggleClass('show');
        $('.nav-overlay').addClass('show');  
        setTimeout(function(){
            $('body').addClass('stopScroll');
        }, 200); 
    });

    // CLOSE SIDE MENU 
    $('.nav-overlay').on('click', function(){
        let logo = $('.nav-menu .logo');
        $('.nav-menu').find(logo).remove();
        $(this).removeClass('show');
        $('.nav-menu ').removeClass('show');  
        $('body').removeClass('stopScroll');  
    });

    // Show Search 
    $('.open-icon').on('click', function(){
        $('.search-box').addClass('show'); 
        $('body').addClass('stopScroll');  
    });

    // Hide Search 
    $('.search-box .close').on('click', function(){
        $('.search-box').removeClass('show');
        $('body').removeClass('stopScroll');  
    });

    // Filter 
    $('.filter-btn').click(function () {
        $('.filter-btn').removeClass('active');
        $(this).addClass('active'); 
    });

    // Show List
    $('.list-button').click(function () {
        $('.products-items .col-12').addClass('list-item');
    });

    // Hide List
    $('.grid-button').click(function () {
        $('.products-items .col-12').removeClass('list-item');
    });

    // iniat WOW Js
    new WOW().init();
   
})(jQuery);

