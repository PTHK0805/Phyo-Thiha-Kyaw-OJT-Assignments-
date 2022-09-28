$(document).ready(function () {

    $(".sec-trending .slider").slick({
        infinite: true,
        dots: true,
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 3,

        responsive: [
            {
              breakpoint: 1160,
              settings: {
                slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: true
              },
            },
        ],
    });

    $(".tab-content").hide();
    $(".tabs li:first").addClass("active");
    $(".tab-content:first").show();

    $(".tabs li").click(function (e) {
        $(".tabs li").removeClass("active");
        $(this).toggleClass("active");
        $(".tab-content").hide();
        var activeTab = $(this).find("a").attr("href");
        $(activeTab).fadeIn();

        e.preventDefault();
        return false;
    });

    $(".menu-trigger").click(function () {
        $(this).toggleClass("active");
        $("header nav").slideToggle();
    });
})