$(document).ready(function() {

	$('.slider').slick({
		arrows:false,
		dots:false,
		slidesToShow:1,
		slidesToScroll:1,
		speed:5000,
		draggable:false,
	});	

	$('.slider__header33').slick({
		arrows:false,
		dots:false,
		slidesToShow:1,
		slidesToScroll:1,
		speed:5000,
	});
	$('.slider__header4').slick({
		arrows:false,
		dots:true,
		slidesToShow:1,
		slidesToScroll:1,
		speed:1000,
	});
});

$(document).ready(function() {
	$('.big-slider').slick({
		arrows:false,
		dots:false,
		asNavFor:".min-slider"
	});
});

$(document).ready(function() {
	$('.min-slider').slick({
		arrows:false,
		dots:false,
		slidesToShow:3,
		centerMode:true,
		autoplay:true,
		autoplaySpeed:2500,
		asNavFor:".big-slider"
	});
});


$ (function() {
    $('.btn2') .ready (function() {
        $('#section2') .hide();
        $('#section3') .hide();
        $('#section4') .hide();
        $('#section5') .hide();
        $('#section6') .hide();
    })
    $('#btn2') .click(function() {
        $('#section2') .show(300);
        $('#section3') .hide();
        $('#section4') .hide();
        $('#section5') .hide();
        $('#section6') .hide();
    })
     $('#btn3') .click(function() {
        $('#section2') .hide();
        $('#section3') .show(300);
        $('#section4') .show(300);
        $('#section5') .hide();
        $('#section6') .hide();
    })
 	$('#btn1') .click(function() {
        $('#section2') .hide();
        $('#section3') .hide();
        $('#section4') .hide();
        $('#section5') .hide();
        $('#section6') .hide();
    })

    $('#btn4') .click(function() {
        $('#section2') .hide();
        $('#section3') .hide();
        $('#section4') .hide();
        $('#section5') .show(300);
        $('#section6') .hide();
    })

    $('#btn5') .click(function() {
        $('#section2') .hide();
        $('#section3') .hide();
        $('#section4') .hide();
        $('#section5') .hide();
        $('#section6') .show(300);
    })

});


let ul = document.querySelector('.menu');
		var li = document.querySelectorAll('.box');

		li.forEach(el => {

			el.addEventListener('click', function(){
			ul.querySelector('.active').classList.remove('active');
 			
 				el.classList.add('active');
 			}); 			
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

