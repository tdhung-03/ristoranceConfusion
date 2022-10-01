"use strict";
$(function () {
  // $('[data-bs-toggle="tooltip"]').tooltip();
  $("#mySlide").carousel({ interval: 2000 });
  $("#carouselButton").click(function (e) {
    if ($("#carouselButton").children("i").hasClass("fa-pause")) {
      $("#mySlide").carousel("pause");
      $("#carouselButton").children("i").removeClass("fa-pause");
      $("#carouselButton").children("i").addClass("fa-play");
    } else if ($("#carouselButton").children("i").hasClass("fa-play")) {
      $("#mySlide").carousel("cycle");
      $("#carouselButton").children("i").removeClass("fa-play");
      $("#carouselButton").children("i").addClass("fa-pause");
    }
  });
})();
