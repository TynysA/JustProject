$(function () {
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();;
    let scrollPos = $(window).scrollTop();


    checkScroll(scrollPos, introH);

    $(window).on("scroll resize load", function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        checkScroll(scrollPos, introH);
    })
    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass("fixed");
        }
        else {

            header.removeClass("fixed");
        }
    }
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 40
        }, 700)
    })

    let nav = $("#nav")
    let navToggle = $("#navToggle");
    navToggle.on("click", function (event) {
        event.preventDefault();
        nav.toggleClass("show");
    })



    let slider = $("#slider");
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500
    });

})