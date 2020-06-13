$(function () {
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
    responsive:[
      {
        breakpoint: 1550,
        settings: {
          slidesToShow:5,
          slidesToScroll:1,
        }
      },{
        breakpoint: 1330,
        settings: {
          slidesToShow:4,
          slidesToScroll:1,
        }
      },{
        breakpoint: 965,
        settings: {
          slidesToShow:3,
          slidesToScroll:1,
        }
      },,{
        breakpoint: 710,
        settings: {
          slidesToShow:2,
          slidesToScroll:1,
        }
      },
    ]
  });
});

 const anchors = document.querySelectorAll('a[href*="#"]');
  for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const blockID = anchor.getAttribute("href");
    });
  }
  
});

$ (function() {
    $('#btn__one') .ready (function() {
        $('.form__tel') .hide();
        $('.video__form') .hide();
    })
    $('.button__tel a') .click(function() {
        $('.form__tel') .show();
    })
    $('.exit-form') .click(function() {
        $('.form__tel') .hide();
    })
    $('.button__tel a') .click(function() {
        $('.form__tel') .show();
    })
    $('.video__item a') .click(function() {
        $('.video__form') .show();
    })
    $('.video__form__exit') .click(function() {
        $('.video__form') .hide();
    })
   
});

$('.burger__item').click(function(event) {
    $('.menu__burger,.line1__burger,.line2__burger,.line3__burger').toggleClass('active');
    $('body').toggleClass('lock');
  });






