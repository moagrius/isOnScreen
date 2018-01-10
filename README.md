#jQuery.isOnScreen

Original plugin: https://github.com/moagrius/isOnScreen

I just cloned it and wrapped for UMD

Simple jQuery plugin to determine if an element is positioned within the viewport.  It does not test any other type of "visibility", like css display, opacity, presence in the dom, etc - it only considers position.

Current version returns true if at least 1 pixel is visible on screen.  

An optional callback argument is accepted, that is passed the number of pixels visible on each edge - the return of that callback is used, if provided.  The callback is called from the scope of the current node.

Some examples:

Returns true if element has at least 1 pixel within the viewport:

    $('selector').isOnScreen();

Returns true if at least the top 10px of the element's vertical area is in the viewport:
    
    $('selector').isOnScreen(function(deltas){
      return deltas.top >= 10 && deltas.bottom >= 10;
    });
    
Returns true if at least the top 10px of the element's vertical area above the bottom of the viewport.
    
    $('selector').isOnScreen(function(deltas){
      return deltas.top >= 10;
    });  
      
Returns true if the element is within 100px of the bottom of the viewport (and so technically is still not "visible" - this can be useful for loading content when you expect a user to see it shortly, for example during a fling action or in an infinite scroll application).
    
    $('selector').isOnScreen(function(deltas){
      return deltas.top >= -100;
    });          
      
Returns true if the element's vertical space is entirely within the viewport:    
    
    $('selector').isOnScreen(function(deltas){
      return deltas.top >= this.height() && deltas.bottom >= this.height();
    });
    
Return true if the element is entirely within the viewport:

    $('selector').isOnScreen(function(deltas){
      return deltas.top >= this.height() 
        && deltas.bottom >= this.height()
        && deltas.left >= this.width()
        && deltas.right >= this.width()
    });
    
Returns true if the element is above the bottom of the viewport at all (at least 1 pixel is showing, or the element is above the viewport and not actually visible).
    
    $('selector').isOnScreen(function(deltas){
      return deltas.top >= 0;
    });
    