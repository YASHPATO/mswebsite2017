

//LOADER
$(window).on("load", function () {
  "use strict";
  $(".loader").fadeOut(800);

});

jQuery(function ($) {
  "use strict";

  // +++++ Back to Top
  $("body").append('<a href="#" class="back-to"><i class="icon-arrow-up2"></i></a>');
  var amountScrolled = 700;
  var backBtn = $("a.back-to");
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > amountScrolled) {
      backBtn.fadeIn("slow");
    } else {
      backBtn.fadeOut("slow");
    }
  });
  backBtn.on("click", function () {
    $("html, body").animate({
      scrollTop: 0
    }, 700);
    return false;
  });


  //Equal Height columns
  $("footer, .about_page").each(function () {
    var highestBox = 0;
    $(".foot_panel, .about_headline", this).each(function () {
      // If this box is higher than the cached highest then store it
      if ($(this).height() > highestBox) {
        highestBox = $(this).height();
      }
    });
    $(".foot_panel, .about_headline", this).height(highestBox);
  });


  //Equal Height with image services grid
  var largest = $("img.service_photo").height();
  $(".service_desc").each(function () {
    var findHeight = $(this).height();
    if (findHeight > largest) {
      largest = findHeight;
    }
  })
  $(".service_desc").css({
    "height": largest + "px"
  });
  $("img.service_photo").css({
    "height": largest + "px"
  });
  
  //Full Height Banner BG
  function resizebanner(){
     $("#text_rotator_parent").css("height", $(window).height());
  }
  
   $(window).resize(function(){
        resizebanner(); 
    });
	 resizebanner();


  /*Accordions*/
  var $active = $('#accordion .panel-collapse.in').prev().addClass('active');
  $active.find('a').append('<i class="fa fa-minus-circle"></i>');
  $('#accordion .panel-heading').not($active).find('a').append('<i class="fa fa-plus-circle"></i>');
  $('#accordion').on('show.bs.collapse', function (e) {
    $('#accordion .panel-heading.active').removeClass('active').find('.fa').toggleClass('fa-plus-circle fa-minus-circle');
    $(e.target).prev().addClass('active').find('.fa').toggleClass('fa-plus-circle fa-minus-circle');
  })

  var $active = $('#accordionTwo .panel-collapse.in').prev().addClass('active');
  $active.find('a').append('<i class="fa fa-minus-circle"></i>');
  $('#accordionTwo .panel-heading').not($active).find('a').append('<i class="fa fa-plus-circle"></i>');
  $('#accordionTwo').on('show.bs.collapse', function (e) {
    $('#accordionTwo .panel-heading.active').removeClass('active').find('.fa').toggleClass('fa-plus-circle fa-minus-circle');
    $(e.target).prev().addClass('active').find('.fa').toggleClass('fa-plus-circle fa-minus-circle');
  })


  // Push Menus 
  var $menuLeft = $(".pushmenu-left");
  var $menuRight = $(".pushmenu-right");
  var $toggleleft = $("#menu_bars.left");
  var $toggleright = $("#menu_bars.right");
  if ($("#menu_bars").length) {
    $("body").addClass("pushmenu-push");
    $toggleleft.on("click", function (e) {
      $(this).toggleClass("active");
      $(".pushmenu-push").toggleClass("pushmenu-push-toright");
      $menuLeft.toggleClass("pushmenu-open");
      e.stopPropagation();
    });
    $toggleright.on("click", function (e) {
      $(this).toggleClass("active");
      $(".pushmenu-push").toggleClass("pushmenu-push-toleft");
      $menuRight.toggleClass("pushmenu-open");
      e.stopPropagation();
    });

  }

  //DropDown Pushmenu 
  var side_drop = $('.push_nav .dropdown');
  side_drop.on('show.bs.dropdown', function (e) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });
  side_drop.on('hide.bs.dropdown', function (e) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });
  


  // +++++  SKILS
  $(".skills li").each(function () {
    $(this).appear(function () {
      $(this).animate({
        opacity: 1,
        left: "0px"
      }, 800);
      var b = $(this).find(".progress-bar").attr("data-width");
      $(this).find(".progress-bar").animate({
        width: b + "%"
      }, 1300, "linear");
    });
  });


  // ++++++ Owl Carousel

  //Single Slide
  $("#people_slider, #feedback_slider").owlCarousel({
    autoPlay: false,
    pagination: true,
    stopOnHover: true,
    navigation: false,
    singleItem: true
  });

  //Testimonial
  $("#testimonials").owlCarousel({
    autoPlay: 4000,
    pagination: true,
    stopOnHover: true,
    navigation: true,
    navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    transitionStyle: "fade",
    singleItem: true
  });

  //Publications
  $("#publication, #clients").owlCarousel({
    autoPlay: true,
    navigation: true,
    navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    stopOnHover: true,
    slideSpeed: 300,
    items: 3,
    itemsDesktop: [1199, 2],
    itemsDesktopSmall: [979, 2],
    paginationSpeed: true,
  });

  //Testimonial
  $("#single_items").owlCarousel({
    autoPlay: false,
    pagination: false,
    stopOnHover: true,
    navigation: true,
    navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    singleItem: true
  });

  //Text rotator
  $("#text_rotator").owlCarousel({
    autoPlay: false,
    pagination: true,
    stopOnHover: true,
    navigation: false,
    singleItem: true,
    transitionStyle: "fade"
  });


  //Tabbed slider
  var sync1 = $("#iconic_slider");
  var sync2 = $("#iconic_indicator");
  sync1.owlCarousel({
    singleItem: true,
    slideSpeed: 3000,
    navigation: false,
    /*navigationText :["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],*/
    pagination: false,
    afterAction: syncPosition,
    responsiveRefreshRate: 200,
    transitionStyle: "fade"
  });

  sync2.owlCarousel({
    items: 4,
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [979, 3],
    itemsTablet: [768, 3],
    itemsMobile: [479, 2],
    pagination: false,
    responsiveRefreshRate: 100,
    afterInit: function (el) {
      el.find(".owl-item").eq(0).addClass("synced");
    },
    afterAction: function (el) {
      //remove class active
      this.$owlItems.removeClass('firstActiveItem')
      this.$owlItems.removeClass('lastActiveItem')

      //add custom class on first and last items visibles
      this.$owlItems.eq(this.currentItem).addClass('firstActiveItem');
      this.$owlItems.eq(this.currentItem + (this.owl.visibleItems.length - 1)).addClass('lastActiveItem');
    },
  });

  function syncPosition(el) {
    var current = this.currentItem;
    $("#iconic_indicator")
      .find(".owl-item")
      .removeClass("synced")
      .eq(current)
      .addClass("synced")
    if ($("#iconic_indicator").data("owlCarousel") !== undefined) {
      center(current)
    }
  }
  $("#iconic_indicator").on("click", ".owl-item", function (e) {
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync1.trigger("owl.goTo", number);
  });

  function center(number) {
    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for (var i in sync2visible) {
      if (num === sync2visible[i]) {
        var found = true;
      }
    }

    if (found === false) {
      if (num > sync2visible[sync2visible.length - 1]) {
        sync2.trigger("owl.goTo", num - sync2visible.length + 2)
      } else {
        if (num - 1 === -1) {
          num = 0;
        }
        sync2.trigger("owl.goTo", num);
      }
    } else if (num === sync2visible[sync2visible.length - 1]) {
      sync2.trigger("owl.goTo", sync2visible[1])
    } else if (num === sync2visible[0]) {
      sync2.trigger("owl.goTo", num - 1)
    }

  }


  // --------- Revolution Slider
  var revapi4 = $("#revo_main").show().revolution({
    sliderType: "standard",
    sliderLayout: "fullwidth",
    scrollbarDrag: "true",
    dottedOverlay: "none",
    delay: 9000,
    navigation: {
      //mouseScrollNavigation:"off",
      //keyboardNavigation:"off",
      arrows: {
        enable: true,
        hide_onmobile: true,
        hide_under: 600,
      },
      touch: {
        touchenabled: "on",
        swipe_threshold: 75,
        swipe_min_touches: 1,
        swipe_direction: "horizontal",
        drag_block_vertical: false
      }
    },

    viewPort: {
      enable: true,
      outof: "pause",
      visible_area: "80%"
    },
    responsiveLevels: [4096, 1024, 778, 480],
    gridwidth: [1170, 1024, 750, 480],
    gridheight: [880, 750, 450, 360],
    lazyType: "none",
    parallax: {
      type: "mouse",
      origo: "slidercenter",
      speed: 9000,
      levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
    },
    shadow: 0,
    spinner: "off",
    stopLoop: "off",
    stopAfterLoops: -1,
    stopAtSlide: -1,
    shuffle: "off",
    autoHeight: "off",
    hideThumbsOnMobile: "off",
    hideSliderAtLimit: 0,
    hideCaptionAtLimit: 0,
    hideAllCaptionAtLilmit: 0,
    debugMode: false,
    fallbacks: {
      simplifyAll: "off",
      nextSlideOnWindowFocus: "off",
      disableFocusListener: false,
    }
  });

  // +++++ home2                                                                  
  revapi4 = $("#revo_boxed").show().revolution({
    sliderType: "standard",
    sliderLayout: "auto",
    scrollbarDrag: "true",
    dottedOverlay: "none",
    delay: 9000,
    navigation: {
      bullets: {
        enable: true,
        hide_onmobile: true,
        hide_under: 600,
        style: "",
        hide_onleave: false,
        hide_delay: 200,
        hide_delay_mobile: 200,
        direction: "horizontal",
        h_align: "left",
        v_align: "bottom",
        h_offset: 40,
        v_offset: 50,
        space: 5,
      },
      touch: {
        touchenabled: "on",
        swipe_threshold: 75,
        swipe_min_touches: 1,
        swipe_direction: "horizontal",
        drag_block_vertical: false
      }
    },

    viewPort: {
      enable: true,
      outof: "pause",
      visible_area: "80%"
    },
    responsiveLevels: [4096, 1024, 778, 480],
    gridwidth: [1170, 890, 767, 480],
    gridheight: [550, 500, 450, 350],
    lazyType: "none",
    parallax: {
      type: "mouse",
      origo: "slidercenter",
      speed: 9000,
      levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
    },
    shadow: 0,
    spinner: "off",
    stopLoop: "off",
    stopAfterLoops: -1,
    stopAtSlide: -1,
    shuffle: "off",
    autoHeight: "off",
    hideThumbsOnMobile: "off",
    hideSliderAtLimit: 0,
    hideCaptionAtLimit: 0,
    hideAllCaptionAtLilmit: 0,
    debugMode: false,
    fallbacks: {
      simplifyAll: "off",
      nextSlideOnWindowFocus: "off",
      disableFocusListener: false,
    }
  });


  // // +++++  Parallax Backgrounds
  $(".parallax").parallax("50%", 0.3);
  $(".page_header").parallax("50%", -0.1);
  $("#client-bg").parallax("50%", -0.1);
  
  


  // +++++  CubeFolio
  // gallery
  $('#portfolio-top').cubeportfolio({
    filters: '#work-filters',
    loadMore: '#js-loadMore',
    loadMoreAction: 'click',
    layoutMode: 'grid',
    defaultFilter: '*',
    animationType: 'scaleSides',
    gapHorizontal: 30,
    gapVertical: 30,
    gridAdjustment: 'responsive',
    mediaQueries: [{
      width: 1500,
      cols: 2
    }, {
      width: 1100,
      cols: 2
    }, {
      width: 480,
      cols: 2
    }, {
      width: 320,
      cols: 1
    }],
    caption: 'zoom',
    displayType: 'fadeIn',
    displayTypeSpeed: 400,
  });

  //No Space Grid
  $('#nospace-gallery').cubeportfolio({
    filters: '#nospace-filters',
    layoutMode: 'mosaic',
    defaultFilter: '*',
    animationType: 'slideDelay',
    gapHorizontal: 0,
    gapVertical: 0,
    gridAdjustment: 'responsive',
    mediaQueries: [{
      width: 1500,
      cols: 5
    }, {
      width: 1100,
      cols: 4
    }, {
      width: 800,
      cols: 3
    }, {
      width: 480,
      cols: 2
    }, {
      width: 320,
      cols: 1
    }],

  });

  /*For ABout galley*/
  $("#about-gallery").cubeportfolio({
    layoutMode: 'grid',
    mediaQueries: [{
      width: 1500,
      cols: 3
    }, {
      width: 1100,
      cols: 3
    }, {
      width: 800,
      cols: 3
    }, {
      width: 480,
      cols: 2
    }, {
      width: 320,
      cols: 1
    }],

    gapHorizontal: 30,
    gapVertical: 30,
    gridAdjustment: 'responsive',
    // lightbox
    lightboxDelegate: '.cbp-lightbox',
    lightboxGallery: true,
  });


  /*For Work galley*/
  $('#work-gallery').cubeportfolio({
    filters: '#work-filters',
    loadMore: '#js-loadMore-gallery-work',
    loadMoreAction: 'click',
    layoutMode: 'grid',
    defaultFilter: '*',
    animationType: 'rotateRoom',
    gapHorizontal: 80,
    gapVertical: 70,
    gridAdjustment: 'responsive',
    mediaQueries: [{
      width: 1500,
      cols: 2
    }, {
      width: 1100,
      cols: 2
    }, {
      width: 800,
      cols: 2
    }, {
      width: 480,
      cols: 2
    }, {
      width: 320,
      cols: 1
    }],
    lightboxDelegate: '.cbp-lightbox',
	 lightboxCounter :'',
    lightboxGallery: true,

    singlePageCallback: function (url, element) {
      // to update singlePage content use the following method: this.updateSinglePage(yourContent)
      var t = this;
      $.ajax({
          url: url,
          type: 'GET',
          dataType: 'html',
          timeout: 30000
        })
        .done(function (result) {
          t.updateSinglePage(result);
        })
        .fail(function () {
          t.updateSinglePage('AJAX Error! Please refresh the page!');
        });
    },
  });


  // +++++ WOW Transitions
  if ($(window).width() > 767) {
    new WOW().init();
  }


  //FancyBox
  $('.fancybox-media').fancybox({
    openEffect: 'fade',
    closeEffect: 'none',
    helpers: {
      media: {}
    }
  });

});

