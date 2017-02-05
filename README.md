#jQuery.isOnScreen

Simple jQuery plugin to determine if an element is positioned within the viewport.  It does not test any other type of "visibility", like css display, opacity, presence in the dom, etc - it only considers position.

Current version returns false if at least 1 pixel is visible on screen, but an optional callback argument is accepted, that is passed the number of pixels visible on each edge - the return of that callback is used, if provided.  The callback is called from the scope of the current node.

E.g.

    $('selector').isOnScreen();  // returns true if element has at least 1 pixel within the viewport
    $('selector').isOnScreen(function(showing){
      return showing.top > 10 && showing.bottom > 0;
    }); // returns true if at least the top 10px of the element is in the viewport
    $('selector').isOnScreen(function(showing){
      return showing.top >= this.height() && showing.bottom > 0;
    }); // returns true if the element is entirely within the viewport
