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
