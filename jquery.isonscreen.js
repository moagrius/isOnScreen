(function ($) {

    $.fn.isOnScreen = function(x, y){

	if(x == null || typeof x == 'undefined') x = 1;
	if(y == null || typeof y == 'undefined') y = 1;

	var win = $(window);

	var viewport = {
	    top : win.scrollTop(),
	    left : win.scrollLeft()
	};
	viewport.right = viewport.left + win.width();
	viewport.bottom = viewport.top + win.height();

	var height = this.outerHeight();
	var width = this.outerWidth();

	if(!width || !height){
	    return false;
	}

	var bounds = this.offset();
	bounds.right = bounds.left + width;
	bounds.bottom = bounds.top + height;

	// Visible width and height in viewport
	var vis_width = Math.min(bounds.right, viewport.right) - Math.max(bounds.left, viewport.left);
	var vis_height = Math.min(bounds.bottom, viewport.bottom) - Math.max(bounds.top, viewport.top);

	var visible = (vis_height > 0 && vis_width > 0);

	if(!visible){
	    return 0;   
	}

	return (vis_width/width >= x && vis_height/height >= y)

})(jQuery);
