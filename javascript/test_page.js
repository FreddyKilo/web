$(function(){
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
    var navBar = $('#navi');

    var previousScroll;
    function parallaxMain(){
        var scrolltop = window.pageYOffset; // get number of pixels document has scrolled vertically
        var difference = previousScroll ? Math.abs(previousScroll - scrolltop) : 0;
        console.log(previousScroll,scrolltop)
        
        if(difference > 10){
            var start = previousScroll;
            var end = scrolltop;
            var currentValue = start;

            function increment(){
                setTimeout(function(){
                    setValue(currentValue+10);
                    if (currentValue < end) {
                        increment();
                    }
                })                
            }

            increment();

        }

        function setValue(value){
            console.log('incrementing',value);
            mainPhoto.css("top", value * .6 + 'px');
            navBar.css("top", value * .6 + 'px');
        }
        previousScroll = scrolltop;
    }

    window.addEventListener('scroll', function(){ // on page scroll
        requestAnimationFrame(parallaxMain) // call parallaxMain() on next available screen repaint
    }, false)
});