(function ($) {
  "use strict";
  jQuery(".mean-menu").meanmenu({ meanScreenWidth: "991" });
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 150) {
      $(".navbar-area").addClass("sticky-nav");
    } else {
      $(".navbar-area").removeClass("sticky-nav");
    }
  });
  $(".nav-side .search-box i").on("click", function () {
    $(".search-overlay").toggleClass("search-overlay-active");
  });
  $(".search-close").on("click", function () {
    $(".search-overlay").removeClass("search-overlay-active");
  });
  $(".side-nav-responsive .dot-menu").on("click", function () {
    $(".side-nav-responsive .container-max .container").toggleClass("active");
  });
  $(".banner-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    items: 1,
    dots: true,
    autoplay: true,
    autoHeight: true,
    autoplayHoverPause: true,
  });
  $(".case-study-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    center: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1024: { items: 3 },
      1200: { items: 4 },
    },
  });
  $(".brand-slider").owlCarousel({
    loop: true,
    margin: 60,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 2 },
      600: { items: 2 },
      700: { items: 3 },
      1024: { items: 5 },
    },
  });
  $(".clients-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: { 0: { items: 1 }, 992: { items: 2 } },
    navText: [
      "<i class='bx bx-chevron-left'></i>",
      "<i class='bx bx-chevron-right'></i>",
    ],
  });
  $(".clients-slider-two").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    items: 1,
    navText: [
      "<i class='bx bx-chevron-left'></i>",
      "<i class='bx bx-chevron-right'></i>",
    ],
  });
  $(".banner-sub-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: { 0: { items: 1 }, 1024: { items: 3 } },
  });
  $(".popup-btn").magnificPopup({
    disableOn: 320,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
  $("select").niceSelect();
  $(".accordion")
    .find(".accordion-title")
    .on("click", function () {
      $(this).toggleClass("active");
      $(this).next().slideToggle("fast");
      $(".accordion-content").not($(this).next()).slideUp("fast");
      $(".accordion-title").not($(this)).removeClass("active");
    });
  $(".skill-bar").each(function () {
    $(this)
      .find(".progress-content")
      .animate({ width: $(this).attr("data-percentage") }, 2000);
    $(this)
      .find(".progress-number-mark")
      .animate(
        { left: $(this).attr("data-percentage") },
        {
          duration: 2000,
          step: function (now, fx) {
            var data = Math.round(now);
            $(this)
              .find(".percent")
              .html(data + "%");
          },
        }
      );
  });
  new WOW().init();
  $(window).on("load", function () {
    $(".preloader").fadeOut(500);
  });
  $("body").append(
    "<div class='go-top'><i class='bx bx-chevrons-up'></i></div>"
  );
  $(window).on("scroll", function () {
    var scrolled = $(window).scrollTop();
    if (scrolled > 600) $(".go-top").addClass("active");
    if (scrolled < 600) $(".go-top").removeClass("active");
  });
  $(".go-top").on("click", function () {
    $("html, body").animate({ scrollTop: "0" }, 50);
  });
 
 
})(jQuery);
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}


