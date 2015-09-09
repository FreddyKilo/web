// Paralax scroll

window.requestAnimationFrame = window.requestAnimationFrame
                             || window.mozRequestAnimationFrame
                             || window.webkitRequestAnimationFrame
                             || window.msRequestAnimationFrame
                             || function(f){setTimeout(f, 1000/60)}

function parallaxMain() {
    var mainPhoto = $('#photo-main');
    var scrollAmount = parseInt(window.pageYOffset);
    var topValue = -scrollAmount/6;
    mainPhoto.css("top", topValue + "px");
}

window.addEventListener('scroll', function(){
    requestAnimationFrame(parallaxMain)
}, false)


// Photo animation

var animateMillis = 200;

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


var photoHoverZoom1 = function($element){
	var width = $element.width()+10;
	console.log(width + "px")

	addHover($element, function(callback) {
		$element.animate({zIndex: "1"}, 0);

		$element.animate({width: width*2.05 + "px"}, 130, "linear", callback);
		$element.animate({width: width*1.95 + "px"}, 80);
		$element.animate({width: width*2 + "px"}, 100);

	}, function(callback) {

		$element.animate({width: width*.95 + "px"}, 120, "linear", callback);
		$element.animate({width: width + "px"}, 80);

		$element.animate({zIndex: "0"}, 0);
	});
};

var photoHoverZoom2 = function($element){
	var width = $element.width()+10;
	console.log(width + "px")

	addHover($element, function(callback) {
		$element.animate({zIndex: "1"}, 0);

		$element.animate({width: width*1.55 + "px"}, 100, "linear", callback);
		$element.animate({width: width*1.45 + "px"}, 80);
		$element.animate({width: width*1.5 + "px"}, 100);

	}, function(callback) {

		$element.animate({width: width*.95 + "px"}, 120, "linear", callback);
		$element.animate({width: width + "px"}, 80);

		$element.animate({zIndex: "0"}, 0);
	});
};


$(function(){
	photoHoverZoom1($('#band-promo-1'));
	photoHoverZoom1($('#cd-release-1'));
	photoHoverZoom1($('#band-promo-2'));
	photoHoverZoom2($('#band-promo-3'));
})
