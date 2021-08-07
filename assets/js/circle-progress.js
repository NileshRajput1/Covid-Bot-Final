(function ($) {
  "use strict";

  var elements = document.querySelectorAll(".second.circle");

  Array.prototype.slice.apply(elements).forEach(function (el) {
    var $el = $(el);

    $el.circleProgress({ value: 0 });

    new Waypoint({
      element: el,
      handler: function () {
        $el
          .circleProgress({
            value: $el.data("value"),
            value: 0.7,
            size: 210,
            thickness: 16,
            startAngle: 5,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: {
              gradient: ["#f9570c", "#eac60a"],
            },
          })
          .on("circle-animation-progress", function (event, progress) {
            $(this)
              .find("strong")
              .html(Math.round(70 * progress) + "<i>%</i>");
          });
        this.destroy();
      },
      offset: "80%",
    });
  });
})(jQuery);
