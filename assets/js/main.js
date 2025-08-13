AOS.init({

  duration: 1000,
});

// for sticky header
const header = document.getElementById("siteHeader");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// side menu

var btn = document.querySelector(".toggle");
var btnst = true;
btn.onclick = function () {
  if (btnst == true) {
    document.querySelector(".toggle span").classList.add("toggle");
    document.getElementById("sidebar").classList.add("sidebarshow");
    btnst = false;
  } else if (btnst == false) {
    document.querySelector(".toggle span").classList.remove("toggle");
    document.getElementById("sidebar").classList.remove("sidebarshow");
    btnst = true;
  }
};
// testimonial slider
$(document).ready(function() {
    $('.testimonials-slider').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 600,
        draggable: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 575,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
            }
        ]
    });
}); 

// slider
$(document).ready(function(){
  $('#logo-marquee').slick({
     dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 8000,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 1320,
          settings: {
            slidesToShow: 4,
            speed: 12000,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
      }]
  });
});

// scroll to top
$(document).ready(function () {


     function checkVisibility() {
         var scrollPosition = $(window).scrollTop();
         var windowHeight = $(window).height();
         var sectionTop = $('.scroll-section').offset().top;
         var sectionHeight = $('.scroll-section').height();
         var sectionBottom = sectionTop + sectionHeight - 400;



         // Check if the .scroll-section is in the viewport
         if (scrollPosition - 100 >= sectionTop && scrollPosition < sectionBottom) {
             $('#sticky_bar,.scroll-section').addClass('sticky');
         } else {
             $('#sticky_bar,.scroll-section').removeClass('sticky');
         }
     }

     // Check visibility on scroll and on load
     if ($('.scroll-section').length) {
         $(window).on('scroll', checkVisibility);

         checkVisibility();
     }


     $(window).on('scroll', function () {


         // Loop through each content div
         $('.scroll-content > div').each(function () {
             var currentDiv = $(this);
             var divId = currentDiv.attr('id');

             // Check if the div is in the viewport
             if (currentDiv.is(':visible') && currentDiv[0].getBoundingClientRect().top <= window.innerHeight - 650) {
                 // Find the matching image and change it
                 $('#sticky_bar .img-wrap').each(function () {
                     var imgWrap = $(this);
                     if (imgWrap.data('id') === divId) {
                         // Assuming you have a main image container to display the matched image
                         var nitro_img_attr = imgWrap.find('img').attr('nitro-lazy-src')
                         if (typeof nitro_img_attr !== 'undefined' && nitro_img_attr !== false)
                             var imgSrc = nitro_img_attr;
                         else
                             var imgSrc = imgWrap.find('img').attr('src');
                         $('#mainImageContainer').attr('src', imgSrc);
                     }
                 });
             }
         });
     });
 });