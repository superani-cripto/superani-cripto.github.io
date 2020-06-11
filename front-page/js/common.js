$(function () {
  const anchors = document.querySelectorAll('a[href*="#"]');
  for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const blockID = anchor.getAttribute("href");
    });
  }
  $(document).ready(function() {
  $('.slider').slick({
    arrows:false,
    dots:true,  
    slidesToShow:1,
  });
  $('.slider__section5').slick({
    arrows:false,
    dots:true,  
    slidesToShow:6,
  });
});

$('.popup-youtube').magnificPopup({ 
    type: 'iframe' 
 });


});

$(document).on("click", ".box", function () {
  $(this).addClass("active").siblings().removeClass("active");
});







