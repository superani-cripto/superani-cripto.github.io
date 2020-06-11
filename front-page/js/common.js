$(function () {
  const anchors = document.querySelectorAll('a[href*="#"]');

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

  for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const blockID = anchor.getAttribute("href");
    });
  }

});

$(document).on("click", ".box", function () {
  $(this).addClass("active").siblings().removeClass("active");
});





