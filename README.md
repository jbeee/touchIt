touchIt
==========

jQuery plugin: Testing whether user interaction occurs via mouse or touch.

##The Proposed Solution:
###listens for touch.events, mouse.events, and MS IE pointer.events      
     If a touch/(non-mouse type pointer)event is detected, enable touch functions and hide your hovers (and other mouse-only functions)
     If a mouse/(pointer.type == mouse) event is detected, do your mouse-only things    


     Since webkit/moz touch.events throw mouse.events too, a function with a quick timeout blocks the capture of mouse.events immediately after touch.events are fired to prevent false mouse.event positive


     The draw back is that it must keep listening. 
     Not the most efficient thing in the world, but in case your user goes from mouse to touch then back to mouse, you're covered
     The event can/should be throttled

###See the Demo page: http://jbeee.github.io/touchIt
###Test on codepen.io: http://codepen.io/jbeeio/pen/dpwkC