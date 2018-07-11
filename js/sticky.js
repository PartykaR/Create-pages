//Menu sticky

$(document).ready(function() {
	var NavY = $('.menu').offset().top;
	 
	var stickyNav = function(){
	var ScrollY = $(window).scrollTop();
		  
	if (ScrollY > NavY) { 
		$('.menu').addClass('sticky');
	} else {
		$('.menu').removeClass('sticky'); 
	}
	};
	 
	stickyNav();
	 
	$(window).scroll(function() {
		stickyNav();
	});
    });