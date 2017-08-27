var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider");
    var dots = document.getElementsByClassName("dot");

    if ( n > slides.length ) {
        slideIndex = 1;
    }

    if ( n < 1 ) {
        slideIndex = slides.length;
    }

    // Slider hide
    for ( i = 0; i < dots.length; i++ ) {
        slides[i].style.display = "none";
    }

    // Replace and add active class
    for ( i = 0; i < dots.length; i++ ){
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Slider Show
    slides[slideIndex - 1].style.display = "block";

    // Active class show
    dots[slideIndex - 1].className += " active";
}