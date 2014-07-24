jQuery.isOnScreen
==========

Simple jQuery plugin to determine if an element is within the viewport.  Optional parameters allow the user to specify a minimum percentage of the element's dimensions that must be visible to qualify.

@param x - float values to test against, as a decimal value of how much of the element's width must be visible for the method to return true.  defaults to 1 (100%)
@param y - float values to test against, as a decimal value of how much of the element's height must be visible for the method to return true.  defaults to 1 (100%)

For example, passing $(element).isOnScreen(0.5, 0.5) would return true if the element had at least 50% of it’s height and width within the viewport rectangle. $(element).isOnScreen(0.1, 0.5) would return true if at least 10% of the width were visible *and* 50% of the height were visible. Omitting an argument (or passing null) defaults to 1 (or 100%).

Usage is simple

    $('selector').isOnScreen();  // returns true if element is entirely within the viewport

    $('selector').isOnScreen(0.5, 0.5); // returns true if element is at least 50% within the viewport
