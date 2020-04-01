


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

    // $(window).scroll(function (event) {
    //     // var $el = $('#meta');  
    //     // var scroll = $(window).offsetTop();
    //     // var skillBarTopPos = $el.position().top-420;
    //     // var skillBarMaior = skillBarTopPos + 40;
    //     // if (scroll > skillBarTopPos && scroll < skillBarMaior) {
    //     //     startAnimation();
    //     // }
    //     startAnimation()
    // });

    $("#div-percent").attr("data-percent","20%");
    $( "#counter-percent" ).empty().html('20');
    $( "#value-collection" ).empty().html('2.449.847');
    $( "#donation-amount" ).empty().html('4.333');
    $( "#update-hour" ).empty().html('15');
    $( "#update-minutes" ).empty().html('44');
    

    $(window).scroll(function (event) {
        let windowTop = $(window).scrollTop() ;
        let target = $('#div-percent').position().top - 90;
        if($(window).width() < 425){
            target + 160;
        }
        if((windowTop) > target ){
            main()
            
        }
    });
    
    function startAnimation() {
        $('.targetbar').each(function () {
            $(this).find('.targetbar-bar').animate({
                width: $(this).attr('data-percent')
            }, 3000);
        });
    };
    
    function main(){
        startAnimation();
        setTimeout(function(){
            $('#corredor').attr('src','img/Meta/parado.gif');
        },3000) 
        
    }

    $('.counter').counterUp({
        delay: 20,
        time: 2000
    });
    
})
