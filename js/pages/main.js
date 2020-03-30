


$(document).ready(function(){

    $('.navbar-toggler').on('click', function (e) {
        e.preventDefault();
        $('html').toggleClass('open-navbar');
    });

    $('html, body').on('click', function (e) {
        if (e.target == document.documentElement) {
            e.preventDefault();
            if ($(window).width() < 769) {
                $('.navbar-toggler').click();
            }
        }
    });

    $('.nav-link').on('click', function () {
        $('.navbar-collapse').removeClass('show');
        $('html').removeClass('open-navbar');
    });

    $(window).scroll(function (event) {
        var $el = $('#meta');  
        var scroll = $(window).scrollTop();
        var skillBarTopPos = $el.position().top-420;
        var skillBarMaior = skillBarTopPos + 40;
        if (scroll > skillBarTopPos && scroll < skillBarMaior) {
            startAnimation();
            
        }
    });
    
    function startAnimation() {
        $('.targetbar').each(function () {
            
            $(this).find('.targetbar-bar').animate({
                width: $(this).attr('data-percent')
            }, 3000);
        });
        
    };
    $('.counter').counterUp({
        delay: 20,
        time: 2000
    });
    
})
