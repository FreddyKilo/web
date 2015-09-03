// Paralax scroll

var parlaxScrollPhotoMain = function() {
	window.requestAnimationFrame = window.requestAnimationFrame
	                             || window.mozRequestAnimationFrame
	                             || window.webkitRequestAnimationFrame
	                             || window.msRequestAnimationFrame
	                             || function(f){setTimeout(f, 1000/60)}

	function parallaxMain(){
	    var mainPhoto = $('#photo-main');
	    var scrollAmount = parseInt(window.pageYOffset);
	    var topValue = -scrollAmount/5;
	    mainPhoto.css("top", topValue + "px");
	}

	window.addEventListener('scroll', function(){
	    requestAnimationFrame(parallaxMain)
	}, false)
}


// Skills dropdown

var isDropVisible = false;
var isDoneFading = true;
var setTimeOutForToggleOff;

var toggleDropDown = function() {
	$('.dropdown-menu').toggle();
	if(isDropVisible){
		isDropVisible = false;
		isDoneFading = true;
	} else {
		isDropVisible = true;
	}
}

var dropToggle = function() {
	$('.dropdown-toggle').click(function() {
		fadeMiliseconds = 2000;
		if (isDropVisible && isDoneFading) { // fade out
			isDoneFading = false;
			$('.dropdown-menu').animate({opacity: "0"}, fadeMiliseconds);
			setTimeOutForToggleOff = setTimeout(toggleDropDown, fadeMiliseconds);
		} else if (!isDropVisible) { // fade in
			toggleDropDown();
			$('.dropdown-menu').animate({opacity: "1"}, fadeMiliseconds/10);
		} else {
			$('.dropdown-menu').stop();
			$('.dropdown-menu').animate({opacity: "0"}, 0);
			clearTimeout(setTimeOutForToggleOff);
			toggleDropDown();
		}
	});
};

$(document).ready(dropToggle);
$(document).ready(parlaxScrollPhotoMain);