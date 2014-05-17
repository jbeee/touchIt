/*
Bootstrap fxns minified
*/

+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(this.transitioning||this.$element.hasClass("in"))return;var b=a.Event("show.bs.collapse");this.$element.trigger(b);if(b.isDefaultPrevented())return;var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])},b.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass("in"))return;var b=a.Event("hide.bs.collapse");this.$element.trigger(b);if(b.isDefaultPrevented())return;var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};if(!a.support.transition)return d.call(this);this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350)},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),typeof c=="object"&&c);!e&&f.toggle&&c=="show"&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c=a(this),d,e=c.attr("data-target")||b.preventDefault()||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":c.data(),i=c.attr("data-parent"),j=i&&a(i);if(!g||!g.transitioning)j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(c).addClass("collapsed"),c[f.hasClass("in")?"addClass":"removeClass"]("collapsed");f.collapse(h)})}(jQuery)
/* 
JQuery fxn designed to test whether the user is interacting with the page via touch or mouse, combining all methods I could possibly find.

To actually use this in a page, go through and delete all extra functions and remove all the comments, and maybe minify the whole thing

*/


$.fn.touchIt = function(options)
{
  options = $.extend({keepWatching: true, throttleWatch: false }, options);
  var me = this;
  var IE10plus = window.navigator.msPointerEnabled; /// true for both ie 10 & 11
  the_device_width_test();   ///// failing test function
  the_userAgent_test();  //// failing test function
  the_hastouch_test(); ////failing test function
  if(IE10plus){the_pokeme_test_IE10();}else{the_pokeme_test();}
  




  /*
  touchit tests: screen dimensions?
  If the device is less than 800px wide, its probably a mobile and therefore touch-only device.
  However, A mobile device in landscape-view or an HD device such as a Retina-display IPAD or the Kindle HDX completely 
  undermine this logic. Also, a touch-capable laptop, a bluetooth mouse for a tablet, or a browser window opened but resized to be really small, will derail this as well.
  */
  function the_device_width_test()
  {	
	  var w = window.innerWidth;
	  var h = window.innerHeight;
	  $('#windims').html(w+' x ' + h + '<br>');
	  
	  if(( $('#device_width_small').css('display') == 'none' )&&( $('#device_width_large_p').css('display') == 'none' ) ) 
	  { 
		  ////// The Media Queries say PORTRAIT! 
	  }

	  if(w < h)
	  {
	  	////// The Height/Width ratio says PORTRAIT! 
	  }

	  if(w == h)
	  {
	  	////// What are you using? It's weird and different an I  don't like it.
	  }
  }
  

  
	  
  /*
  touchit tests: using what?
  Generally device detection / user.agent snooping is frowned upon method and should be replaced by feature detection as seen in modernzr. Despite the fact that users can change their nav.agent manually to send a false result, it might sometimes prove useful, assuming we chose to ignore the users that decided to tinker with their nav.agent. For example opera mini is a horrible horrible creation that needs to be accounted for. IE10, on touch devices, obfuscates the difference between mouse and touch events by combining them into one 'pointer' event and I don't actually know what happens on blackberry browsers, but the fact that the creator of the method felt it necessary to check for it specifically makes me slightly nervous.
  Method for from: http://j.mp/1f3WNFQ	
  */
 
	function the_userAgent_test()
	{
	 var isMob =
  		{
 	 	 oMin: function() {return navigator.userAgent.match(/Opera Mini/i); },
 	 	 o: function() { return navigator.userAgent.match(/Opera Mobi/i);},
 		 a: function() { return navigator.userAgent.match(/Android/i);},
 	 	 bb: function(){ return navigator.userAgent.match(/BlackBerry/i);},	
 	 	 iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},	
	 	 ieM: function() {return navigator.userAgent.match(/IEMobile/i);},
	   	 mobile: function() {return (isMob.o()||isMob.ieM()||isMob.a()||isMob.bb()||isMob.iOS()); },
	   	 other: function(){
	   	 	if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
			if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
			if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
			if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
			return OSName;
	   	 }
  		}

  	  var dTxt = "Your navigator.userAgent indicates that you are most likely browsing via "
	 if(isMob.oMin())  ///////IS OPERA MINI
	  {
	 	 dTxt += 'a touch enabled device using <b> opera mini </b>, which means JS functionality is minimal';
	  }
	  else if(isMob.mobile()) ///////IS A MOBILE DEVICE
	  {
		  dTxt += '<strong>'+isMob.mobile()+ '</strong> running on a mobile device. However you could still be a pointer or mouse or some other shenanigans... i don\'t know your life.'
	  }	  
 	  else
 	  {
 	  	// Get proper Browser Name method via: http://www.javascripter.net/faq/browsern.htm
 	  	var nVer = navigator.appVersion;
		var nAgt = navigator.userAgent;
		var browserName  = navigator.appName;
		var fullVersion  = ''+parseFloat(navigator.appVersion); 
		var majorVersion = parseInt(navigator.appVersion,10);
		var nameOffset,verOffset,ix;

		// In Opera, the true version is after "Opera" or after "Version"
		if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
		 browserName = "Opera";
		 fullVersion = nAgt.substring(verOffset+6);
		 if ((verOffset=nAgt.indexOf("Version"))!=-1) 
		   fullVersion = nAgt.substring(verOffset+8);
		}
		// In MSIE, the true version is after "MSIE" in userAgent
		else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
		 browserName = "Microsoft Internet Explorer";
		 fullVersion = nAgt.substring(verOffset+5);	 
		 
		}
		// In MSIE, the true version is after "MSIE" in userAgent
		else if ((verOffset=nAgt.indexOf("Trident/"))!=-1){
		 browserName = "Microsoft Internet Explorer";
		 var rv = nAgt.indexOf('rv:');
        fullVersion=nAgt.substring(rv + 3, nAgt.indexOf('.', rv));
		 
		}
		// In Chrome, the true version is after "Chrome" 
		else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
		 browserName = "Chrome";
		 fullVersion = nAgt.substring(verOffset+7);
		}
		// In Safari, the true version is after "Safari" or after "Version" 
		else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
		 browserName = "Safari";
		 fullVersion = nAgt.substring(verOffset+7);
		 if ((verOffset=nAgt.indexOf("Version"))!=-1) 
		   fullVersion = nAgt.substring(verOffset+8);
		}
		// In Firefox, the true version is after "Firefox" 
		else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
		 browserName = "Firefox";
		 fullVersion = nAgt.substring(verOffset+8);
		}
		// In most other browsers, "name/version" is at the end of userAgent 
		else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < 
		          (verOffset=nAgt.lastIndexOf('/')) ) 
		{
		 browserName = nAgt.substring(nameOffset,verOffset);
		 fullVersion = nAgt.substring(verOffset+1);
		 if (browserName.toLowerCase()==browserName.toUpperCase()) {
		  browserName = navigator.appName;
		 }
		}
		// trim the fullVersion string at semicolon/space if present
		if ((ix=fullVersion.indexOf(";"))!=-1)
		   fullVersion=fullVersion.substring(0,ix);
		if ((ix=fullVersion.indexOf(" "))!=-1)
		   fullVersion=fullVersion.substring(0,ix);

 	  	var yourOS = isMob.other();
 	  	lang = navigator.userAgent.split(';')[3];
 	  	dTxt += '<strong>'+yourOS+' ' + browserName+ ' '+ fullVersion+ '</strong>';
 	  	
 	  }
 	  $('#nav_userAgent').html(dTxt);

	}

  
  
  /* 
  touchit tests: has touch capability?   ---- The modernzr method (literally copy and pasted from the modernzr repo)
	 First 'pointer - pen/mouse detection' for IE10.
	 if not then  'has touch events?' method from modernizr for browsers that aren't IE10
	 if either returns true, then we wait for some touch events,
	 if not... Let's give up and assume they user is using a mouse and only a mouse, because at this point 
	 the user is being unnecessarily difficult and doesnt deserve any special functions anyway
  */
  function the_hastouch_test()
  {	
  	if(IE10plus)
  	{
  		$('#touch_capable').html(' maybe...? IE10+').addClass('true').removeClass('false');
  	}
	 else if(('ontouchstart' in window)||(window.DocumentTouch && document instanceof DocumentTouch))
	  {
		$('#touch_capable').html(' true').addClass('true').removeClass('false');
	  }
	  else
	  { 
		 $('#touch_capable').html(' false').addClass('false').removeClass('true'); 
	  }			
  }




  
  /* 
  touchit tests: poke me? 
  Modification of the 'poke it method' from http://j.mp/18k2lx1
  1. listen for mouseover event fired. 
  2. listen for touchevent. On some browsers touch events fire mouse events too, so a test with a one second delay is set up to check if a chained touch-event occurs. 
  3. check if mouseover was chained, touch used = true
  
  After a bit of testing 1 second seemed the ideal wait time because it was short enough to not be plausible that both events occured independently due to the user, i.e. the user didnt move the mouse and then quickly touch the screen. The chained events fire within 0.5s max of each other, so a 1 second wait seemed like a safe bet.
    */
  function the_pokeme_test()
  {
	  var wasTouch = false;
	  ////Add mouseover event listener, since some devices are both touch/mouse capable
	   $(me).bind("mouseover",function(){
		   wasTouch = false; 
		   mouseOverFired = true;		 
		  setTimeout(function(){ 
			  if(!wasTouch){
				  $.fn.touchIt.usingMouse();
						   }
						   },1000);
		if(!options.keepWatching) // STOP CHECKING FOR A MOUSE/TOUCH SWITCH 
			{
		  		$(me).unbind('mouseover'); 
			}
	  });
		  
	  ////Add the touch event listener
	  $(me).bind("touchstart",function(){
		  wasTouch = true; 
		  $.fn.touchIt.usingTouch();
		  if(!options.keepWatching) ///STOP CHECKING FOR A MOUSE/TOUCH SWITCH
			{
		 		 $(me).unbind('touchstart'); 
		 	}
	  });
  
  }



	function the_pokeme_test_IE10()
	{
		$(me).css("-ms-touch-action", "none");
		////for 'touch event occurs first' scenario
		
		///you're more likely to move your mouse before you click on something
		var bindEventMouse = (window.navigator.pointerEnabled)?'pointermove':'MSPointerMove'; ///only true for ie 11

		$(me).bind(bindEventMouse,function (e){
		var pEvent = e.originalEvent || e;
		console.log(e.pointerType);ieMorT(pEvent,bindEventMouse);});
			
		///you're more likely to touch-down on something first before you move it. Tricky Tricky IE.		
		var bindEventTouch = (window.navigator.pointerEnabled)?'pointerdown':'MSPointerDown';		
		$(me).bind(bindEventTouch,function (e){var pEvent = e.originalEvent || e;ieMorT(pEvent,bindEventTouch);});
						
 	   function ieMorT(eType,bindEvent)
		{
			console.log(eType);
			if(!options.keepWatching) // STOP CHECKING FOR A MOUSE/TOUCH SWITCH (IE)?
			{				
				$(me).unbind(bindEvent); 
			}
			if((eType == 4)||(eType == 'MSPOINTER_TYPE_MOUSE')||('mouse'))
			{
				$.fn.touchIt.usingMouse()
			}
			else
			{
				$('#touch_capable').html('true').addClass('true').removeClass('false'); 
				$.fn.touchIt.usingTouch();
			}
		}
	 }
	 
	$(window).resize(function(){the_device_width_test();});

/*
	This hasn't been implemented yet, but ideally, a throttle or a debounce for the events will happen... soon
 var uiBusy = false; var uiThrottle;    
 $.fn.throttlePokes = function()
	{
	   if(uiBusy){return;}
		else
		{
			clearTimeout(uiThrottle);
			uiThrottle = undefined;
			uiBusy = true;
			uiThrottle = setTimeout(watchEvent,options.throttleWatch);
		}
		
		function execResize()
		{	
			uiBusy = false;
			$.fn.resizeFXNS();
			clearTimeout(uiThrottle);
			uiThrottle = undefined;
		}	
	} 
*/


}

///////start doing mouse-driven stuffs
$.fn.touchIt.usingMouse = function()
{	
	$('#using_mouse').html('true').addClass('true').removeClass('false');	$('#using_touch').html('false').addClass('false').removeClass('true');
	console.log('thats a mouse!');
}

///////start doing touch-driven stuffs
$.fn.touchIt.usingTouch = function()
{	$('#using_touch').html('true').addClass('true').removeClass('false');	$('#using_mouse').html('false').addClass('false').removeClass('true');
console.log('you touched it');
}

