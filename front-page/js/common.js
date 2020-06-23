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
  $('.page10__min__slider').slick({
    arrows:true,
    dots:false,  
    slidesToShow:4,
    vertical:true,
    asNavFor:".page10__big__slider",
    responsive:[
        {
          breakpoint: 600,
          settings: {
            slidesToShow:3,
            slidesToScroll:1,
          }
        },
      ]
  });
  $('.page10__big__slider').slick({
    arrows:false,
    dots:false,  
    slidesToShow:1,
    asNavFor:".page10__min__slider",
    responsive:[
        {
          breakpoint: 600,
          settings: {
            slidesToShow:1,
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
    $('.search') .click(function() {
        $('.form__tel') .show();
        $('.search__form') .show();
        $('.form__tel__item') .hide();
        $('.form__tel__item2') .hide();
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

$('.burger__page6').click(function(event) {
    $('.page6__menu__photo,.page6__menu__photo__item').toggleClass('active');
    $('body').toggleClass('lock');
  });
$('.icons__delete__burger').click(function(event) {
    $('.page6__menu__photo,.page6__menu__photo__item').removeClass('active');
    $('body').removeClass('lock');
  });


$('.burger__page6__two').click(function(event) {
    $('.page6__menu__photo__two,.page6__menu__photo__item__two').toggleClass('active');
    $('body').toggleClass('lock');
  });
$('.icons__delete__burger__two').click(function(event) {
    $('.page6__menu__photo__two,.page6__menu__photo__item__two').removeClass('active');
    $('body').removeClass('lock');
  });

$('.burger__page6__fri').click(function(event) {
    $('.page6__menu__photo__fri,.page6__menu__photo__item__fri').toggleClass('active');
    $('body').toggleClass('lock');
  });
$('.icons__delete__burger__fri').click(function(event) {
    $('.page6__menu__photo__fri,.page6__menu__photo__item__fri').removeClass('active');
    $('body').removeClass('lock');
  });

$('.burger__page6__for').click(function(event) {
    $('.page6__menu__photo__for,.page6__menu__photo__item__for').toggleClass('active');
    $('body').toggleClass('lock');
  });
$('.icons__delete__burger__for').click(function(event) {
    $('.page6__menu__photo__for,.page6__menu__photo__item__for').removeClass('active');
    $('body').removeClass('lock');
  });

$('.burger__page6__five').click(function(event) {
    $('.page6__menu__photo__five,.page6__menu__photo__item__five').toggleClass('active');
    $('body').toggleClass('lock');
  });
$('.icons__delete__burger__five').click(function(event) {
    $('.page6__menu__photo__five,.page6__menu__photo__item__five').removeClass('active');
    $('body').removeClass('lock');
  });

$('.burger__page6__six').click(function(event) {
    $('.page6__menu__photo__six,.page6__menu__photo__item__six').toggleClass('active');
    $('body').toggleClass('lock');
  });
$('.icons__delete__burger__six').click(function(event) {
    $('.page6__menu__photo__six,.page6__menu__photo__item__six').removeClass('active');
    $('body').removeClass('lock');
  });

$('.burger__page6__seven').click(function(event) {
    $('.page6__menu__photo__seven,.page6__menu__photo__item__seven').toggleClass('active');
    $('body').toggleClass('lock');
  });
$('.icons__delete__burger__seven').click(function(event) {
    $('.page6__menu__photo__seven,.page6__menu__photo__item__seven').removeClass('active');
    $('body').removeClass('lock');
  });

$('.menu__page7__item__title').click(function(event) {
    $('.menu__page7__item__link a,.menu__page7__item__link,.brands').toggleClass('active');
    $('body').toggleClass('lock');
  });