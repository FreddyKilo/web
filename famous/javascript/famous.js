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

var animateMilis = 300;
var photoHover1 = function() {
	var isHovered = false;
	$('#band-promo-1').hover(function() {
		if(!isHovered) {
			isHovered = true;
			$('#band-promo-1').animate({zIndex: "1"}, 0);
			$('#band-promo-1').animate({width: "200%"}, animateMilis);
		}
	}, function() {
		$('#band-promo-1').animate({width: "100%"}, animateMilis);
		$('#band-promo-1').animate({zIndex: "0"}, 0);
		isHovered = false;
	});
}

var photoHover2 = function() {
	$('#cd-release-1').hover(function() {
		$('#cd-release-1').animate({zIndex: "1"}, 0);
		$('#cd-release-1').animate({width: "110%", marginLeft: "0px", marginTop: "150px"}, animateMilis);
	}, function() {
		$('#cd-release-1').animate({width: "70%", marginLeft: "150px", marginTop: "200px"}, animateMilis);
		$('#cd-release-1').animate({zIndex: "0"}, 0);
	});
}

var photoHover3 = function() {
	$('#band-promo-2').hover(function() {
		$('#band-promo-2').animate({zIndex: "1"}, 0);
		$('#band-promo-2').animate({width: "150%", marginLeft: "-100px", marginTop: "120px"}, animateMilis);
	}, function() {
		$('#band-promo-2').animate({width: "80%", marginLeft: "90px", marginTop: "230px"}, animateMilis);
		$('#band-promo-2').animate({zIndex: "0"}, 0);
	});
}

var photoHover4 = function() {
	$('#band-promo-3').hover(function() {
		$('#band-promo-3').animate({zIndex: "1"}, 0);
		$('#band-promo-3').animate({width: "150%", marginLeft: "-100px", marginTop: "20px"}, animateMilis);
	}, function() {
		$('#band-promo-3').animate({width: "100%", marginLeft: "40px", marginTop: "100px"}, animateMilis);
		$('#band-promo-3').animate({zIndex: "0"}, 0);
	});
}

$(document).ready(photoHover1);
$(document).ready(photoHover2);
$(document).ready(photoHover3);
$(document).ready(photoHover4);

// var clicked = false;
// var photoHover1 = function() {
// 	$('#band-promo-1').click(function() {
// 		if(!clicked) {
// 			$('#band-promo-1').animate({zIndex: "1"}, 0);
// 			$('#band-promo-1').animate({width: "200%"}, animateMilis);
// 			clicked = true;
// 		} else {
// 			$('#band-promo-1').animate({width: "100%"}, animateMilis);
// 			$('#band-promo-1').animate({zIndex: "0"}, 0);
// 			clicked = false;
// 		}
// 	});
// }
