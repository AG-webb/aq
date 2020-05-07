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


    // $('.where-to-buy-icons').slick({
    //     slidesToShow: 3,
    //     autoplay: true,
    //     centerMode: true,
    //     speed: 1000,
    //     autoplaySpeed: 5000,
    //     arrows: false,
    //     dots: false,
    //     responsive: [
    //         {
    //             breakpoint: 9999,
    //             settings: "unslick"
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 3,
    //                 autoplay: true,
    //                 centerMode: true,
    //                 speed: 1000,
    //                 autoplaySpeed: 5000,
    //                 arrows: false,
    //                 dots: false,
    //             }
    //         },
    //     ]
    });
});  