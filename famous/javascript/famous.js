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
	var $infoText = $info.find($('p'));
	addHover($image, function(callback) {
		$image.css({zIndex: 2});
		$image.animate({width: width*(zoomLevel+.08) + "px"}, 100, "linear", callback);
		$image.animate({width: width*(zoomLevel-.04) + "px"}, 80);
		$image.animate({width: width*zoomLevel + "px"}, 70);
		showInfoButton($infoLink, width, zoomLevel);
		console.log($info.attr('class'));
		if ($info.attr('class') == "info-paragraph-right") {
			$infoText.css({left: width*zoomLevel+20});
		}else{
			$infoText.css({left: -260});
		};
		$('.overlay').show();
		$('.overlay').animate({opacity: .5}, 700);

	}, function(callback) {
		$image.css({zIndex: 1});
		$image.animate({width: width*.95 + "px"}, 100, "linear", callback);
		$image.animate({width: width*1.05 + "px"}, 80);
		$image.animate({width: width + "px"}, 70);
		$image.css({zIndex: 0});
		hideInfoButton($infoLink);
		$infoText.animate({opacity: 0}, 300);
		$infoText.delay(300);
		$infoText.css({visibility: 'hidden'});
		$('.overlay').hide();
		$('.overlay').css({opacity: 0});

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


var infoButtonHover = function() {
	$('.info h3').hover(function(){
		$(this).css("background-image", "url(./images/infoButtonHover.png)");
		$(this).css("color", "#eee");
	}, function(){
		var $infoTextR = $('.info-paragraph-right p');
		var $infoTextL = $('.info-paragraph-left p');
		
		// Uncomment below to hide info on button off-hover
		// $infoTextR.css({visibility: "hidden"});
		// $infoTextL.css({visibility: "hidden"});
		// $infoTextR.css({opacity: "0"});
		// $infoTextL.css({opacity: "0"});

		$(this).css("background-image", "url(./images/infoButton.png)");
		$(this).css("color", "black");
	});
}


$(function(){
	inquire($('#band-promo-1'), 2.6, $('#info-band-promo-1'));
	inquire($('#cd-release-1'), 2, $('#info-cd-release-1'));
	inquire($('#band-promo-2'), 2.2, $('#info-band-promo-2'));
	inquire($('#grotto-3'), 1.7, $('#info-grotto-3'));
	
	inquire($('#cd-release-2'), 2.4, $('#info-cd-release-2'));
	inquire($('#grotto-1'), 1.8, $('#info-grotto-1'));
	inquire($('#band-promo-4'), 2.5, $('#info-band-promo-4'));
	inquire($('#club-red-1'), 2, $('#info-club-red-1'));

	inquire($('#grotto-2'), 2.4, $('#info-grotto-2'));
	inquire($('#playdio-1'), 2.6, $('#info-playdio-1'));
	inquire($('#band-promo-3'), 2.5, $('#info-band-promo-3'));
	inquire($('#cd-release-3'), 2.0, $('#info-cd-release-3'));

	inquire($('#martini-1'), 2.2, $('#info-martini-1'));
	inquire($('#martini-2'), 2.2, $('#info-martini-2'));
	inquire($('#club-red-2'), 2.2, $('#info-club-red-2'));
	inquire($('#playdio-2'), 2.1, $('#info-playdio-2'));

	infoButtonHover();

	// $('.info h3').hover(function(){
	// 	$(this).css("background-image", "url(./images/infoButtonHover.png)");
	// 	$(this).css("color", "#eee");
	// }, function(){
	// 	var $infoTextR = $('.info-paragraph-right p');
	// 	var $infoTextL = $('.info-paragraph-left p');
	// 	$infoTextR.css({visibility: "hidden"});
	// 	$infoTextL.css({visibility: "hidden"});
	// 	$infoTextR.css({opacity: "0"});
	// 	$infoTextL.css({opacity: "0"});

	// 	$(this).css("background-image", "url(./images/infoButton.png)");
	// 	$(this).css("color", "black");
	// });

});

