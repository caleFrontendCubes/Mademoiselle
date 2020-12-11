

$(document).ready(function () {

    //ANIMATION
    function animation() {
        let  windowHeight = $(window).height();
        let scroll = $(window).scrollTop();
        $('.animation').each(function () {
            let position = $(this).offset().top;
            let animationName = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');

            if (position < windowHeight + scroll - 100) {
                $(this).addClass(animationName);
                $(this).css('animation-delay', delay);
            }
        });
    }


    $(window).scroll(function () {
        animation();
    });
    animation();

    if ($('.blog-items-slider').length > 0) {
        $(".blog-items-slider").owlCarousel({
            loop: true,
            nav: true,
            navText: [
                '<span class="fas fa-angle-double-left"></span>',
                '<span class="fas fa-angle-double-right"></span>'
            ],
            responsive: {
                0: {
                    items: 1,
                    slideBy: 1,
                    margin: 0,
                    dots:false
                },
                700: {
                    items: 2,
                    slideBy: 2,
                    margin: 14,
                    dots:false
                },
                1100: {
                    items: 3,
                    slideBy: 3
                }
            }
     
        });
    }





});

