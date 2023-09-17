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
  $(".accordion__item").each(function () {
    $(this).click(function () {
      var currentP = $(this).find("p");
      var isOpen = currentP.hasClass("_max_height");
      $(".accordion__item p").removeClass("_max_height");
      $(".accordion__item img").attr("src", "assets/images/accordion_plus.png");
      if (!isOpen) {
        currentP.addClass("_max_height");
        $(this).find("img").attr("src", "assets/images/accordion_expanded.png");
      }
    });
  });
  // Accordion Ends
});
