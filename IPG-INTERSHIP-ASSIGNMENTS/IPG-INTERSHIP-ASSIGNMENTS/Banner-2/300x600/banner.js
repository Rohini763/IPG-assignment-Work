var banner = document.getElementById('banner');
var del = 0;
var t;

enablerInitHandler = function(e) {
	if(Enabler.isVisible()) {
		startAnim();
	} else {
		startAnim();
//		Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, startAnim);
	} 
};

startAnim = function(e) {
	//Assign All the elements to the element on the page	
	var bgExit = document.getElementById('bgExit');
	//Add listeners
	addListeners();
	var introTimeline = new TimelineMax({

        });
	
	introTimeline
		
		//Frame 1
		//.to("#banner", 0.5, { opacity: 1, ease: Power2.easeOut }, del += 0.2)
		//.to("#logo", 0.5, { opacity: 1, ease: Power2.easeOut }, del += 0)
		.to("#headline", 1, { opacity: 1, ease: Power4.easeOut }, del += 0.5)
		//.from("#packshot", 0.5, { scale: 0, opacity: 0, ease: Power2.easeOut }, del += 0.5)
		//.from("#disclaimer", 0.5, { opacity: 0, ease: Power2.easeOut }, del += 0.8)
        .to("#branding1", 1, { opacity: 1,top:0, ease: Power4.easeOut }, del += 0.5)
	    .to("#branding2", 1, { opacity: 1,bottom:0, ease: Power4.easeOut }, del)
		// Frame 2
		//.to("#frame_1__text", 0.5, { opacity: 0, ease: Power2.easeOut }, del += 0.8)
		.to("#headline", 0.7, { opacity: 0, ease: Power2.easeOut}, del += 2)
        .to("#offer", 0.6, { left:0, ease: Power4.easeOut }, del += 0.15)
	    .to("#offer1", 0.6, { left:0, ease: Power4.easeOut }, del += 0.5)
        .to("#offer2", 0.6, { left:0, ease: Power4.easeOut }, del += 0.5)
	    .to("#offer3", 0.6, { left:0, ease: Power4.easeOut }, del += 0.5)


		//Frame 3
		//.to("#frame_2__text", 0.5, { opacity: 0, ease: Power2.easeOut }, del += 2.0)
		.from("#cta", 0.6, { scale: 0, opacity: 0, ease: Back.easeInOut }, del += 0.5)
	    .to("#cta", 1, { scale: 1.2, opacity: 1, ease: Back.easeInOut }, del += 0.1)
	    .to("#cta", 1, { scale: 1,  ease: Back.easeInOut }, del += 0.1)
};
addListeners = function(e) {
	bgExit.addEventListener('touchEnd', bgExitHandler, false);
	bgExit.addEventListener('click', bgExitHandler, false);
};
bgExitHandler = function(e) {	
	Enabler.exit('handleclickthrough', window.clickTag);
};
window.onload = function (){
if (Enabler.isInitialized()) {
  enablerInitHandler();
} else {
	enablerInitHandler();
//  	Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
}
}