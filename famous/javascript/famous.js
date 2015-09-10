// Paralax scroll
window.requestAnimationFrame = window.requestAnimationFrame
                             || window.mozRequestAnimationFrame
                             || window.webkitRequestAnimationFrame
                             || window.msRequestAnimationFrame
                             || function(f){setTimeout(f, 1000/60)}

function parallaxMain() {
    var $mainPhoto = $('#photo-main');
    var topValue = -getScrollAmount()/6;
    $mainPhoto.css("top", topValue + "px");
}

function headerFade() {
	var $header = $('.Thumbs h1');
	var scrollAmount = getScrollAmount();
	if(scrollAmount <= 400){
		var headerOpacity = 1 - scrollAmount/400;
		$header.css({opacity: headerOpacity})
		// $header.animate({opacity: "0"}, 10);
	} else {
		$header.css({opacity: "0"})
		// $header.animate({opacity: "1"}, 10);
	}
}

var getScrollAmount = function(){
	return parseInt(window.pageYOffset);
}

window.addEventListener('scroll', function(){
    requestAnimationFrame(parallaxMain);
    requestAnimationFrame(headerFade);
}, false)


// Photo animation
var addHover = function($element, onHover, onLeave){
	var hover = function(){
		$element.off('mouseenter.blowup');
		$element.on('mouseleave.blowup',leave);
		onHover();
	};

	var leave = function(){
		$element.off('mouseleave.blowup');
		onLeave(function(){
			$element.on('mouseenter.blowup',hover);
		});
	};

	$element.on('mouseenter.blowup',hover);
};


var animateZoom = function($element, zoomLevel){
	var width = $element.width()+10;
	addHover($element, function(callback) {
		$element.css({zIndex: "2"});
		$element.animate({width: width*(zoomLevel+.08) + "px"}, 90, "linear", callback);
		$element.animate({width: width*(zoomLevel-.04) + "px"}, 80);
		$element.animate({width: width*zoomLevel + "px"}, 70);

	}, function(callback) {
		$element.css({zIndex: "1"});
		$element.animate({width: width*.95 + "px"}, 100, "linear", callback);
		$element.animate({width: width*1.05 + "px"}, 80);
		$element.animate({width: width + "px"}, 70);
		$element.css({zIndex: "0"});

	});
}


$(function(){
	animateZoom($('#band-promo-1'), 2.6);
	animateZoom($('#cd-release-1'), 2);
	animateZoom($('#band-promo-2'), 2.2);
	animateZoom($('#grotto-3'), 1.7);
	
	animateZoom($('#cd-release-2'), 2.4);
	animateZoom($('#grotto-1'), 1.8);
	animateZoom($('#band-promo-4'), 2.5);
	animateZoom($('#club-red-1'), 2);

	animateZoom($('#grotto-2'), 2.4);
	animateZoom($('#playdio-1'), 2.6);
	animateZoom($('#band-promo-3'), 2.5);
	animateZoom($('#cd-release-3'), 2.5);
})

