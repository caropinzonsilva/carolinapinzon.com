var links = ["home", "work", "about", "contact"];
var linkElements = [];
var titleElements = [];
var linkSmallElements = [];
var hiddenScroll = [];
var autoScroll = false;

document.onscroll = function() {
    var h = window.innerHeight;
    for (var i = hiddenScroll.length - 1; i >= 0; i--) {
        if(hiddenScroll[i].classList.contains('hideScroll') && hiddenScroll[i].getBoundingClientRect().top < h*0.6) {
            hiddenScroll[i].classList.add('showScroll');
            hiddenScroll[i].classList.remove('hideScroll');
        }
    }
}

window.onload = function() {
    hiddenScroll = document.getElementsByClassName("hideScroll");

    var cactus = document.getElementsByClassName('cactus');
    setInterval(function() {
        var randomIndex = Math.floor(Math.random()*cactus.length);
        var randomCactus = cactus[randomIndex];
        randomCactus.classList.remove('animatedSlow','fadeOutIn');
        setTimeout(function() {
            randomCactus.classList.add('animatedSlow','fadeOutIn');
        },0);
    }, 1000);

    document.getElementById('scroll').onclick = function() {
        smoothScroll('myWork', 0);
    };
}