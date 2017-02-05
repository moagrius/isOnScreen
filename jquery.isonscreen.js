(function ($) {

  /**
  * Tests if a node is positioned within the current viewport.
  * It does not test any other type of "visibility", like css display,
  * opacity, presence in the dom, etc - it only considers position.
  * 
  * By default, it tests if at least 1 pixel is showing, regardless of
  * orientation - however an optional argument is accepted, a callback
  * that is passed the number of pixels distant between each edge of the
   * node and the corresponding viewport.  If the callback argument is provided
   * the return value (true of false) of that callback is used instead.
  */
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

})(jQuery);