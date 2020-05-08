$(document).ready(function() {
    $('.slider').slick({
        arrows:true,
        dots:false,
        slidesToShow:1,
        slidesToScroll:1,
        speed:1000,
    });

});

$('.open-button').click(function() 
{
        if(!$('.menu-button').hasClass('open-done'))
        {
            $('.menu-button').addClass('open-done');
            $('.menu-block-1').addClass('open-done');
            setTimeout(function(){$('.menu-block-2').addClass('open-done')}, 100);
            setTimeout(function(){$('.menu-link-1').addClass('open-done')}, 500);
            setTimeout(function(){$('.menu-link-2').addClass('open-done')}, 600);
            setTimeout(function(){$('.menu-link-3').addClass('open-done')}, 700);
            setTimeout(function(){$('.menu-link-4').addClass('open-done')}, 800);
        }
        else
        {
            $('.menu-button').removeClass('open-done');
            $('.menu-link-1').removeClass('open-done');
            setTimeout(function(){$('.menu-link-2').removeClass('open-done')}, 100);
            setTimeout(function(){$('.menu-link-3').removeClass('open-done')}, 200);
            setTimeout(function(){$('.menu-link-4').removeClass('open-done')}, 300);
            setTimeout(function(){$('.menu-block-1').removeClass('open-done')}, 800);
            setTimeout(function(){$('.menu-block-2').removeClass('open-done')}, 600);
        }
});

$ (function() {
    $('.btn2') .ready (function() {
        $('.title__item2') .hide();
        $('.title__item3') .hide();
    })
    $('#btn2') .click(function() {
        $('.title__item') .hide();
        $('.title__item3') .hide();
        $('.title__item2') .show(300);
    })
     $('#btn1') .click(function() {
        $('.title__item3') .hide();
        $('.title__item2') .hide();
        $('.title__item') .show(300);
    })
      $('#btn3') .click(function() {
        $('.title__item') .hide();
        $('.title__item2') .hide();
        $('.title__item3') .show(300);
    });
});

$(document).on('click','.box', function(){
    $(this).addClass('active').siblings().removeClass('active')
});

$(document).ready(function() {
    $('.slider').slick({
        arrows:true,
        dots:false,
        slidesToShow:3,
        slidesToScroll:1,
        speed:1000,
        adaptiveHeight:true,
    });

});



