$(document).ready(function(){
    $('#slider-hero').owlCarousel({
        loop:true,
        nav:true,
        // mouseDrag:false,
        items:1,
        dots:false,
        margin:0,
        navText:[
            "<i class='fas fa-angle-left'><i>",
            "<i class='fas fa-angle-right'><i>",
        ],
        navContainer: '#slider-hero-nav',
    }) 

    $('#tenaga-pendidik-slider').owlCarousel({
        loop: true,
        nav: true,
        // mouseDrag: false,
        items: 3,
        dots: false,
        margin: 20,
        navText: [
            "<i class='fas fa-angle-left'></i>",
            "<i class='fas fa-angle-right'></i>"
        ],
        navContainer: '#slider-tools-1',
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            }
        }
    });

    $('#alumni-slider').owlCarousel({
        loop:true,
        nav:true,
        // mouseDrag:false,
        items:2,
        dots:false,
        margin:20,
        navText:[
            "<i class='fas fa-angle-left'><i>",
            "<i class='fas fa-angle-right'><i>",
        ],
        navContainer: '#slider-tools-2',
    })

    $('#galeri-slider').owlCarousel({
        loop: true,
        nav: true,
        // mouseDrag: false,
        items: 3,
        dots: false,
        margin: 20,
        navText: [
            "<i class='fas fa-angle-left'></i>",
            "<i class='fas fa-angle-right'></i>"
        ],
        navContainer: '#slider-tools-3',
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            }
        }
    });

    
})
