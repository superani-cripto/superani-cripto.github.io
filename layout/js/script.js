$(document).ready(function() {
	$('.slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:2,
		slidesToScroll:2,
		speed:1000,
		adaptiveHeight:true,
		responsive:[
			{
				breakpoint: 980,
				settings: {
					slidesToShow:1,
					slidesToScroll:1,
					dots:true,
					arrows:false,
				}
			},{
				breakpoint: 1240,
				settings: {
					dots:true,
					arrows:false,
				}
			}
		]
	});
	$('.slider-first').slick({
		arrows:false,
		dots:true,	
	});
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
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

});