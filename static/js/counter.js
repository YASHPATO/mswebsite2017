jQuery(function ($) {
	"use strict";
  // custom formatting example
  $(".value_formatter").data("countToOptions",{
	 formatter: function (value, options) {
		return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
	 }
  });
  $(".counters").appear(function () {
	  $(".count_nums").each(count);
  });
  
  function count(options) {
	 var $this = $(this);
	 options = $.extend({}, options || {}, $this.data("countToOptions") || {});
	 $this.countTo(options);
  }
});