$(document).ready(function () {
    $(".accordion li").removeClass("active");
    $(".accordion li .content").slideUp();

    $(".accordion li:last-child").addClass("active");
    $(".accordion li:last-child .content").slideDown();

    $(".accordion li").click(function (e) {
        $(this).toggleClass("active");
        $(this).siblings().removeClass("active");
        $(".content").slideUp();
        $(".active .content").slideDown();


        e.preventDefault();
        return false;
    });
});
