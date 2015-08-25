function changeImage() {
    var image = $('#he-man');
    var title = $('#title');
    if (image.attr("src").match("He-Man")) {
        image.attr("src", "./images/Chuck_Norris.jpg");
        title.text("It's Chuck!");
    } else {
        image.attr("src", "./images/He-Man.jpg");
        title.text("It's He-Man!");
    }
}

function changeHeader() {
    if ($("#wink").text().match("right eye")) {
        $("#wink").text("I wink my left eye!");
        $("#he-man")
        .attr("data-original-title", "I have the Power!");
    } else {
        $("#wink").text("I wink my right eye!");
        $("#he-man")
        .attr("data-original-title", "Howdy partner");
    }
}

window.requestAnimationFrame = window.requestAnimationFrame
                                 || window.mozRequestAnimationFrame
                                 || window.webkitRequestAnimationFrame
                                 || window.msRequestAnimationFrame
                                 || function(f){setTimeout(f, 1000/60)}
var mainPhoto = $('#photo-main');
function parallaxMain(){
    var scrollAmount = parseInt(window.pageYOffset);
    var newTopPhoto = -scrollAmount/3;
    mainPhoto.css("top", newTopPhoto + "px");
}

window.addEventListener('scroll', function(){ // on page scroll
    requestAnimationFrame(parallaxMain) // call parallaxMain() on next available screen repaint
}, false)