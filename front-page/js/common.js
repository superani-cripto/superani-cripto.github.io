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
        breakpoint: 1030,
        settings: {
          slidesToShow:5,
          slidesToScroll:1,
        }
      },{
        breakpoint: 880,
        settings: {
          slidesToShow:4,
          slidesToScroll:1,
        }
      },{
        breakpoint: 750,
        settings: {
          slidesToShow:3,
          slidesToScroll:1,
        }
      },{
        breakpoint: 600,
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
        $('.form__tel__item') .hide()
        $('.video__form') .hide();
        $('.search__form') .hide();
    })
    $('.button__tel a,.nav__tel__form a') .click(function() {
        $('.form__tel') .show();
        $('.form__tel__item') .show();
        $('.form__tel__item2') .hide();
    })
    $('.search a') .click(function() {
        $('.form__tel') .show();
        $('.search__form') .show();
        $('.form__tel__item2') .hide();
        $('.form__tel__item') .hide();
    })
    $('.form__btn') .click(function() {
        $('.form__tel__item') .hide();
        $('.form__tel__item2') .show(500);
    })
    $('.exit-form') .click(function() {
        $('.form__tel') .hide();
        $('.search__form') .hide();
    })
    $('.button__tel a,.nav__tel__form a') .click(function() {
        $('.form__tel') .show();
    })
    $('.video__item a') .click(function() {
        $('.video__form') .show();
    })
    $('.video__form__exit') .click(function() {
        $('.video__form') .hide();
    })
   
});

$(document).on('click','.box2', function(){
    $(this).toggleClass('active')
});
$(document).on('click','.box1', function(){
    $(this).toggleClass('active')
});



$('.burger__item').click(function(event) {
    $('.menu__burger,.line1__burger,.line2__burger,.line3__burger').toggleClass('active');
    $('body').toggleClass('lock');
  });






