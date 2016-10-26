function testing(){
	console.log("I reach in script");
	if ($('#promoSlide').length > 0) {
		$("#promoSlide").owlCarousel({
			items: 4,
			autoPlay: true,
			navigation: true,
			navigationText: false,
			stopOnHover: true,
			itemsDesktop: [1199, 3],
			itemsTablet: [991, 2],
			itemsTabletSmall: [767, 1],
			itemsMobile: [480, 1]
		});
	}
	if ($('#helthCarousel').length > 0) {
		$("#helthCarousel").owlCarousel({
			items: 2,
			autoPlay: true,
			navigation: true,
			navigationText: false,
			stopOnHover: true,
			itemsDesktop: [1199, 2],
			itemsTablet: [991, 2],
			itemsTabletSmall: [767, 1],
			itemsMobile: [480, 1]
		});
	}
	if ($('#fashionCarousel').length > 0) {
		$("#fashionCarousel").owlCarousel({
			items: 2,
			autoPlay: true,
			navigation: true,
			stopOnHover: true,
			navigationText: false,
			itemsDesktop: [1199, 2],
			itemsMobile: [480, 1],
			itemsTablet: [991, 2],
			itemsTabletSmall: [767, 1]
		});
	}
	if ($('#loveCarousel').length > 0) {
		$("#loveCarousel").owlCarousel({
			items: 2,
			autoPlay: true,
			navigation: true,
			stopOnHover: true,
			navigationText: false,
			itemsDesktop: [1199, 2],
			itemsTablet: [991, 2],
			itemsTabletSmall: [767, 1],
			itemsMobile: [480, 1]
		});
	}
	if ($('#hotCrousel').length > 0) {
		$("#hotCrousel").owlCarousel({
			items: 2,
			autoPlay: true,
			navigation: true,
			navigationText: false,
			itemsDesktop: [1199, 2],
			itemsTablet: [991, 2],
			itemsTabletSmall: [767, 1],
			itemsMobile: [480, 1],
			singleItem: false,
			stopOnHover: true
		});
	}
}