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
$(document).ready(function () {
  $(".testimonials-slider").slick({
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
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// slider
$(document).ready(function () {
  $("#logo-marquee").slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 4,
          speed: 12000,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });
});

// scroll to top
$(document).ready(function () {
  function checkVisibility() {
    var scrollPosition = $(window).scrollTop();
    var windowHeight = $(window).height();
    var sectionTop = $(".scroll-section").offset().top;
    var sectionHeight = $(".scroll-section").height();
    var sectionBottom = sectionTop + sectionHeight - 400;

    // Check if the .scroll-section is in the viewport
    if (scrollPosition - 100 >= sectionTop && scrollPosition < sectionBottom) {
      $("#sticky_bar,.scroll-section").addClass("sticky");
    } else {
      $("#sticky_bar,.scroll-section").removeClass("sticky");
    }
  }

  // Check visibility on scroll and on load
  if ($(".scroll-section").length) {
    $(window).on("scroll", checkVisibility);

    checkVisibility();
  }

  $(window).on("scroll", function () {
    // Loop through each content div
    $(".scroll-content > div").each(function () {
      var currentDiv = $(this);
      var divId = currentDiv.attr("id");

      // Check if the div is in the viewport
      if (
        currentDiv.is(":visible") &&
        currentDiv[0].getBoundingClientRect().top <= window.innerHeight - 650
      ) {
        // Find the matching image and change it
        $("#sticky_bar .img-wrap").each(function () {
          var imgWrap = $(this);
          if (imgWrap.data("id") === divId) {
            // Assuming you have a main image container to display the matched image
            var nitro_img_attr = imgWrap.find("img").attr("nitro-lazy-src");
            if (
              typeof nitro_img_attr !== "undefined" &&
              nitro_img_attr !== false
            )
              var imgSrc = nitro_img_attr;
            else var imgSrc = imgWrap.find("img").attr("src");
            $("#mainImageContainer").attr("src", imgSrc);
          }
        });
      }
    });
  });
});

//  client slider
$(document).ready(function () {
  // Function to check the window's width and initialize or destroy the slider
  function checkSlider() {
    var $slider = $(".client_testimonial_wrap_slider"); // Change this to your slider's class or ID

    // Define the mobile width threshold
    if ($(window).width() <= 1024) {
      // This assumes mobile is defined as <768px
      if (!$slider.hasClass("slick-initialized")) {
        // Initialize Slick Slider if it's not already initialized
        $slider.slick({
          adaptiveHeight: false,
          slidesToShow: 1,
          autoplay: true,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          dots: false,
        });
      }
    } else {
      if ($slider.hasClass("slick-initialized")) {
        // Destroy Slick Slider if the view is not mobile
        $slider.slick("unslick");
      }
    }
  }

  // Check on document ready
  checkSlider();

  // Check on window resize
  $(window).resize(function () {
    checkSlider();
  });

  if ($("#client_testimonial_wrap").length > 0) {
    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray(
      "#client_testimonial_wrap .client_testimonial_slide"
    );
    console.log("total card is" + sections.length);
    console.log("total secttion is" + sections);
    let mm = gsap.matchMedia();

    mm.add("(min-width:1025px)", () => {
      let scrollTween = gsap.to(sections, {
        //    xPercent: (i) => -100 * i,
        xPercent: (i) => (i == sections.length ? -100 * i : -99 * i),
        //    duration: (i) => 0.5 * i,
        duration: (i) => (i == sections.length ? 1 * i : 1 * i),
        ease: "none", // <-- IMPORTANT!
        scrollTrigger: {
          trigger: ".words_our_client_sec",
          pin: true,
          markers: false,
          scrub: 1,
          end: "bottom",
          onEnter: () => {
            // Add your class when the section enters
            //document.getElementById("trigger-section").classList.add("active-section");
            document
              .getElementById("client_testimonial_wrap")
              .classList.add("border");
          },
          onLeave: () => {
            // Optionally remove the class if you scroll back up
            //document.getElementById("trigger-section").classList.remove("active-section");
          },
        },
      });
    });
  }
});

$(document).ready(function () {
  // Function to check and initialize animation
  function checkAndInitializeAnimation() {
    // Ensure this matches your tab for client testimonials
    if ($(".resp-tab-content").hasClass("resp-tab-content-active")) {
      let sections = gsap.utils.toArray(
        ".resp-tab-content-active .client_testimonial_wrapper .client_testimonial_slide"
      );

      if ($(".client_testimonial_wrapper").length > 0) {
        gsap.registerPlugin(ScrollTrigger);
        console.log("total card is" + sections.length);
        console.log("total section is" + sections);
        if (sections.length > 0) {
          gsap.killTweensOf(sections); // Stop any ongoing animations
          ScrollTrigger.refresh(); // Refresh scrollTriggers to include new elements
          ScrollTrigger.getAll().forEach((st) => st.kill()); // Clear all ScrollTriggers
        }

        let mm = gsap.matchMedia();
        mm.add("(min-width:1025px)", () => {
          gsap.to(sections, {
            xPercent: (i) => (i == sections.length ? -100 * i : -99 * i),
            duration: (i) => (i == sections.length ? 1 * i : 1 * i),
            ease: "none", // IMPORTANT
            scrollTrigger: {
              trigger: ".resp-tab-content-active .words_our_client_sec",
              pin: true,
              markers: false,
              scrub: 1,
              end: "bottom",
              onEnter: () => {
                document
                  .getElementById("client_testimonial_wrapper")
                  .classList.add("border");
              },
              // Add onLeave if necessary
            },
          });
        });
      }
    }
  }

  // Listen for tab changes
  $(".our-pricing-tab li").on("click", function () {
    // Remove GSAP ScrollTrigger pin spacers
    ScrollTrigger.getAll().forEach((st) => {
      st.kill(); // This removes the pinning and associated spacers
    });
    requestAnimationFrame(() => {
      checkAndInitializeAnimation();
      ScrollTrigger.refresh();
    });
  });

  // Check on window resize
  $(window).resize(function () {
    // Remove GSAP ScrollTrigger pin spacers
    ScrollTrigger.getAll().forEach((st) => {
      st.kill(); // This removes the pinning and associated spacers
    });
    requestAnimationFrame(() => {
      checkAndInitializeAnimation();
      ScrollTrigger.refresh();
    });
    // checkSlider();
  });

  // Initialize on page load in case the correct tab is already active
  checkAndInitializeAnimation();
});
