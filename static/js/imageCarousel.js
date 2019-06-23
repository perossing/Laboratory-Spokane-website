let slideIndex = 1;
// showDivs(slideIndex);



function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    let i;
    let pics = document.getElementsByClassName("slide-pic");
    let dots = document.getElementsByClassName("dot");
    if (n > pics.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = pics.length;
    }
    for (i = 0; i < pics.length; i++) {
        pics[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("dot-current", "");
    }

   pics[slideIndex - 1].style.display = "block";

    dots[slideIndex - 1].className += " dot-current";
}





