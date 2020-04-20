$(document).ready(function() {
    $('.slider').slick({
        arrows:true,
        dots:true,  
        slidesToShow:1,
    });
    $('.slider__section7').slick({
        arrows:true,
        dots:false, 
        slidesToShow:3,
        slidesToScroll:1,
        speed:1000,
        adaptiveHeight:true,
        responsive:[
            {
                breakpoint: 910,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:1,
                }
            },{
                breakpoint: 620,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1,
                }
            },{
                breakpoint: 335,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:1,
                }
            }
        ]
    });
    $('.slider__photo').slick({
        arrows:false,
        dots:true,  
        slidesToShow:1,
        slidesToScroll:1,
        speed:1000,
    });
});


$ (function() {
    $('#btn__one') .ready (function() {
        $('.photo__section3__one') .show();
        $('.photo__section3__two') .hide();
        $('.photo__section3__fri') .hide();
        $('.photo__section3__for') .hide();
        $('.photo__section3__five') .hide();
    })
    $('#btn__one') .click(function() {
        $('.photo__section3') .show(300);
        $('.photo__section3__two') .hide();
        $('.photo__section3__fri') .hide();
        $('.photo__section3__for') .hide();
        $('.photo__section3__five') .hide();
    })
    $('#btn__two') .click(function() {
        $('.photo__section3') .hide();
       $('.photo__section3__two') .show(300);
        $('.photo__section3__fri') .hide();
        $('.photo__section3__for') .hide();
        $('.photo__section3__five') .hide();
    })
    $('#btn__fri') .click(function() {
       $('.photo__section3') .hide();
        $('.photo__section3__two') .hide();
        $('.photo__section3__fri') .show(300);
        $('.photo__section3__for') .hide();
        $('.photo__section3__five') .hide();
    })
    $('#btn__for') .click(function() {
        $('.photo__section3') .hide();
        $('.photo__section3__two') .hide();
        $('.photo__section3__fri') .hide();
        $('.photo__section3__for') .show(300);
        $('.photo__section3__five') .hide();
    })
    $('#btn__five') .click(function() {
        $('#photo__section3') .hide();
        $('#photo__section3__two') .hide();
        $('#photo__section3__fri') .hide();
        $('#photo__section3__for') .hide();
        $('#photo__section3__five') .show(300);
    })
   
});

$(document).on('click','.box', function(){
    $(this).addClass('active').siblings().removeClass('active')
});

$('.open-button').click(function() 
{
        if(!$('.menu-button').hasClass('open-done'))
        {
            $('.menu-button').addClass('open-done');
            $('.menu-block-1').addClass('open-done');
            setTimeout(function(){$('.menu-block-2').addClass('open-done')}, 100);
            setTimeout(function(){$('.menu-link-1').addClass('open-done')}, 200);
            setTimeout(function(){$('.menu-link-2').addClass('open-done')}, 400);
            setTimeout(function(){$('.menu-link-3').addClass('open-done')}, 500);
            setTimeout(function(){$('.menu-link-4').addClass('open-done')}, 600);
            setTimeout(function(){$('.menu-link-5').addClass('open-done')}, 700);
            setTimeout(function(){$('.menu-link-6').addClass('open-done')}, 800);
            setTimeout(function(){$('.menu-link-7').addClass('open-done')}, 900);
            setTimeout(function(){$('.menu-link-8').addClass('open-done')}, 900);
        }
        else
        {
            $('.menu-button').removeClass('open-done');
            $('.menu-link-1').removeClass('open-done');
            setTimeout(function(){$('.menu-link-1').removeClass('open-done')}, 200);
            setTimeout(function(){$('.menu-link-2').removeClass('open-done')}, 250);
            setTimeout(function(){$('.menu-link-3').removeClass('open-done')}, 300);
            setTimeout(function(){$('.menu-link-4').removeClass('open-done')}, 350);
            setTimeout(function(){$('.menu-link-5').removeClass('open-done')}, 400);
            setTimeout(function(){$('.menu-link-6').removeClass('open-done')}, 450);
            setTimeout(function(){$('.menu-link-7').removeClass('open-done')}, 500);
            setTimeout(function(){$('.menu-link-8').removeClass('open-done')}, 550);
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

