(function ($) {
	"use strict";


     //* ========== testimonial Swiper ========= */
	const testimonialswiper = new Swiper('.ai-testimonial-active', {
        speed: 1500,
        loop: true,
        slidesPerView: 4,
        spaceBetween: 0,
        autoplay: false,
        breakpoints: {
            '1800': {
                slidesPerView: 4,
            },
            '1600': {
                slidesPerView: 3,
            },
            '1400': {
                slidesPerView: 3,
            },
            '1200': {
                slidesPerView: 2,
            },
            '992': {
                slidesPerView: 2,
            },
            '768': {
                slidesPerView: 2,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },
		
	});

    /* ========== postbox Swiper ========= */
    const postBoxswiper = new Swiper('.postbox-thumb-slider-active', {
        speed: 1500,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: true,
        navigation: {
            prevEl: '.postbox-arrow-prev',
            nextEl: '.postbox-arrow-next',
        },
        
    })

    
	// first swiper (nav)
    var history_nav = new Swiper(".history-nav-active", {
        loop: true,
        speed: 1200,
        spaceBetween: 15,
        slidesPerView: 3,
        direction: "vertical",   // vertical slider
        centeredSlides: true,   // center mode
        freeMode: true,
        watchSlidesProgress: true,
    });

	// second swiper (main)
	var history_slider = new Swiper(".history-slider-active", {
		loop: true,
		speed: 1200,
		spaceBetween: 15,
	});

	// Connect both Swipers
	history_slider.controller.control = history_nav;
	history_nav.controller.control = history_slider;


})(jQuery);