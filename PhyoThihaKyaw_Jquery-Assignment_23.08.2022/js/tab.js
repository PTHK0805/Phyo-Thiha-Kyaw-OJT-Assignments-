//$(document).ready(function () {
//    $(".tab-content").hide();
//    $(".tabs li:first").addClass("active");
//    $(".tab-content:first").show();
//
//    $(".tabs li").click(function () {
//        $(".tabs li").removeClass("active");
//        $(this).toggleClass("active");
//        $(".tab-content").hide();
//        var activeTab = $(this).find("a").attr("href");
//        $(activeTab).fadeIn();
//    });
//});

$(document).ready(function () {
    $(".tab-content").hide();
    $(".tabs li:first").addClass("active");
    $(".tab-content:first").show();

    $(".tabs li").click(function () {
        index = $(this).index();
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        $(".tab-content").hide();
        $(".tab-content").eq(index).fadeIn();
    });
});
