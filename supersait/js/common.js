$(document).ready(function() {
	$('.slider').slick({
		arrows:true,
		dots:true,	
	});
	$('.slider__section7').slick({
		arrows:true,
		dots:false,	
		slidesToShow:3,
		slidesToScroll:1,
		speed:1000,
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


