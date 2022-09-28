$(document).ready(function () {
    $(".sec-fifth-link ul li").heightLine({
        fontSizeCheck: true,
    });

    $(".menu-trigger").click(function () {
        $(this).toggleClass("active");
        $("header nav").slideToggle();
    });
});
