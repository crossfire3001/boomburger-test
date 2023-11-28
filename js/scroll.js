$(document).ready(function() {
    // Smooth scroll when clicking on links with the class 'scroll-link'
    $('.scroll-link').on('click', function(event) {
        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000); // Adjust the animation speed as needed
        }
    });
});