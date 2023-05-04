var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});