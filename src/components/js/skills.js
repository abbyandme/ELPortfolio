$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1,
            slideBy: 1
        },
        600:{
            items:1,
            slideBy: 1
        },
        1000:{
            items: 2,
            slideBy: 2
        }
    }
})