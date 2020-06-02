
 $(document).on("click", ".box", function () {
   $(this).addClass("active").siblings().removeClass("active");
 });

$('.gamberger__span').click(function(event) {
		$('.menu__burger,.span__burger').toggleClass('active');
		$('body').toggleClass('lock');
	});
$ (function() {
    $('.btn2') .ready (function() {
        $('.form') .hide();
    })
    $('.arrow__btn a') .click(function() {
        $('.form') .show(100);
    })
    $('.exit__form ') .click(function() {
        $('.form') .hide(100);
    })

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









