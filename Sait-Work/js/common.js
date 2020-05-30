// $(function () {
//   const anchors = document.querySelectorAll('a[href*="#"]');

//   for (let anchor of anchors) {
//     anchor.addEventListener("click", function (event) {
//       event.preventDefault();
//       const blockID = anchor.getAttribute("href");
//     });
//   }

//   $('.open-button').click(function() 
// {
//         if(!$('.menu-button').hasClass('open-done'))
//         {
//             $('.menu-button').addClass('open-done');
//             $('.menu-block-1').addClass('open-done');
//             setTimeout(function(){$('.menu-link-1').addClass('open-done')}, 500);
//             setTimeout(function(){$('.menu-link-2').addClass('open-done')}, 600);
//             setTimeout(function(){$('.menu-link-3').addClass('open-done')}, 700);
//             setTimeout(function(){$('.menu-link-4').addClass('open-done')}, 800);
//         }
//         else
//         {
//             $('.menu-button').removeClass('open-done');
//             $('.menu-link-1').removeClass('open-done');
//             setTimeout(function(){$('.menu-link-1').removeClass('open-done')}, 300);
//             setTimeout(function(){$('.menu-link-2').removeClass('open-done')}, 300);
//             setTimeout(function(){$('.menu-link-3').removeClass('open-done')}, 400);
//             setTimeout(function(){$('.menu-link-4').removeClass('open-done')}, 500);
//             setTimeout(function(){$('.menu-block-1').removeClass('open-done')}, 800);
//         }
// });

//   AOS.init();

//   $(".arrow-up").on("click", function () {
//     $(".parameters__item").fadeOut();
//     $(".parameters__item").show();
//   });
// });

 $(document).on("click", ".box", function () {
   $(this).addClass("active").siblings().removeClass("active");
 });


$(document).ready(function () {
  var stepsSlider = document.getElementById('range-slider');
  var input0 = document.getElementById('input-with-keypress-0');
  var input1 = document.getElementById('input-with-keypress-1');
  var inputs = [input0, input1];

  noUiSlider.create(stepsSlider, {
    start: [75, 250],
    connect: true,
    tooltips: [true, true],
    range: {
        'min': 0,
        'max': 300
    }
  });

  stepsSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = values[handle];
  });
});







