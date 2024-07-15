document.addEventListener('DOMContentLoaded', () => {
    "use strict";
        $('.dream-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            dots:true,
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:true,
            navText : ["<i class='bi bi-arrow-left'></i>","<i class='bi bi-arrow-right'></i>"],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        })

});