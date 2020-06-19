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
  $('.slider__page4').slick({
    arrows:false,
    dots:false,  
    slidesToShow:1,
    asNavFor:".min__slider__page4",
  });
  $('.min__slider__page4').slick({
    arrows:true,
    dots:false,  
    slidesToShow:4,
    asNavFor:".slider__page4",
    responsive:[
        {
          breakpoint: 880,
          settings: {
            slidesToShow:3,
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
        $('.form__tel__item') .hide();
    })
    $('.guarantees__item2 a') .click(function() {
        $('.form__tel__item2') .show();
        $('.form__tel') .show();
        $('.form__tel__item') .hide();
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
$(document).on('click','.box4', function(){
    $(this).toggleClass('active')
});
$(document).on('click','.box3', function(){
    $(this).toggleClass('active')
});
$(document).on('click','.box5', function(){
    $(this).toggleClass('active')
});
$(document).on('click','.number__pages__item a', function(){
    $(this).addClass('active').siblings().removeClass('active')
});


$('.burger__item').click(function(event) {
    $('.menu__burger,.line1__burger,.line2__burger,.line3__burger').toggleClass('active');
    $('body').toggleClass('lock');
  });

$('.blog__categories__title').click(function(event) {
    $('.blog__categories__item__link a,.blog__categories__item__link').toggleClass('active');
    $('body').toggleClass('lock');
  });

$('.projects__categories__title').click(function(event) {
    $('.projects__categories__item__link a,.projects__categories__item__link').toggleClass('active');
    $('body').toggleClass('lock');
  });





