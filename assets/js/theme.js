(function ($) {
  "use strict";

  $(window).on('load', function () {
    $('.preloader').fadeOut(600);
        bodyScrollAnimation();

  });

  /*----------------------------------------------------*/
  /*  Wow Animation Active js
    /*----------------------------------------------------*/
  function bodyScrollAnimation() {
    var scrollAnimate = $("body").data("scroll-animation");
    if (scrollAnimate === true) {
      new WOW({
        mobile: false,
      }).init();
    }
  }

  var nav_offset_top = $("header").height() + 50;
  /*-------------------------------------------------------------------------------
	  Navbar Fixed
	-------------------------------------------------------------------------------*/

  function navbarFixed() {
    if ($(".header_area").length) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".header_area").addClass("navbar_fixed");
        } else {
          $(".header_area").removeClass("navbar_fixed");
        }
      });
    }
  }
  navbarFixed();

  /*----------------------------------------------------*/
  /*  Isotop
  /*----------------------------------------------------*/
  function isotop() {
    if ($(".prevent_item_inner").length) {
      $(".prevent_item_inner").imagesLoaded(function () {
        $(".prevent_item_inner").isotope({
          layoutMode: "masonry",
          percentPosition: true,
          masonry: {
            columnWidth: 1,
          },
        });
      });
    }
  }
  isotop();

  $(".client_slider").slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: false,
    swipe: true,
    autoplay: true,
    autoplaySpeed: 5000,
    focusOnSelect: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
  /*----------------------------------------------------*/
  /*  Blog Gallery js
  /*----------------------------------------------------*/
  function gallery_isotope() {
    if ($(".blog_area").length) {
      // Activate isotope in container
      $(".blog_item_inner").imagesLoaded(function () {
        $(".blog_item_inner").isotope({
          layoutMode: "masonry",
          percentPosition: true,
          masonry: {
            columnWidth: 1,
          },
        });
      });

      // Add isotope click function
      $(".g_fillter ul li").on("click", function () {
        $(".g_fillter ul li").removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr("data-filter");
        $(".blog_item_inner").isotope({
          filter: selector,
          animationOptions: {
            duration: 450,
            easing: "linear",
            queue: false,
          },
        });
        return false;
      });
    }
  }

  gallery_isotope();
  /*=============================================== 
	       Parallax Init
	================================================*/
  if ($(".apps_craft_animation").length > 0) {
    $(".apps_craft_animation").parallax({
      scalarX: 10.0,
      scalarY: 10.0,
    });
  }

  function nice_select() {
    if ($(".nice_select").length) {
      $(".nice_select").niceSelect();
    }
  }
  nice_select();

  var inputs = $(".appoinment_form .form-control").not(":submit");

  inputs.on("input", function (idx) {
    $(inputs[inputs.index(this)]).toggleClass("animated", this.value > "");
  });

  function datetime_picker() {
    if ($("#datetimepicker3").length > 0) {
      $("#datetimepicker3").datetimepicker({
        pickTime: false,
        locale: "fr",
        format: "L",
      });
    }
  }
  datetime_picker();

  function time_picker2() {
    if ($("#datetimepicker4").length > 0) {
      $("#datetimepicker4").datetimepicker({
        format: "LT",
      });
    }
  }
  time_picker2();

  $(document).ready(function () {
    $(".pagepiling .section").each(function (e) {
      if (e != 0) $(this).hide();
    });

    $(".moveDown").on("click", function () {
      if ($(".pagepiling .section:visible").next().length != 0)
        $(".pagepiling .section:visible")
          .next()
          .show()
          .addClass("active")
          .prev()
          .hide()
          .removeClass("active");
      return false;
    });
  });
  /*-------------------------------------------------------------------------------
	  mCustomScrollbar js
	-------------------------------------------------------------------------------*/
  $(window).on("load", function () {
    if ($(".scroll_body").length) {
      $(".scroll_body").mCustomScrollbar({
        theme: "dark-3",
        setHeight: true,
      });
    }
  });

  $(".menu_btn").on("click", function () {
    $("body").removeClass("menu-is-closed").addClass("menu-is-opened");
  });
  $(".close_btn, .body_capture").on("click", function () {
    $("body").removeClass("menu-is-opened").addClass("menu-is-closed");
  });

  function wd_scroll() {
    if ($(".wd_scroll").length) {
      $(window).on("load", function () {
        $(".wd_scroll").mCustomScrollbar({
          theme: "dark",
        });
      });
    }
  }
  wd_scroll();

  $(".menu_list li a").each(function () {
    var $this = $(this);
    $this.on("click", function (e) {
      var has = $this.hasClass("open");
      $(".menu_list li a").removeClass("open");
      if (has) {
        $this.removeClass("open");
      } else {
        $this.addClass("open");
      }
    });
  });

  var dropToggle = $(".menu_list > li").has("ul").children("a");
  dropToggle.on("click", function () {
    dropToggle.not(this).closest("li").find("ul").slideUp(300);
    $(this).closest("li").children("ul").slideToggle(300);
    return false;
  });

  /*-------------------------------------------------------------------------------
	  mapZoom js
	-------------------------------------------------------------------------------*/
  function mapZoom() {
    var map = $(".coronavirus_map");
    if (map.length) {
      map.on("click", function () {
        $(this).find("iframe").addClass("clicked");
        $(this).mouseleave(function () {
          $(this).find("iframe").removeClass("clicked");
        });
      });
    }
  }
  mapZoom();

  


  $(".data_table_area .dataTables_length label select").addClass("nice_select");

  

  /*-------------------------------------------------------------------------------
	  Ajax Forms
	-------------------------------------------------------------------------------*/

  if ($(".js-form").length) {
    $(".js-form").each(function () {
      $(this).validate({
        errorClass: "error wobble-error",
        submitHandler: function (form) {
          $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(form).serialize(),
            success: function () {
              $(".success-message").show();
            },

            error: function () {
              $(".error-message").show();
            },
          });
        },
      });
    });
  }
})(jQuery);
