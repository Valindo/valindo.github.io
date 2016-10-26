function homeSliderInit(){
	if($(".myrevslider").length > 0)
	{
		console.log("Reached in Mobile Slider")
		$('.tp-banner').revolution({
			delay:9000,
			startwidth:1140,
			startheight:523,
			startWithSlide:0,

			fullScreenAlignForce:"off",
			autoHeight:"off",
			minHeight:"off",

			shuffle:"off",

			onHoverStop:"off",

			thumbWidth:100,
			thumbHeight:50,
			thumbAmount:3,

			hideThumbsOnMobile:"off",
			hideNavDelayOnMobile:1500,
			hideBulletsOnMobile:"off",
			hideArrowsOnMobile:"off",
			hideThumbsUnderResoluition:0,

			hideThumbs:0,
			hideTimerBar:"off",

			keyboardNavigation:"on",

			navigationType:"bullet",
			navigationArrows:"solo",
			navigationStyle:"round",

			navigationHAlign:"center",
			navigationVAlign:"bottom",
			navigationHOffset:30,
			navigationVOffset:30,

			soloArrowLeftHalign:"left",
			soloArrowLeftValign:"center",
			soloArrowLeftHOffset:20,
			soloArrowLeftVOffset:0,

			soloArrowRightHalign:"right",
			soloArrowRightValign:"center",
			soloArrowRightHOffset:20,
			soloArrowRightVOffset:0,


			touchenabled:"off",
			swipe_velocity:"0.7",
			swipe_max_touches:"1",
			swipe_min_touches:"1",
			drag_block_vertical:"true",

			dottedOverlay:"twoxtwo",

			spinned:"spinner4",

			fullWidth:"off",
			forceFullWidth:"off",
			fullScreen:"off",
			fullScreenOffsetContainer:"#topheader-to-offset",
			fullScreenOffset:"0px",

			panZoomDisableOnMobile:"on",

			simplifyAll:"on",

			shadow:0

		});
	}
}