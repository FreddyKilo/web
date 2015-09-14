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
	if(scrollAmount <= 200){
		$header.css({opacity: "1"});
	}else if(scrollAmount > 200 && scrollAmount <= 400){
		var headerOpacity = 1 - (scrollAmount - 200)/200;
		$header.css({opacity: headerOpacity});
	}else if($header.css('opacity') != 0){
		$header.css({opacity: "0"});
	}
}

var getScrollAmount = function(){
	return parseInt(window.pageYOffset);
}

window.addEventListener('scroll', function(){
    requestAnimationFrame(parallaxMain);
    requestAnimationFrame(headerFade);
}, false)


var displayInfo = function($element) {
	var $info = $($element);
	if($info.css('visibility') == 'hidden'){
		$info.css({visibility: 'visible'});
		$info.animate({opacity: 1}, 300);
	}else{
		$info.animate({opacity: 0}, 300);
		$info.delay(300);
		$info.css({visibility: 'hidden'});
	}
}


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


var inquire = function($image, zoomLevel, $info) {
	var $infoLink = $image.find($('.info h3'));
	var width = $image.width()+10;
	addHover($image, function(callback) {
		$image.css({zIndex: 2});
		$image.animate({width: width*(zoomLevel+.08) + "px"}, 90, "linear", callback);
		$image.animate({width: width*(zoomLevel-.04) + "px"}, 80);
		$image.animate({width: width*zoomLevel + "px"}, 70);
		showInfoButton($infoLink, width, zoomLevel);
		$info.css({left: width*zoomLevel+40});
		$info.css({top: $image.css('top')});

	}, function(callback) {
		$image.css({zIndex: 1});
		$image.animate({width: width*.95 + "px"}, 100, "linear", callback);
		$image.animate({width: width*1.05 + "px"}, 80);
		$image.animate({width: width + "px"}, 70);
		$image.css({zIndex: 0});
		hideInfoButton($infoLink);
		$info.animate({opacity: 0}, 300);
		$info.delay(300);
		$info.css({visibility: 'hidden'});

	});
}


function showInfoButton($infoLink, width, zoomLevel) {
	$infoLink.css({opacity: 0});
	$infoLink.delay(300);
	$infoLink.css({left: width*zoomLevel-($infoLink.width()+25)});
	$infoLink.css({zIndex: 0});
	$infoLink.animate({opacity: 1}, 200);
}


function hideInfoButton($infoLink) {
	$infoLink.css({zIndex: -1});
	$infoLink.css({left: 20});
}


$(function(){
	inquire($('#band-promo-1'), 2.6, $('#info-band-promo-1 p'));
	inquire($('#cd-release-1'), 2, $('#info-cd-release-1 p'));
	inquire($('#band-promo-2'), 2.2, $('#info-band-promo-2 p'));
	inquire($('#grotto-3'), 1.7);
	
	inquire($('#cd-release-2'), 2.4);
	inquire($('#grotto-1'), 1.8);
	inquire($('#band-promo-4'), 2.5);
	inquire($('#club-red-1'), 2);

	inquire($('#grotto-2'), 2.4);
	inquire($('#playdio-1'), 2.6);
	inquire($('#band-promo-3'), 2.5);
	inquire($('#cd-release-3'), 2.0);

	inquire($('#martini-1'), 2.2);
	inquire($('#martini-2'), 2.2);
	inquire($('#club-red-2'), 2.2);
	inquire($('#playdio-2'), 2.1);

})

