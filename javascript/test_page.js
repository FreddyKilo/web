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
