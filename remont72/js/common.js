$(document).ready(function() {
    $('.slider').slick({
        arrows:true,
        dots:false,
        slidesToShow:1,
        slidesToScroll:1,
        speed:1000,
        adaptiveHeight:true,
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
            setTimeout(function(){$('.menu-link-5').addClass('open-done')}, 900);
        }
        else
        {
            $('.menu-button').removeClass('open-done');
            $('.menu-link-1').removeClass('open-done');
            setTimeout(function(){$('.menu-link-1').removeClass('open-done')}, 300);
            setTimeout(function(){$('.menu-link-2').removeClass('open-done')}, 300);
            setTimeout(function(){$('.menu-link-3').removeClass('open-done')}, 400);
            setTimeout(function(){$('.menu-link-4').removeClass('open-done')}, 500);
            setTimeout(function(){$('.menu-link-5').removeClass('open-done')}, 550);
            setTimeout(function(){$('.menu-block-1').removeClass('open-done')}, 800);
            setTimeout(function(){$('.menu-block-2').removeClass('open-done')}, 600);
        }
});

    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener("click", function(event){
            event.preventDefault();
            const blockID = anchor.getAttribute('href')
            document.querySelector('' + blockID).scrollIntoView({
                behavior:"smooth",
                block:"start"
            })
          })
        }

         $(function (){

            AOS.init();

    }); 
