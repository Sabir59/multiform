$(document).ready(function () {
  // Slick Slider Starts
  $(".testimonial-slider").slick({
    infinite: true,
    speed: 6000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: "linear",
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: false,
    gap: 20,
  });
  // Slick Slider Ends

  // Accordion Starts
  // $(".accordion__item").each(function () {
  //   $(this).click(function () {
  //     var currentP = $(this).find("p");
  //     var isOpen = currentP.hasClass("_max_height");
  //     $(".accordion__item p").removeClass("_max_height");
  //     $(".accordion__item img").attr("src", "assets/images/accordion_plus.png");
  //     if (!isOpen) {
  //       currentP.addClass("_max_height");
  //       $(this).find("img").attr("src", "assets/images/accordion_expanded.png");
  //     }
  //   });
  // });
  // Accordion Ends

  // Mobile Navigation
  $(".icon_menu").click(function () {
    $(".mobile-menu").addClass("translate-x-0");
  });
  $(".mobile_icon_close").click(function () {
    $(".mobile-menu").removeClass("translate-x-0");
  });

  $(".mobile_droptoggler").click(function () {
    $(".mobile_dropdown").not($(this).next(".mobile_dropdown")).slideUp();
    $(this).next(".mobile_dropdown").slideToggle();
  });

  $(".accordion__item").click(function () {
    var currentP = $(this).find("p");
    currentP.slideToggle();

    // Toggle the image source for the clicked accordion item
    var currentImg = $(this).find("img");
    currentImg.attr("src", function (i, src) {
      return src === "assets/images/accordion_plus.png"
        ? "assets/images/accordion_expanded.png"
        : "assets/images/accordion_plus.png";
    });

    // Slide up all other p elements and reset their image sources
    $(this).siblings().find("p").slideUp();
    $(this).siblings().find("img").attr("src", "assets/images/accordion_plus.png");
  });
});
