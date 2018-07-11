//Menu sticky

$(document).ready(function() {
	var NavY = $('main #menu .nav').offset().top;
	 
	var stickyNav = function(){
	var ScrollY = $(window).scrollTop();
		  
	if (ScrollY > NavY) { 
		$('main #menu .nav').addClass('sticky');
	} else {
		$('main #menu .nav').removeClass('sticky'); 
	}
	};
	 
	stickyNav();
	 
	$(window).scroll(function() {
		stickyNav();
	});
    });