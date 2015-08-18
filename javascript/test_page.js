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
    var header = document.getElementById('wink');
    var headerString = header.innerHTML;
    if (headerString == 'Wink left eye') {
        headerString = "Wink right eye!"
    } else {
        headerString = "Wink left eye!"
    }
}
