$(document).ready(function () {
    $('.image-list').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: false,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 500,  // Mobile breakpoint
                settings: {
                    slidesToShow: 1,  // Number of slides to show on mobile
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    });
});