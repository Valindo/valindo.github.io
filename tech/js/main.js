var mainslideHeight = $(window).height() - $('.menu').height();
$('.mainslide').css('height', mainslideHeight);

function testing(){
	$('#mech').removeClass('hidden');
	$('#mech').addClass('section');
	$('#events').addClass('hidden');
};