touchIt.js
==========
####jQuery plugin: Testing whether user interaction occurs via mouse or touch.
(An attempt to solve the plaguing humanity in the history of ever)   
#### Was that a mouse or a finger?
Detecting touch capability in general has been raising issues all over the place.
- http://www.stucox.com/blog/you-cant-detect-a-touchscreen
- https://github.com/Modernizr/Modernizr/issues/54
 
So, if used at all, they must be used very carefully

Make sure the site you're building is still relatively functional even if touch/mouse detection fails

(Note: The issue of windows phones has not been addressed with this plugin... or any plugin/method I have found.)


The first several tests (The Failing Tests) aren't definitive of anything.
They are included for completeness not functionality
If you decide to encorporate the widget in your project, remove them.

###The Failing Tests:
####user agent test
Check what the browser thinks it is (or wants you to think it is)

Why it fails:
		This doesn't really tell you anything about a touch capable laptop, 
		but if it flags ipad/iphone/blackberry/android then touch-only is a safe bet. 
		Hide your hovers events! Hide them all.
		
		However, touch-capable desktops exist, and user agents can be faked.
		
		This method is how HULU.com checks whether you're on a phone/tablet or a computer
		So if you'd like to watch Hulu on your phone and don't want to pay for hulu plus, 
		just change your browsers useragent to 'desktop.'


####has touch capability
The current modernizr solution for touch detection checks if the touch.events
exist at all by checking if ontouchstart exists

Why it fails:
		Mobile browsers have been known to throw false negatives, and desktop browsers, false positives. 
		Furthermore, in versions of IE where touch is supported, 
		the pointer always exists but pointer type is not known till the event fires.
		And, most importantly, in many modern devices mouse and touch aren't mutually exclusive!
		http://gadgets.ndtv.com/laptops/features/ces-2014-hybrids-laptops-and-ultrabooks-roundup-469808

--Ideally, the UI should respond to each appropriately, but never assume anything.
--The site should still be reasonably functional if everything goes wrong.
--The HTML5 people concur: http://www.html5rocks.com/en/mobile/touchandmouse


####height/width ratio & portrait mode
Check media querie flag for protrait mode or check if height > width. 

Why it fails:
		If the width is under 800px, the user is more than likely using a phone.
		If it's in portrait mode, it's probably a tablet/phone.
		However, it could be resized window on a touch capable device
		When I turn my MS Surface sideways, I can still use the mouse.



##The Proposed Solution:

###listens for touch.events, mouse.events, and MS IE pointer.events      
		If a touch/(non-mouse type pointer)event is detected,
		enable touch functions and hide your hovers (and other mouse-only functions)
		If a mouse/(pointer.type == mouse) event is detected, do your mouse-only things    
		
		
		Since webkit/moz touch.events throw mouse.events too,
		a function with a quick timeout blocks the capture of mouse.events 
		immediately after touch.events are fired to prevent false mouse.event positive
		
		
		The draw back is that it should keep listening.
		(Although this can be disabled via options.keepWatching) 
		Not the most efficient thing in the world, but in case your user goes
		from mouse to touch then back to mouse, you're covered
		
		The event can/should be throttled though
		(throttled via options.throttleWatch)


###See the Demo page: http://jbeee.github.io/touchIt
###Test on codepen.io: http://codepen.io/jbeeio/pen/dpwkC
