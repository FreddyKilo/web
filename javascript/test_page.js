function changeImage() {
    var image = document.getElementById('he-man');
    var title = document.getElementById('title');
    if (image.src.match("He-Man")) {
        image.src = "./images/Chuck_Norris.jpg";
        title.innerHTML = "It's Chuck!";
    } else {
        image.src = "./images/He-Man.jpg";
        title.innerHTML = "It's He-Man!";
    }
}

function changeHeader() {
    if (document.getElementById("wink").innerHTML.match("right eye")) {
        document.getElementById("wink").innerHTML = "I wink my left eye!";
        document.getElementById("he-man")
        .setAttribute("data-original-title", "I have the Power!");
    } else {
        document.getElementById("wink").innerHTML = "I wink my right eye!";
        document.getElementById("he-man")
        .setAttribute("data-original-title", "Howdy partner");
    }
}

window.requestAnimationFrame = window.requestAnimationFrame
                             || window.mozRequestAnimationFrame
                             || window.webkitRequestAnimationFrame
                             || window.msRequestAnimationFrame
                             || function(f){setTimeout(f, 1000/60)}

var bubble1 = document.getElementById('photo-main')
// var bubble2 = document.getElementById('bubbles2')

function parallaxMain(){
var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically
bubble1.style.top = -scrolltop * -.2 + 'px' // move bubble1 at 20% of scroll speed
// bubble2.style.top = -scrolltop * .5 + 'px' // move bubble2 at 50% of scroll speed
}

window.addEventListener('scroll', function(){ // on page scroll
requestAnimationFrame(parallaxMain) // call parallaxMain() on next available screen repaint
}, false)