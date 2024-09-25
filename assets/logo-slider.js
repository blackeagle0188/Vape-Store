$(document).ready(function () {
    $('.logo-bar').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        dots: true,
        arrows: false,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1124,  // Mobile breakpoint
                settings: {
                    slidesToShow: 5,  // Number of slides to show on mobile
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 940,  // Mobile breakpoint
                settings: {
                    slidesToShow: 4,  // Number of slides to show on mobile
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,  // Mobile breakpoint
                settings: {
                    slidesToShow: 3,  // Number of slides to show on mobile
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 620,  // Mobile breakpoint
                settings: {
                    slidesToShow: 2,  // Number of slides to show on mobile
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 500,  // Mobile breakpoint
                settings: {
                    slidesToShow: 1,  // Number of slides to show on mobile
                    slidesToScroll: 1,
                }
            }
        ]
    });
});