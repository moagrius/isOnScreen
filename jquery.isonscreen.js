(function ($) {

  /**
  * Tests if a node is positioned within the current viewport.
  * It does not test any other type of "visibility", like css display,
  * opacity, presence in the dom, etc - it only considers position.
  * 
  * By default, it tests if at least 1 pixel is showing, regardless of
  * orientation - however an optional argument is accepted, a callback
  * that is passed the number of pixels visible on each edge - the return
  * (true of false) of that callback is used instead.
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
    
    var showing = {
      top : viewport.bottom - bounds.top,
      left: viewport.right - bounds.left,
      bottom: bounds.bottom - viewport.top,
      right: bounds.right - viewport.left
    };

    if(typeof test == 'function') {
      return test.call(this, showing);
    }
    
    return showing.top > 0
      && showing.left > 0
      && showing.right > 0
      && showing.bottom > 0;
  };

})(jQuery);