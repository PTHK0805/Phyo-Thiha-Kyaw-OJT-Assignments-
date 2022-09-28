$(document).ready(function () {
    $(".accordlin li:first").addClass("active");
    $(".submenu:first").slideDown();

    $(".accordion li").click(function () {
        $(this).toggleClass("active");
        $(this).siblings().removeClass("active");
        $(".submenu").slideUp();
        $(".active .submenu").slideDown();
    });
});
