// Slider-img
$(document).ready(function() {
    $('.slider-img').slick({
        dots: false,
        speed: 1000,
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        asNavFor: '.slider-text',
    });
    $('.slider-text').slick({
        slidesToShow: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        arrows: false,
        adaptiveHeight: true,
        asNavFor: '.slider-img',
    });
});  