$(document).ready(function () {
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
})