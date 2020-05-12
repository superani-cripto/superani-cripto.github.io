$(document).ready(function() {
    $('.slider').slick({
        arrows:true,
        dots:false,
        slidesToShow:3,
        slidesToScroll:1,
        speed:1000,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive:[
            {
                breakpoint: 720,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:1,
                }
            },{
                breakpoint: 550,
                settings: {
                    dots:true,
                    slidesToShow:2,
                    arrows:false,
                }
            }
        ]
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
            setTimeout(function(){$('.menu-link-1').removeClass('open-done')}, 300);
            setTimeout(function(){$('.menu-link-2').removeClass('open-done')}, 300);
            setTimeout(function(){$('.menu-link-3').removeClass('open-done')}, 400);
            setTimeout(function(){$('.menu-link-4').removeClass('open-done')}, 500);
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

$(document).on('click','.box', function(){
    $(this).addClass('active').siblings().removeClass('active')
});

$(document).on('click','.box1', function(){
    $(this).addClass('active').siblings().removeClass('active')
});
