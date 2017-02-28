var links = ["home", "work", "about", "contact"];
var linkElements = [];
var titleElements = [];
var linkSmallElements = [];
var hiddenScroll = [];
var autoScroll = false;

document.onscroll = function() {
    if(!autoScroll) {
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
    }

    for (var i = hiddenScroll.length - 1; i >= 0; i--) {
        if(hiddenScroll[i].classList.contains('hideScroll') && hiddenScroll[i].getBoundingClientRect().top < h*0.6) {
            hiddenScroll[i].classList.add('showScroll');
            hiddenScroll[i].classList.remove('hideScroll');
        }
    }
}

window.onload = function() {
    hiddenScroll = document.getElementsByClassName("hideScroll");
    for (var i = 0; i < links.length; i++) {
        titleElements[i] = document.getElementById(links[i] + "Title");
        linkElements[i] = document.getElementById(links[i] + "Link");
        linkSmallElements[i] = document.getElementById(links[i] + "LinkSmall");

        if(linkElements[i] != undefined) {
            linkElements[i].onclick = function() {
                var id = this.id.substring(0, this.id.length - 4) + "Title";
                smoothScroll(id, 88);
                for (var j = 0; j < links.length; j++) {
                    linkElements[j].classList.remove('active');
                }
                document.getElementById(this.id.substring(0, this.id.length - 4) + "Link").classList.add('active');
            }
        }

        if(linkSmallElements[i] != undefined) {
            linkSmallElements[i].onclick = function() {
                document.getElementById("linksMobile").classList.remove("open");
                var id = this.id.substring(0, this.id.length - 9) + "Title";
                smoothScroll(id, 88);
            }
        }
    }

    document.getElementById("menu").onclick = function() {
        this.classList.toggle("open");
        document.getElementById("linksMobile").classList.toggle("open");
    }
}