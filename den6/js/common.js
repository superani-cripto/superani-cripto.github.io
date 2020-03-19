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

$('body').toggleClass('lock');