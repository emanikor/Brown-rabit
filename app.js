// slide the image and the content 


// home slide
$(document).ready(function() {
    var slides = $('.slideshow-container .slide');
    var slideIndex = 0;

    function showSlide(n) {
        slides.removeClass('active');
        $(slides[n]).addClass('active');
    }



    //  creating a function for netslide
    function nextSlide() {
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        showSlide(slideIndex);
    }

    // creating a function for prevslide
    function prevSlide() {
        // slide to negative
        slideIndex--;

        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
        showSlide(slideIndex);
    }

    // clicks events for next
    $('.next').click(function() {
        nextSlide();
    });
//    click event for prev
// 
    $('.prev').click(function() {
        prevSlide();
    });
});