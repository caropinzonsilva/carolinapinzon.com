var links = ["home", "work", "about"];
var linkElements = [];
var titleElements = [];
var hiddenScroll = [];

document.onscroll = function() {
    var h = window.innerHeight;
    for (var i = 0; i < links.length; i++) {
        if(titleElements[i] != undefined && titleElements[i].getBoundingClientRect().top < 90) {
            for (var j = 0; j < links.length; j++) {
                if(i != j) {
                    linkElements[j].classList.remove('active');
                }
            }
            linkElements[i].classList.add('active');
        }
    }

    for (var i = hiddenScroll.length - 1; i >= 0; i--) {
        if(hiddenScroll[i].classList.contains('hideScroll') && hiddenScroll[i].getBoundingClientRect().top < h*0.6) {
            hiddenScroll[i].classList.add('showScroll');
            hiddenScroll[i].classList.remove('hideScroll');
        }
    }
}

window.onload = function() {
    for (var i = 0; i < links.length; i++) {
        titleElements[i] = document.getElementById(links[i] + "Title");
        linkElements[i] = document.getElementById(links[i] + "Link");
        hiddenScroll = document.getElementsByClassName("hideScroll");

        if(linkElements[i] != undefined) {
            linkElements[i].onclick = function() {
                var id = this.id.substring(0, this.id.length - 4) + "Title";
                smoothScroll(id, 90);
            }
        }
    }
}