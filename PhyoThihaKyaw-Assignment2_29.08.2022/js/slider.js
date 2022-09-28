$(document).ready(function () {
    $(".slick-dots").addClass("clearfix");
    $(".single-item").slick({
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>',
    });

    $(".multiple-items").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>',
    });

    $(".responsive").slick({
        dots: true,
        infinite: false,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 678,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    $(".variable-width").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>',
    });

    $(".adaptive").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>',
    });

    $(".data-attribute").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>',
    });

    $(".centermode").slick({
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 3,
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                },
            },
        ],
    });
    $(".lazy").slick({
        lazyLoad: "ondemand",
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>',
    });

    $(".fade").slick({
        dots: true,
        rtl: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: "linear",
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>',
    });

    $(".slider-info").slick({
        infinite: false,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>',
    });
    var slideIndex = 5;
    $(".js-add-slide").on("click", function () {
        slideIndex++;
        $(".slider-info").slick(
            "slickAdd",
            "<div><h3>" + slideIndex + "</h3></div>"
        );
    });

    $(".js-remove-slide").on("click", function () {
        $(".slider-info").slick("slickRemove", slideIndex - 1);
        if (slideIndex !== 0) {
            slideIndex--;
        }
    });

    var filtered = false;

    $(".js-filter").on("click", function () {
        if (filtered === false) {
            $(".slider-info").slick("slickFilter", ":even");
            $(this).text("Unfilter Slides");
            filtered = true;
        } else {
            $(".slider-info").slick("slickUnfilter");
            $(this).text("Filter Slides");
            filtered = false;
        }
    });

    $(".slick-dots").addClass("clearfix");
    $(".main-content").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".contents",
    });
    $(".contents").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".main-content",
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>',
    });
});
