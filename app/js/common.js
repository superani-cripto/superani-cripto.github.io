$(document).ready(function() {
	$('.slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:1,
		slidesToScroll:1,
		speed:1000,
	});

	$('.slider2').slick({
		arrows:true,
		dots:false,
		slidesToShow:1,
		slidesToScroll:1,
		speed:1000,
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

	$('.slider__header').slick({
		arrows:false,
		dots:true,
		slidesToShow:1,
		slidesToScroll:1,
		speed:1000,
	});
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	jQuery(document).ready(function($) { 
          $(window).on("load",function (){

            $("#preloader").fadeOut(500);

          });
        });
});