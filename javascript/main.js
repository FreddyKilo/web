window.requestAnimationFrame = window.requestAnimationFrame
                             || window.mozRequestAnimationFrame
                             || window.webkitRequestAnimationFrame
                             || window.msRequestAnimationFrame
                             || function(f){setTimeout(f, 1000/60)}

function parallaxMain(){
    var mainPhoto = $('#photo-main');
    var scrollAmount = parseInt(window.pageYOffset);
    var topValue = -scrollAmount/6;
    mainPhoto.css("top", topValue + "px");
}

window.addEventListener('scroll', function(){
    requestAnimationFrame(parallaxMain)
}, false)