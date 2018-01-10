(function (factory) {
  'use strict'
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory)
  } else if (typeof exports !== 'undefined') {
    module.exports = factory(require('jquery'))
  } else {
    factory(jQuery)
  }
}(function ($) {
  $.fn.isOnScreen = function(test){

    var height = this.outerHeight();
    var width = this.outerWidth();

    if(!width || !height){
      return false;
    }

    var win = $(window);

    var viewport = {
      top : win.scrollTop(),
      left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + width;
    bounds.bottom = bounds.top + height;

    var deltas = {
      top : viewport.bottom - bounds.top,
      left: viewport.right - bounds.left,
      bottom: bounds.bottom - viewport.top,
      right: bounds.right - viewport.left
    };

    if(typeof test == 'function') {
      return test.call(this, deltas);
    }

    return deltas.top > 0
      && deltas.left > 0
      && deltas.right > 0
      && deltas.bottom > 0;
  };
}))
