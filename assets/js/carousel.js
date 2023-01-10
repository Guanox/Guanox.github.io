$('.owl-carousel').owlCarousel({
    margin: 10,
    items: 3,
    loop: true,
    startPosition: 1,
    center: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        }
    }
})